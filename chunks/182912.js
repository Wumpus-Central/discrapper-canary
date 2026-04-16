n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(407045),
    o = n(435371),
    d = n(397927),
    c = n(696451),
    u = n(486020),
    _ = n(562153),
    m = n(836629),
    h = n(531657);
let p = { mass: 1, tension: 170, friction: 26 };
function g(e) {
    let { className: t, guildId: n, channelId: l, members: m, ref: g, motion: x } = e,
        f = m.length > 4,
        C = f ? m.slice(0, 3) : m,
        E = f ? m.length - 4 + 1 : 0,
        I = Math.min(f ? C.length + 1 : C.length, 4),
        v = (x?.percentX ?? 0) * 6,
        b = (x?.percentY ?? 0) * 6,
        T = 1 + ((x?.proximity ?? 0) / 2) * 0.08,
        [y, S] = (0, d.zhh)(() => ({ x: 0, y: 0, scale: 1, config: p }));
    return (
        a.useEffect(() => {
            S({ x: v, y: b, scale: T });
        }, [v, b, T, S]),
        (0, i.jsxs)(r.animated.div, {
            ref: g,
            className: s()(h.gg, t),
            "data-count": I,
            "aria-hidden": !0,
            style: {
                transform: (0, r.to)([y.x, y.y, y.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                C.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: h.my,
                            children: (0, i.jsx)(o.m_, {
                                text: _.Ay.getName(n, l, e),
                                children: (0, i.jsx)(d.euF, {
                                    src: (function (e, t, n) {
                                        let i = c.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, u.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === I
                                            ? d._3J.SIZE_80
                                            : 2 === I && 0 === t
                                              ? d._3J.DEPRECATED_SIZE_60
                                              : 2 === I && 1 === t
                                                ? d._3J.SIZE_40
                                                : I > 2 && 0 === t
                                                  ? d._3J.DEPRECATED_SIZE_60
                                                  : I > 2 && 1 === t
                                                    ? d._3J.SIZE_48
                                                    : I > 2
                                                      ? d._3J.SIZE_40
                                                      : d._3J.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                f && (0, i.jsx)(A, { guildId: n, channelId: l, members: m, count: E }, "overflow"),
            ],
        })
    );
}
function A(e) {
    let { guildId: t, channelId: n, members: a, count: l } = e,
        { triggerRef: r, shouldShow: o, onPopoutHoverOrFocus: c } = (0, m.o)();
    return (0, i.jsx)(m.$, {
        targetElementRef: r,
        guildId: t,
        channelId: n,
        users: a,
        shouldShow: o,
        onHoverOrFocus: c,
        children: (e) =>
            (0, i.jsx)("div", {
                className: s()(h.my, h.k2),
                ref: r,
                ...e,
                children: (0, i.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
