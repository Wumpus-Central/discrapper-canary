l.d(t, { No: () => v, OY: () => x, ph: () => w, py: () => j });
var r = l(582128),
    n = l(915639),
    s = l(635377),
    i = l.n(s),
    a = l(181370),
    o = l.n(a),
    c = l(52133),
    d = l(38405),
    u = l(938855);
let h = /^[a-z0-9_+\-.#]+$/,
    m = new (i())({ max: 256 }),
    p = new (i())({ max: 256 }),
    g = {
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
        mts: "typescript",
        cts: "typescript",
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
    f = new Set([...Object.keys(n.pb), "ansi"]),
    v = new Set([...f, ...Object.keys(g)]);
function j(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!h.test(t)) return;
    if (f.has(t)) return t;
    let l = g[t];
    if (null != l && f.has(l)) return l;
}
function x(e, t) {
    let l = r.use((0, u.W9)(e ?? "")),
        n = r.useMemo(() => o()(`${e}\0${t}`), [e, t]),
        s = r.useCallback(
            function () {
                let r,
                    s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!s) {
                    let e = m.get(n);
                    if (null != e) return e;
                }
                if (
                    !(function (e) {
                        for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                        return !0;
                    })(t) ||
                    null == l ||
                    p.has(n)
                )
                    return;
                let i = t.endsWith("\n")
                    ? t
                    : `${t}
`;
                try {
                    r = l.highlightToHtml(i);
                } catch (t) {
                    (p.set(n, !0),
                        d.A.captureException(t instanceof Error ? t : Error(String(t)), {
                            tags: { app_context: "syntax_highlighting" },
                            extra: { lang: e },
                        }));
                    return;
                }
                return (m.set(n, r), r);
            },
            [n, t, l, e],
        ),
        [i, a] = r.useState(s);
    return (
        r.useEffect(() => {
            a(s());
        }, [s]),
        r.useEffect(() => {
            let e = i?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let l of e)
                (0, u.W9)(l).then(() => {
                    t ||
                        a((e) => {
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
        }, [n, s, i?.missingInjections]),
        i?.html ?? null
    );
}
let b = null,
    C = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function w(e) {
    b ??= l.e("401180").then(l.t.bind(l, 628759, 23));
    let { default: t } = r.use(b),
        [n] = r.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: C }));
    return r.useMemo(() => n.toHtml(e), [n, e]);
}
