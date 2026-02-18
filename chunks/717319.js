"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(435371),
    l = n(450687),
    u = n(165180);
function c(e) {
    let {
            ref: t,
            tooltipText: n,
            caretTooltipText: i,
            onClick: c,
            onContextMenu: d,
            text: _,
            fullWidth: f,
            size: p = "md",
            variant: h = "primary",
        } = e,
        m = null != _;
    return (0, r.jsxs)("div", {
        ref: t,
        className: s()(l.kL, { [u.fullWidth]: f, [u.hasText]: m }),
        children: [
            (0, r.jsx)(o.m_, {
                text: n,
                children: (0, r.jsx)(a.DUT, {
                    "aria-label": n,
                    onClick: c,
                    onContextMenu: d,
                    className: s()(l.x6, u.button, u[p], u[h]),
                    children: _,
                }),
            }),
            (0, r.jsx)(o.m_, {
                text: i,
                children: (0, r.jsx)(a.DUT, {
                    "aria-label": i,
                    onClick: d,
                    onContextMenu: d,
                    className: s()(l.me, u.button, u[p], u[h]),
                    children: (0, r.jsx)(a.abt, { color: "currentColor", size: "xs" }),
                }),
            }),
        ],
    });
}
