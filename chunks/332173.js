"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(317097),
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
        [x, A] = l.useState(!1),
        { gradientStyle: C, gradientClassname: E } = (0, o.v5)({
            colorStrings: m ?? null,
            roleStyle: "username",
            animateGradient: x,
        }),
        I = l.useCallback(
            (e) => {
                A(!0), f?.(e);
            },
            [A, f],
        ),
        v = l.useCallback(
            (e) => {
                A(!1), g?.(e);
            },
            [A, g],
        ),
        y = {};
    return (
        null != h && (y = { color: (0, a.Hl)(h), backgroundColor: x ? (0, a.gq)(h, 0.3) : (0, a.gq)(h, 0.1) }),
        (0, i.jsx)(c.D, {
            ..._,
            innerRef: t,
            tag: "span",
            className: r()(s, { [d.i]: !0, interactive: _.onClick }),
            onMouseEnter: I,
            onMouseLeave: v,
            style: y,
            tabIndex: null != _.onClick ? 0 : -1,
            children:
                null != p
                    ? (0, i.jsx)(u.A, { iconType: p, children: n })
                    : null != m
                      ? (0, i.jsx)("span", { style: { ...C }, className: E, children: n })
                      : n,
        })
    );
};
