n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(397927),
    d = n(941971),
    c = n(900848),
    u = n(550591),
    h = n(75796);
let A = l.forwardRef(function (e, t) {
    let {
            id: n,
            onClick: s,
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
            children: b,
            onMouseEnter: N,
            onMouseLeave: S,
            onMouseDown: T,
        } = e,
        v = (0, r.Vd)(n),
        [y, j] = l.useState(!1),
        R = "string" == typeof g && null == I ? g : I;
    return (0, i.jsxs)(c.c, {
        children: [
            C ? (0, i.jsx)("div", { className: h.Io, children: (0, i.jsx)(d.A, { hovered: y, selected: p }) }) : null,
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
                            N?.(), j(!0);
                        },
                        onMouseLeave: () => {
                            S?.(), j(!1);
                        },
                        onMouseDown: T,
                        className: a()(h.oZ, E, { [h.wH]: p || y }),
                        onClick: s,
                        "aria-label": R,
                        "aria-selected": p,
                        onContextMenu: A,
                        focusProps: { enabled: !1 },
                        ...v,
                        children: null != m && (0, i.jsx)(m, { className: h.sF, color: "currentColor" }),
                    }),
                }),
            }),
            b,
        ],
    });
});
