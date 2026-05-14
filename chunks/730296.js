"use strict";
async function i(e) {
    return null;
}
n.d(t, { pb: () => E, A: () => d });
class r extends Error {
    kind;
    constructor(e, t) {
        super(t), (this.name = "ArboriumError"), (this.kind = e);
    }
}
function s(e, t) {
    if (0 === t.length) return [0, 0];
    let n = u.encode(t),
        i = e._malloc(n.length);
    return e.HEAPU8.set(n, i), [i, n.length];
}
async function a(e) {
    return e instanceof URL ? l(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function o(e) {
    if ("string" == typeof e) return e;
    let t = await l(e);
    return c.decode(t);
}
async function l(e) {
    let t = await i(e);
    if (t) return t;
    let n = await fetch(e);
    if (!n.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${n.status} ${n.statusText}`);
    return new Uint8Array(await n.arrayBuffer());
}
let u = new TextEncoder(),
    c = new TextDecoder();
async function d() {
    let e = await p(),
        [t, i] = await Promise.all([a(new URL(n(793189), n.b)), a(new URL(n(12487), n.b))]),
        r = await e({ wasmBinary: t }),
        s = await r.loadWebAssemblyModule(i, { loadAsync: !0 });
    return new _(r, s);
}
class _ {
    host;
    abi;
    constructor(e, t) {
        (this.host = e), (this.abi = t);
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new r(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [t, n, i, l] = await Promise.all([
                a(e.wasm),
                o(e.highlights),
                void 0 === e.injections ? "" : o(e.injections),
                void 0 === e.locals ? "" : o(e.locals),
            ]),
            u = (function (e, t) {
                if (void 0 !== t) {
                    let n = e[t];
                    if ("function" != typeof n)
                        throw new r(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(t)}`,
                        );
                    return n;
                }
                let n = Object.keys(e).filter((t) => t.startsWith("tree_sitter_") && "function" == typeof e[t]);
                if (0 === n.length)
                    throw new r(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (n.length > 1)
                    throw new r(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${n.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[n[0]];
            })(await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }), e.languageExport)();
        if (!u) throw new r("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [c, d] = s(this.host, e.languageId),
            [_, h] = s(this.host, n),
            [p, E] = s(this.host, i),
            [m, g] = s(this.host, l),
            A = 0;
        try {
            A = this.abi.arborium_rt_register_grammar(u, c, d, _, h, p, E, m, g);
        } finally {
            c && this.host._free(c), _ && this.host._free(_), p && this.host._free(p), m && this.host._free(m);
        }
        if (0 === A)
            throw new r(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new f(this, A, u, e.languageId);
    }
}
class f {
    runtime;
    id;
    languagePtr;
    languageId;
    #t = !1;
    constructor(e, t, n, i) {
        (this.runtime = e), (this.id = t), (this.languagePtr = n), (this.languageId = i);
    }
    createSession() {
        this.#n();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new r("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new h(this, e);
    }
    unregister() {
        this.#t || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#t = !0));
    }
    #n() {
        if (this.#t) throw new r("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class h {
    grammar;
    id;
    #i = !1;
    constructor(e, t) {
        (this.grammar = e), (this.id = t);
    }
    setText(e) {
        this.#n();
        let [t, n] = s(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, n);
        } finally {
            t && this.grammar.runtime.host._free(t);
        }
    }
    parse() {
        return (
            this.#n(),
            this.#r(
                "parse-failed",
                (e, t) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
                (e) => (0 === e.length ? { spans: [], injections: [], timed_out: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#n();
        let t = e.maxInjectionDepth ?? 3,
            n = this.#r(
                "highlight-failed",
                (e, n) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, t, e, n),
                (e) =>
                    0 === e.length ? { spans: [], missing_injections: [], timed_out_languages: [] } : JSON.parse(e),
            );
        return { spans: n.spans, missingInjections: n.missing_injections, timedOutLanguages: n.timed_out_languages };
    }
    highlightToHtml(e = {}) {
        this.#n();
        let t = e.maxInjectionDepth ?? 3,
            n = e.format ?? { kind: "custom-elements" },
            { host: i } = this.grammar.runtime,
            { code: r, prefix: a } = (function (e) {
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
            })(n),
            [o, l] = s(i, a);
        try {
            let e = this.#r(
                "highlight-failed",
                (e, n) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, t, r, o, l, e, n),
                (e) => (0 === e.length ? { html: "", missing_injections: [], timed_out_languages: [] } : JSON.parse(e)),
            );
            return { html: e.html, missingInjections: e.missing_injections, timedOutLanguages: e.timed_out_languages };
        } finally {
            o && i._free(o);
        }
    }
    cancel() {
        this.#n(), this.grammar.runtime.abi.arborium_rt_cancel(this.id);
    }
    free() {
        this.#i || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#i = !0));
    }
    #n() {
        if (this.#i) throw new r("session-creation-failed", `session ${this.id} has been freed`);
    }
    #r(e, t, n) {
        let { host: i, abi: s } = this.grammar.runtime,
            a = i._malloc(4),
            o = i._malloc(4);
        try {
            let l = t(a, o);
            if (0 !== l) throw new r(e, `arborium_rt call returned status ${l}`);
            let u = i.getValue(a, "i32"),
                d = i.getValue(o, "i32");
            if (0 === d) return n("");
            try {
                return n(0 === d ? "" : c.decode(i.HEAPU8.subarray(u, u + d)));
            } finally {
                s.arborium_rt_free(u, d);
            }
        } finally {
            i._free(a), i._free(o);
        }
    }
}
async function p() {
    return (await n.e("48034").then(n.bind(n, 2649))).default;
}
let E = {
    ada: {
        languageId: "ada",
        languageExport: "tree_sitter_ada",
        wasm: new URL(n(738292), n.b),
        highlights: new URL(n(581189), n.b),
        locals: new URL(n(854370), n.b),
    },
    agda: {
        languageId: "agda",
        languageExport: "tree_sitter_agda",
        wasm: new URL(n(588174), n.b),
        highlights: new URL(n(586298), n.b),
    },
    asciidoc: {
        languageId: "asciidoc",
        languageExport: "tree_sitter_asciidoc",
        wasm: new URL(n(181762), n.b),
        highlights: new URL(n(962230), n.b),
    },
    asm: {
        languageId: "asm",
        languageExport: "tree_sitter_asm",
        wasm: new URL(n(267976), n.b),
        highlights: new URL(n(781998), n.b),
        injections: new URL(n(58715), n.b),
    },
    awk: {
        languageId: "awk",
        languageExport: "tree_sitter_awk",
        wasm: new URL(n(34880), n.b),
        highlights: new URL(n(628008), n.b),
    },
    bash: {
        languageId: "bash",
        languageExport: "tree_sitter_bash",
        wasm: new URL(n(281104), n.b),
        highlights: new URL(n(425491), n.b),
    },
    batch: {
        languageId: "batch",
        languageExport: "tree_sitter_batch",
        wasm: new URL(n(667980), n.b),
        highlights: new URL(n(734121), n.b),
    },
    c: {
        languageId: "c",
        languageExport: "tree_sitter_c",
        wasm: new URL(n(43568), n.b),
        highlights: new URL(n(296308), n.b),
    },
    "c-sharp": {
        languageId: "c-sharp",
        languageExport: "tree_sitter_c_sharp",
        wasm: new URL(n(604496), n.b),
        highlights: new URL(n(792105), n.b),
    },
    caddy: {
        languageId: "caddy",
        languageExport: "tree_sitter_caddy",
        wasm: new URL(n(638340), n.b),
        highlights: new URL(n(861066), n.b),
    },
    capnp: {
        languageId: "capnp",
        languageExport: "tree_sitter_capnp",
        wasm: new URL(n(994688), n.b),
        highlights: new URL(n(812475), n.b),
        injections: new URL(n(436326), n.b),
        locals: new URL(n(397392), n.b),
    },
    cedar: {
        languageId: "cedar",
        languageExport: "tree_sitter_cedar",
        wasm: new URL(n(827716), n.b),
        highlights: new URL(n(447602), n.b),
    },
    cedarschema: {
        languageId: "cedarschema",
        languageExport: "tree_sitter_cedarschema",
        wasm: new URL(n(14428), n.b),
        highlights: new URL(n(132141), n.b),
    },
    clojure: {
        languageId: "clojure",
        languageExport: "tree_sitter_clojure",
        wasm: new URL(n(625468), n.b),
        highlights: new URL(n(961789), n.b),
    },
    cmake: {
        languageId: "cmake",
        languageExport: "tree_sitter_cmake",
        wasm: new URL(n(799600), n.b),
        highlights: new URL(n(103266), n.b),
        injections: new URL(n(372631), n.b),
    },
    commonlisp: {
        languageId: "commonlisp",
        languageExport: "tree_sitter_commonlisp",
        wasm: new URL(n(710938), n.b),
        highlights: new URL(n(529428), n.b),
    },
    cpp: {
        languageId: "cpp",
        languageExport: "tree_sitter_cpp",
        wasm: new URL(n(354696), n.b),
        highlights: new URL(n(291116), n.b),
        injections: new URL(n(419277), n.b),
    },
    css: {
        languageId: "css",
        languageExport: "tree_sitter_css",
        wasm: new URL(n(526944), n.b),
        highlights: new URL(n(436350), n.b),
    },
    d: {
        languageId: "d",
        languageExport: "tree_sitter_d",
        wasm: new URL(n(225284), n.b),
        highlights: new URL(n(94562), n.b),
    },
    dart: {
        languageId: "dart",
        languageExport: "tree_sitter_dart",
        wasm: new URL(n(908986), n.b),
        highlights: new URL(n(982124), n.b),
    },
    devicetree: {
        languageId: "devicetree",
        languageExport: "tree_sitter_devicetree",
        wasm: new URL(n(600160), n.b),
        highlights: new URL(n(898539), n.b),
    },
    diff: {
        languageId: "diff",
        languageExport: "tree_sitter_diff",
        wasm: new URL(n(669422), n.b),
        highlights: new URL(n(668398), n.b),
    },
    dockerfile: {
        languageId: "dockerfile",
        languageExport: "tree_sitter_dockerfile",
        wasm: new URL(n(647480), n.b),
        highlights: new URL(n(252671), n.b),
    },
    dot: {
        languageId: "dot",
        languageExport: "tree_sitter_dot",
        wasm: new URL(n(765888), n.b),
        highlights: new URL(n(693294), n.b),
        injections: new URL(n(747355), n.b),
    },
    elisp: {
        languageId: "elisp",
        languageExport: "tree_sitter_elisp",
        wasm: new URL(n(608248), n.b),
        highlights: new URL(n(709722), n.b),
    },
    elixir: {
        languageId: "elixir",
        languageExport: "tree_sitter_elixir",
        wasm: new URL(n(768334), n.b),
        highlights: new URL(n(5138), n.b),
        injections: new URL(n(861127), n.b),
    },
    elm: {
        languageId: "elm",
        languageExport: "tree_sitter_elm",
        wasm: new URL(n(200548), n.b),
        highlights: new URL(n(864341), n.b),
        injections: new URL(n(506092), n.b),
        locals: new URL(n(476754), n.b),
    },
    erlang: {
        languageId: "erlang",
        languageExport: "tree_sitter_erlang",
        wasm: new URL(n(575282), n.b),
        highlights: new URL(n(933358), n.b),
    },
    fish: {
        languageId: "fish",
        languageExport: "tree_sitter_fish",
        wasm: new URL(n(390640), n.b),
        highlights: new URL(n(851815), n.b),
    },
    fsharp: {
        languageId: "fsharp",
        languageExport: "tree_sitter_fsharp",
        wasm: new URL(n(994912), n.b),
        highlights: new URL(n(16639), n.b),
        injections: new URL(n(902354), n.b),
        locals: new URL(n(609420), n.b),
    },
    gleam: {
        languageId: "gleam",
        languageExport: "tree_sitter_gleam",
        wasm: new URL(n(326872), n.b),
        highlights: new URL(n(727693), n.b),
        injections: new URL(n(585732), n.b),
        locals: new URL(n(734266), n.b),
    },
    glsl: {
        languageId: "glsl",
        languageExport: "tree_sitter_glsl",
        wasm: new URL(n(731680), n.b),
        highlights: new URL(n(586405), n.b),
    },
    go: {
        languageId: "go",
        languageExport: "tree_sitter_go",
        wasm: new URL(n(878896), n.b),
        highlights: new URL(n(482995), n.b),
    },
    graphql: {
        languageId: "graphql",
        languageExport: "tree_sitter_graphql",
        wasm: new URL(n(96216), n.b),
        highlights: new URL(n(926964), n.b),
    },
    groovy: {
        languageId: "groovy",
        languageExport: "tree_sitter_groovy",
        wasm: new URL(n(452936), n.b),
        highlights: new URL(n(554911), n.b),
        injections: new URL(n(764402), n.b),
    },
    haskell: {
        languageId: "haskell",
        languageExport: "tree_sitter_haskell",
        wasm: new URL(n(545412), n.b),
        highlights: new URL(n(704773), n.b),
        injections: new URL(n(761884), n.b),
        locals: new URL(n(649378), n.b),
    },
    hcl: {
        languageId: "hcl",
        languageExport: "tree_sitter_hcl",
        wasm: new URL(n(427072), n.b),
        highlights: new URL(n(216510), n.b),
    },
    hlsl: {
        languageId: "hlsl",
        languageExport: "tree_sitter_hlsl",
        wasm: new URL(n(396242), n.b),
        highlights: new URL(n(478002), n.b),
    },
    html: {
        languageId: "html",
        languageExport: "tree_sitter_html",
        wasm: new URL(n(353102), n.b),
        highlights: new URL(n(109304), n.b),
        injections: new URL(n(913489), n.b),
    },
    idris: {
        languageId: "idris",
        languageExport: "tree_sitter_idris",
        wasm: new URL(n(216604), n.b),
        highlights: new URL(n(78560), n.b),
    },
    ini: {
        languageId: "ini",
        languageExport: "tree_sitter_ini",
        wasm: new URL(n(823032), n.b),
        highlights: new URL(n(445439), n.b),
    },
    java: {
        languageId: "java",
        languageExport: "tree_sitter_java",
        wasm: new URL(n(498008), n.b),
        highlights: new URL(n(83057), n.b),
    },
    javascript: {
        languageId: "javascript",
        languageExport: "tree_sitter_javascript",
        wasm: new URL(n(371270), n.b),
        highlights: new URL(n(242818), n.b),
        injections: new URL(n(99831), n.b),
        locals: new URL(n(428049), n.b),
    },
    jinja2: {
        languageId: "jinja2",
        languageExport: "tree_sitter_jinja2",
        wasm: new URL(n(651840), n.b),
        highlights: new URL(n(753179), n.b),
    },
    jq: {
        languageId: "jq",
        languageExport: "tree_sitter_jq",
        wasm: new URL(n(567986), n.b),
        highlights: new URL(n(635744), n.b),
    },
    json: {
        languageId: "json",
        languageExport: "tree_sitter_json",
        wasm: new URL(n(962424), n.b),
        highlights: new URL(n(580639), n.b),
    },
    julia: {
        languageId: "julia",
        languageExport: "tree_sitter_julia",
        wasm: new URL(n(865552), n.b),
        highlights: new URL(n(336428), n.b),
    },
    kotlin: {
        languageId: "kotlin",
        languageExport: "tree_sitter_kotlin",
        wasm: new URL(n(657914), n.b),
        highlights: new URL(n(813824), n.b),
    },
    lean: {
        languageId: "lean",
        languageExport: "tree_sitter_lean",
        wasm: new URL(n(518708), n.b),
        highlights: new URL(n(638233), n.b),
    },
    lua: {
        languageId: "lua",
        languageExport: "tree_sitter_lua",
        wasm: new URL(n(383712), n.b),
        highlights: new URL(n(404603), n.b),
        injections: new URL(n(28454), n.b),
        locals: new URL(n(430352), n.b),
    },
    markdown: {
        languageId: "markdown",
        languageExport: "tree_sitter_markdown",
        wasm: new URL(n(277278), n.b),
        highlights: new URL(n(609676), n.b),
        injections: new URL(n(390317), n.b),
    },
    markdown_inline: {
        languageId: "markdown_inline",
        languageExport: "tree_sitter_markdown_inline",
        wasm: new URL(n(892580), n.b),
        highlights: new URL(n(894974), n.b),
        injections: new URL(n(431467), n.b),
    },
    matlab: {
        languageId: "matlab",
        languageExport: "tree_sitter_matlab",
        wasm: new URL(n(820278), n.b),
        highlights: new URL(n(479284), n.b),
    },
    meson: {
        languageId: "meson",
        languageExport: "tree_sitter_meson",
        wasm: new URL(n(49792), n.b),
        highlights: new URL(n(202791), n.b),
    },
    ninja: {
        languageId: "ninja",
        languageExport: "tree_sitter_ninja",
        wasm: new URL(n(678360), n.b),
        highlights: new URL(n(393469), n.b),
    },
    nix: {
        languageId: "nix",
        languageExport: "tree_sitter_nix",
        wasm: new URL(n(28892), n.b),
        highlights: new URL(n(292946), n.b),
        injections: new URL(n(665287), n.b),
        locals: new URL(n(189441), n.b),
    },
    objc: {
        languageId: "objc",
        languageExport: "tree_sitter_objc",
        wasm: new URL(n(377376), n.b),
        highlights: new URL(n(146831), n.b),
        injections: new URL(n(828642), n.b),
        locals: new URL(n(287100), n.b),
    },
    ocaml: {
        languageId: "ocaml",
        languageExport: "tree_sitter_ocaml",
        wasm: new URL(n(317220), n.b),
        highlights: new URL(n(810217), n.b),
        locals: new URL(n(595950), n.b),
    },
    perl: {
        languageId: "perl",
        languageExport: "tree_sitter_perl",
        wasm: new URL(n(675466), n.b),
        highlights: new URL(n(490300), n.b),
        injections: new URL(n(268701), n.b),
    },
    php: {
        languageId: "php",
        languageExport: "tree_sitter_php",
        wasm: new URL(n(97972), n.b),
        highlights: new URL(n(565017), n.b),
        injections: new URL(n(93416), n.b),
    },
    postscript: {
        languageId: "postscript",
        languageExport: "tree_sitter_postscript",
        wasm: new URL(n(737946), n.b),
        highlights: new URL(n(513052), n.b),
    },
    powershell: {
        languageId: "powershell",
        languageExport: "tree_sitter_powershell",
        wasm: new URL(n(351622), n.b),
        highlights: new URL(n(414312), n.b),
    },
    python: {
        languageId: "python",
        languageExport: "tree_sitter_python",
        wasm: new URL(n(168160), n.b),
        highlights: new URL(n(807271), n.b),
    },
    query: {
        languageId: "query",
        languageExport: "tree_sitter_query",
        wasm: new URL(n(56432), n.b),
        highlights: new URL(n(814093), n.b),
        injections: new URL(n(419012), n.b),
    },
    r: {
        languageId: "r",
        languageExport: "tree_sitter_r",
        wasm: new URL(n(597280), n.b),
        highlights: new URL(n(771515), n.b),
        locals: new URL(n(429968), n.b),
    },
    rego: {
        languageId: "rego",
        languageExport: "tree_sitter_rego",
        wasm: new URL(n(699558), n.b),
        highlights: new URL(n(582998), n.b),
        locals: new URL(n(888029), n.b),
    },
    rescript: {
        languageId: "rescript",
        languageExport: "tree_sitter_rescript",
        wasm: new URL(n(634080), n.b),
        highlights: new URL(n(982891), n.b),
        injections: new URL(n(641302), n.b),
        locals: new URL(n(723680), n.b),
    },
    ron: {
        languageId: "ron",
        languageExport: "tree_sitter_ron",
        wasm: new URL(n(22536), n.b),
        highlights: new URL(n(162790), n.b),
    },
    ruby: {
        languageId: "ruby",
        languageExport: "tree_sitter_ruby",
        wasm: new URL(n(745880), n.b),
        highlights: new URL(n(648649), n.b),
    },
    rust: {
        languageId: "rust",
        languageExport: "tree_sitter_rust_orchard",
        wasm: new URL(n(858400), n.b),
        highlights: new URL(n(282019), n.b),
        injections: new URL(n(919502), n.b),
    },
    scala: {
        languageId: "scala",
        languageExport: "tree_sitter_scala",
        wasm: new URL(n(667104), n.b),
        highlights: new URL(n(28939), n.b),
        locals: new URL(n(430976), n.b),
    },
    scheme: {
        languageId: "scheme",
        languageExport: "tree_sitter_scheme",
        wasm: new URL(n(714278), n.b),
        highlights: new URL(n(334974), n.b),
    },
    scss: {
        languageId: "scss",
        languageExport: "tree_sitter_scss",
        wasm: new URL(n(585992), n.b),
        highlights: new URL(n(316005), n.b),
    },
    solidity: {
        languageId: "solidity",
        languageExport: "tree_sitter_solidity",
        wasm: new URL(n(194090), n.b),
        highlights: new URL(n(514340), n.b),
        locals: new URL(n(513219), n.b),
    },
    sparql: {
        languageId: "sparql",
        languageExport: "tree_sitter_sparql",
        wasm: new URL(n(224786), n.b),
        highlights: new URL(n(687236), n.b),
    },
    sql: {
        languageId: "sql",
        languageExport: "tree_sitter_sql",
        wasm: new URL(n(179688), n.b),
        highlights: new URL(n(167429), n.b),
    },
    "ssh-config": {
        languageId: "ssh-config",
        languageExport: "tree_sitter_ssh_config",
        wasm: new URL(n(219074), n.b),
        highlights: new URL(n(269974), n.b),
        injections: new URL(n(703971), n.b),
    },
    starlark: {
        languageId: "starlark",
        languageExport: "tree_sitter_starlark",
        wasm: new URL(n(361872), n.b),
        highlights: new URL(n(513565), n.b),
        injections: new URL(n(623188), n.b),
        locals: new URL(n(567658), n.b),
    },
    styx: {
        languageId: "styx",
        languageExport: "tree_sitter_styx",
        wasm: new URL(n(579168), n.b),
        highlights: new URL(n(400827), n.b),
        injections: new URL(n(24678), n.b),
    },
    svelte: {
        languageId: "svelte",
        languageExport: "tree_sitter_svelte",
        wasm: new URL(n(672726), n.b),
        highlights: new URL(n(29710), n.b),
        injections: new URL(n(894779), n.b),
        locals: new URL(n(266949), n.b),
    },
    swift: {
        languageId: "swift",
        languageExport: "tree_sitter_swift",
        wasm: new URL(n(795172), n.b),
        highlights: new URL(n(780826), n.b),
        injections: new URL(n(758351), n.b),
        locals: new URL(n(472313), n.b),
    },
    textproto: {
        languageId: "textproto",
        languageExport: "tree_sitter_textproto",
        wasm: new URL(n(871664), n.b),
        highlights: new URL(n(598578), n.b),
    },
    thrift: {
        languageId: "thrift",
        languageExport: "tree_sitter_thrift",
        wasm: new URL(n(499786), n.b),
        highlights: new URL(n(858346), n.b),
        injections: new URL(n(96671), n.b),
        locals: new URL(n(313321), n.b),
    },
    tlaplus: {
        languageId: "tlaplus",
        languageExport: "tree_sitter_tlaplus",
        wasm: new URL(n(148604), n.b),
        highlights: new URL(n(512062), n.b),
        locals: new URL(n(407637), n.b),
    },
    toml: {
        languageId: "toml",
        languageExport: "tree_sitter_toml",
        wasm: new URL(n(651324), n.b),
        highlights: new URL(n(787537), n.b),
    },
    tsx: {
        languageId: "tsx",
        languageExport: "tree_sitter_tsx",
        wasm: new URL(n(888600), n.b),
        highlights: new URL(n(592198), n.b),
        locals: new URL(n(251373), n.b),
    },
    typescript: {
        languageId: "typescript",
        languageExport: "tree_sitter_typescript",
        wasm: new URL(n(950518), n.b),
        highlights: new URL(n(992362), n.b),
        locals: new URL(n(841833), n.b),
    },
    typst: {
        languageId: "typst",
        languageExport: "tree_sitter_typst",
        wasm: new URL(n(903376), n.b),
        highlights: new URL(n(227431), n.b),
        injections: new URL(n(215578), n.b),
    },
    verilog: {
        languageId: "verilog",
        languageExport: "tree_sitter_verilog",
        wasm: new URL(n(283840), n.b),
        highlights: new URL(n(43451), n.b),
    },
    vhdl: {
        languageId: "vhdl",
        languageExport: "tree_sitter_vhdl",
        wasm: new URL(n(298880), n.b),
        highlights: new URL(n(143195), n.b),
    },
    vim: {
        languageId: "vim",
        languageExport: "tree_sitter_vim",
        wasm: new URL(n(88872), n.b),
        highlights: new URL(n(426029), n.b),
        injections: new URL(n(569892), n.b),
    },
    vue: {
        languageId: "vue",
        languageExport: "tree_sitter_vue",
        wasm: new URL(n(24312), n.b),
        highlights: new URL(n(732577), n.b),
        injections: new URL(n(69200), n.b),
    },
    wit: {
        languageId: "wit",
        languageExport: "tree_sitter_wit",
        wasm: new URL(n(759992), n.b),
        highlights: new URL(n(5377), n.b),
        injections: new URL(n(772144), n.b),
    },
    x86asm: {
        languageId: "x86asm",
        languageExport: "tree_sitter_x86asm",
        wasm: new URL(n(933902), n.b),
        highlights: new URL(n(260596), n.b),
    },
    xml: {
        languageId: "xml",
        languageExport: "tree_sitter_xml",
        wasm: new URL(n(237692), n.b),
        highlights: new URL(n(63252), n.b),
    },
    yaml: {
        languageId: "yaml",
        languageExport: "tree_sitter_yaml",
        wasm: new URL(n(768866), n.b),
        highlights: new URL(n(480806), n.b),
    },
    yuri: {
        languageId: "yuri",
        languageExport: "tree_sitter_yuri",
        wasm: new URL(n(509162), n.b),
        highlights: new URL(n(145842), n.b),
    },
    zig: {
        languageId: "zig",
        languageExport: "tree_sitter_zig",
        wasm: new URL(n(541088), n.b),
        highlights: new URL(n(569739), n.b),
        injections: new URL(n(130998), n.b),
    },
    zsh: {
        languageId: "zsh",
        languageExport: "tree_sitter_zsh",
        wasm: new URL(n(75072), n.b),
        highlights: new URL(n(242144), n.b),
    },
};
