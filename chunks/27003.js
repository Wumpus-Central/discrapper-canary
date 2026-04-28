async function t(e) {
    return null;
}
s.d(a, { pb: () => h, A: () => l });
class r extends Error {
    kind;
    constructor(e, a) {
        super(a), (this.name = "ArboriumError"), (this.kind = e);
    }
}
function n(e, a) {
    if (0 === a.length) return [0, 0];
    let s = o.encode(a),
        t = e._malloc(s.length);
    return e.HEAPU8.set(s, t), [t, s.length];
}
async function i(e) {
    return e instanceof URL ? p(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function g(e) {
    if ("string" == typeof e) return e;
    let a = await p(e);
    return c.decode(a);
}
async function p(e) {
    let a = await t(e);
    if (a) return a;
    let s = await fetch(e);
    if (!s.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let o = new TextEncoder(),
    c = new TextDecoder();
async function l() {
    let e = await d(),
        [a, t] = await Promise.all([i(new URL(s(594532), s.b)), i(new URL(s(307844), s.b))]),
        r = await e({ wasmBinary: a }),
        n = await r.loadWebAssemblyModule(t, { loadAsync: !0 });
    return new b(r, n);
}
class b {
    host;
    abi;
    constructor(e, a) {
        (this.host = e), (this.abi = a);
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new r(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [a, s, t, p] = await Promise.all([
                i(e.wasm),
                g(e.highlights),
                void 0 === e.injections ? "" : g(e.injections),
                void 0 === e.locals ? "" : g(e.locals),
            ]),
            o = (function (e, a) {
                if (void 0 !== a) {
                    let s = e[a];
                    if ("function" != typeof s)
                        throw new r(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(a)}`,
                        );
                    return s;
                }
                let s = Object.keys(e).filter((a) => a.startsWith("tree_sitter_") && "function" == typeof e[a]);
                if (0 === s.length)
                    throw new r(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (s.length > 1)
                    throw new r(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${s.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[s[0]];
            })(await this.host.loadWebAssemblyModule(a, { loadAsync: !0 }), e.languageExport)();
        if (!o) throw new r("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [c, l] = n(this.host, e.languageId),
            [b, w] = n(this.host, s),
            [d, h] = n(this.host, t),
            [x, f] = n(this.host, p),
            u = 0;
        try {
            u = this.abi.arborium_rt_register_grammar(o, c, l, b, w, d, h, x, f);
        } finally {
            c && this.host._free(c), b && this.host._free(b), d && this.host._free(d), x && this.host._free(x);
        }
        if (0 === u)
            throw new r(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new m(this, u, o, e.languageId);
    }
}
class m {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, a, s, t) {
        (this.runtime = e), (this.id = a), (this.languagePtr = s), (this.languageId = t);
    }
    createSession() {
        this.#a();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new r("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new w(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #a() {
        if (this.#e) throw new r("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class w {
    grammar;
    id;
    #s = !1;
    constructor(e, a) {
        (this.grammar = e), (this.id = a);
    }
    setText(e) {
        this.#a();
        let [a, s] = n(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, a, s);
        } finally {
            a && this.grammar.runtime.host._free(a);
        }
    }
    parse() {
        return (
            this.#a(),
            this.#t(
                "parse-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, a),
                (e) => (0 === e.length ? { spans: [], injections: [] } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, a, e, s),
                (e) => (0 === e.length ? { spans: [], missing_injections: [] } : JSON.parse(e)),
            );
        return { spans: s.spans, missingInjections: s.missing_injections };
    }
    highlightToHtml(e = {}) {
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = e.format ?? { kind: "custom-elements" },
            { host: t } = this.grammar.runtime,
            { code: r, prefix: i } = (function (e) {
                switch (e.kind) {
                    case "custom-elements":
                        return { code: 0, prefix: "" };
                    case "custom-elements-with-prefix":
                        return { code: 1, prefix: e.prefix };
                    case "class-names":
                        return { code: 2, prefix: "" };
                    case "class-names-with-prefix":
                        return { code: 3, prefix: e.prefix };
                }
            })(s),
            [g, p] = n(t, i);
        try {
            let e = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, a, r, g, p, e, s),
                (e) => (0 === e.length ? { html: "", missing_injections: [] } : JSON.parse(e)),
            );
            return { html: e.html, missingInjections: e.missing_injections };
        } finally {
            g && t._free(g);
        }
    }
    cancel() {
        this.#a(), this.grammar.runtime.abi.arborium_rt_cancel(this.id);
    }
    free() {
        this.#s || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#s = !0));
    }
    #a() {
        if (this.#s) throw new r("session-creation-failed", `session ${this.id} has been freed`);
    }
    #t(e, a, s) {
        let { host: t, abi: n } = this.grammar.runtime,
            i = t._malloc(4),
            g = t._malloc(4);
        try {
            let p = a(i, g);
            if (0 !== p) throw new r(e, `arborium_rt call returned status ${p}`);
            let o = t.getValue(i, "i32"),
                l = t.getValue(g, "i32");
            if (0 === l) return s("");
            try {
                return s(0 === l ? "" : c.decode(t.HEAPU8.subarray(o, o + l)));
            } finally {
                n.arborium_rt_free(o, l);
            }
        } finally {
            t._free(i), t._free(g);
        }
    }
}
async function d() {
    return (await s.e("23951").then(s.bind(s, 4690))).default;
}
let h = {
    ada: {
        languageId: "ada",
        languageExport: "tree_sitter_ada",
        wasm: new URL(s(329501), s.b),
        highlights: new URL(s(123384), s.b),
        locals: new URL(s(36735), s.b),
    },
    agda: {
        languageId: "agda",
        languageExport: "tree_sitter_agda",
        wasm: new URL(s(348343), s.b),
        highlights: new URL(s(875925), s.b),
    },
    asciidoc: {
        languageId: "asciidoc",
        languageExport: "tree_sitter_asciidoc",
        wasm: new URL(s(893375), s.b),
        highlights: new URL(s(694877), s.b),
    },
    asm: {
        languageId: "asm",
        languageExport: "tree_sitter_asm",
        wasm: new URL(s(175817), s.b),
        highlights: new URL(s(688699), s.b),
        injections: new URL(s(312550), s.b),
    },
    awk: {
        languageId: "awk",
        languageExport: "tree_sitter_awk",
        wasm: new URL(s(523393), s.b),
        highlights: new URL(s(766537), s.b),
    },
    bash: {
        languageId: "bash",
        languageExport: "tree_sitter_bash",
        wasm: new URL(s(412697), s.b),
        highlights: new URL(s(786344), s.b),
    },
    batch: {
        languageId: "batch",
        languageExport: "tree_sitter_batch",
        wasm: new URL(s(436413), s.b),
        highlights: new URL(s(770840), s.b),
    },
    c: {
        languageId: "c",
        languageExport: "tree_sitter_c",
        wasm: new URL(s(466097), s.b),
        highlights: new URL(s(770961), s.b),
    },
    "c-sharp": {
        languageId: "c-sharp",
        languageExport: "tree_sitter_c_sharp",
        wasm: new URL(s(117201), s.b),
        highlights: new URL(s(462240), s.b),
    },
    caddy: {
        languageId: "caddy",
        languageExport: "tree_sitter_caddy",
        wasm: new URL(s(215133), s.b),
        highlights: new URL(s(147891), s.b),
    },
    capnp: {
        languageId: "capnp",
        languageExport: "tree_sitter_capnp",
        wasm: new URL(s(658097), s.b),
        highlights: new URL(s(837158), s.b),
        injections: new URL(s(577587), s.b),
        locals: new URL(s(631181), s.b),
    },
    cedar: {
        languageId: "cedar",
        languageExport: "tree_sitter_cedar",
        wasm: new URL(s(311069), s.b),
        highlights: new URL(s(724795), s.b),
    },
    cedarschema: {
        languageId: "cedarschema",
        languageExport: "tree_sitter_cedarschema",
        wasm: new URL(s(607725), s.b),
        highlights: new URL(s(528924), s.b),
    },
    clojure: {
        languageId: "clojure",
        languageExport: "tree_sitter_clojure",
        wasm: new URL(s(154285), s.b),
        highlights: new URL(s(18128), s.b),
    },
    cmake: {
        languageId: "cmake",
        languageExport: "tree_sitter_cmake",
        wasm: new URL(s(194497), s.b),
        highlights: new URL(s(402183), s.b),
        injections: new URL(s(975994), s.b),
    },
    cobol: {
        languageId: "cobol",
        languageExport: "tree_sitter_cobol",
        wasm: new URL(s(59317), s.b),
        highlights: new URL(s(700323), s.b),
    },
    commonlisp: {
        languageId: "commonlisp",
        languageExport: "tree_sitter_commonlisp",
        wasm: new URL(s(754827), s.b),
        highlights: new URL(s(234087), s.b),
    },
    cpp: {
        languageId: "cpp",
        languageExport: "tree_sitter_cpp",
        wasm: new URL(s(580969), s.b),
        highlights: new URL(s(735678), s.b),
        injections: new URL(s(676352), s.b),
    },
    css: {
        languageId: "css",
        languageExport: "tree_sitter_css",
        wasm: new URL(s(251729), s.b),
        highlights: new URL(s(898243), s.b),
    },
    d: {
        languageId: "d",
        languageExport: "tree_sitter_d",
        wasm: new URL(s(273237), s.b),
        highlights: new URL(s(471096), s.b),
    },
    dart: {
        languageId: "dart",
        languageExport: "tree_sitter_dart",
        wasm: new URL(s(49843), s.b),
        highlights: new URL(s(142391), s.b),
    },
    devicetree: {
        languageId: "devicetree",
        languageExport: "tree_sitter_devicetree",
        wasm: new URL(s(916885), s.b),
        highlights: new URL(s(625324), s.b),
    },
    diff: {
        languageId: "diff",
        languageExport: "tree_sitter_diff",
        wasm: new URL(s(529683), s.b),
        highlights: new URL(s(707601), s.b),
    },
    dockerfile: {
        languageId: "dockerfile",
        languageExport: "tree_sitter_dockerfile",
        wasm: new URL(s(766965), s.b),
        highlights: new URL(s(419040), s.b),
    },
    dot: {
        languageId: "dot",
        languageExport: "tree_sitter_dot",
        wasm: new URL(s(679281), s.b),
        highlights: new URL(s(23075), s.b),
        injections: new URL(s(198990), s.b),
    },
    elisp: {
        languageId: "elisp",
        languageExport: "tree_sitter_elisp",
        wasm: new URL(s(23881), s.b),
        highlights: new URL(s(551415), s.b),
    },
    elixir: {
        languageId: "elixir",
        languageExport: "tree_sitter_elixir",
        wasm: new URL(s(732271), s.b),
        highlights: new URL(s(999149), s.b),
        injections: new URL(s(143012), s.b),
    },
    elm: {
        languageId: "elm",
        languageExport: "tree_sitter_elm",
        wasm: new URL(s(585949), s.b),
        highlights: new URL(s(253512), s.b),
        injections: new URL(s(126241), s.b),
        locals: new URL(s(611759), s.b),
    },
    erlang: {
        languageId: "erlang",
        languageExport: "tree_sitter_erlang",
        wasm: new URL(s(343731), s.b),
        highlights: new URL(s(424869), s.b),
    },
    fish: {
        languageId: "fish",
        languageExport: "tree_sitter_fish",
        wasm: new URL(s(575217), s.b),
        highlights: new URL(s(995180), s.b),
    },
    fsharp: {
        languageId: "fsharp",
        languageExport: "tree_sitter_fsharp",
        wasm: new URL(s(462869), s.b),
        highlights: new URL(s(364824), s.b),
        injections: new URL(s(51505), s.b),
        locals: new URL(s(485791), s.b),
    },
    gleam: {
        languageId: "gleam",
        languageExport: "tree_sitter_gleam",
        wasm: new URL(s(844561), s.b),
        highlights: new URL(s(381896), s.b),
        injections: new URL(s(450401), s.b),
        locals: new URL(s(622767), s.b),
    },
    glsl: {
        languageId: "glsl",
        languageExport: "tree_sitter_glsl",
        wasm: new URL(s(682609), s.b),
        highlights: new URL(s(82598), s.b),
    },
    go: {
        languageId: "go",
        languageExport: "tree_sitter_go",
        wasm: new URL(s(217865), s.b),
        highlights: new URL(s(546708), s.b),
    },
    graphql: {
        languageId: "graphql",
        languageExport: "tree_sitter_graphql",
        wasm: new URL(s(922065), s.b),
        highlights: new URL(s(60413), s.b),
    },
    groovy: {
        languageId: "groovy",
        languageExport: "tree_sitter_groovy",
        wasm: new URL(s(606877), s.b),
        highlights: new URL(s(638623), s.b),
        injections: new URL(s(887981), s.b),
    },
    haskell: {
        languageId: "haskell",
        languageExport: "tree_sitter_haskell",
        wasm: new URL(s(213357), s.b),
        highlights: new URL(s(721636), s.b),
        injections: new URL(s(314501), s.b),
        locals: new URL(s(463939), s.b),
    },
    hcl: {
        languageId: "hcl",
        languageExport: "tree_sitter_hcl",
        wasm: new URL(s(679697), s.b),
        highlights: new URL(s(553155), s.b),
    },
    hlsl: {
        languageId: "hlsl",
        languageExport: "tree_sitter_hlsl",
        wasm: new URL(s(286059), s.b),
        highlights: new URL(s(27201), s.b),
    },
    html: {
        languageId: "html",
        languageExport: "tree_sitter_html",
        wasm: new URL(s(763867), s.b),
        highlights: new URL(s(473539), s.b),
        injections: new URL(s(802478), s.b),
    },
    idris: {
        languageId: "idris",
        languageExport: "tree_sitter_idris",
        wasm: new URL(s(954325), s.b),
        highlights: new URL(s(229253), s.b),
    },
    ini: {
        languageId: "ini",
        languageExport: "tree_sitter_ini",
        wasm: new URL(s(124569), s.b),
        highlights: new URL(s(115082), s.b),
    },
    java: {
        languageId: "java",
        languageExport: "tree_sitter_java",
        wasm: new URL(s(237841), s.b),
        highlights: new URL(s(507226), s.b),
    },
    javascript: {
        languageId: "javascript",
        languageExport: "tree_sitter_javascript",
        wasm: new URL(s(380719), s.b),
        highlights: new URL(s(756709), s.b),
        injections: new URL(s(967804), s.b),
        locals: new URL(s(667778), s.b),
    },
    jinja2: {
        languageId: "jinja2",
        languageExport: "tree_sitter_jinja2",
        wasm: new URL(s(24801), s.b),
        highlights: new URL(s(703112), s.b),
    },
    jq: {
        languageId: "jq",
        languageExport: "tree_sitter_jq",
        wasm: new URL(s(978099), s.b),
        highlights: new URL(s(419171), s.b),
    },
    json: {
        languageId: "json",
        languageExport: "tree_sitter_json",
        wasm: new URL(s(806105), s.b),
        highlights: new URL(s(268028), s.b),
    },
    julia: {
        languageId: "julia",
        languageExport: "tree_sitter_julia",
        wasm: new URL(s(237321), s.b),
        highlights: new URL(s(118097), s.b),
    },
    kotlin: {
        languageId: "kotlin",
        languageExport: "tree_sitter_kotlin",
        wasm: new URL(s(375211), s.b),
        highlights: new URL(s(891467), s.b),
    },
    lean: {
        languageId: "lean",
        languageExport: "tree_sitter_lean",
        wasm: new URL(s(430289), s.b),
        highlights: new URL(s(291942), s.b),
    },
    lua: {
        languageId: "lua",
        languageExport: "tree_sitter_lua",
        wasm: new URL(s(434257), s.b),
        highlights: new URL(s(929962), s.b),
        injections: new URL(s(684639), s.b),
        locals: new URL(s(940329), s.b),
    },
    markdown: {
        languageId: "markdown",
        languageExport: "tree_sitter_markdown",
        wasm: new URL(s(669567), s.b),
        highlights: new URL(s(416643), s.b),
        injections: new URL(s(745582), s.b),
    },
    matlab: {
        languageId: "matlab",
        languageExport: "tree_sitter_matlab",
        wasm: new URL(s(839367), s.b),
        highlights: new URL(s(420371), s.b),
    },
    meson: {
        languageId: "meson",
        languageExport: "tree_sitter_meson",
        wasm: new URL(s(846177), s.b),
        highlights: new URL(s(762498), s.b),
    },
    nginx: {
        languageId: "nginx",
        languageExport: "tree_sitter_nginx",
        wasm: new URL(s(460297), s.b),
        highlights: new URL(s(994472), s.b),
        injections: new URL(s(347201), s.b),
    },
    ninja: {
        languageId: "ninja",
        languageExport: "tree_sitter_ninja",
        wasm: new URL(s(761137), s.b),
        highlights: new URL(s(342644), s.b),
    },
    nix: {
        languageId: "nix",
        languageExport: "tree_sitter_nix",
        wasm: new URL(s(58269), s.b),
        highlights: new URL(s(242779), s.b),
        injections: new URL(s(354246), s.b),
        locals: new URL(s(263408), s.b),
    },
    objc: {
        languageId: "objc",
        languageExport: "tree_sitter_objc",
        wasm: new URL(s(741753), s.b),
        highlights: new URL(s(566060), s.b),
        injections: new URL(s(694221), s.b),
        locals: new URL(s(96475), s.b),
    },
    ocaml: {
        languageId: "ocaml",
        languageExport: "tree_sitter_ocaml",
        wasm: new URL(s(7581), s.b),
        highlights: new URL(s(6240), s.b),
        locals: new URL(s(670263), s.b),
    },
    perl: {
        languageId: "perl",
        languageExport: "tree_sitter_perl",
        wasm: new URL(s(361907), s.b),
        highlights: new URL(s(158823), s.b),
        injections: new URL(s(146970), s.b),
    },
    php: {
        languageId: "php",
        languageExport: "tree_sitter_php",
        wasm: new URL(s(757901), s.b),
        highlights: new URL(s(290500), s.b),
        injections: new URL(s(927845), s.b),
    },
    postscript: {
        languageId: "postscript",
        languageExport: "tree_sitter_postscript",
        wasm: new URL(s(178123), s.b),
        highlights: new URL(s(435063), s.b),
    },
    powershell: {
        languageId: "powershell",
        languageExport: "tree_sitter_powershell",
        wasm: new URL(s(403955), s.b),
        highlights: new URL(s(742235), s.b),
    },
    prolog: {
        languageId: "prolog",
        languageExport: "tree_sitter_prolog",
        wasm: new URL(s(962031), s.b),
        highlights: new URL(s(915633), s.b),
    },
    python: {
        languageId: "python",
        languageExport: "tree_sitter_python",
        wasm: new URL(s(379585), s.b),
        highlights: new URL(s(655064), s.b),
    },
    query: {
        languageId: "query",
        languageExport: "tree_sitter_query",
        wasm: new URL(s(929729), s.b),
        highlights: new URL(s(249452), s.b),
        injections: new URL(s(112845), s.b),
    },
    r: {
        languageId: "r",
        languageExport: "tree_sitter_r",
        wasm: new URL(s(867457), s.b),
        highlights: new URL(s(564274), s.b),
        locals: new URL(s(289889), s.b),
    },
    rego: {
        languageId: "rego",
        languageExport: "tree_sitter_rego",
        wasm: new URL(s(12647), s.b),
        highlights: new URL(s(571614), s.b),
        locals: new URL(s(264390), s.b),
    },
    rescript: {
        languageId: "rescript",
        languageExport: "tree_sitter_rescript",
        wasm: new URL(s(144609), s.b),
        highlights: new URL(s(827540), s.b),
        injections: new URL(s(582709), s.b),
        locals: new URL(s(760531), s.b),
    },
    ron: {
        languageId: "ron",
        languageExport: "tree_sitter_ron",
        wasm: new URL(s(115129), s.b),
        highlights: new URL(s(957683), s.b),
    },
    ruby: {
        languageId: "ruby",
        languageExport: "tree_sitter_ruby",
        wasm: new URL(s(880433), s.b),
        highlights: new URL(s(313882), s.b),
    },
    rust: {
        languageId: "rust",
        languageExport: "tree_sitter_rust_orchard",
        wasm: new URL(s(726353), s.b),
        highlights: new URL(s(290488), s.b),
        injections: new URL(s(94673), s.b),
    },
    scala: {
        languageId: "scala",
        languageExport: "tree_sitter_scala",
        wasm: new URL(s(838353), s.b),
        highlights: new URL(s(263454), s.b),
        locals: new URL(s(145205), s.b),
    },
    scheme: {
        languageId: "scheme",
        languageExport: "tree_sitter_scheme",
        wasm: new URL(s(944435), s.b),
        highlights: new URL(s(529593), s.b),
    },
    scss: {
        languageId: "scss",
        languageExport: "tree_sitter_scss",
        wasm: new URL(s(860081), s.b),
        highlights: new URL(s(312414), s.b),
    },
    solidity: {
        languageId: "solidity",
        languageExport: "tree_sitter_solidity",
        wasm: new URL(s(49063), s.b),
        highlights: new URL(s(147667), s.b),
        locals: new URL(s(631928), s.b),
    },
    sparql: {
        languageId: "sparql",
        languageExport: "tree_sitter_sparql",
        wasm: new URL(s(281351), s.b),
        highlights: new URL(s(446899), s.b),
    },
    sql: {
        languageId: "sql",
        languageExport: "tree_sitter_sql",
        wasm: new URL(s(767665), s.b),
        highlights: new URL(s(259040), s.b),
    },
    "ssh-config": {
        languageId: "ssh-config",
        languageExport: "tree_sitter_ssh_config",
        wasm: new URL(s(132339), s.b),
        highlights: new URL(s(527485), s.b),
        injections: new URL(s(679796), s.b),
    },
    starlark: {
        languageId: "starlark",
        languageExport: "tree_sitter_starlark",
        wasm: new URL(s(876561), s.b),
        highlights: new URL(s(35094), s.b),
        injections: new URL(s(690275), s.b),
        locals: new URL(s(494173), s.b),
    },
    styx: {
        languageId: "styx",
        languageExport: "tree_sitter_styx",
        wasm: new URL(s(381469), s.b),
        highlights: new URL(s(100184), s.b),
        injections: new URL(s(28529), s.b),
    },
    svelte: {
        languageId: "svelte",
        languageExport: "tree_sitter_svelte",
        wasm: new URL(s(255771), s.b),
        highlights: new URL(s(560553), s.b),
        injections: new URL(s(753592), s.b),
        locals: new URL(s(329774), s.b),
    },
    swift: {
        languageId: "swift",
        languageExport: "tree_sitter_swift",
        wasm: new URL(s(421061), s.b),
        highlights: new URL(s(863851), s.b),
        injections: new URL(s(522262), s.b),
        locals: new URL(s(156704), s.b),
    },
    textproto: {
        languageId: "textproto",
        languageExport: "tree_sitter_textproto",
        wasm: new URL(s(754529), s.b),
        highlights: new URL(s(428775), s.b),
    },
    thrift: {
        languageId: "thrift",
        languageExport: "tree_sitter_thrift",
        wasm: new URL(s(317567), s.b),
        highlights: new URL(s(859209), s.b),
        injections: new URL(s(640984), s.b),
        locals: new URL(s(153038), s.b),
    },
    tlaplus: {
        languageId: "tlaplus",
        languageExport: "tree_sitter_tlaplus",
        wasm: new URL(s(125093), s.b),
        highlights: new URL(s(200159), s.b),
        locals: new URL(s(422124), s.b),
    },
    toml: {
        languageId: "toml",
        languageExport: "tree_sitter_toml",
        wasm: new URL(s(543729), s.b),
        highlights: new URL(s(116518), s.b),
    },
    tsx: {
        languageId: "tsx",
        languageExport: "tree_sitter_tsx",
        wasm: new URL(s(155225), s.b),
        highlights: new URL(s(391171), s.b),
        locals: new URL(s(441416), s.b),
    },
    typescript: {
        languageId: "typescript",
        languageExport: "tree_sitter_typescript",
        wasm: new URL(s(266751), s.b),
        highlights: new URL(s(504741), s.b),
        locals: new URL(s(419458), s.b),
    },
    typst: {
        languageId: "typst",
        languageExport: "tree_sitter_typst",
        wasm: new URL(s(177617), s.b),
        highlights: new URL(s(1018), s.b),
        injections: new URL(s(676335), s.b),
    },
    uiua: {
        languageId: "uiua",
        languageExport: "tree_sitter_uiua",
        wasm: new URL(s(69281), s.b),
        highlights: new URL(s(446558), s.b),
        injections: new URL(s(611723), s.b),
    },
    vb: {
        languageId: "vb",
        languageExport: "tree_sitter_vb_dotnet",
        wasm: new URL(s(426161), s.b),
        highlights: new URL(s(894510), s.b),
    },
    verilog: {
        languageId: "verilog",
        languageExport: "tree_sitter_verilog",
        wasm: new URL(s(869265), s.b),
        highlights: new URL(s(935758), s.b),
    },
    vhdl: {
        languageId: "vhdl",
        languageExport: "tree_sitter_vhdl",
        wasm: new URL(s(86213), s.b),
        highlights: new URL(s(640736), s.b),
    },
    vim: {
        languageId: "vim",
        languageExport: "tree_sitter_vim",
        wasm: new URL(s(175337), s.b),
        highlights: new URL(s(541040), s.b),
        injections: new URL(s(707945), s.b),
    },
    vue: {
        languageId: "vue",
        languageExport: "tree_sitter_vue",
        wasm: new URL(s(522265), s.b),
        highlights: new URL(s(245372), s.b),
        injections: new URL(s(751517), s.b),
    },
    wit: {
        languageId: "wit",
        languageExport: "tree_sitter_wit",
        wasm: new URL(s(286745), s.b),
        highlights: new URL(s(225404), s.b),
        injections: new URL(s(3805), s.b),
    },
    x86asm: {
        languageId: "x86asm",
        languageExport: "tree_sitter_x86asm",
        wasm: new URL(s(862427), s.b),
        highlights: new URL(s(428007), s.b),
    },
    xml: {
        languageId: "xml",
        languageExport: "tree_sitter_xml",
        wasm: new URL(s(567373), s.b),
        highlights: new URL(s(106089), s.b),
    },
    yaml: {
        languageId: "yaml",
        languageExport: "tree_sitter_yaml",
        wasm: new URL(s(246287), s.b),
        highlights: new URL(s(843277), s.b),
    },
    yuri: {
        languageId: "yuri",
        languageExport: "tree_sitter_yuri",
        wasm: new URL(s(842003), s.b),
        highlights: new URL(s(771713), s.b),
    },
    zig: {
        languageId: "zig",
        languageExport: "tree_sitter_zig",
        wasm: new URL(s(514953), s.b),
        highlights: new URL(s(652114), s.b),
        injections: new URL(s(508103), s.b),
    },
    zsh: {
        languageId: "zsh",
        languageExport: "tree_sitter_zsh",
        wasm: new URL(s(713433), s.b),
        highlights: new URL(s(640609), s.b),
    },
};
