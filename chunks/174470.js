n.d(t, {
    D: () => u,
    j: () => c
}),
    n(388685);
var r = n(192379),
    i = n(399606),
    a = n(430824),
    o = n(709054),
    s = n(763296);
function l(e, t) {
    return o.default.keys(e).filter((e) => null == t.get(e));
}
function c() {
    let e = (0, i.e7)([a.Z], () => a.Z.getGuilds()),
        t = (0, i.e7)([s.Z], () => s.Z.getSounds());
    return (0, r.useMemo)(() => l(e, t), [e, t]);
}
function u() {
    return l(a.Z.getGuilds(), s.Z.getSounds());
}
