n.d(t, { A: () => h, W: () => A }), n(321073);
var i = n(64700),
    l = n(17928),
    s = n(5180),
    r = n(960755),
    o = n(866842),
    a = n(95701),
    d = n(924985),
    c = n(458294),
    u = n(309010);
function h(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return E(
        (0, s.ai)(e) ? (0, o.g)() : r.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: u.A.getVoiceChannelId(), selectedChannelId: u.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function A(e, t, n) {
    let { withVoiceChannels: s = !1, withCurrentVoiceChannel: r = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0,
        a = (0, l.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        h = (0, l.bG)([d.A], () => d.A.version),
        { currentVoiceChannelId: A, selectedChannelId: g } = (0, l.cf)([u.A], () => ({
            currentVoiceChannelId: u.A.getVoiceChannelId(),
            selectedChannelId: u.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            E(
                t,
                { currentVoiceChannelId: A, selectedChannelId: g },
                { withVoiceChannels: s, withCurrentVoiceChannel: r },
                o,
            ).map((e) => e.id),
        [t, n, a, h],
    );
}
function E(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: l, withCurrentVoiceChannel: s } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, a.tr)(e.type) || (l && (0, a.ay)(e.type)) || (s && (e.id === n || e.id === i))) && o.push(e);
        }, r),
        o
    );
}
