n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(317097),
    o = n(36075),
    u = n(939249),
    c = n(232042),
    d = n(209599);
let m = function (e) {
    let {
            ref: t,
            children: n,
            className: s,
            color: m,
            roleColors: h,
            iconType: p,
            onMouseEnter: f,
            onMouseLeave: g,
            ...x
        } = e,
        [A, C] = i.useState(!1),
        { gradientStyle: E, gradientClassname: I } = (0, o.v5)({
            colorStrings: h ?? null,
            roleStyle: "username",
            animateGradient: A,
        }),
        y = i.useCallback(
            (e) => {
                (C(!0), f?.(e));
            },
            [C, f],
        ),
        S = i.useCallback(
            (e) => {
                (C(!1), g?.(e));
            },
            [C, g],
        ),
        v = {};
    return (
        null != m && (v = { color: (0, a.Hl)(m), backgroundColor: A ? (0, a.gq)(m, 0.3) : (0, a.gq)(m, 0.1) }),
        (0, l.jsx)(u.D, {
            ...x,
            innerRef: t,
            tag: "span",
            className: r()(s, { [d.i]: !0, interactive: x.onClick }),
            onMouseEnter: y,
            onMouseLeave: S,
            style: v,
            tabIndex: null != x.onClick ? 0 : -1,
            children:
                null != p
                    ? (0, l.jsx)(c.A, { iconType: p, children: n })
                    : null != h
                      ? (0, l.jsx)("span", { style: { ...E }, className: I, children: n })
                      : n,
        })
    );
};
