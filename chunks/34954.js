n.d(t, { Z: () => r });
var i = n(186901);
function r(e, t) {
    if (null == t) return !0;
    if ('string' == typeof t) return e.includes(t);
    if ('object' != typeof t) return !1;
    let n = t[i.Gp.ANY],
        r = t[i.Gp.ALL];
    return !!((Array.isArray(n) && n.some((t) => e.includes(t))) || (Array.isArray(r) && r.every((t) => e.includes(t))));
}
