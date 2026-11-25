var l = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(317097),
    o = t(36075),
    u = t(939249),
    c = t(232042),
    d = t(209599);
t.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    ref: n,
                    children: t,
                    className: a,
                    color: m,
                    roleColors: x,
                    iconType: h,
                    onMouseEnter: p,
                    onMouseLeave: j,
                    ...g
                } = e,
                [f, v] = s.useState(!1),
                { gradientStyle: N, gradientClassname: I } = (0, o.v5)({
                    colorStrings: x ?? null,
                    roleStyle: "username",
                    animateGradient: f,
                }),
                b = s.useCallback(
                    (e) => {
                        (v(!0), p?.(e));
                    },
                    [v, p],
                ),
                E = s.useCallback(
                    (e) => {
                        (v(!1), j?.(e));
                    },
                    [v, j],
                ),
                A = {};
            return (
                null != m && (A = { color: (0, r.Hl)(m), backgroundColor: f ? (0, r.gq)(m, 0.3) : (0, r.gq)(m, 0.1) }),
                (0, l.jsx)(u.D, {
                    ...g,
                    innerRef: n,
                    tag: "span",
                    className: i()(a, { [d.i]: !0, interactive: g.onClick }),
                    onMouseEnter: b,
                    onMouseLeave: E,
                    style: A,
                    tabIndex: null != g.onClick ? 0 : -1,
                    children:
                        null != h
                            ? (0, l.jsx)(c.A, { iconType: h, children: t })
                            : null != x
                              ? (0, l.jsx)("span", { style: { ...N }, className: I, children: t })
                              : t,
                })
            );
        },
    },
);
