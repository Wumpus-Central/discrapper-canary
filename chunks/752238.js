n.r(t),
    n.d(t, {
        default: () => p,
    }),
    n(896048),
    n(747238),
    n(65821),
    n(812715);
var r = n(28728),
    i = n(735438),
    a = n.n(i),
    s = n(319888);
r.A.registerLanguage("ansi", s.A);
let o = /(<script\/?\\?>)|(html\\?`)/g,
    l = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    c = /^[a-z0-9_+\-.#]+$/,
    u = r.A.listLanguages(),
    d = new Map();
for (let e of u) {
    e = e.toLowerCase();
    let t = r.A.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((d.set(e, e), null != n)) for (let t of n) d.set(t.toLowerCase(), e);
}
for (let [e, t] of d) if (null == e.match(c)) throw Error("Language name does not match regex: ".concat(e));

function f(e) {
    return d.get(e.toLowerCase());
}
let p = {
        highlight(e, t, n) {
            if (!h(t, e)) return null;
            Date.now();
            let i = r.A.highlight(t, {
                ignoreIllegals: n,
                language: e,
            });
            return Date.now(), i;
        },
        hasLanguage: (e) => null != r.A.getLanguage(e),
        isKnownLanguage: (e) => d.has(e.toLowerCase()),
        resolveLanguageName: f,
    },
    _ = a().repeat("/", 15);

function h(e, t) {
    if (e.indexOf(_) >= 0) return !1;
    let n = 0;
    for (let t of e.split("\n")) {
        if (t.length > 1e3) return !1;
        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
        let e = t.match(/[/]/g);
        if (null != e && (n += e.length) > 30) return !1;
    }
    let r = f(t);
    if (null != r && l.has(r)) {
        var i;
        let t = e.replace(/\s*/g, "").match(o);
        if ((null != (i = null == t ? void 0 : t.length) ? i : 0) > 10) return !1;
    }
    return !0;
}
