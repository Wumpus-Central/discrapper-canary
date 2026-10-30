(s.d(t, { No: () => f, OT: () => w, OY: () => y, py: () => x }), s(321073));
var l = s(582128),
    r = s(126919),
    n = s(626551),
    o = s(635377),
    a = s.n(o),
    c = s(181370),
    i = s.n(c),
    p = s(52133),
    h = s(38405),
    m = s(938855);
let u = /^[a-z0-9_+\-.#]+$/,
    j = new (a())({ max: 256 }),
    d = new (a())({ max: 256 }),
    b = {
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
    g = new Set([...Object.keys(r.pb), "ansi"]),
    f = new Set([...g, ...Object.keys(b)]);
function x(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!u.test(t)) return;
    if (g.has(t)) return t;
    let s = b[t];
    if (null != s && g.has(s)) return s;
}
function y(e, t) {
    let s = l.use((0, m.W9)(e ?? "")),
        r = l.useMemo(() => i()(`${e}\0${t}`), [e, t]),
        n = l.useCallback(
            function () {
                let l,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!n) {
                    let e = j.get(r);
                    if (null != e) return e;
                }
                if (
                    !(
                        !(function (e) {
                            for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                            return !0;
                        })(t) ||
                        null == s ||
                        d.has(r)
                    )
                ) {
                    try {
                        l = s.highlightToHtml(t);
                    } catch (t) {
                        (d.set(r, !0),
                            h.A.captureException(t instanceof Error ? t : Error(String(t)), {
                                tags: { app_context: "syntax_highlighting" },
                                extra: { lang: e },
                            }));
                        return;
                    }
                    return (j.set(r, l), l);
                }
            },
            [r, t, s, e],
        ),
        [o, a] = l.useState(n);
    return (
        l.useEffect(() => {
            a(n());
        }, [n]),
        l.useEffect(() => {
            let e = o?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let s of e)
                (0, m.W9)(s).then(() => {
                    t ||
                        a((e) => {
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
        }, [r, n, o?.missingInjections]),
        o?.html ?? null
    );
}
let v = Object.fromEntries(n.W$.map((e, t) => [e, `var(--custom-ansi-color-${t})`])),
    k = (0, n.rQ)(v);
function w(e) {
    let t = {};
    (null != e.foreground && (t.color = k.value(e.foreground)),
        null != e.background && (t.backgroundColor = k.value(e.background)),
        e.decorations.has("bold") && (t.fontWeight = "bold"),
        e.decorations.has("italic") && (t.fontStyle = "italic"));
    let s = [];
    return (
        e.decorations.has("underline") && s.push("underline"),
        e.decorations.has("strikethrough") && s.push("line-through"),
        e.decorations.has("overline") && s.push("overline"),
        s.length > 0 && (t.textDecorationLine = s.join(" ")),
        Object.keys(t).length > 0 ? t : void 0
    );
}
