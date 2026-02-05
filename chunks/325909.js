"use strict";
n.d(t, { lQ: () => E, oP: () => m, pW: () => g });
var r = n(311907),
    i = n(890615),
    a = n(721592),
    s = n(164891),
    o = n(961350),
    l = n(470710),
    u = n(734057),
    c = n(696451),
    d = n(834942),
    _ = n(576705),
    f = n(994500),
    p = n(977997),
    h = n(652215);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, r.bG)([u.A], () => u.A.getChannel(n)),
        a = (0, r.bG)([o.default], () => o.default.getId() === e.id),
        s = (0, r.bG)([f.A], () => f.A.isFriend(e.id)),
        l = i?.type,
        c = null != l && h.kvI.CALLABLE.has(l),
        d = E(e, t, i) || c;
    return s && !a && !e.bot && !e.system && !e.isProvisional && d;
}
function g(e) {
    let t = h.kvI.CALLABLE.has(e.type),
        n = e.type === h.rbe.GUILD_VOICE;
    if (t) {
        let t = l.A.getCall(e.id);
        return null != t && null != t.messageId && !l.A.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = s.A.getCurrentConfig({ guildId: e.guild_id, location: "ring" }),
            n = p.A.getVoiceState(e.guild_id, o.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = (0, r.bG)([_.A], () => null != n && (0, i.A)(n, _.A)),
        l = (0, r.bG)([c.Ay, d.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let r = null != c.Ay.getMember(t, e.id),
                i = d.A.getCheck(t).canChat;
            return r && i;
        }),
        { needSubscriptionToAccess: u } = (0, a.A)(n?.id),
        { enabled: f } = s.A.useExperiment({ guildId: n?.guild_id, location: t }),
        p = n?.type === h.rbe.GUILD_VOICE;
    return f && p && l && o && !u;
}
