var i = n(477900),
    l = n(582128),
    a = n(821578),
    s = n(855986),
    r = n(796774),
    o = n(209932),
    d = n(458976),
    c = n(792348),
    u = n(734057),
    h = n(754712),
    p = n(309010),
    m = n(287809),
    A = n(920639),
    f = n(558076),
    g = n(360729),
    x = n(932453),
    C = n(538517);
n(980504);
var y = n(687782),
    j = n(792996),
    I = n(130390);
function N(e) {
    let { channelId: t, asset: n, position: a, width: r, sound: o } = e,
        f = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        g = (0, s.bG)([u.A], () => u.A.getChannel(t)),
        C = (0, s.bG)([h.Ay], () => h.Ay.isDeaf()),
        N = (0, s.bG)([p.Ay], () => p.Ay.getVoiceChannelId() === t),
        { playSoundboardSound: v } = (0, c.A)(o, t),
        E = N && (0, d.Ir)(f, o, g) && (0, d.Au)(g) && !C,
        b = l.useCallback(() => {
            v();
            let e = g?.id;
            null != e && (0, A.n0)({ interactionType: "duck_quacked", channelId: e });
        }, [v, g?.id]);
    return (0, i.jsx)(x.A, {
        asset: n,
        label: j.intl.string(y.default["93KE7U"]),
        position: a,
        width: r,
        disabled: !E,
        onClick: b,
        className: I.L,
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, position: n } = e,
                d = (0, s.bG)([f.A], () => f.A.getRoom(t)?.background ?? a.I.DEFAULT),
                { duck: c } = C.iX[d],
                h = (0, s.bG)([u.A], () => u.A.getChannel(t)?.guild_id),
                { interactionsEnabled: p } = (0, g.mf)(
                    { guildId: h, location: "GuildRoom" },
                    { autoTrackExposure: !1 },
                );
            l.useEffect(() => {
                p && (0, r.E7)({ disableAnalytics: !0 });
            }, [p]);
            let m = (0, s.bG)([o.A], () => o.A.getSound("0", "1"));
            return p && null != m
                ? (0, i.jsx)(N, { channelId: t, asset: c.asset, position: n, width: c.width, sound: m })
                : (0, i.jsx)(x.c, {
                      asset: c.asset,
                      label: j.intl.string(y.default["93KE7U"]),
                      position: n,
                      width: c.width,
                      className: I.L,
                  });
        },
    },
);
