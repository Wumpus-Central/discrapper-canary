n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(939249),
    o = n(17928),
    c = n(796774),
    d = n(209932),
    u = n(813564),
    h = n(792348),
    p = n(734057),
    m = n(453028),
    f = n(309010),
    A = n(287809),
    x = n(920639),
    g = n(360729);
n(980504);
var C = n(1195),
    y = n(375708),
    j = n(130390),
    I = n(452933);
function v(e) {
    let { channelId: t } = e,
        n = (0, o.bG)([p.A], () => p.A.getChannel(t)?.guild_id),
        { interactionsEnabled: a } = g.A.useExperiment(
            { guildId: n, location: "GuildRoom" },
            { autoTrackExposure: !1 },
        );
    l.useEffect(() => {
        a && (0, c.E7)({ disableAnalytics: !0 });
    }, [a]);
    let s = (0, o.bG)([d.A], () => d.A.getSound("0", "1")),
        r = (0, i.jsx)("img", { className: j.wZ, src: I.A, alt: y.intl.string(C.default["93KE7U"]) });
    return a && null != s
        ? (0, i.jsx)(N, { channelId: t, sound: s, children: r })
        : (0, i.jsx)("div", { role: "listitem", className: j.p9, children: r });
}
function N(e) {
    let { channelId: t, sound: n, children: a } = e,
        c = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        d = (0, o.bG)([p.A], () => p.A.getChannel(t)),
        g = (0, o.bG)([m.Ay], () => m.Ay.isDeaf()),
        C = (0, o.bG)([f.Ay], () => f.Ay.getVoiceChannelId() === t),
        { playSoundboardSound: y } = (0, h.A)(n, t),
        I = C && (0, u.Ir)(c, n, d) && (0, u.Au)(d) && !g,
        v = l.useCallback(() => {
            if (I) {
                y();
                let e = d?.id;
                null != e && (0, x.n0)({ interactionType: "duck_quacked", channelId: e });
            }
        }, [I, y, d?.id]);
    return (0, i.jsx)(r.D, {
        role: "listitem",
        className: s()(j.uA, I ? void 0 : j.r9),
        "aria-disabled": !I,
        onClick: v,
        children: a,
    });
}
