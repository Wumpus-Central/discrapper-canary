n.d(t, { Z: () => s }), n(47120);
var r = n(442837),
    i = n(937111),
    o = n(430824);
function a() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.Z, o.Z],
        n = e.computeGuildIds(),
        r = t.getGuilds();
    return n.filter((e) => null == r[e]);
}
function s() {
    return (0, r.Wu)([i.Z, o.Z], () => a([i.Z, o.Z]));
}
