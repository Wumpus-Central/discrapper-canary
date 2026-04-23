n.d(t, { lQ: () => I, oP: () => f, pW: () => g });
var i = n(17928),
    r = n(890615),
    l = n(721592),
    a = n(164891),
    s = n(495544),
    o = n(470710),
    d = n(734057),
    u = n(696451),
    c = n(834942),
    h = n(576705),
    E = n(290863),
    _ = n(994500),
    p = n(977997),
    A = n(652215);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = (0, i.bG)([d.A], () => d.A.getChannel(n)),
        l = (0, i.bG)([s.default], () => s.default.getId() === e.id),
        a = (0, i.bG)([_.A], () => _.A.isFriend(e.id)),
        o = (0, i.bG)([E.A], () => E.A.getStatus(e.id) === A.clD.DND && r?.guild_id != null),
        u = r?.type,
        c = null != u && A.kvI.CALLABLE.has(u),
        h = I(e, t, r);
    return a && !o && !l && !e.bot && !e.system && !e.isProvisional && (h || c);
}
function g(e) {
    let t = A.kvI.CALLABLE.has(e.type),
        n = e.type === A.rbe.GUILD_VOICE;
    if (t) {
        let t = o.A.getCall(e.id);
        return null != t && null != t.messageId && !o.A.isCallUnavailable(e.id);
    }
    if (n) {
        let { enabled: t } = a.A.getCurrentConfig({ guildId: e.guild_id, location: "ring" }),
            n = p.A.getVoiceState(e.guild_id, s.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, i.bG)([h.A], () => null != n && (0, r.A)(n, h.A)),
        o = (0, i.bG)([u.Ay, c.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let i = null != u.Ay.getMember(t, e.id),
                r = c.A.getCheck(t).canChat;
            return i && r;
        }),
        { needSubscriptionToAccess: d } = (0, l.A)(n?.id),
        { enabled: E } = a.A.useExperiment({ guildId: n?.guild_id, location: t }),
        _ = n?.type === A.rbe.GUILD_VOICE;
    return E && _ && o && s && !d;
}
