i.r(t), i.d(t, { default: () => x });
var n = i(627968),
    l = i(64700),
    s = i(980707),
    a = i(477782),
    r = i(922016),
    c = i(306471),
    o = i(189252),
    u = i(538064),
    d = i(786574),
    g = i(105289),
    m = i(949091);
function f(e) {
    let { onClose: t } = e,
        i = (0, g.x)(),
        l = (0, d.N)(i, u.Ft),
        r = (0, m.A)();
    return (0, n.jsxs)(s.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [l, (0, n.jsx)(a.rX, { "aria-label": "Playgrounds", children: r })],
    });
}
function x(e) {
    let { focusSectionProps: t } = e,
        [i, s] = l.useState(!1),
        [a, d] = l.useState(0),
        g = l.useRef(null);
    function m(e) {
        clearTimeout(a),
            d(
                setTimeout(() => {
                    s(e);
                }, 100),
            );
    }
    return (0, n.jsx)("div", {
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, n.jsx)(r.Y, {
            targetElementRef: g,
            shouldShow: i,
            animation: r.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: () => (0, n.jsx)(f, { onClose: () => s(!1) }),
            children: (e, i) => {
                let { isShown: l } = i;
                return (0, n.jsx)(o.A, {
                    ref: g,
                    onClick: () => (0, u.Ft)(),
                    icon: c.V,
                    "aria-label": "DevTools",
                    selected: l,
                    ...t,
                });
            },
        }),
    });
}
