n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(880013),
    o = n(397927),
    d = n(486020),
    c = n(795924);
let u = { mass: 1, tension: 170, friction: 26 };
function _(e) {
    let { className: t, voiceStates: n, guildId: r, ref: _, motion: m } = e,
        h = n.length > 4,
        p = h ? n.slice(0, 3) : n,
        g = h ? n.length - 4 + 1 : 0,
        A = Math.min(h ? p.length + 1 : p.length, 4),
        x = (m?.percentX ?? 0) * 6,
        f = (m?.percentY ?? 0) * 6,
        C = 1 + ((m?.proximity ?? 0) / 2) * 0.08,
        [I, E] = (0, o.zhh)(() => ({ x: 0, y: 0, scale: 1, config: u }));
    return (
        a.useEffect(() => {
            E({ x: x, y: f, scale: C });
        }, [x, f, C, E]),
        (0, i.jsxs)(s.animated.div, {
            ref: _,
            className: l()(c.gg, t),
            "data-count": A,
            "aria-hidden": !0,
            style: {
                transform: (0, s.to)([I.x, I.y, I.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                p.map((e, t) => {
                    var n;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: c.my,
                            children: (0, i.jsx)(o.euF, {
                                src:
                                    ((n = 0 === t ? 80 : 60),
                                    (null != e.member ? (0, d.xT)(e.member) : null) ?? e.user.getAvatarURL(r, n)),
                                size:
                                    1 === A
                                        ? o._3J.SIZE_80
                                        : 2 === A && 0 === t
                                          ? o._3J.DEPRECATED_SIZE_60
                                          : 2 === A && 1 === t
                                            ? o._3J.SIZE_40
                                            : A > 2 && 0 === t
                                              ? o._3J.DEPRECATED_SIZE_60
                                              : A > 2 && 1 === t
                                                ? o._3J.SIZE_48
                                                : A > 2
                                                  ? o._3J.SIZE_40
                                                  : o._3J.SIZE_48,
                                "aria-hidden": !0,
                            }),
                        },
                        e.user.id,
                    );
                }),
                h &&
                    (0, i.jsx)(
                        "div",
                        {
                            className: l()(c.my, c.k2),
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                children: g > 99 ? ">99" : `+${g}`,
                            }),
                        },
                        "overflow",
                    ),
            ],
        })
    );
}
