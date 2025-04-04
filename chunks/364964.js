n.r(t), n.d(t, { default: () => c }), n(47120), n(301563), n(757143);
var r = n(147519),
    i = n(392711),
    o = n.n(i),
    a = n(462176);
r.Z.registerLanguage('ansi', a.Z);
let s = /(<script\/?\\?>)|(html\\?`)/g,
    l = new Set(['html', 'xml']),
    c = {
        highlight(e, t, n) {
            if (!d(t, e)) return null;
            Date.now();
            let i = r.Z.highlight(t, {
                ignoreIllegals: n,
                language: e
            });
            return Date.now(), i;
        },
        hasLanguage: (e) => null != r.Z.getLanguage(e)
    },
    u = o().repeat('/', 15);
function d(e, t) {
    if (e.indexOf(u) >= 0) return !1;
    let n = 0;
    for (let t of e.split('\n')) {
        if (t.length > 1000) return !1;
        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
        let e = t.match(/[/]/g);
        if (null != e && (n += e.length) > 30) return !1;
    }
    if (l.has(t)) {
        var r;
        let t = e.replace(/\s*/g, '').match(s);
        if ((null != (r = null == t ? void 0 : t.length) ? r : 0) > 10) return !1;
    }
    return !0;
}
