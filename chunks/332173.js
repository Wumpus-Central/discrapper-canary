n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(317097),
    o = n(36075),
    u = n(939249),
    d = n(232042),
    c = n(209599);
let m = function (e) {
    let {
            ref: t,
            children: n,
            className: s,
            color: m,
            roleColors: x,
            iconType: h,
            onMouseEnter: j,
            onMouseLeave: g,
            ...p
        } = e,
        [f, A] = i.useState(!1),
        { gradientStyle: N, gradientClassname: I } = (0, o.v5)({
            colorStrings: x ?? null,
            roleStyle: "username",
            animateGradient: f,
        }),
        v = i.useCallback(
            (e) => {
                (A(!0), j?.(e));
            },
            [A, j],
        ),
        b = i.useCallback(
            (e) => {
                (A(!1), g?.(e));
            },
            [A, g],
        ),
        S = {};
    return (
        null != m && (S = { color: (0, r.Hl)(m), backgroundColor: f ? (0, r.gq)(m, 0.3) : (0, r.gq)(m, 0.1) }),
        (0, l.jsx)(u.D, {
            ...p,
            innerRef: t,
            tag: "span",
            className: a()(s, { [c.i]: !0, interactive: p.onClick }),
            onMouseEnter: v,
            onMouseLeave: b,
            style: S,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != h
                    ? (0, l.jsx)(d.A, { iconType: h, children: n })
                    : null != x
                      ? (0, l.jsx)("span", { style: { ...N }, className: I, children: n })
                      : n,
        })
    );
};
