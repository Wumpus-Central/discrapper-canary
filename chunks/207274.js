n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(939249),
    o = n(17928),
    c = n(796774),
    d = n(209932),
    u = n(813564),
    p = n(792348),
    h = n(734057),
    m = n(451409),
    A = n(309010),
    x = n(287809),
    g = n(360729);
n(980504);
var f = n(189090),
    C = n(375708),
    y = n(617031),
    j = n(452933);
function E(e) {
    let { channelId: t } = e,
        n = (0, o.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        { experimental: a } = g.A.useExperiment({ guildId: n, location: "GuildRoom" }, { autoTrackExposure: !1 });
    l.useEffect(() => {
        a && (0, c.E7)({ disableAnalytics: !0 });
    }, [a]);
    let s = (0, o.bG)([d.A], () => d.A.getSound("0", "1")),
        r = (0, i.jsx)("img", { className: y.wZ, src: j.A, alt: C.intl.string(f.default["93KE7U"]) });
    return a && null != s
        ? (0, i.jsx)(v, { channelId: t, sound: s, children: r })
        : (0, i.jsx)("div", { className: y.p9, children: r });
}
function v(e) {
    let { channelId: t, sound: n, children: l } = e,
        a = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        c = (0, o.bG)([h.A], () => h.A.getChannel(t)),
        d = (0, o.bG)([m.Ay], () => m.Ay.isDeaf()),
        g = (0, o.bG)([A.A], () => A.A.getVoiceChannelId() === t),
        { playSoundboardSound: f } = (0, p.A)(n, t),
        C = g && (0, u.Ir)(a, n, c) && (0, u.Au)(c) && !d;
    return (0, i.jsx)(r.D, {
        className: s()(y.uA, C ? void 0 : y.r9),
        "aria-disabled": !C,
        onClick: C ? () => f() : void 0,
        children: l,
    });
}
