n.d(t, {
    D: () => c,
    j: () => u
}),
    n(47120);
var i = n(192379),
    r = n(399606),
    a = n(430824),
    s = n(709054),
    o = n(763296);
function l(e, t) {
    return s.default.keys(e).filter((e) => null == t.get(e));
}
function u() {
    let e = (0, r.e7)([a.Z], () => a.Z.getGuilds()),
        t = (0, r.e7)([o.Z], () => o.Z.getSounds());
    return (0, i.useMemo)(() => l(e, t), [e, t]);
}
function c() {
    return l(a.Z.getGuilds(), o.Z.getSounds());
}
