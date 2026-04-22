"use strict";
n.r(t), n.d(t, { default: () => m });
var i = n(79719),
    l = n(735438),
    s = n.n(l),
    r = n(319888);
i.A.registerLanguage("ansi", r.A);
let a = /(<script\/?\\?>)|(html\\?`)/g,
    o = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    c = /^[a-z0-9_+\-.#]+$/,
    u = i.A.listLanguages(),
    d = new Map();
for (let e of u) {
    e = e.toLowerCase();
    let t = i.A.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((d.set(e, e), null != n)) for (let t of n) d.set(t.toLowerCase(), e);
}
for (let [e, t] of d) if (null == e.match(c)) throw Error(`Language name does not match regex: ${e}`);
function h(e) {
    return d.get(e.toLowerCase());
}
let m = {
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
                    let i = h(t);
                    if (null != i && o.has(i)) {
                        let t = e.replace(/\s*/g, "").match(a);
                        if ((t?.length ?? 0) > 10) return !1;
                    }
                    return !0;
                })(t, e)
            )
                return null;
            Date.now();
            let l = i.A.highlight(t, { ignoreIllegals: n, language: e });
            Date.now();
            let s = l.value.match(/</g)?.length;
            return null != s && s > 2e3 ? null : l;
        },
        hasLanguage: (e) => null != i.A.getLanguage(e),
        isKnownLanguage: (e) => d.has(e.toLowerCase()),
        resolveLanguageName: h,
    },
    p = s().repeat("/", 15);
