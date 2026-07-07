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
    A = n(287809),
    x = n(360729);
n(980504);
var g = n(662731),
    f = n(375708),
    C = n(364103),
    y = n(452933);
function E(e) {
    let { channelId: t } = e,
        n = (0, o.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        { experimental: a } = x.A.useExperiment({ guildId: n, location: "GuildRoom" }, { autoTrackExposure: !1 });
    l.useEffect(() => {
        a && (0, c.E7)({ disableAnalytics: !0 });
    }, [a]);
    let r = (0, o.bG)([d.A], () => d.A.getSound("0", "1")),
        u = (0, o.bG)([d.A], () => d.A.isPlayingSound("1")),
        p = (0, i.jsx)("img", {
            className: s()(C.wZ, { [C.mW]: u && a }),
            src: y.A,
            alt: f.intl.string(g.default["93KE7U"]),
        });
    return a && null != r
        ? (0, i.jsx)(j, { channelId: t, sound: r, isQuackPlaying: u, children: p })
        : (0, i.jsx)("div", { className: C.p9, children: p });
}
function j(e) {
    let { channelId: t, sound: n, children: l } = e,
        a = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        c = (0, o.bG)([h.A], () => h.A.getChannel(t)),
        d = (0, o.bG)([m.Ay], () => m.Ay.isDeaf()),
        { playSoundboardSound: x } = (0, p.A)(n, t),
        g = (0, u.Ir)(a, n, c) && (0, u.Au)(c) && !d;
    return (0, i.jsx)(r.D, {
        className: s()(C.uA, g ? void 0 : C.r9),
        "aria-disabled": !g,
        onClick: g ? () => x() : void 0,
        children: l,
    });
}
