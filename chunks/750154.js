n.d(t, {
    JE: () => m,
    Lw: () => _,
    dS: () => h,
    rq: () => p
}),
    n(388685),
    n(35282);
var r = n(314897),
    i = n(592125),
    a = n(430824),
    o = n(88751),
    s = n(157925),
    l = n(981631);
let c = 'stage:',
    u = 1,
    d = 2,
    f = 4;
function _(e, t) {
    let n = 0,
        i = r.default.getId();
    o.ZP.isSpeaker(i, e.id) && (n |= u);
    let s = a.Z.getGuild(e.getGuildId());
    null != s && (s.hasFeature(l.oNc.PARTNERED) && (n |= d), s.hasFeature(l.oNc.VERIFIED) && (n |= f));
    let _ = n.toString(16);
    return ''.concat(c).concat(e.guild_id, ':').concat(e.id, ':').concat(_, ':').concat(t.id);
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
            guildIsVerified: (o & f) != 0,
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
