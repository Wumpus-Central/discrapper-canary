n.d(t, { lQ: () => I, oP: () => g, pW: () => f });
var i = n(17928),
    l = n(890615),
    a = n(721592),
    r = n(164891),
    s = n(495544),
    o = n(470710),
    d = n(734057),
    u = n(696451),
    c = n(834942),
    h = n(576705),
    E = n(290863),
    A = n(994500),
    _ = n(977997),
    p = n(652215);
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        l = (0, i.bG)([d.A], () => d.A.getChannel(n)),
        a = (0, i.bG)([s.default], () => s.default.getId() === e.id),
        r = (0, i.bG)([A.A], () => A.A.isFriend(e.id)),
        o = (0, i.bG)([E.A], () => E.A.getStatus(e.id) === p.clD.DND && l?.guild_id != null),
        u = l?.type,
        c = null != u && p.kvI.CALLABLE.has(u),
        h = I(e, t, l);
    return r && !o && !a && !e.bot && !e.system && !e.isProvisional && (h || c);
}
function f(e) {
    let t = p.kvI.CALLABLE.has(e.type),
        n = e.type === p.rbe.GUILD_VOICE;
    if (t) {
        let t = o.A.getCall(e.id);
        return null != t && null != t.messageId && !o.A.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = r.A.getCurrentConfig({ guildId: e.guild_id, location: "ring" }),
            n = _.A.getVoiceState(e.guild_id, s.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, i.bG)([h.A], () => null != n && (0, l.A)(n, h.A)),
        o = (0, i.bG)([u.Ay, c.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let i = null != u.Ay.getMember(t, e.id),
                l = c.A.getCheck(t).canChat;
            return i && l;
        }),
        { needSubscriptionToAccess: d } = (0, a.A)(n?.id),
        { enabled: E } = r.A.useExperiment({ guildId: n?.guild_id, location: t }),
        A = n?.type === p.rbe.GUILD_VOICE;
    return E && A && o && s && !d;
}
