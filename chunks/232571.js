n.d(t, { A: () => g });
var i = n(477900),
    l = n(582128),
    a = n(939249),
    s = n(17928),
    r = n(866665),
    o = n(90804),
    c = n(734057),
    d = n(309010),
    u = n(446243),
    h = n(558076),
    p = n(996752),
    m = n(662731),
    A = n(375708),
    f = n(120546);
function x() {
    let e = l.useId();
    return (0, i.jsxs)("svg", {
        className: f.fA,
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("g", {
                className: f.ys,
                opacity: "0.2",
                filter: `url(#${e})`,
                children: (0, i.jsx)("circle", { className: f.GS, cx: "40", cy: "40", r: "20", fill: "white" }),
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
function g(e) {
    let { channelId: t, x: n, y: g, label: C, roomWidth: y } = e,
        j = (0, s.bG)([d.Ay], () => d.Ay.getVoiceChannelId() === t),
        v = (0, s.bG)([h.A], () =>
            h.A.getRoomUsers(t)
                .values()
                .some((e) => e.position?.x === n && e.position?.y === g),
        ),
        E = (0, s.bG)([c.A], () => c.A.getChannel(t)?.guild_id),
        N = l.useCallback(() => {
            null != E &&
                (j
                    ? (0, u.AQ)(E, t, { user_position: { x: n, y: g } })
                    : ((0, u.TJ)({ x: n, y: g }), (0, o.A)({ channelId: t })));
        }, [j, E, t, n, g]);
    if (v || null == E) return null;
    let { numericAvatarSize: I } = (0, p.F)(y),
        b = 1.2 * Math.max(I, 24);
    return (0, i.jsx)(r.m, {
        text: j ? null : A.intl.string(A.t["96ANUN"]),
        children: (0, i.jsx)(a.D, {
            "aria-label": A.intl.formatToPlainString(m.default.X84itm, { seatLabel: C }),
            className: f.am,
            style: { width: b, height: b, left: `calc(${n}% - ${b / 2}px)`, top: `calc(${g}% - ${b / 2}px)` },
            onClick: N,
            children: (0, i.jsx)(x, {}),
        }),
    });
}
