var n,
    s = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(120692),
    c = l(646514),
    d = l(939249),
    u = l(381645),
    m = (((n = {}).OVERLAY = "overlay"), (n.RELATIVE = "relative"), n);
l.d(
    t,
    {},
    {
        Ay: function (e) {
            let { className: t, variant: l, children: n } = e,
                a = i.useMemo(() => ("overlay" === l ? u.Lw : u.V8), [l]);
            return (0, s.jsx)("div", { className: r()(u.jr, a, t), children: n });
        },
        T4: function (e) {
            let { icon: t } = e;
            return (0, s.jsx)(t, { className: u.Kk, color: c.A.colors.TEXT_STRONG, size: "md" });
        },
        XQ: function (e) {
            let { onClick: t, icon: l } = e;
            return (0, s.jsx)(d.D, {
                className: u.gb,
                onClick: t,
                children: (0, s.jsx)(l, { color: "currentColor", size: "sm" }),
            });
        },
        Z5: m,
        ns: function (e) {
            let { scrollPosition: t } = e;
            return (0, s.jsx)(o.animated.div, { className: u.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
        },
    },
);
