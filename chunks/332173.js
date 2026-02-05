"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(317097),
    l = n(397927),
    u = n(232042),
    c = n(189153);
let d = (e) => {
    let {
            ref: t,
            children: n,
            className: a,
            color: d,
            roleColors: _,
            iconType: f,
            onMouseEnter: p,
            onMouseLeave: h,
            ...m
        } = e,
        [g, E] = i.useState(!1),
        { gradientStyle: A, gradientClassname: I } = (0, l.v5K)({
            colorStrings: _ ?? null,
            roleStyle: "username",
            animateGradient: g,
        }),
        T = i.useCallback(
            (e) => {
                E(!0), p?.(e);
            },
            [E, p],
        ),
        y = i.useCallback(
            (e) => {
                E(!1), h?.(e);
            },
            [E, h],
        ),
        S = {};
    return (
        null != d && (S = { color: (0, o.Hl)(d), backgroundColor: g ? (0, o.gq)(d, 0.3) : (0, o.gq)(d, 0.1) }),
        (0, r.jsx)(l.DUT, {
            ...m,
            innerRef: t,
            tag: "span",
            className: s()(a, { [c.i]: !0, interactive: m.onClick }),
            onMouseEnter: T,
            onMouseLeave: y,
            style: S,
            tabIndex: null != m.onClick ? 0 : -1,
            children:
                null != f
                    ? (0, r.jsx)(u.A, { iconType: f, children: n })
                    : null != _
                      ? (0, r.jsx)("span", { style: { ...A }, className: I, children: n })
                      : n,
        })
    );
};
