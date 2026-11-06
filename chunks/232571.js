var i = n(477900),
    l = n(582128),
    a = n(855986),
    s = n(866665),
    r = n(939249),
    o = n(90804),
    c = n(734057),
    d = n(309010),
    u = n(303227),
    h = n(538638),
    p = n(558076),
    m = n(544299),
    A = n(996752),
    f = n(687782),
    g = n(792996),
    x = n(781505);
function C() {
    let e = l.useId();
    return (0, i.jsxs)("svg", {
        className: x.fA,
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        "aria-hidden": !0,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("g", {
                className: x.ys,
                opacity: "0.2",
                filter: `url(#${e})`,
                children: (0, i.jsx)("circle", { className: x.GS, cx: "40", cy: "40", r: "20", fill: "white" }),
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, x: n, y, label: I, roomWidth: j, seat: v } = e,
                N = (0, a.bG)([d.Ay], () => d.Ay.getVoiceChannelId() === t),
                E = (0, a.bG)([p.A], () =>
                    p.A.getRoomUsers(t)
                        .values()
                        .some((e) => e.seat === v || (e.position?.x === n && e.position?.y === y)),
                ),
                b = (0, a.bG)([c.A], () => c.A.getChannel(t)?.guild_id),
                S = l.useCallback(async () => {
                    null != b &&
                        (N
                            ? (0, u.AQ)(b, t, { user_position: { x: n, y }, user_seat: v }).catch((e) =>
                                  (0, h.b)({ silent: !0 }),
                              )
                            : ((0, u.TJ)({ x: n, y }, v), (await (0, o.A)({ channelId: t })) || (0, u.Ys)()));
                }, [N, b, t, n, y, v]),
                T = (0, m.Sb)({
                    position: { x: n, y },
                    targetLabel: g.intl.formatToPlainString(f.default.NYm6Cb, { seatLabel: I }),
                });
            if (E || null == b) return null;
            let { numericAvatarSize: _ } = (0, A.F)(j),
                R = 1.2 * Math.max(_, 24);
            return (0, i.jsx)(s.m, {
                text: N || null != T ? null : g.intl.string(g.t["96ANUN"]),
                children: (0, i.jsx)(r.D, {
                    role: "listitem",
                    "aria-label": I,
                    className: x.am,
                    style: { width: R, height: R, left: `calc(${n}% - ${R / 2}px)`, top: `calc(${y}% - ${R / 2}px)` },
                    onClick: S,
                    ...T,
                    children: (0, i.jsx)(C, {}),
                }),
            });
        },
    },
);
