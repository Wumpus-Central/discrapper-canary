l.d(t, { No: () => g, OY: () => x, ph: () => w, py: () => b });
var n = l(582128),
    s = l(915639),
    r = l(635377),
    a = l.n(r),
    c = l(181370),
    o = l.n(c),
    i = l(52133),
    h = l(38405),
    u = l(938855);
let p = /^[a-z0-9_+\-.#]+$/,
    m = new (a())({ max: 256 }),
    d = new (a())({ max: 256 }),
    f = {
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
    j = new Set([...Object.keys(s.pb), "ansi"]),
    g = new Set([...j, ...Object.keys(f)]);
function b(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!p.test(t)) return;
    if (j.has(t)) return t;
    let l = f[t];
    if (null != l && j.has(l)) return l;
}
function x(e, t) {
    let l = n.use((0, u.W9)(e ?? "")),
        s = n.useMemo(() => o()(`${e}\0${t}`), [e, t]),
        r = n.useCallback(
            function () {
                let n,
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
                    null == l ||
                    d.has(s)
                )
                    return;
                let a = t.endsWith("\n")
                    ? t
                    : `${t}
`;
                try {
                    n = l.highlightToHtml(a);
                } catch (t) {
                    (d.set(s, !0),
                        h.A.captureException(t instanceof Error ? t : Error(String(t)), {
                            tags: { app_context: "syntax_highlighting" },
                            extra: { lang: e },
                        }));
                    return;
                }
                return (m.set(s, n), n);
            },
            [s, t, l, e],
        ),
        [a, c] = n.useState(r);
    return (
        n.useEffect(() => {
            c(r());
        }, [r]),
        n.useEffect(() => {
            let e = a?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let l of e)
                (0, u.W9)(l).then(() => {
                    t ||
                        c((e) => {
                            let t = r(!0);
                            return null == t ||
                                (null != e && e.html === t.html && (0, i.v)(e.missingInjections, t.missingInjections))
                                ? e
                                : t;
                        });
                });
            return () => {
                t = !0;
            };
        }, [s, r, a?.missingInjections]),
        a?.html ?? null
    );
}
let y = null,
    v = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function w(e) {
    y ??= l.e("401180").then(l.t.bind(l, 628759, 23));
    let { default: t } = n.use(y),
        [s] = n.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: v }));
    return n.useMemo(() => s.toHtml(e), [s, e]);
}
