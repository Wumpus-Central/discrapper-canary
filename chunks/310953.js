"use strict";
n.d(t, { A: () => _, W: () => f }), n(321073);
var i = n(64700),
    r = n(17928),
    s = n(5180),
    a = n(960755),
    o = n(866842),
    l = n(95701),
    u = n(924985),
    c = n(458294),
    d = n(309010);
function _(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        (0, s.ai)(e) ? (0, o.g)() : a.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        { currentVoiceChannelId: d.A.getVoiceChannelId(), selectedChannelId: d.A.getChannelId() },
        { withVoiceChannels: t, withCurrentVoiceChannel: n },
        i,
    );
}
function f(e, t, n) {
    let { withVoiceChannels: s = !1, withCurrentVoiceChannel: a = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0,
        l = (0, r.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        _ = (0, r.bG)([u.A], () => u.A.version),
        { currentVoiceChannelId: f, selectedChannelId: p } = (0, r.cf)([d.A], () => ({
            currentVoiceChannelId: d.A.getVoiceChannelId(),
            selectedChannelId: d.A.getChannelId(),
        }));
    return (0, i.useMemo)(
        () =>
            h(
                t,
                { currentVoiceChannelId: f, selectedChannelId: p },
                { withVoiceChannels: s, withCurrentVoiceChannel: a },
                o,
            ).map((e) => e.id),
        [t, n, l, _],
    );
}
function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: i } = t,
        { withVoiceChannels: r, withCurrentVoiceChannel: s } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        o = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, l.tr)(e.type) || (r && (0, l.ay)(e.type)) || (s && (e.id === n || e.id === i))) && o.push(e);
        }, a),
        o
    );
}
