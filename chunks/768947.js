(l.d(t, { No: () => b, OT: () => w, OY: () => y, py: () => x }), l(321073));
var n = l(582128),
    r = l(915639),
    s = l(626551),
    o = l(635377),
    a = l.n(o),
    c = l(181370),
    i = l.n(c),
    h = l(52133),
    u = l(38405),
    p = l(938855);
let m = /^[a-z0-9_+\-.#]+$/,
    d = new (a())({ max: 256 }),
    g = new (a())({ max: 256 }),
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
    f = new Set([...Object.keys(r.pb), "ansi"]),
    b = new Set([...f, ...Object.keys(j)]);
function x(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!m.test(t)) return;
    if (f.has(t)) return t;
    let l = j[t];
    if (null != l && f.has(l)) return l;
}
function y(e, t) {
    let l = n.use((0, p.W9)(e ?? "")),
        r = n.useMemo(() => i()(`${e}\0${t}`), [e, t]),
        s = n.useCallback(
            function () {
                let n,
                    s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!s) {
                    let e = d.get(r);
                    if (null != e) return e;
                }
                if (
                    !(
                        !(function (e) {
                            for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                            return !0;
                        })(t) ||
                        null == l ||
                        g.has(r)
                    )
                ) {
                    try {
                        n = l.highlightToHtml(t);
                    } catch (t) {
                        (g.set(r, !0),
                            u.A.captureException(t instanceof Error ? t : Error(String(t)), {
                                tags: { app_context: "syntax_highlighting" },
                                extra: { lang: e },
                            }));
                        return;
                    }
                    return (d.set(r, n), n);
                }
            },
            [r, t, l, e],
        ),
        [o, a] = n.useState(s);
    return (
        n.useEffect(() => {
            a(s());
        }, [s]),
        n.useEffect(() => {
            let e = o?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let l of e)
                (0, p.W9)(l).then(() => {
                    t ||
                        a((e) => {
                            let t = s(!0);
                            return null == t ||
                                (null != e && e.html === t.html && (0, h.v)(e.missingInjections, t.missingInjections))
                                ? e
                                : t;
                        });
                });
            return () => {
                t = !0;
            };
        }, [r, s, o?.missingInjections]),
        o?.html ?? null
    );
}
let v = Object.fromEntries(s.W$.map((e, t) => [e, `var(--custom-ansi-color-${t})`])),
    k = (0, s.rQ)(v);
function w(e) {
    let t = {};
    (null != e.foreground && (t.color = k.value(e.foreground)),
        null != e.background && (t.backgroundColor = k.value(e.background)),
        e.decorations.has("bold") && (t.fontWeight = "bold"),
        e.decorations.has("italic") && (t.fontStyle = "italic"));
    let l = [];
    return (
        e.decorations.has("underline") && l.push("underline"),
        e.decorations.has("strikethrough") && l.push("line-through"),
        e.decorations.has("overline") && l.push("overline"),
        l.length > 0 && (t.textDecorationLine = l.join(" ")),
        Object.keys(t).length > 0 ? t : void 0
    );
}
