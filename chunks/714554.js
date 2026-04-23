s.d(l, { SyntaxHighlight: () => f });
var t = s(627968),
    r = s(64700),
    n = s(635377),
    c = s.n(n),
    a = s(181370),
    o = s.n(a),
    p = s(819400);
let i = /^[a-z0-9_+\-.#]+$/,
    h = Promise.resolve(null),
    m = new Map(),
    u = new (c())({ max: 256 }),
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
        coffee: "javascript",
        coffeescript: "javascript",
        livescript: "javascript",
        node: "javascript",
        mjs: "javascript",
        cjs: "javascript",
        jsx: "javascript",
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
        console: "bash",
        shellsession: "bash",
        ex: "elixir",
        exs: "elixir",
        erl: "erlang",
        hs: "haskell",
        fs: "fsharp",
        ml: "ocaml",
        mli: "ocaml",
        sml: "ocaml",
        re: "rescript",
        reasonml: "rescript",
        scm: "scheme",
        rkt: "scheme",
        clj: "clojure",
        edn: "clojure",
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
    b = new Set((0, p.hK)());
b.add("ansi");
let d = null;
function f(e) {
    let { code: l, lang: s, ...n } = e,
        c = r.useMemo(
            () =>
                (function (e) {
                    if (null == e) return;
                    let l = e.toLowerCase();
                    if (!i.test(l)) return;
                    if (b.has(l)) return l;
                    let s = (0, p.Op)(l);
                    if (b.has(s)) return s;
                    let t = j[l];
                    if (null != t && b.has(t)) return t;
                })(s),
            [s],
        );
    return null == c
        ? (0, t.jsx)(x, { code: l, ...n })
        : (0, t.jsx)(r.Suspense, {
              fallback: (0, t.jsx)(x, { code: l, ...n }),
              children: "ansi" === c ? (0, t.jsx)(g, { code: l, ...n }) : (0, t.jsx)(v, { code: l, lang: c, ...n }),
          });
}
function x(e) {
    let { code: l, ...s } = e;
    return (0, t.jsx)("code", { ...s, children: l });
}
function v(e) {
    let { code: l, lang: s, ...n } = e,
        c = (function (e, l) {
            let s = r.use(
                    (function (e) {
                        if (null == e) return h;
                        let l = m.get(e);
                        return null == l && ((l = (0, p.oS)(e)), m.set(e, l)), l;
                    })(e),
                ),
                t = r.useMemo(() => {
                    if (
                        !(function (e) {
                            for (let l of e.split("\n")) if (l.length > 1e3) return !1;
                            return !0;
                        })(l) ||
                        null == s
                    )
                        return null;
                    let t = o()(`${e}\0${l}`),
                        r = u.get(t);
                    if (null != r) return r;
                    let n = l.endsWith("\n") ? l : l + "\n",
                        c = s.highlight(n);
                    return "string" == typeof c && u.set(t, c), c;
                }, [s, l, e]);
            if ("string" == typeof t || null == t) return t;
            let n = r.use(t);
            if (null != n) {
                let s = o()(`${e}\0${l}`);
                u.set(s, n);
            }
            return n;
        })(s, l);
    return null == c ? (0, t.jsx)(x, { code: l, ...n }) : (0, t.jsx)(k, { html: c, ...n });
}
function g(e) {
    let { code: l, ...n } = e,
        c = (function (e) {
            d ??= s.e("1180").then(s.t.bind(s, 628759, 23));
            let { default: l } = r.use(d),
                [t] = r.useState(() => new l({ escapeXML: !0 }));
            return r.useMemo(() => t.toHtml(e), [t, e]);
        })(l);
    return (0, t.jsx)(k, { html: c, ...n });
}
function k(e) {
    let { html: l, ...s } = e;
    return (0, t.jsx)("code", { ...s, dangerouslySetInnerHTML: { __html: l } });
}
