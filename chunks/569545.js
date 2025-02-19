n.d(t, {
    DB: () => i,
    V9: () => a,
    my: () => o
}),
    n(301563),
    n(47120),
    n(411104);
var r = n(70722);
function i(e) {
    return null != e && (e.startsWith(r.lo.GUILD) || e.startsWith(r.lo.CALL));
}
function o(e) {
    let t = e.split(':'),
        n = t[0];
    switch (n) {
        case r.lo.GUILD: {
            let [e, n, r, i] = t;
            return {
                streamType: e,
                guildId: n,
                channelId: r,
                ownerId: i
            };
        }
        case r.lo.CALL: {
            let [e, n, r] = t;
            return {
                streamType: e,
                channelId: n,
                ownerId: r
            };
        }
        default:
            throw Error('Unknown stream type '.concat(n));
    }
}
function a(e) {
    let { streamType: t, guildId: n, channelId: i, ownerId: o } = e;
    switch (t) {
        case r.lo.GUILD:
            return [t, n, i, o].join(':');
        case r.lo.CALL:
            return [t, i, o].join(':');
        default:
            throw Error('Unknown stream type '.concat(t));
    }
}
