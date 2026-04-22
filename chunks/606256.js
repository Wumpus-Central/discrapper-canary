n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(862328),
    d = n(939249),
    c = n(941971),
    u = n(900848),
    h = n(550591),
    A = n(530787);
let _ = l.forwardRef(function (e, t) {
    let {
            id: n,
            onClick: s,
            onContextMenu: _,
            icon: m,
            selected: g,
            tooltip: p,
            upperBadge: f,
            lowerBadge: E,
            lowerBadgeSize: x,
            showPill: I = !0,
            className: C,
            "aria-label": b,
            children: N,
            onMouseEnter: S,
            onMouseLeave: v,
            onMouseDown: T,
        } = e,
        y = (0, r.Vd)(n),
        [R, j] = l.useState(!1),
        L = "string" == typeof p && null == b ? p : b;
    return (0, i.jsxs)(u.c, {
        children: [
            I ? (0, i.jsx)("div", { className: A.Io, children: (0, i.jsx)(c.A, { hovered: R, selected: g }) }) : null,
            (0, i.jsx)(h.A, {
                text: p,
                selected: g,
                children: (0, i.jsx)(o.Q, {
                    selected: !0,
                    upperBadge: f,
                    lowerBadge: E,
                    lowerBadgeSize: x,
                    children: (0, i.jsx)(d.D, {
                        innerRef: t,
                        onMouseEnter: () => {
                            S?.(), j(!0);
                        },
                        onMouseLeave: () => {
                            v?.(), j(!1);
                        },
                        onMouseDown: T,
                        className: a()(A.oZ, C, { [A.wH]: g || R }),
                        onClick: s,
                        "aria-label": L,
                        "aria-selected": g,
                        onContextMenu: _,
                        focusProps: { enabled: !1 },
                        ...y,
                        children: null != m && (0, i.jsx)(m, { className: A.sF, color: "currentColor" }),
                    }),
                }),
            }),
            N,
        ],
    });
});
