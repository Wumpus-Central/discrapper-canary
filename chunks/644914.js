n.d(t, {
    TE: () => C,
    h_: () => v,
}),
    n(388685);
var i = n(473749),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(159300),
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
    y = n(981631);
function C(e, t) {
    return (0, a.cj)(
        [g.Z],
        () => ({
            canInvite: (0, o.b)(g.Z, t, e),
            canManageGuild: null != t && g.Z.can(y.Plq.MANAGE_GUILD, t),
            canMessage: null != e && g.Z.can(y.Plq.SEND_MESSAGES, e),
            canCreateChannel: null != t && g.Z.can(y.Plq.MANAGE_CHANNELS, t),
        }),
        [t, e],
    );
}
function v(e) {
    return {
        guildPopulated: (function (e) {
            let t = (0, a.e7)([u.Z], () => u.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
                n = (0, a.Wu)([m.Z], () => (null != t ? m.Z.getMessages(t.id).toArray() : []));
            return (0, a.e7)([p.Z], () => {
                var t;
                let i = null != (t = p.Z.getMemberCount(null == e ? void 0 : e.id)) ? t : 0,
                    r = n.some((e) => e.type === y.uaV.USER_JOIN);
                return i > 1 || r;
            }, [e, n]);
        })(e),
        guildMessaged: (function (e) {
            let t = (0, a.e7)([u.Z], () => (null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null));
            var n = i.useMemo(() => (null == t ? [] : l().values(t)), [t]);
            let r = (0, a.e7)([c.default], () => c.default.getId());
            return (0, a.e7)([m.Z], () =>
                l().some(n, (e) => {
                    let t = m.Z.getMessages(e.id).toArray();
                    return l().some(t, (e) => e.author.id === r && !(0, s.Z)(e));
                }),
            );
        })(e),
        guildPersonalized: (function (e) {
            let t = (0, a.e7)([f.Z], () => f.Z.hasLayers()),
                n = (0, a.e7)([h.Z], () => h.Z.getGuild(null == e ? void 0 : e.id));
            return (null == n ? void 0 : n.icon) != null && !t;
        })(e),
        guildChannelCreated: (0, a.e7)([d.ZP], () => {
            let t = d.ZP.getChannels(null == e ? void 0 : e.id),
                n = t[d.Zb];
            function i(t) {
                return null != e && b.default.extractTimestamp(t.channel.id) - b.default.extractTimestamp(e.id) > 500;
            }
            return t[d.sH].some(i) || n.some(i);
        }, [e]),
    };
}
