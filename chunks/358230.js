n.d(t, {
    T: () => C,
    Z: () => f
}),
    n(539854);
var l = n(192379),
    r = n(442837),
    i = n(734307),
    o = n(854444),
    a = n(131704),
    s = n(680089),
    c = n(888369),
    u = n(944486),
    d = n(981631),
    E = n(647086);
function f(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0;
    return p(
        e === E._ || e === d.I_8 ? (0, o.t)() : i.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: u.Z.getVoiceChannelId(),
            selectedChannelId: u.Z.getChannelId()
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: n
        },
        l
    );
}
function C(e, t, n) {
    let { withVoiceChannels: i = !1, withCurrentVoiceChannel: o = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 ? arguments[4] : void 0,
        d = (0, r.e7)([c.default], () => c.default.getGuildChangeSentinel(e)),
        E = (0, r.e7)([s.Z], () => s.Z.version),
        { currentVoiceChannelId: f, selectedChannelId: C } = (0, r.cj)([u.Z], () => ({
            currentVoiceChannelId: u.Z.getVoiceChannelId(),
            selectedChannelId: u.Z.getChannelId()
        }));
    return (0, l.useMemo)(
        () =>
            p(
                t,
                {
                    currentVoiceChannelId: f,
                    selectedChannelId: C
                },
                {
                    withVoiceChannels: i,
                    withCurrentVoiceChannel: o
                },
                a
            ).map((e) => e.id),
        [t, n, d, E]
    );
}
function p(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: l } = t,
        { withVoiceChannels: r, withCurrentVoiceChannel: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = arguments.length > 3 ? arguments[3] : void 0,
        s = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, a.r8)(e.type) || (r && (0, a.bw)(e.type)) || (i && (e.id === n || e.id === l))) && s.push(e);
        }, o),
        s
    );
}
