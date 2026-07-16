n.d(t, { A: () => A, W: () => E }), n(321073);
var i = n(64700),
    l = n(17928),
    r = n(5180),
    s = n(960755),
    a = n(866842),
    o = n(95701),
    d = n(924985),
    c = n(458294),
    u = n(309010);
function A(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        (0, r.ai)(e) ? (0, a.g)() : s.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: u.Ay.getVoiceChannelId(), selectedChannelId: u.Ay.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function E(e, t, n) {
    let { withVoiceChannels: r = !1, withCurrentVoiceChannel: s = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 ? arguments[4] : void 0,
        o = (0, l.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        A = (0, l.bG)([d.A], () => d.A.version),
        { currentVoiceChannelId: E, selectedChannelId: C } = (0, l.cf)([u.Ay], () => ({
            currentVoiceChannelId: u.Ay.getVoiceChannelId(),
            selectedChannelId: u.Ay.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            h(
                t,
                { currentVoiceChannelId: E, selectedChannelId: C },
                { withVoiceChannels: r, withCurrentVoiceChannel: s },
                a,
            ).map((e) => e.id),
        [t, n, o, A],
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: l, withCurrentVoiceChannel: r } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = arguments.length > 3 ? arguments[3] : void 0,
        a = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, o.tr)(e.type) || (l && (0, o.ay)(e.type)) || (r && (e.id === n || e.id === i))) && a.push(e);
        }, s),
        a
    );
}
