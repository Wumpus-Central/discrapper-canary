t.d(n, {
    T: function () {
        return I;
    },
    Z: function () {
        return C;
    }
}),
    t(653041);
var l = t(192379),
    i = t(442837),
    u = t(734307),
    a = t(854444),
    r = t(131704),
    E = t(680089),
    o = t(888369),
    d = t(944486),
    _ = t(981631),
    c = t(647086);
function C(e) {
    let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0;
    return s(
        e === c._ || e === _.I_8 ? (0, a.t)() : u.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        },
        {
            withVoiceChannels: n,
            withCurrentVoiceChannel: t
        },
        l
    );
}
function I(e, n, t) {
    let { withVoiceChannels: u = !1, withCurrentVoiceChannel: a = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 ? arguments[4] : void 0,
        _ = (0, i.e7)([o.default], () => o.default.getGuildChangeSentinel(e)),
        c = (0, i.e7)([E.Z], () => E.Z.version),
        { currentVoiceChannelId: C, selectedChannelId: I } = (0, i.cj)([d.Z], () => ({
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        }));
    return (0, l.useMemo)(
        () =>
            s(
                n,
                {
                    currentVoiceChannelId: C,
                    selectedChannelId: I
                },
                {
                    withVoiceChannels: u,
                    withCurrentVoiceChannel: a
                },
                r
            ).map((e) => e.id),
        [n, t, _, c]
    );
}
function s(e, n) {
    let { currentVoiceChannelId: t, selectedChannelId: l } = n,
        { withVoiceChannels: i, withCurrentVoiceChannel: u } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        E = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, r.r8)(e.type) || (i && (0, r.bw)(e.type)) || (u && (e.id === t || e.id === l))) && E.push(e);
        }, a),
        E
    );
}
