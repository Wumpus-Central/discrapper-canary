s.d(l, { OY: () => h, ph: () => m, py: () => a });
var t = s(64700),
    r = s(909396);
let n = /^[a-z0-9_+\-.#]+$/,
    c = Promise.resolve(null),
    u = new Map(),
    p = {
        h: "cpp",
        hpp: "cpp",
        cc: "cpp",
        cxx: "cpp",
        "c++": "cpp",
        hxx: "cpp",
        coffee: "javascript",
        node: "javascript",
        mjs: "javascript",
        cjs: "javascript",
        jsx: "javascript",
        gql: "graphql",
        hbs: "html",
        htm: "html",
        xhtml: "html",
        xsl: "xml",
        rss: "xml",
        atom: "xml",
        xsd: "xml",
        plist: "xml",
        svg: "xml",
        mathml: "xml",
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
        tf: "hcl",
        tfvars: "hcl",
        mk: "bash",
        make: "bash",
        makefile: "bash",
        ex: "elixir",
        exs: "elixir",
        erl: "erlang",
        hs: "haskell",
        fs: "fsharp",
        ml: "ocaml",
        mli: "ocaml",
        re: "rescript",
        scm: "scheme",
        rkt: "scheme",
        cr: "ruby",
        crystal: "ruby",
        v: "verilog",
        sv: "verilog",
    },
    i = new Set((0, r.hK)());
function a(e) {
    if (null == e) return;
    let l = e.toLowerCase();
    if (!n.test(l)) return;
    if (i.has(l)) return l;
    let s = (0, r.Op)(l);
    if (i.has(s)) return s;
    let t = p[l];
    if (null != t && i.has(t)) return t;
}
function h(e, l) {
    let s = t.use(
            (function (e) {
                if (null == e) return c;
                let l = u.get(e);
                return null == l && ((l = (0, r.oS)(e)), u.set(e, l)), l;
            })(e),
        ),
        n = t.useMemo(
            () =>
                (function (e) {
                    for (let l of e.split("\n")) if (l.length > 1e3) return !1;
                    return !0;
                })(l) && null != s
                    ? s.highlight(l)
                    : null,
            [s, l],
        );
    return "string" == typeof n || null == n ? n : t.use(n);
}
i.add("ansi");
let o = null;
function m(e) {
    o ??= s.e("1180").then(s.t.bind(s, 628759, 23));
    let { default: l } = t.use(o),
        [r] = t.useState(() => new l({ escapeXML: !0 }));
    return t.useMemo(() => r.toHtml(e), [r, e]);
}
