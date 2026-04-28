let t;
l.d(s, { SyntaxHighlight: () => y });
var r = l(627968),
    n = l(64700),
    c = l(27003),
    a = l(635377),
    o = l.n(a),
    i = l(181370),
    p = l.n(i),
    h = l(52133);
async function m(e) {
    let s = c.pb[e];
    return (await (null == t && (t = (0, c.A)()), t)).loadGrammar(s);
}
let u = /^[a-z0-9_+\-.#]+$/,
    j = Promise.resolve(null),
    b = new Map(),
    f = new (o())({ max: 256 });
function d(e) {
    if (null == e || !(e in c.pb)) return j;
    let s = b.get(e);
    return null == s && ((s = m(e)), b.set(e, s)), s;
}
let x = {
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
    g = new Set(Object.keys(c.pb));
g.add("ansi");
let v = null;
function y(e) {
    let { code: s, lang: l, ...t } = e,
        c = n.useMemo(
            () =>
                (function (e) {
                    if (null == e) return;
                    let s = e.toLowerCase();
                    if (!u.test(s)) return;
                    if (g.has(s)) return s;
                    let l = x[s];
                    if (null != l && g.has(l)) return l;
                })(l),
            [l],
        );
    return null == c
        ? (0, r.jsx)(k, { code: s, ...t })
        : (0, r.jsx)(n.Suspense, {
              fallback: (0, r.jsx)(k, { code: s, ...t }),
              children: "ansi" === c ? (0, r.jsx)(q, { code: s, ...t }) : (0, r.jsx)(w, { code: s, lang: c, ...t }),
          });
}
function k(e) {
    let { code: s, ...l } = e;
    return (0, r.jsx)("code", { ...l, children: s });
}
function w(e) {
    let { code: s, lang: l, ...t } = e,
        c = (function (e, s) {
            let l = n.use(d(e)),
                t = n.useMemo(() => p()(`${e}\0${s}`), [e, s]),
                r = n.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!e) {
                            let e = f.get(t);
                            if (null != e) return e;
                        }
                        if (
                            !(function (e) {
                                for (let s of e.split("\n")) if (s.length > 1e3) return !1;
                                return !0;
                            })(s) ||
                            null == l
                        )
                            return;
                        let r = (function (e, s) {
                            let l = e.endsWith("\n")
                                    ? e
                                    : `${e}
`,
                                t = s.createSession();
                            try {
                                return t.setText(l), t.highlightToHtml();
                            } finally {
                                t.free();
                            }
                        })(s, l);
                        if (null != r) return f.set(t, r), r;
                    },
                    [t, s, l],
                ),
                [c, a] = n.useState(r);
            return (
                n.useEffect(() => {
                    a(r());
                }, [r]),
                n.useEffect(() => {
                    let e = c?.missingInjections;
                    if (null == e || 0 === e.length) return;
                    let s = !1;
                    for (let l of e)
                        d(l).then(() => {
                            s ||
                                a((e) => {
                                    let s = r(!0);
                                    return null == s ||
                                        (null != e &&
                                            e.html === s.html &&
                                            (0, h.v)(e.missingInjections, s.missingInjections))
                                        ? e
                                        : s;
                                });
                        });
                    return () => {
                        s = !0;
                    };
                }, [t, r, c?.missingInjections]),
                c?.html ?? null
            );
        })(l, s);
    return null == c ? (0, r.jsx)(k, { code: s, ...t }) : (0, r.jsx)(S, { html: c, ...t });
}
function q(e) {
    let { code: s, ...t } = e,
        c = (function (e) {
            v ??= l.e("1180").then(l.t.bind(l, 628759, 23));
            let { default: s } = n.use(v),
                [t] = n.useState(() => new s({ escapeXML: !0 }));
            return n.useMemo(() => t.toHtml(e), [t, e]);
        })(s);
    return (0, r.jsx)(S, { html: c, ...t });
}
function S(e) {
    let { html: s, ...l } = e;
    return (0, r.jsx)("code", { ...l, dangerouslySetInnerHTML: { __html: s } });
}
