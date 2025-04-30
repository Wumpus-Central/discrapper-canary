n.d(t, {
    T: () => g,
    Z: () => p
}),
    n(539854);
var i = n(192379),
    r = n(442837),
    s = n(734307),
    l = n(854444),
    a = n(131704),
    o = n(680089),
    c = n(888369),
    d = n(944486),
    u = n(981631),
    m = n(647086);
function p(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        e === m._ || e === u.I_8 ? (0, l.t)() : s.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: n
        },
        i
    );
}
function g(e, t, n) {
    let { withVoiceChannels: s = !1, withCurrentVoiceChannel: l = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 ? arguments[4] : void 0,
        u = (0, r.e7)([c.default], () => c.default.getGuildChangeSentinel(e)),
        m = (0, r.e7)([o.Z], () => o.Z.version),
        { currentVoiceChannelId: p, selectedChannelId: g } = (0, r.cj)([d.Z], () => ({
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        }));
    return (0, i.useMemo)(
        () =>
            h(
                t,
                {
                    currentVoiceChannelId: p,
                    selectedChannelId: g
                },
                {
                    withVoiceChannels: s,
                    withCurrentVoiceChannel: l
                },
                a
            ).map((e) => e.id),
        [t, n, u, m]
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: r, withCurrentVoiceChannel: s } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, a.r8)(e.type) || (r && (0, a.bw)(e.type)) || (s && (e.id === n || e.id === i))) && o.push(e);
        }, l),
        o
    );
}
