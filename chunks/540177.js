n.r(t), n.d(t, { default: () => v });
var s = n(477900),
    a = n(582128),
    r = n(980707),
    o = n(477782),
    l = n(922016),
    i = n(306471),
    u = n(189252),
    d = n(538064),
    c = n(786574),
    p = n(182701),
    h = n(949091);
function m(e) {
    let { onClose: t } = e,
        n = (0, p.x)(),
        a = (0, c.N)(n, d.Ft),
        l = (0, h.A)();
    return (0, s.jsxs)(r.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [a, (0, s.jsx)(o.rX, { "aria-label": "Playgrounds", children: l })],
    });
}
function v(e) {
    let { focusSectionProps: t } = e,
        [n, r] = a.useState(!1),
        [o, c] = a.useState(0),
        p = a.useRef(null);
    function h(e) {
        clearTimeout(o),
            c(
                setTimeout(() => {
                    r(e);
                }, 100),
            );
    }
    return (0, s.jsx)("div", {
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, s.jsx)(l.Y, {
            targetElementRef: p,
            shouldShow: n,
            animation: l.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => r(!0),
            onRequestClose: () => r(!1),
            renderPopout: () => (0, s.jsx)(m, { onClose: () => r(!1) }),
            children: (e, n) => {
                let { isShown: a } = n;
                return (0, s.jsx)(u.A, {
                    ref: p,
                    onClick: () => (0, d.Ft)(),
                    icon: i.V,
                    "aria-label": "DevTools",
                    selected: a,
                    ...t,
                });
            },
        }),
    });
}
