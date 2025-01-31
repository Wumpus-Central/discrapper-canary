n.r(t), n.d(t, { default: () => u }), n(47120), n(757143);
var i = n(147519),
    r = n(392711),
    a = n.n(r),
    s = n(462176);
i.Z.registerLanguage('ansi', s.Z);
let o = /<[^>]*>[^>]*(html\\`)/g,
    l = new Set(['html', 'xml']),
    u = {
        highlight(e, t, n) {
            if (!d(t, e)) return null;
            Date.now();
            let r = i.Z.highlight(t, {
                ignoreIllegals: n,
                language: e
            });
            return Date.now(), r;
        },
        hasLanguage: (e) => null != i.Z.getLanguage(e)
    },
    c = a().repeat('/', 15);
function d(e, t) {
    if (e.indexOf(c) >= 0) return !1;
    let n = 0;
    for (let t of e.split('\n')) {
        if (t.length > 1000) return !1;
        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
        let e = t.match(/[/]/g);
        if (null != e && (n += e.length) > 30) return !1;
    }
    if (l.has(t)) {
        var i;
        let t = e.replace(/\s*/g, '').match(o);
        if ((null !== (i = null == t ? void 0 : t.length) && void 0 !== i ? i : 0) > 10) return !1;
    }
    return !0;
}
