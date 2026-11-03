t.d(n, { A: () => m });
var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(317097),
    o = t(36075),
    d = t(939249),
    c = t(232042),
    u = t(209599);
let m = function (e) {
    let {
            ref: n,
            children: t,
            className: l,
            color: m,
            roleColors: h,
            iconType: x,
            onMouseEnter: j,
            onMouseLeave: g,
            ...p
        } = e,
        [b, N] = i.useState(!1),
        { gradientStyle: f, gradientClassname: I } = (0, o.v5)({
            colorStrings: h ?? null,
            roleStyle: "username",
            animateGradient: b,
        }),
        v = i.useCallback(
            (e) => {
                (N(!0), j?.(e));
            },
            [N, j],
        ),
        C = i.useCallback(
            (e) => {
                (N(!1), g?.(e));
            },
            [N, g],
        ),
        A = {};
    return (
        null != m && (A = { color: (0, r.Hl)(m), backgroundColor: b ? (0, r.gq)(m, 0.3) : (0, r.gq)(m, 0.1) }),
        (0, s.jsx)(d.D, {
            ...p,
            innerRef: n,
            tag: "span",
            className: a()(l, { [u.i]: !0, interactive: p.onClick }),
            onMouseEnter: v,
            onMouseLeave: C,
            style: A,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != x
                    ? (0, s.jsx)(c.A, { iconType: x, children: t })
                    : null != h
                      ? (0, s.jsx)("span", { style: { ...f }, className: I, children: t })
                      : t,
        })
    );
};
