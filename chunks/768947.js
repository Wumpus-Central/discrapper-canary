s.d(l, { OY: () => b, ph: () => x, py: () => d });
var t = s(64700),
    r = s(635377),
    n = s.n(r),
    a = s(181370),
    c = s.n(a),
    p = s(909396);
let o = /^[a-z0-9_+\-.#]+$/,
    i = Promise.resolve(null),
    h = new Map(),
    m = new (n())({ max: 256 }),
    u = {
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
    j = new Set((0, p.hK)());
function d(e) {
    if (null == e) return;
    let l = e.toLowerCase();
    if (!o.test(l)) return;
    if (j.has(l)) return l;
    let s = (0, p.Op)(l);
    if (j.has(s)) return s;
    let t = u[l];
    if (null != t && j.has(t)) return t;
}
function b(e, l) {
    let s = t.use(
            (function (e) {
                if (null == e) return i;
                let l = h.get(e);
                return null == l && ((l = (0, p.oS)(e)), h.set(e, l)), l;
            })(e),
        ),
        r = t.useMemo(() => {
            if (
                !(function (e) {
                    for (let l of e.split("\n")) if (l.length > 1e3) return !1;
                    return !0;
                })(l) ||
                null == s
            )
                return null;
            let t = c()(`${e}\0${l}`),
                r = m.get(t);
            if (null != r) return r;
            let n = l.endsWith("\n") ? l : l + "\n",
                a = s.highlight(n);
            return "string" == typeof a && m.set(t, a), a;
        }, [s, l, e]);
    if ("string" == typeof r || null == r) return r;
    let n = t.use(r);
    if (null != n) {
        let s = c()(`${e}\0${l}`);
        m.set(s, n);
    }
    return n;
}
j.add("ansi");
let f = null;
function x(e) {
    f ??= s.e("1180").then(s.t.bind(s, 628759, 23));
    let { default: l } = t.use(f),
        [r] = t.useState(() => new l({ escapeXML: !0 }));
    return t.useMemo(() => r.toHtml(e), [r, e]);
}
