n.d(t, { Z: () => s }), n(388685);
var r = n(442837),
    i = n(937111),
    a = n(430824);
function o() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.Z, a.Z],
        n = e.computeGuildIds(),
        r = t.getGuilds();
    return n.filter((e) => null == r[e]);
}
function s() {
    return (0, r.Wu)([i.Z, a.Z], () => o([i.Z, a.Z]));
}
