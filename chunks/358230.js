n.d(t, {
    T: () => p,
    Z: () => _,
}),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(734307),
    o = n(854444),
    s = n(131704),
    l = n(680089),
    c = n(888369),
    u = n(944486),
    d = n(981631),
    f = n(647086);
function _(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        e === f._ || e === d.I_8 ? (0, o.t)() : a.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: u.Z.getVoiceChannelId(),
            selectedChannelId: u.Z.getChannelId(),
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: n,
        },
        r,
    );
}
function p(e, t, n) {
    let { withVoiceChannels: a = !1, withCurrentVoiceChannel: o = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        s = arguments.length > 4 ? arguments[4] : void 0,
        d = (0, i.e7)([c.default], () => c.default.getGuildChangeSentinel(e)),
        f = (0, i.e7)([l.Z], () => l.Z.version),
        { currentVoiceChannelId: _, selectedChannelId: p } = (0, i.cj)([u.Z], () => ({
            currentVoiceChannelId: u.Z.getVoiceChannelId(),
            selectedChannelId: u.Z.getChannelId(),
        }));
    return (0, r.useMemo)(
        () =>
            h(
                t,
                {
                    currentVoiceChannelId: _,
                    selectedChannelId: p,
                },
                {
                    withVoiceChannels: a,
                    withCurrentVoiceChannel: o,
                },
                s,
            ).map((e) => e.id),
        [t, n, d, f],
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: r } = t,
        { withVoiceChannels: i, withCurrentVoiceChannel: a } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, s.r8)(e.type) || (i && (0, s.bw)(e.type)) || (a && (e.id === n || e.id === r))) && l.push(e);
        }, o),
        l
    );
}
