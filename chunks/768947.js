"use strict";
n.d(t, { No: () => f, OY: () => T, ph: () => S, py: () => p });
var i = n(64700),
    r = n(534979),
    a = n(635377),
    s = n.n(a),
    l = n(181370),
    o = n.n(l),
    d = n(52133),
    c = n(38405),
    u = n(386239);
let _ = /^[a-z0-9_+\-.#]+$/,
    E = new (s())({ max: 256 }),
    A = new (s())({ max: 256 }),
    h = {
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
        jsonc: "json",
        "python-repl": "python",
        pycon: "python",
        "node-repl": "javascript",
        "clojure-repl": "clojure",
        "erlang-repl": "erlang",
        "julia-repl": "julia",
        jldoctest: "julia",
    },
    I = new Set([...Object.keys(r.pb), "ansi"]),
    f = new Set([...I, ...Object.keys(h)]);
function p(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!_.test(t)) return;
    if (I.has(t)) return t;
    let n = h[t];
    if (null != n && I.has(n)) return n;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = i.use((0, u.W9)(e ?? "", n)),
        a = i.useMemo(() => o()(`${e}\0${t}\0${r?.backend ?? ""}`), [e, t, r]),
        s = i.useCallback(
            function () {
                let n,
                    i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!i) {
                    let e = E.get(a);
                    if (null != e) return e;
                }
                if (
                    !(function (e) {
                        for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                        return !0;
                    })(t) ||
                    null == r ||
                    A.has(a)
                )
                    return;
                let s = t.endsWith("\n")
                    ? t
                    : `${t}
`;
                try {
                    n = r.highlightToHtml(s);
                } catch (t) {
                    A.set(a, !0),
                        c.A.captureException(t instanceof Error ? t : Error(String(t)), {
                            tags: { app_context: "syntax_highlighting" },
                            extra: { lang: e },
                        });
                    return;
                }
                return E.set(a, n), n;
            },
            [a, t, r, e],
        ),
        [l, _] = i.useState(s);
    return (
        i.useEffect(() => {
            _(s());
        }, [s]),
        i.useEffect(() => {
            let e = l?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let i of e)
                (0, u.W9)(i, n).then(() => {
                    t ||
                        _((e) => {
                            let t = s(!0);
                            return null == t ||
                                (null != e && e.html === t.html && (0, d.v)(e.missingInjections, t.missingInjections))
                                ? e
                                : t;
                        });
                });
            return () => {
                t = !0;
            };
        }, [a, s, l?.missingInjections, n]),
        l?.html ?? null
    );
}
let m = null,
    g = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function S(e) {
    m ??= n.e("1180").then(n.t.bind(n, 628759, 23));
    let { default: t } = i.use(m),
        [r] = i.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: g }));
    return i.useMemo(() => r.toHtml(e), [r, e]);
}
