var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(855986),
    l = n(628274),
    o = n(939249),
    d = n(477155),
    c = n(534514),
    u = n(235986),
    _ = n(282413),
    E = n(495867),
    A = n(6155),
    f = n(919706),
    h = n(792996),
    I = n(967481);
function p(e) {
    let { title: t, onJumpToChannel: n, idle: r, preventIdleComponent: a } = e,
        l = (0, s.bG)([E.A], () => E.A.getChannelId()),
        u = null != l ? (0, i.jsx)(A.A, { voiceChannelId: l, idle: r }) : null;
    return (0, i.jsxs)(a, {
        className: I.Nc,
        children: [
            (0, i.jsxs)(o.D, {
                className: I.qd,
                onClick: n,
                children: [
                    (0, i.jsx)(d.ArrowSmallLeftIcon, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": h.intl.string(h.t.mSfLs0),
                        className: I.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, i.jsx)(c.D, {
                        variant: "heading-sm/medium",
                        className: I.TK,
                        color: "text-overlay-light",
                        children: t,
                    }),
                ],
            }),
            u,
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                children: t,
                idle: n,
                onJumpToChannel: r,
                backgroundKey: s,
                onActive: o,
                onForceIdle: d,
                renderBottomLeftControls: c,
                renderBottomRightControls: E,
                screenMessage: A,
                hideControls: h = !1,
                className: m,
                innerClassName: g,
                videoControlsClassName: T,
                ...S
            } = e;
            return (0, i.jsxs)("div", {
                onMouseMove: o,
                onMouseDown: o,
                onMouseLeave: d,
                className: a()(I.Hu, { [I.N7]: n }, m),
                onDoubleClick: r,
                children: [
                    (0, i.jsx)(l.F, { children: (0, i.jsx)(_.o, { className: g, children: t }, s) }),
                    null != A ? (0, i.jsx)(f.A, { size: "small", ...A }) : null,
                    !h &&
                        (0, i.jsxs)("div", {
                            className: a()(I._v, T, "theme-dark"),
                            children: [
                                (0, i.jsx)("div", {
                                    className: I.K1,
                                    children: (0, i.jsx)(p, { idle: n, onJumpToChannel: r, ...S }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: I.q6,
                                    children: [
                                        (0, i.jsx)(u.A, {
                                            grow: 0,
                                            shrink: 1,
                                            basis: "50%",
                                            align: u.A.Align.CENTER,
                                            className: I.Px,
                                            children: c?.(),
                                        }),
                                        (0, i.jsx)(u.A, {
                                            grow: 0,
                                            shrink: 1,
                                            justify: u.A.Justify.END,
                                            basis: "50%",
                                            align: u.A.Align.CENTER,
                                            children: E?.(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            });
        },
        X: p,
    },
);
