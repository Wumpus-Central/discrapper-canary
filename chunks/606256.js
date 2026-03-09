"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(397927),
    c = n(941971),
    d = n(900848),
    u = n(550591),
    h = n(878442);
let A = s.forwardRef(function (e, t) {
    let {
            id: n,
            onClick: l,
            onContextMenu: A,
            icon: m,
            selected: p,
            tooltip: g,
            upperBadge: _,
            lowerBadge: f,
            lowerBadgeSize: x,
            showPill: C = !0,
            className: E,
            "aria-label": I,
            children: N,
            onMouseEnter: b,
            onMouseLeave: S,
            onMouseDown: T,
        } = e,
        v = (0, a.Vd)(n),
        [y, j] = s.useState(!1),
        R = "string" == typeof g && null == I ? g : I;
    return (0, i.jsxs)(d.c, {
        children: [
            C ? (0, i.jsx)("div", { className: h.Io, children: (0, i.jsx)(c.A, { hovered: y, selected: p }) }) : null,
            (0, i.jsx)(u.A, {
                text: g,
                selected: p,
                children: (0, i.jsx)(o.Qk9, {
                    selected: !0,
                    upperBadge: _,
                    lowerBadge: f,
                    lowerBadgeSize: x,
                    children: (0, i.jsx)(o.DUT, {
                        innerRef: t,
                        onMouseEnter: () => {
                            b?.(), j(!0);
                        },
                        onMouseLeave: () => {
                            S?.(), j(!1);
                        },
                        onMouseDown: T,
                        className: r()(h.oZ, E, { [h.wH]: p || y }),
                        onClick: l,
                        "aria-label": R,
                        "aria-selected": p,
                        onContextMenu: A,
                        focusProps: { enabled: !1 },
                        ...v,
                        children: null != m && (0, i.jsx)(m, { className: h.sF, color: "currentColor" }),
                    }),
                }),
            }),
            N,
        ],
    });
});
