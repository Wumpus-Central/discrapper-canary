r.d(n, {
    D: function () {
        return f;
    },
    j: function () {
        return d;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(399606),
    s = r(430824),
    l = r(709054),
    u = r(763296);
function c(e, n) {
    return l.default.keys(e).filter((e) => null == n.get(e));
}
function d() {
    let e = (0, o.e7)([s.Z], () => s.Z.getGuilds()),
        n = (0, o.e7)([u.Z], () => u.Z.getSounds());
    return (0, a.useMemo)(() => c(e, n), [e, n]);
}
function f() {
    let e = s.Z.getGuilds();
    return c(e, u.Z.getSounds());
}
