n.d(t, { A: () => y });
var i = n(477900),
    l = n(582128),
    a = n(939249),
    s = n(17928),
    r = n(866665),
    o = n(90804),
    c = n(734057),
    d = n(309010),
    u = n(446243),
    h = n(538638),
    p = n(558076),
    m = n(544299),
    A = n(996752),
    f = n(1195),
    x = n(375708),
    g = n(781505);
function C() {
    let e = l.useId();
    return (0, i.jsxs)("svg", {
        className: g.fA,
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        "aria-hidden": !0,
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
function y(e) {
    let { channelId: t, x: n, y, label: j, roomWidth: I } = e,
        E = (0, s.bG)([d.Ay], () => d.Ay.getVoiceChannelId() === t),
        N = (0, s.bG)([p.A], () =>
            p.A.getRoomUsers(t)
                .values()
                .some((e) => e.position?.x === n && e.position?.y === y),
        ),
        v = (0, s.bG)([c.A], () => c.A.getChannel(t)?.guild_id),
        b = l.useCallback(async () => {
            null != v &&
                (E
                    ? (0, u.AQ)(v, t, { user_position: { x: n, y } }).catch((e) => (0, h.b)({ silent: !0 }))
                    : ((0, u.TJ)({ x: n, y }), (await (0, o.A)({ channelId: t })) || (0, u.Ys)()));
        }, [E, v, t, n, y]),
        T = (0, m.Sb)({
            position: { x: n, y },
            targetLabel: x.intl.formatToPlainString(f.default.NYm6Cb, { seatLabel: j }),
        });
    if (N || null == v) return null;
    let { numericAvatarSize: _ } = (0, A.F)(I),
        R = 1.2 * Math.max(_, 24);
    return (0, i.jsx)(r.m, {
        text: E || null != T ? null : x.intl.string(x.t["96ANUN"]),
        children: (0, i.jsx)(a.D, {
            role: "listitem",
            "aria-label": j,
            className: g.am,
            style: { width: R, height: R, left: `calc(${n}% - ${R / 2}px)`, top: `calc(${y}% - ${R / 2}px)` },
            onClick: b,
            ...T,
            children: (0, i.jsx)(C, {}),
        }),
    });
}
