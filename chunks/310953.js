n.d(t, { A: () => A, W: () => E }), n(321073);
var i = n(64700),
    r = n(311907),
    a = n(960755),
    l = n(866842),
    s = n(95701),
    o = n(924985),
    d = n(458294),
    _ = n(309010),
    c = n(652215),
    u = n(349828);
function A(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return I(
        e === u.Vc || e === c.YYv ? (0, l.g3)() : a.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: _.A.getVoiceChannelId(), selectedChannelId: _.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function E(e, t, n) {
    let { withVoiceChannels: a = !1, withCurrentVoiceChannel: l = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        s = arguments.length > 4 ? arguments[4] : void 0,
        c = (0, r.bG)([d.default], () => d.default.getGuildChangeSentinel(e)),
        u = (0, r.bG)([o.A], () => o.A.version),
        { currentVoiceChannelId: A, selectedChannelId: E } = (0, r.cf)([_.A], () => ({
            currentVoiceChannelId: _.A.getVoiceChannelId(),
            selectedChannelId: _.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            I(
                t,
                { currentVoiceChannelId: A, selectedChannelId: E },
                { withVoiceChannels: a, withCurrentVoiceChannel: l },
                s,
            ).map((e) => e.id),
        [t, n, c, u],
    );
}
function I(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: r, withCurrentVoiceChannel: a } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, s.tr)(e.type) || (r && (0, s.ay)(e.type)) || (a && (e.id === n || e.id === i))) && o.push(e);
        }, l),
        o
    );
}
