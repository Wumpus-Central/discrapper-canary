n.d(t, {
    TE: () => C,
    h_: () => y
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    a = n(159300),
    s = n(901461),
    c = n(314897),
    u = n(592125),
    d = n(984933),
    p = n(650774),
    h = n(430824),
    f = n(819640),
    m = n(375954),
    g = n(496675),
    b = n(709054),
    _ = n(981631);
function C(e, t) {
    return (0, o.cj)(
        [g.Z],
        () => ({
            canInvite: (0, a.b)(g.Z, t, e),
            canManageGuild: null != t && g.Z.can(_.Plq.MANAGE_GUILD, t),
            canMessage: null != e && g.Z.can(_.Plq.SEND_MESSAGES, e),
            canCreateChannel: null != t && g.Z.can(_.Plq.MANAGE_CHANNELS, t)
        }),
        [t, e]
    );
}
function y(e) {
    return {
        guildPopulated: (function (e) {
            let t = (0, o.e7)([u.Z], () => u.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
                n = (0, o.Wu)([m.Z], () => (null != t ? m.Z.getMessages(t.id).toArray() : []));
            return (0, o.e7)(
                [p.Z],
                () => {
                    var t;
                    let r = null != (t = p.Z.getMemberCount(null == e ? void 0 : e.id)) ? t : 0,
                        i = n.some((e) => e.type === _.uaV.USER_JOIN);
                    return r > 1 || i;
                },
                [e, n]
            );
        })(e),
        guildMessaged: (function (e) {
            let t = (0, o.e7)([u.Z], () => (null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null));
            var n = r.useMemo(() => (null == t ? [] : l().values(t)), [t]);
            let i = (0, o.e7)([c.default], () => c.default.getId());
            return (0, o.e7)([m.Z], () =>
                l().some(n, (e) => {
                    let t = m.Z.getMessages(e.id).toArray();
                    return l().some(t, (e) => e.author.id === i && !(0, s.Z)(e));
                })
            );
        })(e),
        guildPersonalized: (function (e) {
            let t = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
                n = (0, o.e7)([h.Z], () => h.Z.getGuild(null == e ? void 0 : e.id));
            return (null == n ? void 0 : n.icon) != null && !t;
        })(e),
        guildChannelCreated: (0, o.e7)(
            [d.ZP],
            () => {
                let t = d.ZP.getChannels(null == e ? void 0 : e.id),
                    n = t[d.Zb];
                function r(t) {
                    return null != e && b.default.extractTimestamp(t.channel.id) - b.default.extractTimestamp(e.id) > 500;
                }
                return t[d.sH].some(r) || n.some(r);
            },
            [e]
        )
    };
}
