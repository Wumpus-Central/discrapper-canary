n.d(t, { A: () => j });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(866665),
    r = n(939249),
    o = n(90804),
    c = n(734057),
    d = n(309010),
    u = n(446243),
    h = n(538638),
    p = n(558076),
    m = n(544299),
    A = n(996752),
    f = n(618922),
    x = n(105292),
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
function j(e) {
    let { channelId: t, x: n, y: j, label: y, roomWidth: I, seat: N } = e,
        v = (0, a.bG)([d.Ay], () => d.Ay.getVoiceChannelId() === t),
        E = (0, a.bG)([p.A], () =>
            p.A.getRoomUsers(t)
                .values()
                .some((e) => e.seat === N || (e.position?.x === n && e.position?.y === j)),
        ),
        b = (0, a.bG)([c.A], () => c.A.getChannel(t)?.guild_id),
        S = l.useCallback(async () => {
            null != b &&
                (v
                    ? (0, u.AQ)(b, t, { user_position: { x: n, y: j }, user_seat: N }).catch((e) =>
                          (0, h.b)({ silent: !0 }),
                      )
                    : ((0, u.TJ)({ x: n, y: j }, N), (await (0, o.A)({ channelId: t })) || (0, u.Ys)()));
        }, [v, b, t, n, j, N]),
        T = (0, m.Sb)({
            position: { x: n, y: j },
            targetLabel: x.intl.formatToPlainString(f.default.NYm6Cb, { seatLabel: y }),
        });
    if (E || null == b) return null;
    let { numericAvatarSize: _ } = (0, A.F)(I),
        R = 1.2 * Math.max(_, 24);
    return (0, i.jsx)(s.m, {
        text: v || null != T ? null : x.intl.string(x.t["96ANUN"]),
        children: (0, i.jsx)(r.D, {
            role: "listitem",
            "aria-label": y,
            className: g.am,
            style: { width: R, height: R, left: `calc(${n}% - ${R / 2}px)`, top: `calc(${j}% - ${R / 2}px)` },
            onClick: S,
            ...T,
            children: (0, i.jsx)(C, {}),
        }),
    });
}
