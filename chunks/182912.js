n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(382222),
    o = n(435371),
    d = n(397927),
    c = n(713517),
    u = n(696451),
    _ = n(486020),
    m = n(562153),
    h = n(836629),
    p = n(754521);
let g = { mass: 1, tension: 170, friction: 26 };
function A(e) {
    let { className: t, guildId: n, channelId: r, members: c, ref: h, motion: A } = e,
        f = c.length > 4,
        C = f ? c.slice(0, 3) : c,
        I = f ? c.length - 4 + 1 : 0,
        E = Math.min(f ? C.length + 1 : C.length, 4),
        b = (A?.percentX ?? 0) * 6,
        v = (A?.percentY ?? 0) * 6,
        T = 1 + ((A?.proximity ?? 0) / 2) * 0.08,
        [y, S] = (0, d.zhh)(() => ({ x: 0, y: 0, scale: 1, config: g }));
    return (
        a.useEffect(() => {
            S({ x: b, y: v, scale: T });
        }, [b, v, T, S]),
        (0, i.jsxs)(s.animated.div, {
            ref: h,
            className: l()(p.gg, t),
            "data-count": E,
            "aria-hidden": !0,
            style: {
                transform: (0, s.to)([y.x, y.y, y.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                C.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: p.my,
                            children: (0, i.jsx)(o.m_, {
                                text: m.Ay.getName(n, r, e),
                                children: (0, i.jsx)(d.euF, {
                                    src: (function (e, t, n) {
                                        let i = u.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, _.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === E
                                            ? d._3J.SIZE_80
                                            : 2 === E && 0 === t
                                              ? d._3J.DEPRECATED_SIZE_60
                                              : 2 === E && 1 === t
                                                ? d._3J.SIZE_40
                                                : E > 2 && 0 === t
                                                  ? d._3J.DEPRECATED_SIZE_60
                                                  : E > 2 && 1 === t
                                                    ? d._3J.SIZE_48
                                                    : E > 2
                                                      ? d._3J.SIZE_40
                                                      : d._3J.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                f && (0, i.jsx)(x, { guildId: n, channelId: r, members: c, count: I }, "overflow"),
            ],
        })
    );
}
function x(e) {
    let { guildId: t, channelId: n, members: r, count: s } = e,
        o = a.useRef(null),
        { isHoveringOrFocusing: u } = (0, c.A)(o);
    return (0, i.jsx)(h.$, {
        targetElementRef: o,
        guildId: t,
        channelId: n,
        users: r,
        shouldShow: u,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(p.my, p.k2),
                ref: o,
                ...e,
                children: (0, i.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: s > 99 ? ">99" : `+${s}`,
                }),
            }),
    });
}
