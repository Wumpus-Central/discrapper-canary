n.d(t, { A: () => m });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(317097),
    o = n(36075),
    d = n(939249),
    c = n(232042),
    u = n(209599);
let m = function (e) {
    let {
            ref: t,
            children: n,
            className: l,
            color: m,
            roleColors: x,
            iconType: j,
            onMouseEnter: h,
            onMouseLeave: g,
            ...p
        } = e,
        [I, N] = s.useState(!1),
        { gradientStyle: b, gradientClassname: f } = (0, o.v5)({
            colorStrings: x ?? null,
            roleStyle: "username",
            animateGradient: I,
        }),
        v = s.useCallback(
            (e) => {
                (N(!0), h?.(e));
            },
            [N, h],
        ),
        A = s.useCallback(
            (e) => {
                (N(!1), g?.(e));
            },
            [N, g],
        ),
        E = {};
    return (
        null != m && (E = { color: (0, r.Hl)(m), backgroundColor: I ? (0, r.gq)(m, 0.3) : (0, r.gq)(m, 0.1) }),
        (0, i.jsx)(d.D, {
            ...p,
            innerRef: t,
            tag: "span",
            className: a()(l, { [u.i]: !0, interactive: p.onClick }),
            onMouseEnter: v,
            onMouseLeave: A,
            style: E,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != j
                    ? (0, i.jsx)(c.A, { iconType: j, children: n })
                    : null != x
                      ? (0, i.jsx)("span", { style: { ...b }, className: f, children: n })
                      : n,
        })
    );
};
