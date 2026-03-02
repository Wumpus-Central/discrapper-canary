"use strict";
n.d(t, { lQ: () => A, oP: () => E, pW: () => g });
var r = n(311907),
    i = n(890615),
    s = n(721592),
    a = n(164891),
    o = n(961350),
    l = n(470710),
    u = n(734057),
    c = n(696451),
    d = n(834942),
    _ = n(576705),
    f = n(290863),
    p = n(994500),
    h = n(977997),
    m = n(652215);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, r.bG)([u.A], () => u.A.getChannel(n)),
        s = (0, r.bG)([o.default], () => o.default.getId() === e.id),
        a = (0, r.bG)([p.A], () => p.A.isFriend(e.id)),
        l = (0, r.bG)([f.A], () => f.A.getStatus(e.id) === m.clD.DND && i?.guild_id != null),
        c = i?.type,
        d = null != c && m.kvI.CALLABLE.has(c),
        _ = A(e, t, i) || d;
    return a && !l && !s && !e.bot && !e.system && !e.isProvisional && _;
}
function g(e) {
    let t = m.kvI.CALLABLE.has(e.type),
        n = e.type === m.rbe.GUILD_VOICE;
    if (t) {
        let t = l.A.getCall(e.id);
        return null != t && null != t.messageId && !l.A.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = a.A.getCurrentConfig({ guildId: e.guild_id, location: "ring" }),
            n = h.A.getVoiceState(e.guild_id, o.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function A(e) {
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
        { needSubscriptionToAccess: u } = (0, s.A)(n?.id),
        { enabled: f } = a.A.useExperiment({ guildId: n?.guild_id, location: t }),
        p = n?.type === m.rbe.GUILD_VOICE;
    return f && p && l && o && !u;
}
