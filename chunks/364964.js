n.r(t), n.d(t, { default: () => _ }), n(388685), n(35282), n(415506), n(704826);
var r = n(147519),
    i = n(392711),
    o = n.n(i),
    a = n(462176);
r.Z.registerLanguage('ansi', a.Z);
let s = /(<script\/?\\?>)|(html\\?`)/g,
    l = new Set(['html', 'xml', 'javascript', 'typescript']),
    c = /^[a-z0-9_+\-.#]+$/,
    u = r.Z.listLanguages(),
    d = new Map();
for (let e of u) {
    e = e.toLowerCase();
    let t = r.Z.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((d.set(e, e), null != n)) for (let t of n) d.set(t.toLowerCase(), e);
}
for (let [e, t] of d) if (null == e.match(c)) throw Error('Language name does not match regex: '.concat(e));
function f(e) {
    return d.get(e.toLowerCase());
}
let _ = {
        highlight(e, t, n) {
            if (!h(t, e)) return null;
            Date.now();
            let i = r.Z.highlight(t, {
                ignoreIllegals: n,
                language: e
            });
            return Date.now(), i;
        },
        hasLanguage: (e) => null != r.Z.getLanguage(e),
        isKnownLanguage: (e) => d.has(e.toLowerCase()),
        resolveLanguageName: f
    },
    p = o().repeat('/', 15);
function h(e, t) {
    if (e.indexOf(p) >= 0) return !1;
    let n = 0;
    for (let t of e.split('\n')) {
        if (t.length > 1000) return !1;
        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
        let e = t.match(/[/]/g);
        if (null != e && (n += e.length) > 30) return !1;
    }
    let r = f(t);
    if (null != r && l.has(r)) {
        var i;
        let t = e.replace(/\s*/g, '').match(s);
        if ((null != (i = null == t ? void 0 : t.length) ? i : 0) > 10) return !1;
    }
    return !0;
}
