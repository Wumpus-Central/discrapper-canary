n.d(t, { A: () => u, W: () => A }), n(321073);
var i = n(64700),
    r = n(311907),
    a = n(5180),
    s = n(960755),
    l = n(866842),
    o = n(95701),
    d = n(924985),
    c = n(458294),
    _ = n(309010);
function u(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return E(
        (0, a.ai)(e) ? (0, l.g3)() : s.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: _.A.getVoiceChannelId(), selectedChannelId: _.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function A(e, t, n) {
    let { withVoiceChannels: a = !1, withCurrentVoiceChannel: s = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 ? arguments[4] : void 0,
        o = (0, r.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        u = (0, r.bG)([d.A], () => d.A.version),
        { currentVoiceChannelId: A, selectedChannelId: g } = (0, r.cf)([_.A], () => ({
            currentVoiceChannelId: _.A.getVoiceChannelId(),
            selectedChannelId: _.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            E(
                t,
                { currentVoiceChannelId: A, selectedChannelId: g },
                { withVoiceChannels: a, withCurrentVoiceChannel: s },
                l,
            ).map((e) => e.id),
        [t, n, o, u],
    );
}
function E(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: r, withCurrentVoiceChannel: a } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, o.tr)(e.type) || (r && (0, o.ay)(e.type)) || (a && (e.id === n || e.id === i))) && l.push(e);
        }, s),
        l
    );
}
