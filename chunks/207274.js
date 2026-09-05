n.d(t, { A: () => N });
var i = n(477900),
    l = n(582128),
    a = n(821578),
    s = n(17928),
    r = n(796774),
    o = n(209932),
    c = n(813564),
    d = n(792348),
    u = n(734057),
    h = n(303277),
    p = n(309010),
    m = n(287809),
    A = n(920639),
    f = n(558076),
    x = n(360729),
    g = n(932453),
    C = n(739820);
n(980504);
var y = n(977241),
    j = n(375708),
    I = n(130390);
function N(e) {
    let { channelId: t, position: n } = e,
        c = (0, s.bG)([f.A], () => f.A.getRoom(t)?.background ?? a.I.DEFAULT),
        { duck: d } = C.iX[c],
        h = (0, s.bG)([u.A], () => u.A.getChannel(t)?.guild_id),
        { interactionsEnabled: p } = (0, x.mf)({ guildId: h, location: "GuildRoom" }, { autoTrackExposure: !1 });
    l.useEffect(() => {
        p && (0, r.E7)({ disableAnalytics: !0 });
    }, [p]);
    let m = (0, s.bG)([o.A], () => o.A.getSound("0", "1"));
    return p && null != m
        ? (0, i.jsx)(v, { channelId: t, asset: d.asset, position: n, width: d.width, sound: m })
        : (0, i.jsx)(g.c, {
              asset: d.asset,
              label: j.intl.string(y.default["93KE7U"]),
              position: n,
              width: d.width,
              className: I.L,
          });
}
function v(e) {
    let { channelId: t, asset: n, position: a, width: r, sound: o } = e,
        f = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        x = (0, s.bG)([u.A], () => u.A.getChannel(t)),
        C = (0, s.bG)([h.Ay], () => h.Ay.isDeaf()),
        N = (0, s.bG)([p.Ay], () => p.Ay.getVoiceChannelId() === t),
        { playSoundboardSound: v } = (0, d.A)(o, t),
        E = N && (0, c.Ir)(f, o, x) && (0, c.Au)(x) && !C,
        b = l.useCallback(() => {
            v();
            let e = x?.id;
            null != e && (0, A.n0)({ interactionType: "duck_quacked", channelId: e });
        }, [v, x?.id]);
    return (0, i.jsx)(g.A, {
        asset: n,
        label: j.intl.string(y.default["93KE7U"]),
        position: a,
        width: r,
        disabled: !E,
        onClick: b,
        className: I.L,
    });
}
