n.r(t), n.d(t, { default: () => f });
var i = n(627968),
    a = n(64700),
    l = n(861672),
    s = n(477782),
    r = n(265872),
    o = n(306471),
    c = n(189252),
    d = n(538064),
    u = n(786574),
    g = n(641616),
    m = n(616621);
function _(e) {
    let { onClose: t } = e,
        n = (0, g.x)(),
        a = (0, u.N)(n, d.Ft),
        r = (0, m.A)();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [a, (0, i.jsx)(s.rX, { "aria-label": "Playgrounds", children: r })],
    });
}
function f(e) {
    let { focusSectionProps: t } = e,
        [n, l] = a.useState(!1),
        [s, u] = a.useState(0),
        g = a.useRef(null),
        m = (e) => {
            clearTimeout(s),
                u(
                    setTimeout(() => {
                        l(e);
                    }, 100),
                );
        };
    return (0, i.jsx)("div", {
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, i.jsx)(r.Y, {
            targetElementRef: g,
            shouldShow: n,
            animation: r.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => l(!0),
            onRequestClose: () => l(!1),
            renderPopout: () => (0, i.jsx)(_, { onClose: () => l(!1) }),
            children: (e, n) => {
                let { isShown: a } = n;
                return (0, i.jsx)(c.A, {
                    ref: g,
                    onClick: () => (0, d.Ft)(),
                    icon: o.V,
                    "aria-label": "DevTools",
                    selected: a,
                    ...t,
                });
            },
        }),
    });
}
