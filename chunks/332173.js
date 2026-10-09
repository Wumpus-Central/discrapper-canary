n.d(t, { A: () => m });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(317097),
    o = n(36075),
    u = n(939249),
    c = n(232042),
    d = n(209599);
let m = function (e) {
    let {
            ref: t,
            children: n,
            className: i,
            color: m,
            roleColors: x,
            iconType: h,
            onMouseEnter: j,
            onMouseLeave: p,
            ...g
        } = e,
        [f, N] = s.useState(!1),
        { gradientStyle: I, gradientClassname: A } = (0, o.v5)({
            colorStrings: x ?? null,
            roleStyle: "username",
            animateGradient: f,
        }),
        v = s.useCallback(
            (e) => {
                (N(!0), j?.(e));
            },
            [N, j],
        ),
        b = s.useCallback(
            (e) => {
                (N(!1), p?.(e));
            },
            [N, p],
        ),
        S = {};
    return (
        null != m && (S = { color: (0, r.Hl)(m), backgroundColor: f ? (0, r.gq)(m, 0.3) : (0, r.gq)(m, 0.1) }),
        (0, l.jsx)(u.D, {
            ...g,
            innerRef: t,
            tag: "span",
            className: a()(i, { [d.i]: !0, interactive: g.onClick }),
            onMouseEnter: v,
            onMouseLeave: b,
            style: S,
            tabIndex: null != g.onClick ? 0 : -1,
            children:
                null != h
                    ? (0, l.jsx)(c.A, { iconType: h, children: n })
                    : null != x
                      ? (0, l.jsx)("span", { style: { ...I }, className: A, children: n })
                      : n,
        })
    );
};
