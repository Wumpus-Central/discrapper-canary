n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(939249),
    s = n(17928),
    r = n(990078),
    o = n(90804),
    c = n(734057),
    d = n(309010),
    u = n(408822),
    p = n(558076),
    h = n(519342),
    m = n(662731),
    A = n(375708),
    x = n(843290);
function g() {
    let e = (0, l.useId)();
    return (0, i.jsxs)("svg", {
        className: x.fA,
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
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
function f(e) {
    let { channelId: t, x: n, y: l, roomWidth: f } = e,
        C = (0, s.bG)([d.A], () => d.A.getVoiceChannelId() === t),
        y = (0, s.bG)([p.A], () => {
            let e = p.A.getRoom(t);
            return null != e && e.users.some((e) => e.position?.x === n && e.position?.y === l);
        }),
        E = (0, s.bG)([c.A], () => c.A.getChannel(t)?.guild_id);
    if (y || null == E) return null;
    let { numericAvatarSize: N } = (0, h.F)(f),
        j = 1.2 * Math.max(N, 24),
        v = async () => {
            C
                ? await (0, u.AQ)(E, t, { user_position: { x: n, y: l } })
                : ((0, u.TJ)({ x: n, y: l }), await (0, o.A)({ channelId: t }));
        };
    return (0, i.jsx)(r.m, {
        text: C ? null : A.intl.string(A.t["96ANUN"]),
        children: (0, i.jsx)(a.D, {
            "aria-label": A.intl.string(m.default.Vm2OFQ),
            className: x.am,
            style: { width: j, height: j, left: `calc(${n}% - ${j / 2}px)`, top: `calc(${l}% - ${j / 2}px)` },
            onClick: v,
            children: (0, i.jsx)(g, {}),
        }),
    });
}
