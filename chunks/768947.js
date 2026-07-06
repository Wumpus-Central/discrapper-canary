"use strict";
let i;
n.d(t, { No: () => T, OY: () => N, ph: () => O, py: () => S });
var r = n(64700),
    s = n(534979),
    a = n(635377),
    o = n.n(a),
    l = n(181370),
    u = n.n(l),
    c = n(52133),
    d = n(38405);
async function _(e) {
    let t = s.pb[e];
    return (await (null == i && (i = (0, s.A)()), i)).loadGrammar(t);
}
let h = /^[a-z0-9_+\-.#]+$/,
    f = Promise.resolve(null),
    E = new Map(),
    p = new (o())({ max: 256 }),
    m = new (o())({ max: 256 });
function g(e) {
    if (null == e || !(e in s.pb)) return f;
    let t = E.get(e);
    return null == t && ((t = _(e)), E.set(e, t)), t;
}
let A = {
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
    I = new Set([...Object.keys(s.pb), "ansi"]),
    T = new Set([...I, ...Object.keys(A)]);
function S(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!h.test(t)) return;
    if (I.has(t)) return t;
    let n = A[t];
    if (null != n && I.has(n)) return n;
}
function N(e, t) {
    let n = r.use(g(e)),
        i = r.useMemo(() => u()(`${e}\0${t}`), [e, t]),
        s = r.useCallback(
            function () {
                let r,
                    s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!s) {
                    let e = p.get(i);
                    if (null != e) return e;
                }
                if (
                    !(
                        !(function (e) {
                            for (let t of e.split("\n")) if (t.length > 1e3) return !1;
                            return !0;
                        })(t) ||
                        null == n ||
                        m.has(i)
                    )
                ) {
                    try {
                        r = (function (e, t) {
                            let n = e.endsWith("\n")
                                    ? e
                                    : `${e}
`,
                                i = t.createSession();
                            try {
                                return i.setText(n), i.highlightToHtml();
                            } finally {
                                i.free();
                            }
                        })(t, n);
                    } catch (t) {
                        m.set(i, !0),
                            d.A.captureException(t instanceof Error ? t : Error(String(t)), {
                                tags: { app_context: "syntax_highlighting" },
                                extra: { lang: e },
                            });
                        return;
                    }
                    if (null != r) return p.set(i, r), r;
                }
            },
            [i, t, n, e],
        ),
        [a, o] = r.useState(s);
    return (
        r.useEffect(() => {
            o(s());
        }, [s]),
        r.useEffect(() => {
            let e = a?.missingInjections;
            if (null == e || 0 === e.length) return;
            let t = !1;
            for (let n of e)
                g(n).then(() => {
                    t ||
                        o((e) => {
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
        }, [i, s, a?.missingInjections]),
        a?.html ?? null
    );
}
let C = null,
    y = Object.fromEntries(Array.from({ length: 16 }, (e, t) => [t, `var(--custom-ansi-color-${t})`]));
function O(e) {
    C ??= n.e("1180").then(n.t.bind(n, 628759, 23));
    let { default: t } = r.use(C),
        [i] = r.useState(() => new t({ escapeXML: !0, fg: "var(--text-default)", bg: "transparent", colors: y }));
    return r.useMemo(() => i.toHtml(e), [i, e]);
}
