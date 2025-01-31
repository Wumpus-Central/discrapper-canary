n.d(t, {
    JE: () => m,
    Lw: () => _,
    dS: () => h,
    rq: () => p
}),
    n(47120);
var i = n(314897),
    r = n(592125),
    a = n(430824),
    s = n(88751),
    o = n(157925),
    l = n(981631);
let u = 'stage:',
    c = 1,
    d = 2,
    f = 4;
function _(e, t) {
    let n = 0,
        r = i.default.getId();
    s.ZP.isSpeaker(r, e.id) && (n |= c);
    let o = a.Z.getGuild(e.getGuildId());
    null != o && (o.hasFeature(l.oNc.PARTNERED) && (n |= d), o.hasFeature(l.oNc.VERIFIED) && (n |= f));
    let _ = n.toString(16);
    return ''.concat(u).concat(e.guild_id, ':').concat(e.id, ':').concat(_, ':').concat(t.id);
}
function p(e) {
    if (null == e || null == e.party) return;
    let { id: t, size: n } = e.party;
    try {
        if (null == t || !t.startsWith(u)) return;
        let [, e, i, r, a] = t.split(':'),
            s = parseInt(r, 16);
        return {
            guildId: e,
            channelId: i,
            size: n,
            userIsSpeaker: (s & c) != 0,
            guildIsPartnered: (s & d) != 0,
            guildIsVerified: (s & f) != 0,
            stageInstanceId: a
        };
    } catch (e) {
        return null;
    }
}
function h(e) {
    return (null == e ? void 0 : e.application_id) === o.gD;
}
function m(e) {
    let t = p(e);
    if (null == t) return !1;
    let { channelId: n } = t;
    return null != r.Z.getChannel(n);
}
