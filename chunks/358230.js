n.d(t, {
    T: () => f,
    Z: () => g
}),
    n(653041);
var l = n(192379),
    i = n(442837),
    r = n(734307),
    a = n(854444),
    o = n(131704),
    s = n(680089),
    d = n(888369),
    u = n(944486),
    c = n(981631),
    h = n(647086);
function g(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0;
    return p(
        e === h._ || e === c.I_8 ? (0, a.t)() : r.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
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
function f(e, t, n) {
    let { withVoiceChannels: r = !1, withCurrentVoiceChannel: a = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0,
        c = (0, i.e7)([d.default], () => d.default.getGuildChangeSentinel(e)),
        h = (0, i.e7)([s.Z], () => s.Z.version),
        { currentVoiceChannelId: g, selectedChannelId: f } = (0, i.cj)([u.Z], () => ({
            currentVoiceChannelId: u.Z.getVoiceChannelId(),
            selectedChannelId: u.Z.getChannelId()
        }));
    return (0, l.useMemo)(
        () =>
            p(
                t,
                {
                    currentVoiceChannelId: g,
                    selectedChannelId: f
                },
                {
                    withVoiceChannels: r,
                    withCurrentVoiceChannel: a
                },
                o
            ).map((e) => e.id),
        [t, n, c, h]
    );
}
function p(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: l } = t,
        { withVoiceChannels: i, withCurrentVoiceChannel: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        s = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, o.r8)(e.type) || (i && (0, o.bw)(e.type)) || (r && (e.id === n || e.id === l))) && s.push(e);
        }, a),
        s
    );
}
