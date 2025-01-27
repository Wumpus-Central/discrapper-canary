t.d(n, {
    T: function () {
        return C;
    },
    Z: function () {
        return s;
    }
}),
    t(653041);
var l = t(192379),
    i = t(442837),
    r = t(734307),
    a = t(854444),
    u = t(131704),
    o = t(680089),
    d = t(888369),
    E = t(944486),
    _ = t(981631),
    c = t(647086);
function s(e) {
    let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0;
    return T(
        e === c._ || e === _.I_8 ? (0, a.t)() : r.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: E.Z.getVoiceChannelId(),
            selectedChannelId: E.Z.getChannelId()
        },
        {
            withVoiceChannels: n,
            withCurrentVoiceChannel: t
        },
        l
    );
}
function C(e, n, t) {
    let { withVoiceChannels: r = !1, withCurrentVoiceChannel: a = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        u = arguments.length > 4 ? arguments[4] : void 0,
        _ = (0, i.e7)([d.default], () => d.default.getGuildChangeSentinel(e)),
        c = (0, i.e7)([o.Z], () => o.Z.version),
        { currentVoiceChannelId: s, selectedChannelId: C } = (0, i.cj)([E.Z], () => ({
            currentVoiceChannelId: E.Z.getVoiceChannelId(),
            selectedChannelId: E.Z.getChannelId()
        }));
    return (0, l.useMemo)(
        () =>
            T(
                n,
                {
                    currentVoiceChannelId: s,
                    selectedChannelId: C
                },
                {
                    withVoiceChannels: r,
                    withCurrentVoiceChannel: a
                },
                u
            ).map((e) => e.id),
        [n, t, _, c]
    );
}
function T(e, n) {
    let { currentVoiceChannelId: t, selectedChannelId: l } = n,
        { withVoiceChannels: i, withCurrentVoiceChannel: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, u.r8)(e.type) || (i && (0, u.bw)(e.type)) || (r && (e.id === t || e.id === l))) && o.push(e);
        }, a),
        o
    );
}
