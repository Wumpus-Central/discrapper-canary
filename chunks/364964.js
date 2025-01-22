r.r(n);
var i = r(47120);
var a = r(757143);
var o = r(147519),
    s = r(392711),
    l = r.n(s),
    u = r(462176);
o.Z.registerLanguage('ansi', u.Z);
let c = /<[^>]*>[^>]*(html\\`)/g,
    d = new Set(['html', 'xml']);
n.default = {
    highlight(e, n, r) {
        if (!p(n, e)) return null;
        let i = Date.now(),
            a = o.Z.highlight(n, {
                ignoreIllegals: r,
                language: e
            });
        return Date.now(), a;
    },
    hasLanguage: (e) => null != o.Z.getLanguage(e)
};
let f = l().repeat('/', 15);
function p(e, n) {
    if (e.indexOf(f) >= 0) return !1;
    let r = 0;
    for (let n of e.split('\n')) {
        if (n.length > 1000) return !1;
        null == n.match(/^\s*[/][/]/) && null != n.match(/[^/]/) && (r = 0);
        let e = n.match(/[/]/g);
        if (null != e && ((r += e.length), r > 30)) return !1;
    }
    if (d.has(n)) {
        var i;
        let n = e.replace(/\s*/g, '').match(c);
        if ((null !== (i = null == n ? void 0 : n.length) && void 0 !== i ? i : 0) > 10) return !1;
    }
    return !0;
}
