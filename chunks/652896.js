n.d(t, {
    Iy: () => a,
    _z: () => s,
    wL: () => i,
}),
    n(747238),
    n(896048),
    n(65821);
var r = n(502075);
function i(e) {
    return null != e && (e.startsWith(r.U4.GUILD) || e.startsWith(r.U4.CALL));
}
function a(e) {
    let t = e.split(":"),
        n = t[0];
    switch (n) {
        case r.U4.GUILD: {
            let [e, n, r, i] = t;
            return {
                streamType: e,
                guildId: n,
                channelId: r,
                ownerId: i,
            };
        }
        case r.U4.CALL: {
            let [e, n, r] = t;
            return {
                streamType: e,
                channelId: n,
                ownerId: r,
            };
        }
        default:
            throw Error("Unknown stream type ".concat(n));
    }
}
function s(e) {
    let { streamType: t, guildId: n, channelId: i, ownerId: a } = e;
    switch (t) {
        case r.U4.GUILD:
            return [t, n, i, a].join(":");
        case r.U4.CALL:
            return [t, i, a].join(":");
        default:
            throw Error("Unknown stream type ".concat(t));
    }
}
