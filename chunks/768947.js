l.d(t, { No: () => b, OY: () => y, ph: () => w, py: () => d });
var r = l(582128),
    s = l(875538),
    n = l(635377),
    a = l.n(n),
    c = l(181370),
    o = l.n(c),
    p = l(52133),
    i = l(38405),
    h = l(938855);
let m = /^[a-z0-9_+\-.#]+$/,
    u = new (a())({ max: 256 }),
    f = new (a())({ max: 256 }),
    j = {
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
    g = new Set([...Object.keys(s.pb), "ansi"]),
    b = new Set([...g, ...Object.keys(j)]);
function d(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!m.test(t)) return;
    if (g.has(t)) return t;
    let l = j[t];
    if (null != l && g.has(l)) return l;
}
function y(e, t) {
    let l = r.use((0, h.W9)(e ?? "")),
        s = r.useMemo(() => o()(`${e}\0${t}`), [e, t]),
        n = r.useCallback(
            function () {
                let r,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!n) {
                    let e = u.get(s);
                    if (null != e) return e;
                }
                if (
                    !(function (e) {
                        for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                        return !0;
                    })(t) ||
                    null == l ||
                    f.has(s)
                )
                    return;
                let a = t.endsWith("\n")
                    ? t
                    : `${t}
`;
                try {
                    r = l.highlightToHtml(a);
                } catch (t) {
                    f.set(s, !0),
                        i.A.captureException(t instanceof Error ? t : Error(String(t)), {
                            tags: { app_context: "syntax_highlighting" },
                            extra: { lang: e },
                        });
                    return;
                }
                return u.set(s, r), r;
            },
            [s, t, l, e],
        ),
        [a, c] = r.useState(n);
    return (
        r.useEffect(() => {
            c(n());
        }, [n]),
        r.useEffect(() => {
            let e = a?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let l of e)
                (0, h.W9)(l).then(() => {
                    t ||
                        c((e) => {
                            let t = n(!0);
                            return null == t ||
                                (null != e && e.html === t.html && (0, p.v)(e.missingInjections, t.missingInjections))
                                ? e
                                : t;
                        });
                });
            return () => {
                t = !0;
            };
        }, [s, n, a?.missingInjections]),
        a?.html ?? null
    );
}
let x = null,
    v = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function w(e) {
    x ??= l.e("401180").then(l.t.bind(l, 628759, 23));
    let { default: t } = r.use(x),
        [s] = r.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: v }));
    return r.useMemo(() => s.toHtml(e), [s, e]);
}
