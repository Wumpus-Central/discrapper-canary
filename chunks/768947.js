"use strict";
let i;
n.d(t, { OY: () => I, ph: () => N, py: () => A });
var r = n(64700),
    s = n(730296),
    a = n(635377),
    o = n.n(a),
    l = n(181370),
    u = n.n(l),
    c = n(52133);
async function d(e) {
    let t = s.pb[e];
    return (await (null == i && (i = (0, s.A)()), i)).loadGrammar(t);
}
let _ = /^[a-z0-9_+\-.#]+$/,
    f = Promise.resolve(null),
    h = new Map(),
    p = new (o())({ max: 256 });
function E(e) {
    if (null == e || !(e in s.pb)) return f;
    let t = h.get(e);
    return null == t && ((t = d(e)), h.set(e, t)), t;
}
let m = {
        h: "cpp",
        hpp: "cpp",
        cc: "cpp",
        cxx: "cpp",
        "c++": "cpp",
        hxx: "cpp",
        "h++": "cpp",
        hh: "cpp",
        arduino: "cpp",
        js: "javascript",
        coffee: "javascript",
        coffeescript: "javascript",
        livescript: "javascript",
        node: "javascript",
        mjs: "javascript",
        cjs: "javascript",
        jsx: "javascript",
        ts: "typescript",
        rs: "rust",
        cs: "c-sharp",
        csharp: "c-sharp",
        "c#": "c-sharp",
        yml: "yaml",
        docker: "dockerfile",
        gql: "graphql",
        hbs: "html",
        htm: "html",
        xhtml: "html",
        handlebars: "html",
        "html.hbs": "html",
        "html.handlebars": "html",
        htmlbars: "html",
        haml: "html",
        erb: "html",
        twig: "html",
        craftcms: "html",
        xsl: "xml",
        rss: "xml",
        atom: "xml",
        xsd: "xml",
        plist: "xml",
        svg: "xml",
        mathml: "xml",
        xjb: "xml",
        wsf: "xml",
        less: "css",
        sass: "scss",
        styl: "css",
        stylus: "css",
        kt: "kotlin",
        kts: "kotlin",
        pl: "perl",
        pm: "perl",
        ps: "powershell",
        ps1: "powershell",
        psm1: "powershell",
        psd1: "powershell",
        pwsh: "powershell",
        tf: "hcl",
        tfvars: "hcl",
        mk: "bash",
        mak: "bash",
        make: "bash",
        makefile: "bash",
        sh: "bash",
        shell: "bash",
        console: "bash",
        shellsession: "bash",
        ex: "elixir",
        exs: "elixir",
        erl: "erlang",
        hs: "haskell",
        fs: "fsharp",
        "f#": "fsharp",
        ml: "ocaml",
        mli: "ocaml",
        sml: "ocaml",
        re: "rescript",
        reasonml: "rescript",
        scm: "scheme",
        rkt: "scheme",
        clj: "clojure",
        edn: "clojure",
        rb: "ruby",
        cr: "ruby",
        crystal: "ruby",
        gemspec: "ruby",
        podspec: "ruby",
        irb: "ruby",
        thor: "ruby",
        v: "verilog",
        sv: "verilog",
        svh: "verilog",
        objectivec: "objc",
        mm: "objc",
        "obj-c": "objc",
        "obj-c++": "objc",
        "objective-c++": "objc",
        vbnet: "vb",
        vbs: "vb",
        vbscript: "vb",
        "vbscript-html": "vb",
        dos: "batch",
        bat: "batch",
        cmd: "batch",
        lisp: "commonlisp",
        capnproto: "capnp",
        dts: "devicetree",
        adoc: "asciidoc",
        patch: "diff",
        golang: "go",
        jinja: "jinja2",
        django: "jinja2",
        jsp: "java",
        nixos: "nix",
        arm: "asm",
        mips: "asm",
        armasm: "asm",
        mipsasm: "asm",
        avrasm: "asm",
        pgsql: "sql",
        postgres: "sql",
        postgresql: "sql",
        n1ql: "sql",
        gradle: "groovy",
        "php-template": "php",
        "cmake.in": "cmake",
        md: "markdown",
        mkdown: "markdown",
        mkd: "markdown",
        py: "python",
        gyp: "python",
        ipython: "python",
        cson: "json",
        jsonc: "json",
        "python-repl": "python",
        pycon: "python",
        "node-repl": "javascript",
        "clojure-repl": "clojure",
        "erlang-repl": "erlang",
        "julia-repl": "julia",
        jldoctest: "julia",
    },
    g = new Set(Object.keys(s.pb));
function A(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!_.test(t)) return;
    if (g.has(t)) return t;
    let n = m[t];
    if (null != n && g.has(n)) return n;
}
function I(e, t) {
    let n = r.use(E(e)),
        i = r.useMemo(() => u()(`${e}\0${t}`), [e, t]),
        s = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!e) {
                    let e = p.get(i);
                    if (null != e) return e;
                }
                if (
                    !(function (e) {
                        for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                        return !0;
                    })(t) ||
                    null == n
                )
                    return;
                let r = (function (e, t) {
                    let n = e.endsWith("\n")
                            ? e
                            : `${e}
`,
                        i = t.createSession();
                    try {
                        return i.setText(n), i.highlightToHtml();
                    } finally {
                        i.free();
                    }
                })(t, n);
                if (null != r) return p.set(i, r), r;
            },
            [i, t, n],
        ),
        [a, o] = r.useState(s);
    return (
        r.useEffect(() => {
            o(s());
        }, [s]),
        r.useEffect(() => {
            let e = a?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let n of e)
                E(n).then(() => {
                    t ||
                        o((e) => {
                            let t = s(!0);
                            return null == t ||
                                (null != e && e.html === t.html && (0, c.v)(e.missingInjections, t.missingInjections))
                                ? e
                                : t;
                        });
                });
            return () => {
                t = !0;
            };
        }, [i, s, a?.missingInjections]),
        a?.html ?? null
    );
}
g.add("ansi");
let T = null,
    S = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function N(e) {
    T ??= n.e("1180").then(n.t.bind(n, 628759, 23));
    let { default: t } = r.use(T),
        [i] = r.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: S }));
    return r.useMemo(() => i.toHtml(e), [i, e]);
}
