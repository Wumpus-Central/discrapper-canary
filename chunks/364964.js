r.r(n);
var i = r(47120);
var a = r(147519),
    s = r(392711),
    o = r.n(s),
    l = r(462176);
a.Z.registerLanguage('ansi', l.Z),
    (n.default = {
        highlight(e, n, r) {
            if (!c(n)) return null;
            let i = Date.now(),
                s = a.Z.highlight(e, n, r);
            return Date.now(), s;
        },
        hasLanguage: (e) => null != a.Z.getLanguage(e)
    });
let u = o().repeat('/', 15);
function c(e) {
    if (e.indexOf(u) >= 0) return !1;
    let n = 0;
    for (let r of e.split('\n')) {
        if (r.length > 1000) return !1;
        null == r.match(/^\s*[/][/]/) && null != r.match(/[^/]/) && (n = 0);
        let e = r.match(/[/]/g);
        if (null != e && ((n += e.length), n > 30)) return !1;
    }
    return !0;
}
