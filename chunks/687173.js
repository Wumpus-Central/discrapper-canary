n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(419354),
    o = n(717421),
    d = n(939249),
    c = n(789645),
    u = n(534514),
    p = n(834730),
    h = n(573613),
    m = n(915089),
    _ = n(49999),
    A = n(985018),
    f = n(13808);
function g(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: l,
            children: g,
            height: x,
            className: E,
            contentClassName: C,
        } = e,
        T = (0, m.GV)(),
        v = s.useRef(null),
        S = (0, o.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: x },
            to: { transform: "translate3d(0, 0, 0)", height: x },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != v.current && v.current.focus();
            },
        });
    return (0, i.jsx)(r.animated.div, {
        className: a()(f.kL, E),
        style: S,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": T,
            className: f.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: f.U1,
                    children: [
                        (0, i.jsx)(d.D, {
                            innerRef: v,
                            "aria-label": A.intl.string(A.t.WAI6xu),
                            className: f.b,
                            onClick: () => {
                                t(_.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(c.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(u.D, { id: T, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != l && (0, i.jsx)(p.E, { variant: "text-md/normal", color: "text-subtle", children: l }),
                (0, i.jsx)(h.Ip, {
                    className: f.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(f.gT, C), children: g }),
                }),
            ],
        }),
    });
}
