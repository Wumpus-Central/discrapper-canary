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
    m = n(186295),
    A = n(309010),
    x = n(287809),
    g = n(920639),
    f = n(360729);
n(980504);
var C = n(662731),
    y = n(375708),
    j = n(364103),
    v = n(452933);
function E(e) {
    let { channelId: t } = e,
        n = (0, o.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        { experimental: a } = f.A.useExperiment({ guildId: n, location: "GuildRoom" }, { autoTrackExposure: !1 });
    l.useEffect(() => {
        a && (0, c.E7)({ disableAnalytics: !0 });
    }, [a]);
    let s = (0, o.bG)([d.A], () => d.A.getSound("0", "1")),
        r = (0, i.jsx)("img", { className: j.wZ, src: v.A, alt: y.intl.string(C.default["93KE7U"]) });
    return a && null != s
        ? (0, i.jsx)(N, { channelId: t, sound: s, children: r })
        : (0, i.jsx)("div", { className: j.p9, children: r });
}
function N(e) {
    let { channelId: t, sound: n, children: a } = e,
        c = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        d = (0, o.bG)([h.A], () => h.A.getChannel(t)),
        f = (0, o.bG)([m.Ay], () => m.Ay.isDeaf()),
        C = (0, o.bG)([A.Ay], () => A.Ay.getVoiceChannelId() === t),
        { playSoundboardSound: y } = (0, p.A)(n, t),
        v = C && (0, u.Ir)(c, n, d) && (0, u.Au)(d) && !f,
        E = l.useCallback(() => {
            if (v) {
                y();
                let e = d?.id;
                null != e && (0, g.n0)({ interactionType: "duck_quacked", channelId: e });
            }
        }, [v, y, d?.id]);
    return (0, i.jsx)(r.D, { className: s()(j.uA, v ? void 0 : j.r9), "aria-disabled": !v, onClick: E, children: a });
}
