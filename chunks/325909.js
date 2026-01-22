n.d(t, {
    o: () => m,
    p: () => g,
});
var r = n(311907),
    i = n(890615),
    a = n(721592),
    s = n(164891),
    o = n(961350),
    l = n(470710),
    c = n(734057),
    u = n(696451),
    d = n(834942),
    f = n(576705),
    p = n(994500),
    _ = n(977997),
    h = n(652215);

function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRing",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, r.bG)([c.A], () => c.A.getChannel(n)),
        a = (0, r.bG)([o.default], () => o.default.getId() === e.id),
        s = (0, r.bG)([p.A], () => p.A.isFriend(e.id)),
        l = null == i ? void 0 : i.type,
        u = null != l && h.kvI.CALLABLE.has(l),
        d = E(e, t, i) || u;
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
        let { enabled: t } = s.A.getCurrentConfig({
                guildId: e.guild_id,
                location: "ring",
            }),
            n = _.A.getVoiceState(e.guild_id, o.default.getId());
        return t && null != n && n.channelId === e.id;
    }
    return !1;
}

function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = (0, r.bG)([f.A], () => null != n && (0, i.A)(n, f.A)),
        l = (0, r.bG)([u.Ay, d.A], () => {
            let t = null == n ? void 0 : n.guild_id;
            if (null == t) return !1;
            let r = null != u.Ay.getMember(t, e.id),
                i = d.A.getCheck(t).canChat;
            return r && i;
        }),
        { needSubscriptionToAccess: c } = (0, a.A)(null == n ? void 0 : n.id),
        { enabled: p } = s.A.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: t,
        }),
        _ = (null == n ? void 0 : n.type) === h.rbe.GUILD_VOICE;
    return p && _ && l && o && !c;
}
