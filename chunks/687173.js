n.d(t, { A: () => h });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(880013),
    o = n(397927),
    d = n(915089),
    c = n(49999),
    u = n(985018),
    m = n(516443);
function h(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: h,
            height: x,
            className: p,
            contentClassName: g,
        } = e,
        _ = (0, d.GV)(),
        f = i.useRef(null),
        v = (0, o.zhh)({
            from: { transform: "translate3d(-110%, 0, 0)", height: x },
            to: { transform: "translate3d(0, 0, 0)", height: x },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != f.current && f.current.focus();
            },
        });
    return (0, a.jsx)(r.animated.div, {
        className: l()(m.kL, p),
        style: v,
        children: (0, a.jsxs)("aside", {
            "aria-labelledby": _,
            className: m.Qs,
            children: [
                (0, a.jsxs)("div", {
                    className: m.U1,
                    children: [
                        (0, a.jsx)(o.DUT, {
                            innerRef: f,
                            "aria-label": u.intl.string(u.t.WAI6xu),
                            className: m.b,
                            onClick: () => {
                                t(c.i.USER_DISMISS);
                            },
                            children: (0, a.jsx)(o.PGe, { color: "currentColor" }),
                        }),
                        (0, a.jsx)(o.Heading, { id: _, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, a.jsx)(o.Text, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, a.jsx)(o.HOs, {
                    className: m.XG,
                    fade: !0,
                    children: (0, a.jsx)("div", { className: l()(m.gT, g), children: h }),
                }),
            ],
        }),
    });
}
