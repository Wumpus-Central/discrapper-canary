n.d(t, { A: () => u, W: () => g }), n(321073);
var i = n(64700),
    r = n(17928),
    s = n(5180),
    l = n(960755),
    o = n(866842),
    a = n(95701),
    d = n(924985),
    c = n(458294),
    _ = n(309010);
function u(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        (0, s.ai)(e) ? (0, o.g)() : l.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: _.A.getVoiceChannelId(), selectedChannelId: _.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function g(e, t, n) {
    let { withVoiceChannels: s = !1, withCurrentVoiceChannel: l = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0,
        a = (0, r.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        u = (0, r.bG)([d.A], () => d.A.version),
        { currentVoiceChannelId: g, selectedChannelId: A } = (0, r.cf)([_.A], () => ({
            currentVoiceChannelId: _.A.getVoiceChannelId(),
            selectedChannelId: _.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            h(
                t,
                { currentVoiceChannelId: g, selectedChannelId: A },
                { withVoiceChannels: s, withCurrentVoiceChannel: l },
                o,
            ).map((e) => e.id),
        [t, n, a, u],
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: r, withCurrentVoiceChannel: s } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, a.tr)(e.type) || (r && (0, a.ay)(e.type)) || (s && (e.id === n || e.id === i))) && o.push(e);
        }, l),
        o
    );
}
