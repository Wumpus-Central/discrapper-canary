r.d(n, {
    JE: function () {
        return E;
    },
    Lw: function () {
        return _;
    },
    dS: function () {
        return g;
    },
    rq: function () {
        return m;
    }
});
var i = r(47120);
var a = r(314897),
    o = r(592125),
    s = r(430824),
    l = r(88751),
    u = r(157925),
    c = r(981631);
let d = 'stage:',
    f = 1,
    p = 2,
    h = 4;
function _(e, n) {
    let r = 0,
        i = a.default.getId();
    l.ZP.isSpeaker(i, e.id) && (r |= f);
    let o = s.Z.getGuild(e.getGuildId());
    null != o && (o.hasFeature(c.oNc.PARTNERED) && (r |= p), o.hasFeature(c.oNc.VERIFIED) && (r |= h));
    let u = r.toString(16);
    return ''.concat(d).concat(e.guild_id, ':').concat(e.id, ':').concat(u, ':').concat(n.id);
}
function m(e) {
    if (null == e || null == e.party) return;
    let { id: n, size: r } = e.party;
    try {
        if (null == n || !n.startsWith(d)) return;
        let [, e, i, a, o] = n.split(':'),
            s = parseInt(a, 16);
        return {
            guildId: e,
            channelId: i,
            size: r,
            userIsSpeaker: (s & f) != 0,
            guildIsPartnered: (s & p) != 0,
            guildIsVerified: (s & h) != 0,
            stageInstanceId: o
        };
    } catch (e) {
        return null;
    }
}
function g(e) {
    return (null == e ? void 0 : e.application_id) === u.gD;
}
function E(e) {
    let n = m(e);
    if (null == n) return !1;
    let { channelId: r } = n;
    return null != o.Z.getChannel(r);
}
