n.d(t, { Iy: () => a, _z: () => s, wL: () => r });
var i = n(325278);
function r(e) {
    return null != e && (e.startsWith(i.U4.GUILD) || e.startsWith(i.U4.CALL));
}
function a(e) {
    let t = e.split(":"),
        n = t[0];
    switch (n) {
        case i.U4.GUILD: {
            let [e, n, i, r] = t;
            return { streamType: e, guildId: n, channelId: i, ownerId: r };
        }
        case i.U4.CALL: {
            let [e, n, i] = t;
            return { streamType: e, channelId: n, ownerId: i };
        }
        default:
            throw Error(`Unknown stream type ${n}`);
    }
}
function s(e) {
    let { streamType: t, guildId: n, channelId: r, ownerId: a } = e;
    switch (t) {
        case i.U4.GUILD:
            return [t, n, r, a].join(":");
        case i.U4.CALL:
            return [t, r, a].join(":");
        default:
            throw Error(`Unknown stream type ${t}`);
    }
}
