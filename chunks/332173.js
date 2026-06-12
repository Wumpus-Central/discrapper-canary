"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    l = n(36075),
    u = n(939249),
    c = n(232042),
    d = n(160694);
let _ = (e) => {
    let {
            ref: t,
            children: n,
            className: s,
            color: _,
            roleColors: h,
            iconType: f,
            onMouseEnter: p,
            onMouseLeave: E,
            ...m
        } = e,
        [g, A] = r.useState(!1),
        { gradientStyle: I, gradientClassname: T } = (0, l.v5)({
            colorStrings: h ?? null,
            roleStyle: "username",
            animateGradient: g,
        }),
        S = r.useCallback(
            (e) => {
                A(!0), p?.(e);
            },
            [A, p],
        ),
        y = r.useCallback(
            (e) => {
                A(!1), E?.(e);
            },
            [A, E],
        ),
        N = {};
    return (
        null != _ && (N = { color: (0, o.Hl)(_), backgroundColor: g ? (0, o.gq)(_, 0.3) : (0, o.gq)(_, 0.1) }),
        (0, i.jsx)(u.D, {
            ...m,
            innerRef: t,
            tag: "span",
            className: a()(s, { [d.i]: !0, interactive: m.onClick }),
            onMouseEnter: S,
            onMouseLeave: y,
            style: N,
            tabIndex: null != m.onClick ? 0 : -1,
            children:
                null != f
                    ? (0, i.jsx)(c.A, { iconType: f, children: n })
                    : null != h
                      ? (0, i.jsx)("span", { style: { ...I }, className: T, children: n })
                      : n,
        })
    );
};
