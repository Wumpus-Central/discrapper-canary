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
            ..._
        } = e,
        [x, C] = i.useState(!1),
        { gradientStyle: A, gradientClassname: E } = (0, o.v5)({
            colorStrings: m ?? null,
            roleStyle: "username",
            animateGradient: x,
        }),
        I = i.useCallback(
            (e) => {
                C(!0), f?.(e);
            },
            [C, f],
        ),
        v = i.useCallback(
            (e) => {
                C(!1), g?.(e);
            },
            [C, g],
        ),
        y = {};
    return (
        null != h && (y = { color: (0, r.Hl)(h), backgroundColor: x ? (0, r.gq)(h, 0.3) : (0, r.gq)(h, 0.1) }),
        (0, l.jsx)(c.D, {
            ..._,
            innerRef: t,
            tag: "span",
            className: a()(s, { [d.i]: !0, interactive: _.onClick }),
            onMouseEnter: I,
            onMouseLeave: v,
            style: y,
            tabIndex: null != _.onClick ? 0 : -1,
            children:
                null != p
                    ? (0, l.jsx)(u.A, { iconType: p, children: n })
                    : null != m
                      ? (0, l.jsx)("span", { style: { ...A }, className: E, children: n })
                      : n,
        })
    );
};
