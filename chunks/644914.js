(n.d(t, {
    TE: () => y,
    h_: () => A
}),
    n(388685));
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(159300),
    l = n(901461),
    c = n(314897),
    u = n(592125),
    d = n(984933),
    f = n(650774),
    _ = n(430824),
    p = n(819640),
    h = n(375954),
    m = n(496675),
    g = n(709054),
    E = n(981631);
let b = 500;
function y(e, t) {
    return (0, a.cj)(
        [m.Z],
        () => ({
            canInvite: (0, s.b)(m.Z, t, e),
            canManageGuild: null != t && m.Z.can(E.Plq.MANAGE_GUILD, t),
            canMessage: null != e && m.Z.can(E.Plq.SEND_MESSAGES, e),
            canCreateChannel: null != t && m.Z.can(E.Plq.MANAGE_CHANNELS, t)
        }),
        [t, e]
    );
}
function O(e) {
    return (0, a.e7)(
        [d.ZP],
        () => {
            let t = d.ZP.getChannels(null == e ? void 0 : e.id),
                n = t[d.Zb];
            function r(t) {
                return null != e && g.default.extractTimestamp(t.channel.id) - g.default.extractTimestamp(e.id) > b;
            }
            return t[d.sH].some(r) || n.some(r);
        },
        [e]
    );
}
function v(e) {
    let t = (0, a.e7)([u.Z], () => u.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
        n = (0, a.Wu)([h.Z], () => (null != t ? h.Z.getMessages(t.id).toArray() : []));
    return (0, a.e7)(
        [f.Z],
        () => {
            var t;
            let r = null != (t = f.Z.getMemberCount(null == e ? void 0 : e.id)) ? t : 0,
                i = n.some((e) => e.type === E.uaV.USER_JOIN);
            return r > 1 || i;
        },
        [e, n]
    );
}
function I(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.hasLayers()),
        n = (0, a.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.id));
    return (null == n ? void 0 : n.icon) != null && !t;
}
function T(e) {
    let t = (0, a.e7)([c.default], () => c.default.getId());
    return (0, a.e7)([h.Z], () =>
        o().some(e, (e) => {
            let n = h.Z.getMessages(e.id).toArray();
            return o().some(n, (e) => e.author.id === t && !(0, l.Z)(e));
        })
    );
}
function S(e) {
    let t = (0, a.e7)([u.Z], () => (null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null));
    return T(r.useMemo(() => (null == t ? [] : o().values(t)), [t]));
}
function A(e) {
    return {
        guildPopulated: v(e),
        guildMessaged: S(e),
        guildPersonalized: I(e),
        guildChannelCreated: O(e)
    };
}
