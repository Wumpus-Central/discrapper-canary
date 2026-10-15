(l.r(t), l.d(t, { default: () => c }));
var n = l(625128),
    a = l(435558),
    r = l.n(a),
    u = l(319888);
n.A.registerLanguage("ansi", u.Ay);
let g = /(<script\/?\\?>)|(html\\?`)/g,
    i = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    s = /^[a-z0-9_+\-.#]+$/,
    h = n.A.listLanguages(),
    o = new Map();
for (let e of h) {
    e = e.toLowerCase();
    let t = n.A.getLanguage(e);
    if (null == t) continue;
    let l = t.aliases;
    if ((o.set(e, e), null != l)) for (let t of l) o.set(t.toLowerCase(), e);
}
for (let [e, t] of o) if (null == e.match(s)) throw Error(`Language name does not match regex: ${e}`);
function f(e) {
    return o.get(e.toLowerCase());
}
let c = {
        highlight(e, t, l) {
            if (
                !(function (e, t) {
                    if (e.indexOf(p) >= 0) return !1;
                    let l = 0;
                    for (let t of e.split("\n")) {
                        if (t.length > 1e3) return !1;
                        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (l = 0);
                        let e = t.match(/[/]/g);
                        if (null != e && (l += e.length) > 30) return !1;
                    }
                    let n = f(t);
                    if (null != n && i.has(n)) {
                        let t = e.replace(/\s*/g, "").match(g);
                        if ((t?.length ?? 0) > 10) return !1;
                    }
                    return !0;
                })(t, e)
            )
                return null;
            Date.now();
            let a = n.A.highlight(t, { ignoreIllegals: l, language: e });
            Date.now();
            let r = a.value.match(/</g)?.length;
            return null != r && r > 2e3 ? null : a;
        },
        hasLanguage: (e) => null != n.A.getLanguage(e),
        isKnownLanguage: (e) => o.has(e.toLowerCase()),
        resolveLanguageName: f,
    },
    p = r().repeat("/", 15);
