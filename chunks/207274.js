n.d(t, { A: () => b });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(821578),
    o = n(939249),
    c = n(17928),
    d = n(796774),
    u = n(209932),
    h = n(813564),
    p = n(792348),
    m = n(734057),
    A = n(453028),
    f = n(309010),
    x = n(287809),
    g = n(920639),
    C = n(558076),
    y = n(360729),
    j = n(544299),
    I = n(761583);
n(980504);
var N = n(1195),
    v = n(375708),
    E = n(130390);
function b(e) {
    let { channelId: t, position: n } = e,
        a = (0, c.bG)([C.A], () => C.A.getRoom(t)?.background ?? r.I.DEFAULT),
        { duck: s } = I.iX[a],
        o = (0, c.bG)([m.A], () => m.A.getChannel(t)?.guild_id),
        { interactionsEnabled: h } = (0, y.mf)({ guildId: o, location: "GuildRoom" }, { autoTrackExposure: !1 });
    l.useEffect(() => {
        h && (0, d.E7)({ disableAnalytics: !0 });
    }, [h]);
    let p = (0, c.bG)([u.A], () => u.A.getSound("0", "1")),
        A = (0, i.jsx)("img", { className: E.wZ, src: s.asset, alt: v.intl.string(N.default["93KE7U"]) }),
        f = { insetInlineStart: `${n.x}%`, insetBlockStart: `${n.y}%`, width: `${s.width}%` };
    return h && null != p
        ? (0, i.jsx)(T, { channelId: t, position: n, positionStyle: f, sound: p, children: A })
        : (0, i.jsx)("div", { role: "listitem", className: E.p9, style: f, children: A });
}
function T(e) {
    let { channelId: t, position: n, positionStyle: a, sound: r, children: d } = e,
        u = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        C = (0, c.bG)([m.A], () => m.A.getChannel(t)),
        y = (0, c.bG)([A.Ay], () => A.Ay.isDeaf()),
        I = (0, c.bG)([f.Ay], () => f.Ay.getVoiceChannelId() === t),
        { playSoundboardSound: b } = (0, p.A)(r, t),
        T = I && (0, h.Ir)(u, r, C) && (0, h.Au)(C) && !y,
        _ = l.useCallback(() => {
            if (T) {
                b();
                let e = C?.id;
                null != e && (0, g.n0)({ interactionType: "duck_quacked", channelId: e });
            }
        }, [T, b, C?.id]),
        R = (0, j.Sb)({ position: n, targetLabel: v.intl.string(N.default["93KE7U"]) });
    return (0, i.jsx)(o.D, {
        role: "listitem",
        className: s()(E.uA, T ? void 0 : E.r9),
        style: a,
        "aria-disabled": !T && null == R,
        onClick: _,
        ...R,
        children: d,
    });
}
