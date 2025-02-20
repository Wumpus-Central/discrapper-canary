n.d(t, {
    D: () => u,
    j: () => c
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    o = n(430824),
    a = n(709054),
    s = n(763296);
function l(e, t) {
    return a.default.keys(e).filter((e) => null == t.get(e));
}
function c() {
    let e = (0, i.e7)([o.Z], () => o.Z.getGuilds()),
        t = (0, i.e7)([s.Z], () => s.Z.getSounds());
    return (0, r.useMemo)(() => l(e, t), [e, t]);
}
function u() {
    return l(o.Z.getGuilds(), s.Z.getSounds());
}
