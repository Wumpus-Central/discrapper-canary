l.d(t, { No: () => b, OY: () => y, ph: () => w, py: () => j });
var r = l(582128),
    n = l(875538),
    s = l(635377),
    a = l.n(s),
    c = l(181370),
    i = l.n(c),
    o = l(52133),
    h = l(38405),
    u = l(386239);
let p = /^[a-z0-9_+\-.#]+$/,
    m = new (a())({ max: 256 }),
    f = new (a())({ max: 256 }),
    d = {
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
    g = new Set([...Object.keys(n.pb), "ansi"]),
    b = new Set([...g, ...Object.keys(d)]);
function j(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!p.test(t)) return;
    if (g.has(t)) return t;
    let l = d[t];
    if (null != l && g.has(l)) return l;
}
function y(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = r.use((0, u.W9)(e ?? "", l)),
        s = r.useMemo(() => i()(`${e}\0${t}\0${n?.backend ?? ""}`), [e, t, n]),
        a = r.useCallback(
            function () {
                let l,
                    r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!r) {
                    let e = m.get(s);
                    if (null != e) return e;
                }
                if (
                    !(function (e) {
                        for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                        return !0;
                    })(t) ||
                    null == n ||
                    f.has(s)
                )
                    return;
                let a = t.endsWith("\n")
                    ? t
                    : `${t}
`;
                try {
                    l = n.highlightToHtml(a);
                } catch (t) {
                    f.set(s, !0),
                        h.A.captureException(t instanceof Error ? t : Error(String(t)), {
                            tags: { app_context: "syntax_highlighting" },
                            extra: { lang: e },
                        });
                    return;
                }
                return m.set(s, l), l;
            },
            [s, t, n, e],
        ),
        [c, p] = r.useState(a);
    return (
        r.useEffect(() => {
            p(a());
        }, [a]),
        r.useEffect(() => {
            let e = c?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let r of e)
                (0, u.W9)(r, l).then(() => {
                    t ||
                        p((e) => {
                            let t = a(!0);
                            return null == t ||
                                (null != e && e.html === t.html && (0, o.v)(e.missingInjections, t.missingInjections))
                                ? e
                                : t;
                        });
                });
            return () => {
                t = !0;
            };
        }, [s, a, c?.missingInjections, l]),
        c?.html ?? null
    );
}
let x = null,
    v = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function w(e) {
    x ??= l.e("401180").then(l.t.bind(l, 628759, 23));
    let { default: t } = r.use(x),
        [n] = r.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: v }));
    return r.useMemo(() => n.toHtml(e), [n, e]);
}
