n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(419354),
    o = n(990078),
    d = n(778712),
    c = n(717421),
    u = n(97808),
    m = n(834730),
    _ = n(696451),
    h = n(486020),
    p = n(562153),
    g = n(836629),
    A = n(531657);
let f = { mass: 1, tension: 170, friction: 26 };
function x(e) {
    let { className: t, guildId: n, channelId: a, members: m, ref: g, motion: x } = e,
        E = m.length > 4,
        I = E ? m.slice(0, 3) : m,
        v = E ? m.length - 4 + 1 : 0,
        b = Math.min(E ? I.length + 1 : I.length, 4),
        T = (x?.percentX ?? 0) * 6,
        S = (x?.percentY ?? 0) * 6,
        y = 1 + ((x?.proximity ?? 0) / 2) * 0.08,
        [N, j] = (0, c.z)(() => ({ x: 0, y: 0, scale: 1, config: f }));
    return (
        l.useEffect(() => {
            j({ x: T, y: S, scale: y });
        }, [T, S, y, j]),
        (0, i.jsxs)(r.animated.div, {
            ref: g,
            className: s()(A.gg, t),
            "data-count": b,
            "aria-hidden": !0,
            style: {
                transform: (0, r.to)([N.x, N.y, N.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                I.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: A.my,
                            children: (0, i.jsx)(o.m, {
                                text: p.Ay.getName(n, a, e),
                                children: (0, i.jsx)(u.eu, {
                                    src: (function (e, t, n) {
                                        let i = _.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, h.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === b
                                            ? d._3.SIZE_80
                                            : 2 === b && 0 === t
                                              ? d._3.DEPRECATED_SIZE_60
                                              : 2 === b && 1 === t
                                                ? d._3.SIZE_40
                                                : b > 2 && 0 === t
                                                  ? d._3.DEPRECATED_SIZE_60
                                                  : b > 2 && 1 === t
                                                    ? d._3.SIZE_48
                                                    : b > 2
                                                      ? d._3.SIZE_40
                                                      : d._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                E && (0, i.jsx)(C, { guildId: n, channelId: a, members: m, count: v }, "overflow"),
            ],
        })
    );
}
function C(e) {
    let { guildId: t, channelId: n, members: l, count: a } = e,
        { triggerRef: r, shouldShow: o, onPopoutHoverOrFocus: d } = (0, g.o)();
    return (0, i.jsx)(g.$, {
        targetElementRef: r,
        guildId: t,
        channelId: n,
        users: l,
        shouldShow: o,
        onHoverOrFocus: d,
        children: (e) =>
            (0, i.jsx)("div", {
                className: s()(A.my, A.k2),
                ref: r,
                ...e,
                children: (0, i.jsx)(m.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: a > 99 ? ">99" : `+${a}`,
                }),
            }),
    });
}
