n.d(t, { A: () => l });
var i = n(827343),
    r = n(401843),
    a = n(280450),
    s = n(652896);
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == e) return;
    let { streamType: l, guildId: o, channelId: d, ownerId: c } = e,
        u = (0, s._z)({ streamType: l, guildId: o, channelId: d, ownerId: c });
    c === a.default.getId() && i.A.setGoLiveSource(null), r.vN(u, t, n);
}
