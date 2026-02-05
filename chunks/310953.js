n.d(t, { A: () => m, W: () => A }), n(321073);
var i = n(64700),
    s = n(311907),
    r = n(960755),
    a = n(994020),
    l = n(95701),
    o = n(924985),
    c = n(458294),
    d = n(309010),
    u = n(652215),
    _ = n(349828);
function m(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return g(
        e === _.V || e === u.YYv ? (0, a.g)() : r.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: d.A.getVoiceChannelId(), selectedChannelId: d.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function A(e, t, n) {
    let { withVoiceChannels: r = !1, withCurrentVoiceChannel: a = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 ? arguments[4] : void 0,
        u = (0, s.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        _ = (0, s.bG)([o.A], () => o.A.version),
        { currentVoiceChannelId: m, selectedChannelId: A } = (0, s.cf)([d.A], () => ({
            currentVoiceChannelId: d.A.getVoiceChannelId(),
            selectedChannelId: d.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            g(
                t,
                { currentVoiceChannelId: m, selectedChannelId: A },
                { withVoiceChannels: r, withCurrentVoiceChannel: a },
                l,
            ).map((e) => e.id),
        [t, n, u, _],
    );
}
function g(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: s, withCurrentVoiceChannel: r } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, l.tr)(e.type) || (s && (0, l.ay)(e.type)) || (r && (e.id === n || e.id === i))) && o.push(e);
        }, a),
        o
    );
}
