t.d(l, { OY: () => d, ph: () => g, py: () => x });
var s = t(64700),
    n = t(635377),
    r = t.n(n),
    u = t(181370),
    c = t.n(u),
    i = t(909396);
let p = /^[a-z0-9_+\-.#]+$/,
    a = Promise.resolve(null),
    h = new Map(),
    o = new (r())({ max: 256 }),
    m = {
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
    f = new Set((0, i.hK)());
function x(e) {
    if (null == e) return;
    let l = e.toLowerCase();
    if (!p.test(l)) return;
    if (f.has(l)) return l;
    let t = (0, i.Op)(l);
    if (f.has(t)) return t;
    let s = m[l];
    if (null != s && f.has(s)) return s;
}
function d(e, l) {
    let t = s.use(
            (function (e) {
                if (null == e) return a;
                let l = h.get(e);
                return null == l && ((l = (0, i.oS)(e)), h.set(e, l)), l;
            })(e),
        ),
        n = s.useMemo(() => {
            if (
                !(function (e) {
                    for (let l of e.split("\n")) if (l.length > 1e3) return !1;
                    return !0;
                })(l) ||
                null == t
            )
                return null;
            let s = c()(`${e}\0${l}`),
                n = o.get(s);
            if (null != n) return n;
            let r = l.endsWith("\n") ? l : l + "\n",
                u = t.highlight(r);
            return "string" == typeof u && o.set(s, u), u;
        }, [t, l, e]);
    if ("string" == typeof n || null == n) return n;
    let r = s.use(n);
    if (null != r) {
        let t = c()(`${e}\0${l}`);
        o.set(t, r);
    }
    return r;
}
f.add("ansi");
let j = null;
function g(e) {
    j ??= t.e("1180").then(t.t.bind(t, 628759, 23));
    let { default: l } = s.use(j),
        [n] = s.useState(() => new l({ escapeXML: !0 }));
    return s.useMemo(() => n.toHtml(e), [n, e]);
}
