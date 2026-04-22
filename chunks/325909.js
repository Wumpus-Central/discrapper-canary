"use strict";
n.d(t, { lQ: () => A, oP: () => m, pW: () => g });
var r = n(311907),
    i = n(890615),
    s = n(721592),
    a = n(164891),
    o = n(961350),
    l = n(470710),
    u = n(734057),
    d = n(696451),
    c = n(834942),
    _ = n(576705),
    f = n(290863),
    E = n(994500),
    h = n(977997),
    p = n(652215);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, r.bG)([u.A], () => u.A.getChannel(n)),
        s = (0, r.bG)([o.default], () => o.default.getId() === e.id),
        a = (0, r.bG)([E.A], () => E.A.isFriend(e.id)),
        l = (0, r.bG)([f.A], () => f.A.getStatus(e.id) === p.clD.DND && i?.guild_id != null),
        d = i?.type,
        c = null != d && p.kvI.CALLABLE.has(d),
        _ = A(e, t, i);
    return a && !l && !s && !e.bot && !e.system && !e.isProvisional && (_ || c);
}
function g(e) {
    let t = p.kvI.CALLABLE.has(e.type),
        n = e.type === p.rbe.GUILD_VOICE;
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
        l = (0, r.bG)([d.Ay, c.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let r = null != d.Ay.getMember(t, e.id),
                i = c.A.getCheck(t).canChat;
            return r && i;
        }),
        { needSubscriptionToAccess: u } = (0, s.A)(n?.id),
        { enabled: f } = a.A.useExperiment({ guildId: n?.guild_id, location: t }),
        E = n?.type === p.rbe.GUILD_VOICE;
    return f && E && l && o && !u;
}
