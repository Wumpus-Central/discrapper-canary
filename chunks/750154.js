(n.d(t, {
    JE: () => m,
    Lw: () => f,
    dS: () => h,
    rq: () => p
}),
    n(388685),
    n(35282));
var r = n(314897),
    i = n(592125),
    a = n(430824),
    o = n(88751),
    s = n(157925),
    l = n(981631);
let c = 'stage:',
    u = 1,
    d = 2,
    _ = 4;
function f(e, t) {
    let n = 0,
        i = r.default.getId();
    o.ZP.isSpeaker(i, e.id) && (n |= u);
    let s = a.Z.getGuild(e.getGuildId());
    null != s && (s.features.has(l.oNc.PARTNERED) && (n |= d), s.features.has(l.oNc.VERIFIED) && (n |= _));
    let f = n.toString(16);
    return ''.concat(c).concat(e.guild_id, ':').concat(e.id, ':').concat(f, ':').concat(t.id);
}
function p(e) {
    if (null == e || null == e.party) return;
    let { id: t, size: n } = e.party;
    try {
        if (null == t || !t.startsWith(c)) return;
        let [, e, r, i, a] = t.split(':'),
            o = parseInt(i, 16);
        return {
            guildId: e,
            channelId: r,
            size: n,
            userIsSpeaker: (o & u) != 0,
            guildIsPartnered: (o & d) != 0,
            guildIsVerified: (o & _) != 0,
            stageInstanceId: a
        };
    } catch (e) {
        return null;
    }
}
function h(e) {
    return (null == e ? void 0 : e.application_id) === s.gD;
}
function m(e) {
    let t = p(e);
    if (null == t) return !1;
    let { channelId: n } = t;
    return null != i.Z.getChannel(n);
}
