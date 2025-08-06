n.d(t, {
    D: () => c,
    j: () => l
});
var r = n(73800),
    i = n(399606),
    o = n(430824),
    a = n(763296);
function s(e, t) {
    return e.filter((e) => null == t.get(e));
}
function l() {
    let e = (0, i.Wu)([o.Z], () => o.Z.getGuildIds()),
        t = (0, i.e7)([a.Z], () => a.Z.getSounds());
    return (0, r.useMemo)(() => s(e, t), [e, t]);
}
function c() {
    return s(o.Z.getGuildIds(), a.Z.getSounds());
}
