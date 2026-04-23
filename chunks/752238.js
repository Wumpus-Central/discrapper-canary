"use strict";
n.r(t), n.d(t, { default: () => f });
var r = n(79719),
    i = n(735438),
    s = n.n(i),
    a = n(319888);
r.A.registerLanguage("ansi", a.A);
let o = /(<script\/?\\?>)|(html\\?`)/g,
    l = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    u = /^[a-z0-9_+\-.#]+$/,
    c = r.A.listLanguages(),
    d = new Map();
for (let e of c) {
    e = e.toLowerCase();
    let t = r.A.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((d.set(e, e), null != n)) for (let t of n) d.set(t.toLowerCase(), e);
}
for (let [e, t] of d) if (null == e.match(u)) throw Error(`Language name does not match regex: ${e}`);
function _(e) {
    return d.get(e.toLowerCase());
}
let f = {
        highlight(e, t, n) {
            if (
                !(function (e, t) {
                    if (e.indexOf(p) >= 0) return !1;
                    let n = 0;
                    for (let t of e.split("\n")) {
                        if (t.length > 1e3) return !1;
                        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
                        let e = t.match(/[/]/g);
                        if (null != e && (n += e.length) > 30) return !1;
                    }
                    let r = _(t);
                    if (null != r && l.has(r)) {
                        let t = e.replace(/\s*/g, "").match(o);
                        if ((t?.length ?? 0) > 10) return !1;
                    }
                    return !0;
                })(t, e)
            )
                return null;
            Date.now();
            let i = r.A.highlight(t, { ignoreIllegals: n, language: e });
            Date.now();
            let s = i.value.match(/</g)?.length;
            return null != s && s > 2e3 ? null : i;
        },
        hasLanguage: (e) => null != r.A.getLanguage(e),
        isKnownLanguage: (e) => d.has(e.toLowerCase()),
        resolveLanguageName: _,
    },
    p = s().repeat("/", 15);
