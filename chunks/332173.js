n.d(t, { A: () => m });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(317097),
    o = n(36075),
    c = n(939249),
    d = n(232042),
    u = n(209599);
let m = function (e) {
    let {
            ref: t,
            children: n,
            className: l,
            color: m,
            roleColors: x,
            iconType: h,
            onMouseEnter: j,
            onMouseLeave: g,
            ...p
        } = e,
        [I, N] = s.useState(!1),
        { gradientStyle: b, gradientClassname: f } = (0, o.v5)({
            colorStrings: x ?? null,
            roleStyle: "username",
            animateGradient: I,
        }),
        E = s.useCallback(
            (e) => {
                (N(!0), j?.(e));
            },
            [N, j],
        ),
        A = s.useCallback(
            (e) => {
                (N(!1), g?.(e));
            },
            [N, g],
        ),
        v = {};
    return (
        null != m && (v = { color: (0, a.Hl)(m), backgroundColor: I ? (0, a.gq)(m, 0.3) : (0, a.gq)(m, 0.1) }),
        (0, i.jsx)(c.D, {
            ...p,
            innerRef: t,
            tag: "span",
            className: r()(l, { [u.i]: !0, interactive: p.onClick }),
            onMouseEnter: E,
            onMouseLeave: A,
            style: v,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != h
                    ? (0, i.jsx)(d.A, { iconType: h, children: n })
                    : null != x
                      ? (0, i.jsx)("span", { style: { ...b }, className: f, children: n })
                      : n,
        })
    );
};
