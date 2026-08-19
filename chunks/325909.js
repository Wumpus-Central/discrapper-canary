"use strict";
n.d(t, { lQ: () => T, oP: () => f, pW: () => p });
var i = n(17928),
    r = n(890615),
    a = n(499211),
    s = n(164891),
    l = n(280450),
    o = n(470710),
    d = n(734057),
    c = n(696451),
    u = n(834942),
    _ = n(576705),
    E = n(290863),
    A = n(994500),
    h = n(977997),
    I = n(652215);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = (0, i.bG)([d.A], () => d.A.getChannel(n)),
        a = (0, i.bG)([l.default], () => l.default.getId() === e.id),
        s = (0, i.bG)([A.A], () => A.A.isFriend(e.id)),
        o = (0, i.bG)([E.A], () => E.A.getStatus(e.id) === I.clD.DND && r?.guild_id != null),
        c = r?.type,
        u = null != c && I.kvI.CALLABLE.has(c),
        _ = T(e, t, r);
    return s && !o && !a && !e.bot && !e.system && !e.isProvisional && (_ || u);
}
function p(e) {
    let t = I.kvI.CALLABLE.has(e.type),
        n = e.type === I.rbe.GUILD_VOICE;
    if (t) {
        let t = o.A.getCall(e.id);
        return null != t && null != t.messageId && !o.A.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = s.A.getCurrentConfig({ guildId: e.guild_id, location: "ring" }),
            n = h.A.getVoiceState(e.guild_id, l.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        l = (0, i.bG)([_.A], () => null != n && (0, r.A)(n, _.A)),
        o = (0, i.bG)([c.Ay, u.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let i = null != c.Ay.getMember(t, e.id),
                r = u.A.getCheck(t).canChat;
            return i && r;
        }),
        { needSubscriptionToAccess: d } = (0, a.A)(n?.id),
        { enabled: E } = s.A.useExperiment({ guildId: n?.guild_id, location: t }),
        A = n?.type === I.rbe.GUILD_VOICE;
    return E && A && o && l && !d;
}
