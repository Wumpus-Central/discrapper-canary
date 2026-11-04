n(321073);
var i = n(582128),
    r = n(855986),
    a = n(796637),
    s = n(5180),
    l = n(960755),
    o = n(95701),
    d = n(924985),
    c = n(458294),
    u = n(309010);
function _(e, t) {
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 ? arguments[2] : void 0;
            return _(
                (0, s.ai)(e) ? (0, a.g)() : l.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
                { currentVoiceChannelId: u.Ay.getVoiceChannelId(), selectedChannelId: u.Ay.getChannelId() },
                { withVoiceChannels: t, withCurrentVoiceChannel: n },
                i,
            );
        },
        W: function (e, t, n) {
            let { withVoiceChannels: a = !1, withCurrentVoiceChannel: s = !1 } =
                    arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                l = arguments.length > 4 ? arguments[4] : void 0,
                o = (0, r.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
                E = (0, r.bG)([d.A], () => d.A.version),
                { currentVoiceChannelId: A, selectedChannelId: h } = (0, r.cf)([u.Ay], () => ({
                    currentVoiceChannelId: u.Ay.getVoiceChannelId(),
                    selectedChannelId: u.Ay.getChannelId(),
                }));
            return (0, i.useMemo)(
                () =>
                    _(
                        t,
                        { currentVoiceChannelId: A, selectedChannelId: h },
                        { withVoiceChannels: a, withCurrentVoiceChannel: s },
                        l,
                    ).map((e) => e.id),
                [t, n, o, E],
            );
        },
    },
);
