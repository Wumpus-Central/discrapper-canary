n.d(t, {
    T: () => p,
    Z: () => g
}),
    n(539854);
var r = n(192379),
    i = n(442837),
    s = n(734307),
    a = n(854444),
    l = n(131704),
    o = n(680089),
    c = n(888369),
    d = n(944486),
    u = n(981631),
    m = n(647086);
function g(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        e === m._ || e === u.I_8 ? (0, a.t)() : s.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: n
        },
        r
    );
}
function p(e, t, n) {
    let { withVoiceChannels: s = !1, withCurrentVoiceChannel: a = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 ? arguments[4] : void 0,
        u = (0, i.e7)([c.default], () => c.default.getGuildChangeSentinel(e)),
        m = (0, i.e7)([o.Z], () => o.Z.version),
        { currentVoiceChannelId: g, selectedChannelId: p } = (0, i.cj)([d.Z], () => ({
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        }));
    return (0, r.useMemo)(
        () =>
            h(
                t,
                {
                    currentVoiceChannelId: g,
                    selectedChannelId: p
                },
                {
                    withVoiceChannels: s,
                    withCurrentVoiceChannel: a
                },
                l
            ).map((e) => e.id),
        [t, n, u, m]
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: r } = t,
        { withVoiceChannels: i, withCurrentVoiceChannel: s } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, l.r8)(e.type) || (i && (0, l.bw)(e.type)) || (s && (e.id === n || e.id === r))) && o.push(e);
        }, a),
        o
    );
}
