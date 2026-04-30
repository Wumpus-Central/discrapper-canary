n.d(t, { A: () => h, W: () => g }), n(321073);
var i = n(64700),
    l = n(17928),
    s = n(5180),
    r = n(960755),
    a = n(866842),
    o = n(95701),
    d = n(924985),
    c = n(458294),
    u = n(309010);
function h(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return A(
        (0, s.ai)(e) ? (0, a.g)() : r.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: u.A.getVoiceChannelId(), selectedChannelId: u.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function g(e, t, n) {
    let { withVoiceChannels: s = !1, withCurrentVoiceChannel: r = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 ? arguments[4] : void 0,
        o = (0, l.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        h = (0, l.bG)([d.A], () => d.A.version),
        { currentVoiceChannelId: g, selectedChannelId: E } = (0, l.cf)([u.A], () => ({
            currentVoiceChannelId: u.A.getVoiceChannelId(),
            selectedChannelId: u.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            A(
                t,
                { currentVoiceChannelId: g, selectedChannelId: E },
                { withVoiceChannels: s, withCurrentVoiceChannel: r },
                a,
            ).map((e) => e.id),
        [t, n, o, h],
    );
}
function A(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: l, withCurrentVoiceChannel: s } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, o.tr)(e.type) || (l && (0, o.ay)(e.type)) || (s && (e.id === n || e.id === i))) && a.push(e);
        }, r),
        a
    );
}
