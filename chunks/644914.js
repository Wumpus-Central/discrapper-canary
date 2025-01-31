n.d(t, {
    TE: () => x,
    h_: () => v
}),
    n(47120);
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    r = n(442837),
    s = n(159300),
    o = n(901461),
    c = n(314897),
    d = n(592125),
    u = n(984933),
    h = n(650774),
    p = n(430824),
    m = n(819640),
    f = n(375954),
    g = n(496675),
    _ = n(709054),
    C = n(981631);
function x(e, t) {
    return (0, r.cj)(
        [g.Z],
        () => ({
            canInvite: (0, s.b)(g.Z, t, e),
            canManageGuild: null != t && g.Z.can(C.Plq.MANAGE_GUILD, t),
            canMessage: null != e && g.Z.can(C.Plq.SEND_MESSAGES, e),
            canCreateChannel: null != t && g.Z.can(C.Plq.MANAGE_CHANNELS, t)
        }),
        [t, e]
    );
}
function v(e) {
    return {
        guildPopulated: (function (e) {
            let t = (0, r.e7)([d.Z], () => d.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
                n = (0, r.Wu)([f.Z], () => (null != t ? f.Z.getMessages(t.id).toArray() : []));
            return (0, r.e7)(
                [h.Z],
                () => {
                    var t;
                    let i = null !== (t = h.Z.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0,
                        l = n.some((e) => e.type === C.uaV.USER_JOIN);
                    return i > 1 || l;
                },
                [e, n]
            );
        })(e),
        guildMessaged: (function (e) {
            let t = (0, r.e7)([d.Z], () => (null != e ? d.Z.getMutableBasicGuildChannelsForGuild(e.id) : null));
            return (function (e) {
                let t = (0, r.e7)([c.default], () => c.default.getId());
                return (0, r.e7)([f.Z], () =>
                    a().some(e, (e) => {
                        let n = f.Z.getMessages(e.id).toArray();
                        return a().some(n, (e) => e.author.id === t && !(0, o.Z)(e));
                    })
                );
            })(i.useMemo(() => (null == t ? [] : a().values(t)), [t]));
        })(e),
        guildPersonalized: (function (e) {
            let t = (0, r.e7)([m.Z], () => m.Z.hasLayers()),
                n = (0, r.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.id));
            return (null == n ? void 0 : n.icon) != null && !t;
        })(e),
        guildChannelCreated: (0, r.e7)(
            [u.ZP],
            () => {
                let t = u.ZP.getChannels(null == e ? void 0 : e.id),
                    n = t[u.Zb];
                function i(t) {
                    return null != e && _.default.extractTimestamp(t.channel.id) - _.default.extractTimestamp(e.id) > 500;
                }
                return t[u.sH].some(i) || n.some(i);
            },
            [e]
        )
    };
}
