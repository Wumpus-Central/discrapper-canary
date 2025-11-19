n.d(t, {
    D: () => c,
    j: () => l,
});
var r = n(473749),
    i = n(399606),
    a = n(430824),
    o = n(763296);
function s(e, t) {
    return e.filter((e) => null == t.get(e));
}
function l() {
    let e = (0, i.Wu)([a.Z], () => a.Z.getGuildIds()),
        t = (0, i.e7)([o.Z], () => o.Z.getSounds());
    return (0, r.useMemo)(() => s(e, t), [e, t]);
}
function c() {
    return s(a.Z.getGuildIds(), o.Z.getSounds());
}
