n.d(t, { A: () => N });
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
    A = n(309010),
    f = n(287809),
    x = n(920639),
    g = n(360729),
    C = n(544299);
n(980504);
var y = n(1195),
    j = n(375708),
    I = n(130390),
    E = n(452933);
function N(e) {
    let { channelId: t, position: n } = e,
        a = (0, o.bG)([p.A], () => p.A.getChannel(t)?.guild_id),
        { interactionsEnabled: s } = g.A.useExperiment(
            { guildId: a, location: "GuildRoom" },
            { autoTrackExposure: !1 },
        );
    l.useEffect(() => {
        s && (0, c.E7)({ disableAnalytics: !0 });
    }, [s]);
    let r = (0, o.bG)([d.A], () => d.A.getSound("0", "1")),
        u = (0, i.jsx)("img", { className: I.wZ, src: E.A, alt: j.intl.string(y.default["93KE7U"]) }),
        h = { insetInlineStart: `${n.x}%`, insetBlockStart: `${n.y}%` };
    return s && null != r
        ? (0, i.jsx)(v, { channelId: t, position: n, positionStyle: h, sound: r, children: u })
        : (0, i.jsx)("div", { role: "listitem", className: I.p9, style: h, children: u });
}
function v(e) {
    let { channelId: t, position: n, positionStyle: a, sound: c, children: d } = e,
        g = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        E = (0, o.bG)([p.A], () => p.A.getChannel(t)),
        N = (0, o.bG)([m.Ay], () => m.Ay.isDeaf()),
        v = (0, o.bG)([A.Ay], () => A.Ay.getVoiceChannelId() === t),
        { playSoundboardSound: b } = (0, h.A)(c, t),
        T = v && (0, u.Ir)(g, c, E) && (0, u.Au)(E) && !N,
        _ = l.useCallback(() => {
            if (T) {
                b();
                let e = E?.id;
                null != e && (0, x.n0)({ interactionType: "duck_quacked", channelId: e });
            }
        }, [T, b, E?.id]),
        R = (0, C.Sb)({ position: n, targetLabel: j.intl.string(y.default["93KE7U"]) });
    return (0, i.jsx)(r.D, {
        role: "listitem",
        className: s()(I.uA, T ? void 0 : I.r9),
        style: a,
        "aria-disabled": !T && null == R,
        onClick: _,
        ...R,
        children: d,
    });
}
