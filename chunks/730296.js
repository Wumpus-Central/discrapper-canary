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
    let e = await w(),
        [a, t] = await Promise.all([i(new URL(s(793189), s.b)), i(new URL(s(12487), s.b))]),
        r = await e({ wasmBinary: a }),
        n = await r.loadWebAssemblyModule(t, { loadAsync: !0 });
    return new m(r, n);
}
class m {
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
            [m, d] = n(this.host, s),
            [w, h] = n(this.host, t),
            [x, f] = n(this.host, p),
            u = 0;
        try {
            u = this.abi.arborium_rt_register_grammar(o, c, l, m, d, w, h, x, f);
        } finally {
            c && this.host._free(c), m && this.host._free(m), w && this.host._free(w), x && this.host._free(x);
        }
        if (0 === u)
            throw new r(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new b(this, u, o, e.languageId);
    }
}
class b {
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
        return new d(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #a() {
        if (this.#e) throw new r("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class d {
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
                (e) => (0 === e.length ? { spans: [], injections: [], timed_out: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, a, e, s),
                (e) =>
                    0 === e.length ? { spans: [], missing_injections: [], timed_out_languages: [] } : JSON.parse(e),
            );
        return { spans: s.spans, missingInjections: s.missing_injections, timedOutLanguages: s.timed_out_languages };
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
                (e) => (0 === e.length ? { html: "", missing_injections: [], timed_out_languages: [] } : JSON.parse(e)),
            );
            return { html: e.html, missingInjections: e.missing_injections, timedOutLanguages: e.timed_out_languages };
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
async function w() {
    return (await s.e("48034").then(s.bind(s, 2649))).default;
}
let h = {
    ada: {
        languageId: "ada",
        languageExport: "tree_sitter_ada",
        wasm: new URL(s(738292), s.b),
        highlights: new URL(s(581189), s.b),
        locals: new URL(s(854370), s.b),
    },
    agda: {
        languageId: "agda",
        languageExport: "tree_sitter_agda",
        wasm: new URL(s(588174), s.b),
        highlights: new URL(s(586298), s.b),
    },
    asciidoc: {
        languageId: "asciidoc",
        languageExport: "tree_sitter_asciidoc",
        wasm: new URL(s(181762), s.b),
        highlights: new URL(s(962230), s.b),
    },
    asm: {
        languageId: "asm",
        languageExport: "tree_sitter_asm",
        wasm: new URL(s(267976), s.b),
        highlights: new URL(s(781998), s.b),
        injections: new URL(s(58715), s.b),
    },
    awk: {
        languageId: "awk",
        languageExport: "tree_sitter_awk",
        wasm: new URL(s(34880), s.b),
        highlights: new URL(s(628008), s.b),
    },
    bash: {
        languageId: "bash",
        languageExport: "tree_sitter_bash",
        wasm: new URL(s(281104), s.b),
        highlights: new URL(s(425491), s.b),
    },
    batch: {
        languageId: "batch",
        languageExport: "tree_sitter_batch",
        wasm: new URL(s(667980), s.b),
        highlights: new URL(s(734121), s.b),
    },
    c: {
        languageId: "c",
        languageExport: "tree_sitter_c",
        wasm: new URL(s(43568), s.b),
        highlights: new URL(s(296308), s.b),
    },
    "c-sharp": {
        languageId: "c-sharp",
        languageExport: "tree_sitter_c_sharp",
        wasm: new URL(s(604496), s.b),
        highlights: new URL(s(14486), s.b),
    },
    caddy: {
        languageId: "caddy",
        languageExport: "tree_sitter_caddy",
        wasm: new URL(s(638340), s.b),
        highlights: new URL(s(861066), s.b),
    },
    capnp: {
        languageId: "capnp",
        languageExport: "tree_sitter_capnp",
        wasm: new URL(s(994688), s.b),
        highlights: new URL(s(812475), s.b),
        injections: new URL(s(436326), s.b),
        locals: new URL(s(397392), s.b),
    },
    cedar: {
        languageId: "cedar",
        languageExport: "tree_sitter_cedar",
        wasm: new URL(s(827716), s.b),
        highlights: new URL(s(447602), s.b),
    },
    cedarschema: {
        languageId: "cedarschema",
        languageExport: "tree_sitter_cedarschema",
        wasm: new URL(s(14428), s.b),
        highlights: new URL(s(132141), s.b),
    },
    clojure: {
        languageId: "clojure",
        languageExport: "tree_sitter_clojure",
        wasm: new URL(s(625468), s.b),
        highlights: new URL(s(961789), s.b),
    },
    cmake: {
        languageId: "cmake",
        languageExport: "tree_sitter_cmake",
        wasm: new URL(s(799600), s.b),
        highlights: new URL(s(103266), s.b),
        injections: new URL(s(372631), s.b),
    },
    commonlisp: {
        languageId: "commonlisp",
        languageExport: "tree_sitter_commonlisp",
        wasm: new URL(s(710938), s.b),
        highlights: new URL(s(529428), s.b),
    },
    cpp: {
        languageId: "cpp",
        languageExport: "tree_sitter_cpp",
        wasm: new URL(s(354696), s.b),
        highlights: new URL(s(291116), s.b),
        injections: new URL(s(419277), s.b),
    },
    css: {
        languageId: "css",
        languageExport: "tree_sitter_css",
        wasm: new URL(s(526944), s.b),
        highlights: new URL(s(436350), s.b),
    },
    d: {
        languageId: "d",
        languageExport: "tree_sitter_d",
        wasm: new URL(s(225284), s.b),
        highlights: new URL(s(94562), s.b),
    },
    dart: {
        languageId: "dart",
        languageExport: "tree_sitter_dart",
        wasm: new URL(s(908986), s.b),
        highlights: new URL(s(982124), s.b),
    },
    devicetree: {
        languageId: "devicetree",
        languageExport: "tree_sitter_devicetree",
        wasm: new URL(s(600160), s.b),
        highlights: new URL(s(898539), s.b),
    },
    diff: {
        languageId: "diff",
        languageExport: "tree_sitter_diff",
        wasm: new URL(s(669422), s.b),
        highlights: new URL(s(668398), s.b),
    },
    dockerfile: {
        languageId: "dockerfile",
        languageExport: "tree_sitter_dockerfile",
        wasm: new URL(s(647480), s.b),
        highlights: new URL(s(252671), s.b),
    },
    dot: {
        languageId: "dot",
        languageExport: "tree_sitter_dot",
        wasm: new URL(s(765888), s.b),
        highlights: new URL(s(693294), s.b),
        injections: new URL(s(747355), s.b),
    },
    elisp: {
        languageId: "elisp",
        languageExport: "tree_sitter_elisp",
        wasm: new URL(s(608248), s.b),
        highlights: new URL(s(709722), s.b),
    },
    elixir: {
        languageId: "elixir",
        languageExport: "tree_sitter_elixir",
        wasm: new URL(s(768334), s.b),
        highlights: new URL(s(5138), s.b),
        injections: new URL(s(861127), s.b),
    },
    elm: {
        languageId: "elm",
        languageExport: "tree_sitter_elm",
        wasm: new URL(s(200548), s.b),
        highlights: new URL(s(864341), s.b),
        injections: new URL(s(506092), s.b),
        locals: new URL(s(476754), s.b),
    },
    erlang: {
        languageId: "erlang",
        languageExport: "tree_sitter_erlang",
        wasm: new URL(s(575282), s.b),
        highlights: new URL(s(933358), s.b),
    },
    fish: {
        languageId: "fish",
        languageExport: "tree_sitter_fish",
        wasm: new URL(s(390640), s.b),
        highlights: new URL(s(851815), s.b),
    },
    fsharp: {
        languageId: "fsharp",
        languageExport: "tree_sitter_fsharp",
        wasm: new URL(s(994912), s.b),
        highlights: new URL(s(16639), s.b),
        injections: new URL(s(902354), s.b),
        locals: new URL(s(609420), s.b),
    },
    gleam: {
        languageId: "gleam",
        languageExport: "tree_sitter_gleam",
        wasm: new URL(s(326872), s.b),
        highlights: new URL(s(727693), s.b),
        injections: new URL(s(585732), s.b),
        locals: new URL(s(734266), s.b),
    },
    glsl: {
        languageId: "glsl",
        languageExport: "tree_sitter_glsl",
        wasm: new URL(s(731680), s.b),
        highlights: new URL(s(586405), s.b),
    },
    go: {
        languageId: "go",
        languageExport: "tree_sitter_go",
        wasm: new URL(s(878896), s.b),
        highlights: new URL(s(482995), s.b),
    },
    graphql: {
        languageId: "graphql",
        languageExport: "tree_sitter_graphql",
        wasm: new URL(s(96216), s.b),
        highlights: new URL(s(926964), s.b),
    },
    groovy: {
        languageId: "groovy",
        languageExport: "tree_sitter_groovy",
        wasm: new URL(s(452936), s.b),
        highlights: new URL(s(554911), s.b),
        injections: new URL(s(764402), s.b),
    },
    haskell: {
        languageId: "haskell",
        languageExport: "tree_sitter_haskell",
        wasm: new URL(s(545412), s.b),
        highlights: new URL(s(704773), s.b),
        injections: new URL(s(761884), s.b),
        locals: new URL(s(649378), s.b),
    },
    hcl: {
        languageId: "hcl",
        languageExport: "tree_sitter_hcl",
        wasm: new URL(s(427072), s.b),
        highlights: new URL(s(216510), s.b),
    },
    hlsl: {
        languageId: "hlsl",
        languageExport: "tree_sitter_hlsl",
        wasm: new URL(s(396242), s.b),
        highlights: new URL(s(478002), s.b),
    },
    html: {
        languageId: "html",
        languageExport: "tree_sitter_html",
        wasm: new URL(s(353102), s.b),
        highlights: new URL(s(109304), s.b),
        injections: new URL(s(913489), s.b),
    },
    idris: {
        languageId: "idris",
        languageExport: "tree_sitter_idris",
        wasm: new URL(s(216604), s.b),
        highlights: new URL(s(78560), s.b),
    },
    ini: {
        languageId: "ini",
        languageExport: "tree_sitter_ini",
        wasm: new URL(s(823032), s.b),
        highlights: new URL(s(445439), s.b),
    },
    java: {
        languageId: "java",
        languageExport: "tree_sitter_java",
        wasm: new URL(s(498008), s.b),
        highlights: new URL(s(83057), s.b),
    },
    javascript: {
        languageId: "javascript",
        languageExport: "tree_sitter_javascript",
        wasm: new URL(s(371270), s.b),
        highlights: new URL(s(242818), s.b),
        injections: new URL(s(99831), s.b),
        locals: new URL(s(428049), s.b),
    },
    jinja2: {
        languageId: "jinja2",
        languageExport: "tree_sitter_jinja2",
        wasm: new URL(s(651840), s.b),
        highlights: new URL(s(753179), s.b),
    },
    jq: {
        languageId: "jq",
        languageExport: "tree_sitter_jq",
        wasm: new URL(s(567986), s.b),
        highlights: new URL(s(635744), s.b),
    },
    json: {
        languageId: "json",
        languageExport: "tree_sitter_json",
        wasm: new URL(s(962424), s.b),
        highlights: new URL(s(580639), s.b),
    },
    julia: {
        languageId: "julia",
        languageExport: "tree_sitter_julia",
        wasm: new URL(s(865552), s.b),
        highlights: new URL(s(336428), s.b),
    },
    kotlin: {
        languageId: "kotlin",
        languageExport: "tree_sitter_kotlin",
        wasm: new URL(s(657914), s.b),
        highlights: new URL(s(813824), s.b),
    },
    lean: {
        languageId: "lean",
        languageExport: "tree_sitter_lean",
        wasm: new URL(s(518708), s.b),
        highlights: new URL(s(638233), s.b),
    },
    lua: {
        languageId: "lua",
        languageExport: "tree_sitter_lua",
        wasm: new URL(s(383712), s.b),
        highlights: new URL(s(404603), s.b),
        injections: new URL(s(28454), s.b),
        locals: new URL(s(430352), s.b),
    },
    markdown: {
        languageId: "markdown",
        languageExport: "tree_sitter_markdown",
        wasm: new URL(s(277278), s.b),
        highlights: new URL(s(609676), s.b),
        injections: new URL(s(390317), s.b),
    },
    markdown_inline: {
        languageId: "markdown_inline",
        languageExport: "tree_sitter_markdown_inline",
        wasm: new URL(s(892580), s.b),
        highlights: new URL(s(894974), s.b),
        injections: new URL(s(431467), s.b),
    },
    matlab: {
        languageId: "matlab",
        languageExport: "tree_sitter_matlab",
        wasm: new URL(s(820278), s.b),
        highlights: new URL(s(479284), s.b),
    },
    meson: {
        languageId: "meson",
        languageExport: "tree_sitter_meson",
        wasm: new URL(s(49792), s.b),
        highlights: new URL(s(202791), s.b),
    },
    ninja: {
        languageId: "ninja",
        languageExport: "tree_sitter_ninja",
        wasm: new URL(s(678360), s.b),
        highlights: new URL(s(393469), s.b),
    },
    nix: {
        languageId: "nix",
        languageExport: "tree_sitter_nix",
        wasm: new URL(s(28892), s.b),
        highlights: new URL(s(292946), s.b),
        injections: new URL(s(665287), s.b),
        locals: new URL(s(189441), s.b),
    },
    objc: {
        languageId: "objc",
        languageExport: "tree_sitter_objc",
        wasm: new URL(s(377376), s.b),
        highlights: new URL(s(146831), s.b),
        injections: new URL(s(828642), s.b),
        locals: new URL(s(287100), s.b),
    },
    ocaml: {
        languageId: "ocaml",
        languageExport: "tree_sitter_ocaml",
        wasm: new URL(s(317220), s.b),
        highlights: new URL(s(810217), s.b),
        locals: new URL(s(595950), s.b),
    },
    perl: {
        languageId: "perl",
        languageExport: "tree_sitter_perl",
        wasm: new URL(s(675466), s.b),
        highlights: new URL(s(490300), s.b),
        injections: new URL(s(268701), s.b),
    },
    php: {
        languageId: "php",
        languageExport: "tree_sitter_php",
        wasm: new URL(s(97972), s.b),
        highlights: new URL(s(565017), s.b),
        injections: new URL(s(93416), s.b),
    },
    postscript: {
        languageId: "postscript",
        languageExport: "tree_sitter_postscript",
        wasm: new URL(s(737946), s.b),
        highlights: new URL(s(513052), s.b),
    },
    powershell: {
        languageId: "powershell",
        languageExport: "tree_sitter_powershell",
        wasm: new URL(s(351622), s.b),
        highlights: new URL(s(414312), s.b),
    },
    python: {
        languageId: "python",
        languageExport: "tree_sitter_python",
        wasm: new URL(s(168160), s.b),
        highlights: new URL(s(807271), s.b),
    },
    query: {
        languageId: "query",
        languageExport: "tree_sitter_query",
        wasm: new URL(s(56432), s.b),
        highlights: new URL(s(814093), s.b),
        injections: new URL(s(419012), s.b),
    },
    r: {
        languageId: "r",
        languageExport: "tree_sitter_r",
        wasm: new URL(s(597280), s.b),
        highlights: new URL(s(771515), s.b),
        locals: new URL(s(429968), s.b),
    },
    rego: {
        languageId: "rego",
        languageExport: "tree_sitter_rego",
        wasm: new URL(s(699558), s.b),
        highlights: new URL(s(582998), s.b),
        locals: new URL(s(888029), s.b),
    },
    rescript: {
        languageId: "rescript",
        languageExport: "tree_sitter_rescript",
        wasm: new URL(s(634080), s.b),
        highlights: new URL(s(982891), s.b),
        injections: new URL(s(641302), s.b),
        locals: new URL(s(501299), s.b),
    },
    ron: {
        languageId: "ron",
        languageExport: "tree_sitter_ron",
        wasm: new URL(s(22536), s.b),
        highlights: new URL(s(162790), s.b),
    },
    ruby: {
        languageId: "ruby",
        languageExport: "tree_sitter_ruby",
        wasm: new URL(s(745880), s.b),
        highlights: new URL(s(648649), s.b),
    },
    rust: {
        languageId: "rust",
        languageExport: "tree_sitter_rust_orchard",
        wasm: new URL(s(858400), s.b),
        highlights: new URL(s(282019), s.b),
        injections: new URL(s(919502), s.b),
    },
    scala: {
        languageId: "scala",
        languageExport: "tree_sitter_scala",
        wasm: new URL(s(667104), s.b),
        highlights: new URL(s(28939), s.b),
        locals: new URL(s(430976), s.b),
    },
    scheme: {
        languageId: "scheme",
        languageExport: "tree_sitter_scheme",
        wasm: new URL(s(714278), s.b),
        highlights: new URL(s(334974), s.b),
    },
    scss: {
        languageId: "scss",
        languageExport: "tree_sitter_scss",
        wasm: new URL(s(585992), s.b),
        highlights: new URL(s(316005), s.b),
    },
    solidity: {
        languageId: "solidity",
        languageExport: "tree_sitter_solidity",
        wasm: new URL(s(194090), s.b),
        highlights: new URL(s(514340), s.b),
        locals: new URL(s(513219), s.b),
    },
    sparql: {
        languageId: "sparql",
        languageExport: "tree_sitter_sparql",
        wasm: new URL(s(224786), s.b),
        highlights: new URL(s(687236), s.b),
    },
    sql: {
        languageId: "sql",
        languageExport: "tree_sitter_sql",
        wasm: new URL(s(179688), s.b),
        highlights: new URL(s(167429), s.b),
    },
    "ssh-config": {
        languageId: "ssh-config",
        languageExport: "tree_sitter_ssh_config",
        wasm: new URL(s(219074), s.b),
        highlights: new URL(s(269974), s.b),
        injections: new URL(s(703971), s.b),
    },
    starlark: {
        languageId: "starlark",
        languageExport: "tree_sitter_starlark",
        wasm: new URL(s(361872), s.b),
        highlights: new URL(s(513565), s.b),
        injections: new URL(s(623188), s.b),
        locals: new URL(s(567658), s.b),
    },
    styx: {
        languageId: "styx",
        languageExport: "tree_sitter_styx",
        wasm: new URL(s(579168), s.b),
        highlights: new URL(s(400827), s.b),
        injections: new URL(s(24678), s.b),
    },
    svelte: {
        languageId: "svelte",
        languageExport: "tree_sitter_svelte",
        wasm: new URL(s(672726), s.b),
        highlights: new URL(s(29710), s.b),
        injections: new URL(s(894779), s.b),
        locals: new URL(s(266949), s.b),
    },
    swift: {
        languageId: "swift",
        languageExport: "tree_sitter_swift",
        wasm: new URL(s(795172), s.b),
        highlights: new URL(s(780826), s.b),
        injections: new URL(s(758351), s.b),
        locals: new URL(s(472313), s.b),
    },
    textproto: {
        languageId: "textproto",
        languageExport: "tree_sitter_textproto",
        wasm: new URL(s(871664), s.b),
        highlights: new URL(s(598578), s.b),
    },
    thrift: {
        languageId: "thrift",
        languageExport: "tree_sitter_thrift",
        wasm: new URL(s(499786), s.b),
        highlights: new URL(s(858346), s.b),
        injections: new URL(s(96671), s.b),
        locals: new URL(s(313321), s.b),
    },
    tlaplus: {
        languageId: "tlaplus",
        languageExport: "tree_sitter_tlaplus",
        wasm: new URL(s(148604), s.b),
        highlights: new URL(s(512062), s.b),
        locals: new URL(s(407637), s.b),
    },
    toml: {
        languageId: "toml",
        languageExport: "tree_sitter_toml",
        wasm: new URL(s(651324), s.b),
        highlights: new URL(s(787537), s.b),
    },
    tsx: {
        languageId: "tsx",
        languageExport: "tree_sitter_tsx",
        wasm: new URL(s(888600), s.b),
        highlights: new URL(s(592198), s.b),
        locals: new URL(s(251373), s.b),
    },
    typescript: {
        languageId: "typescript",
        languageExport: "tree_sitter_typescript",
        wasm: new URL(s(950518), s.b),
        highlights: new URL(s(992362), s.b),
        locals: new URL(s(841833), s.b),
    },
    typst: {
        languageId: "typst",
        languageExport: "tree_sitter_typst",
        wasm: new URL(s(903376), s.b),
        highlights: new URL(s(227431), s.b),
        injections: new URL(s(215578), s.b),
    },
    verilog: {
        languageId: "verilog",
        languageExport: "tree_sitter_verilog",
        wasm: new URL(s(283840), s.b),
        highlights: new URL(s(43451), s.b),
    },
    vhdl: {
        languageId: "vhdl",
        languageExport: "tree_sitter_vhdl",
        wasm: new URL(s(298880), s.b),
        highlights: new URL(s(143195), s.b),
    },
    vim: {
        languageId: "vim",
        languageExport: "tree_sitter_vim",
        wasm: new URL(s(88872), s.b),
        highlights: new URL(s(426029), s.b),
        injections: new URL(s(569892), s.b),
    },
    vue: {
        languageId: "vue",
        languageExport: "tree_sitter_vue",
        wasm: new URL(s(24312), s.b),
        highlights: new URL(s(732577), s.b),
        injections: new URL(s(69200), s.b),
    },
    wit: {
        languageId: "wit",
        languageExport: "tree_sitter_wit",
        wasm: new URL(s(759992), s.b),
        highlights: new URL(s(5377), s.b),
        injections: new URL(s(772144), s.b),
    },
    x86asm: {
        languageId: "x86asm",
        languageExport: "tree_sitter_x86asm",
        wasm: new URL(s(933902), s.b),
        highlights: new URL(s(260596), s.b),
    },
    xml: {
        languageId: "xml",
        languageExport: "tree_sitter_xml",
        wasm: new URL(s(237692), s.b),
        highlights: new URL(s(63252), s.b),
    },
    yaml: {
        languageId: "yaml",
        languageExport: "tree_sitter_yaml",
        wasm: new URL(s(768866), s.b),
        highlights: new URL(s(480806), s.b),
    },
    yuri: {
        languageId: "yuri",
        languageExport: "tree_sitter_yuri",
        wasm: new URL(s(509162), s.b),
        highlights: new URL(s(145842), s.b),
    },
    zig: {
        languageId: "zig",
        languageExport: "tree_sitter_zig",
        wasm: new URL(s(541088), s.b),
        highlights: new URL(s(569739), s.b),
        injections: new URL(s(130998), s.b),
    },
    zsh: {
        languageId: "zsh",
        languageExport: "tree_sitter_zsh",
        wasm: new URL(s(75072), s.b),
        highlights: new URL(s(242144), s.b),
    },
};
