n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(939249),
    s = n(17928),
    r = n(990078),
    o = n(90804),
    c = n(734057),
    d = n(309010),
    u = n(408822),
    p = n(920639),
    h = n(558076),
    m = n(519342),
    A = n(662731),
    x = n(375708),
    g = n(843290);
function f() {
    let e = l.useId();
    return (0, i.jsxs)("svg", {
        className: g.fA,
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("g", {
                className: g.ys,
                opacity: "0.2",
                filter: `url(#${e})`,
                children: (0, i.jsx)("circle", { className: g.GS, cx: "40", cy: "40", r: "20", fill: "white" }),
            }),
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("filter", {
                    id: e,
                    x: "0",
                    y: "0",
                    width: "80",
                    height: "80",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, i.jsx)("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "10" }),
                        (0, i.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function C(e) {
    let { channelId: t, name: n, x: C, y, roomWidth: E } = e,
        N = (0, s.bG)([d.A], () => d.A.getVoiceChannelId() === t),
        v = (0, s.bG)([h.A], () =>
            h.A.getRoomUsers(t)
                .values()
                .some((e) => e.position?.x === C && e.position?.y === y),
        ),
        j = (0, s.bG)([c.A], () => c.A.getChannel(t)?.guild_id),
        I = l.useCallback(() => {
            null != j &&
                (N
                    ? (0, u.AQ)(j, t, { user_position: { x: C, y } })
                    : ((0, u.TJ)({ x: C, y }), (0, o.A)({ channelId: t })),
                (0, p.Yv)({ guildId: j, channelId: t, seatName: n, seatPosition: { x: C, y } }));
        }, [N, j, t, n, C, y]);
    if (v || null == j) return null;
    let { numericAvatarSize: T } = (0, m.F)(E),
        _ = 1.2 * Math.max(T, 24);
    return (0, i.jsx)(r.m, {
        text: N ? null : x.intl.string(x.t["96ANUN"]),
        children: (0, i.jsx)(a.D, {
            "aria-label": x.intl.string(A.default.Vm2OFQ),
            className: g.am,
            style: { width: _, height: _, left: `calc(${C}% - ${_ / 2}px)`, top: `calc(${y}% - ${_ / 2}px)` },
            onClick: I,
            children: (0, i.jsx)(f, {}),
        }),
    });
}
