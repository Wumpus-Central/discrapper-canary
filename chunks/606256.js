n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(397927),
    c = n(941971),
    d = n(900848),
    u = n(550591),
    h = n(294003);
let A = l.forwardRef(function (e, t) {
    let {
            id: n,
            onClick: s,
            onContextMenu: A,
            icon: _,
            selected: m,
            tooltip: g,
            upperBadge: p,
            lowerBadge: f,
            lowerBadgeSize: x,
            showPill: E = !0,
            className: I,
            "aria-label": C,
            children: N,
            onMouseEnter: T,
            onMouseLeave: S,
            onMouseDown: b,
        } = e,
        y = (0, r.Vd)(n),
        [v, j] = l.useState(!1),
        R = "string" == typeof g && null == C ? g : C;
    return (0, i.jsxs)(d.c, {
        children: [
            E ? (0, i.jsx)("div", { className: h.Io, children: (0, i.jsx)(c.A, { hovered: v, selected: m }) }) : null,
            (0, i.jsx)(u.A, {
                text: g,
                selected: m,
                children: (0, i.jsx)(o.Qk9, {
                    selected: !0,
                    upperBadge: p,
                    lowerBadge: f,
                    lowerBadgeSize: x,
                    children: (0, i.jsx)(o.DUT, {
                        innerRef: t,
                        onMouseEnter: () => {
                            T?.(), j(!0);
                        },
                        onMouseLeave: () => {
                            S?.(), j(!1);
                        },
                        onMouseDown: b,
                        className: a()(h.oZ, I, { [h.wH]: m || v }),
                        onClick: s,
                        "aria-label": R,
                        "aria-selected": m,
                        onContextMenu: A,
                        focusProps: { enabled: !1 },
                        ...y,
                        children: null != _ && (0, i.jsx)(_, { className: h.sF, color: "currentColor" }),
                    }),
                }),
            }),
            N,
        ],
    });
});
