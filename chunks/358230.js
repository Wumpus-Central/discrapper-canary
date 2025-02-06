n.d(t, {
    T: () => C,
    Z: () => _
}),
    n(653041);
var l = n(192379),
    i = n(442837),
    a = n(734307),
    r = n(854444),
    s = n(131704),
    o = n(680089),
    u = n(888369),
    d = n(944486),
    c = n(981631),
    E = n(647086);
function _(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        e === E._ || e === c.I_8 ? (0, r.t)() : a.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: n
        },
        l
    );
}
function C(e, t, n) {
    let { withVoiceChannels: a = !1, withCurrentVoiceChannel: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        s = arguments.length > 4 ? arguments[4] : void 0,
        c = (0, i.e7)([u.default], () => u.default.getGuildChangeSentinel(e)),
        E = (0, i.e7)([o.Z], () => o.Z.version),
        { currentVoiceChannelId: _, selectedChannelId: C } = (0, i.cj)([d.Z], () => ({
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        }));
    return (0, l.useMemo)(
        () =>
            h(
                t,
                {
                    currentVoiceChannelId: _,
                    selectedChannelId: C
                },
                {
                    withVoiceChannels: a,
                    withCurrentVoiceChannel: r
                },
                s
            ).map((e) => e.id),
        [t, n, c, E]
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: l } = t,
        { withVoiceChannels: i, withCurrentVoiceChannel: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, s.r8)(e.type) || (i && (0, s.bw)(e.type)) || (a && (e.id === n || e.id === l))) && o.push(e);
        }, r),
        o
    );
}
