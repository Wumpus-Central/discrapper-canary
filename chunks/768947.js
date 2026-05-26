let t;
l.d(s, { OY: () => y, ph: () => w, py: () => g });
var r = l(64700),
    n = l(730296),
    a = l(635377),
    c = l.n(a),
    p = l(181370),
    o = l.n(p),
    i = l(52133);
async function h(e) {
    let s = n.pb[e];
    return (await (null == t && (t = (0, n.A)()), t)).loadGrammar(s);
}
let m = /^[a-z0-9_+\-.#]+$/,
    u = Promise.resolve(null),
    b = new Map(),
    f = new (c())({ max: 256 });
function j(e) {
    if (null == e || !(e in n.pb)) return u;
    let s = b.get(e);
    return null == s && ((s = h(e)), b.set(e, s)), s;
}
let d = {
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
    v = new Set(Object.keys(n.pb));
function g(e) {
    if (null == e) return;
    let s = e.toLowerCase();
    if (!m.test(s)) return;
    if (v.has(s)) return s;
    let l = d[s];
    if (null != l && v.has(l)) return l;
}
function y(e, s) {
    let l = r.use(j(e)),
        t = r.useMemo(() => o()(`${e}\0${s}`), [e, s]),
        n = r.useCallback(
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
        [a, c] = r.useState(n);
    return (
        r.useEffect(() => {
            c(n());
        }, [n]),
        r.useEffect(() => {
            let e = a?.missingInjections;
            if (null == e || 0 === e.length) return;
            let s = !1;
            for (let l of e)
                j(l).then(() => {
                    s ||
                        c((e) => {
                            let s = n(!0);
                            return null == s ||
                                (null != e && e.html === s.html && (0, i.v)(e.missingInjections, s.missingInjections))
                                ? e
                                : s;
                        });
                });
            return () => {
                s = !0;
            };
        }, [t, n, a?.missingInjections]),
        a?.html ?? null
    );
}
v.add("ansi");
let x = null,
    k = Object.fromEntries(Array.from({ length: 16 }, (e, s) => [s, `var(--custom-ansi-color-${s})`]));
function w(e) {
    x ??= l.e("1180").then(l.t.bind(l, 628759, 23));
    let { default: s } = r.use(x),
        [t] = r.useState(() => new s({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: k }));
    return r.useMemo(() => t.toHtml(e), [t, e]);
}
