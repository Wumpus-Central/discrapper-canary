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
    h = n(878442);
let A = l.forwardRef(function (e, t) {
    let {
            id: n,
            onClick: s,
            onContextMenu: A,
            icon: g,
            selected: m,
            tooltip: p,
            upperBadge: _,
            lowerBadge: x,
            lowerBadgeSize: f,
            showPill: E = !0,
            className: C,
            "aria-label": I,
            children: S,
            onMouseEnter: b,
            onMouseLeave: N,
            onMouseDown: T,
        } = e,
        j = (0, r.Vd)(n),
        [v, y] = l.useState(!1),
        R = "string" == typeof p && null == I ? p : I;
    return (0, i.jsxs)(c.c, {
        children: [
            E ? (0, i.jsx)("div", { className: h.Io, children: (0, i.jsx)(d.A, { hovered: v, selected: m }) }) : null,
            (0, i.jsx)(u.A, {
                text: p,
                selected: m,
                children: (0, i.jsx)(o.Qk9, {
                    selected: !0,
                    upperBadge: _,
                    lowerBadge: x,
                    lowerBadgeSize: f,
                    children: (0, i.jsx)(o.DUT, {
                        innerRef: t,
                        onMouseEnter: () => {
                            b?.(), y(!0);
                        },
                        onMouseLeave: () => {
                            N?.(), y(!1);
                        },
                        onMouseDown: T,
                        className: a()(h.oZ, C, { [h.wH]: m || v }),
                        onClick: s,
                        "aria-label": R,
                        "aria-selected": m,
                        onContextMenu: A,
                        focusProps: { enabled: !1 },
                        ...j,
                        children: null != g && (0, i.jsx)(g, { className: h.sF, color: "currentColor" }),
                    }),
                }),
            }),
            S,
        ],
    });
});
