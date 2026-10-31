n.d(t, { A: () => m });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(317097),
    o = n(36075),
    d = n(939249),
    u = n(232042),
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
        [N, f] = l.useState(!1),
        { gradientStyle: b, gradientClassname: I } = (0, o.v5)({
            colorStrings: x ?? null,
            roleStyle: "username",
            animateGradient: N,
        }),
        v = l.useCallback(
            (e) => {
                (f(!0), j?.(e));
            },
            [f, j],
        ),
        A = l.useCallback(
            (e) => {
                (f(!1), g?.(e));
            },
            [f, g],
        ),
        E = {};
    return (
        null != m && (E = { color: (0, r.Hl)(m), backgroundColor: N ? (0, r.gq)(m, 0.3) : (0, r.gq)(m, 0.1) }),
        (0, i.jsx)(d.D, {
            ...p,
            innerRef: t,
            tag: "span",
            className: a()(s, { [c.i]: !0, interactive: p.onClick }),
            onMouseEnter: v,
            onMouseLeave: A,
            style: E,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != h
                    ? (0, i.jsx)(u.A, { iconType: h, children: n })
                    : null != x
                      ? (0, i.jsx)("span", { style: { ...b }, className: I, children: n })
                      : n,
        })
    );
};
