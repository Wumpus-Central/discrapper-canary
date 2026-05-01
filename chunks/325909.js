"use strict";
n.d(t, { lQ: () => A, oP: () => m, pW: () => g });
var i = n(17928),
    r = n(890615),
    s = n(721592),
    a = n(164891),
    o = n(495544),
    l = n(470710),
    u = n(734057),
    c = n(696451),
    d = n(834942),
    _ = n(576705),
    f = n(290863),
    h = n(994500),
    p = n(977997),
    E = n(652215);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = (0, i.bG)([u.A], () => u.A.getChannel(n)),
        s = (0, i.bG)([o.default], () => o.default.getId() === e.id),
        a = (0, i.bG)([h.A], () => h.A.isFriend(e.id)),
        l = (0, i.bG)([f.A], () => f.A.getStatus(e.id) === E.clD.DND && r?.guild_id != null),
        c = r?.type,
        d = null != c && E.kvI.CALLABLE.has(c),
        _ = A(e, t, r);
    return a && !l && !s && !e.bot && !e.system && !e.isProvisional && (_ || d);
}
function g(e) {
    let t = E.kvI.CALLABLE.has(e.type),
        n = e.type === E.rbe.GUILD_VOICE;
    if (t) {
        let t = l.A.getCall(e.id);
        return null != t && null != t.messageId && !l.A.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = a.A.getCurrentConfig({ guildId: e.guild_id, location: "ring" }),
            n = p.A.getVoiceState(e.guild_id, o.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = (0, i.bG)([_.A], () => null != n && (0, r.A)(n, _.A)),
        l = (0, i.bG)([c.Ay, d.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let i = null != c.Ay.getMember(t, e.id),
                r = d.A.getCheck(t).canChat;
            return i && r;
        }),
        { needSubscriptionToAccess: u } = (0, s.A)(n?.id),
        { enabled: f } = a.A.useExperiment({ guildId: n?.guild_id, location: t }),
        h = n?.type === E.rbe.GUILD_VOICE;
    return f && h && l && o && !u;
}
