n.d(t, {
    A: () => p,
    W: () => _,
}),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(960755),
    s = n(994020),
    o = n(95701),
    l = n(924985),
    c = n(458294),
    u = n(309010),
    d = n(652215),
    f = n(349828);

function p(e) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        e === f.V || e === d.YYv ? (0, s.g)() : a.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: u.A.getVoiceChannelId(),
            selectedChannelId: u.A.getChannelId(),
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: n,
        },
        r,
    );
}

function _(e, t, n) {
    let { withVoiceChannels: a = !1, withCurrentVoiceChannel: s = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0,
        d = (0, i.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
        f = (0, i.bG)([l.A], () => l.A.version),
        { currentVoiceChannelId: p, selectedChannelId: _ } = (0, i.cf)([u.A], () => ({
            currentVoiceChannelId: u.A.getVoiceChannelId(),
            selectedChannelId: u.A.getChannelId(),
        }));
    return (0, r.useMemo)(
        () =>
            h(
                t,
                {
                    currentVoiceChannelId: p,
                    selectedChannelId: _,
                },
                {
                    withVoiceChannels: a,
                    withCurrentVoiceChannel: s,
                },
                o,
            ).map((e) => e.id),
        [t, n, d, f],
    );
}

function h(e, t) {
    let { currentVoiceChannelId: n, selectedChannelId: r } = t,
        { withVoiceChannels: i, withCurrentVoiceChannel: a } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, o.tr)(e.type) || (i && (0, o.ay)(e.type)) || (a && (e.id === n || e.id === r))) && l.push(e);
        }, s),
        l
    );
}
