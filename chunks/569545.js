r.d(n, {
    DB: function () {
        return s;
    },
    V9: function () {
        return u;
    },
    my: function () {
        return l;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(70722);
function s(e) {
    return null != e && (e.startsWith(o.lo.GUILD) || e.startsWith(o.lo.CALL));
}
function l(e) {
    let n = e.split(':'),
        r = n[0];
    switch (r) {
        case o.lo.GUILD: {
            let [e, r, i, a] = n;
            return {
                streamType: e,
                guildId: r,
                channelId: i,
                ownerId: a
            };
        }
        case o.lo.CALL: {
            let [e, r, i] = n;
            return {
                streamType: e,
                channelId: r,
                ownerId: i
            };
        }
        default:
            throw Error('Unknown stream type '.concat(r));
    }
}
function u(e) {
    let { streamType: n, guildId: r, channelId: i, ownerId: a } = e;
    switch (n) {
        case o.lo.GUILD:
            return [n, r, i, a].join(':');
        case o.lo.CALL:
            return [n, i, a].join(':');
        default:
            throw Error('Unknown stream type '.concat(n));
    }
}
