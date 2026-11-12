var i,
    n = l(477900),
    s = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(120692),
    c = l(646514),
    d = l(939249),
    u = l(381645),
    h = (((i = {}).OVERLAY = "overlay"), (i.RELATIVE = "relative"), i);
l.d(
    t,
    {},
    {
        Ay: function (e) {
            let { className: t, variant: l, children: i } = e,
                a = s.useMemo(() => ("overlay" === l ? u.Lw : u.V8), [l]);
            return (0, n.jsx)("div", { className: r()(u.jr, a, t), children: i });
        },
        T4: function (e) {
            let { icon: t } = e;
            return (0, n.jsx)(t, { className: u.Kk, color: c.A.colors.TEXT_STRONG, size: "md" });
        },
        XQ: function (e) {
            let { onClick: t, icon: l, "aria-label": i } = e;
            return (0, n.jsx)(d.D, {
                className: u.gb,
                onClick: t,
                "aria-label": i,
                children: (0, n.jsx)(l, { color: "currentColor", size: "sm" }),
            });
        },
        Z5: h,
        ns: function (e) {
            let { scrollPosition: t } = e;
            return (0, n.jsx)(o.animated.div, { className: u.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
        },
    },
);
