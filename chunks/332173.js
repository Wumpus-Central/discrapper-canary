"use strict";
n.d(t, { A: () => h });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(317097),
    o = n(36075),
    c = n(939249),
    u = n(232042),
    d = n(160694);
let h = (e) => {
    let {
            ref: t,
            children: n,
            className: s,
            color: h,
            roleColors: m,
            iconType: p,
            onMouseEnter: f,
            onMouseLeave: g,
            ...x
        } = e,
        [C, A] = i.useState(!1),
        { gradientStyle: E, gradientClassname: I } = (0, o.v5)({
            colorStrings: m ?? null,
            roleStyle: "username",
            animateGradient: C,
        }),
        y = i.useCallback(
            (e) => {
                A(!0), f?.(e);
            },
            [A, f],
        ),
        v = i.useCallback(
            (e) => {
                A(!1), g?.(e);
            },
            [A, g],
        ),
        S = {};
    return (
        null != h && (S = { color: (0, r.Hl)(h), backgroundColor: C ? (0, r.gq)(h, 0.3) : (0, r.gq)(h, 0.1) }),
        (0, l.jsx)(c.D, {
            ...x,
            innerRef: t,
            tag: "span",
            className: a()(s, { [d.i]: !0, interactive: x.onClick }),
            onMouseEnter: y,
            onMouseLeave: v,
            style: S,
            tabIndex: null != x.onClick ? 0 : -1,
            children:
                null != p
                    ? (0, l.jsx)(u.A, { iconType: p, children: n })
                    : null != m
                      ? (0, l.jsx)("span", { style: { ...E }, className: I, children: n })
                      : n,
        })
    );
};
