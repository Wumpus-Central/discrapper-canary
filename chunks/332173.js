"use strict";
n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(317097),
    o = n(36075),
    u = n(939249),
    c = n(232042),
    d = n(209599);
let h = function (e) {
    let {
            ref: t,
            children: n,
            className: s,
            color: h,
            roleColors: m,
            iconType: f,
            onMouseEnter: p,
            onMouseLeave: g,
            ...x
        } = e,
        [A, C] = i.useState(!1),
        { gradientStyle: E, gradientClassname: I } = (0, o.v5)({
            colorStrings: m ?? null,
            roleStyle: "username",
            animateGradient: A,
        }),
        y = i.useCallback(
            (e) => {
                C(!0), p?.(e);
            },
            [C, p],
        ),
        S = i.useCallback(
            (e) => {
                C(!1), g?.(e);
            },
            [C, g],
        ),
        N = {};
    return (
        null != h && (N = { color: (0, a.Hl)(h), backgroundColor: A ? (0, a.gq)(h, 0.3) : (0, a.gq)(h, 0.1) }),
        (0, l.jsx)(u.D, {
            ...x,
            innerRef: t,
            tag: "span",
            className: r()(s, { [d.i]: !0, interactive: x.onClick }),
            onMouseEnter: y,
            onMouseLeave: S,
            style: N,
            tabIndex: null != x.onClick ? 0 : -1,
            children:
                null != f
                    ? (0, l.jsx)(c.A, { iconType: f, children: n })
                    : null != m
                      ? (0, l.jsx)("span", { style: { ...E }, className: I, children: n })
                      : n,
        })
    );
};
