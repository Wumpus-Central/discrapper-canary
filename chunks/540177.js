n.r(t), n.d(t, { default: () => f });
var o = n(477900),
    s = n(582128),
    r = n(980707),
    a = n(477782),
    i = n(922016),
    l = n(306471),
    u = n(189252),
    d = n(538064),
    c = n(786574),
    p = n(182701),
    h = n(949091);
function v(e) {
    let { onClose: t } = e,
        n = (0, p.x)(),
        s = (0, c.N)(n, d.Ft),
        i = (0, h.A)();
    return (0, o.jsxs)(r.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [s, (0, o.jsx)(a.rX, { "aria-label": "Playgrounds", children: i })],
    });
}
function f(e) {
    let { focusSectionProps: t } = e,
        [n, r] = s.useState(!1),
        [a, c] = s.useState(0),
        p = s.useRef(null);
    function h(e) {
        clearTimeout(a),
            c(
                setTimeout(() => {
                    r(e);
                }, 100),
            );
    }
    return (0, o.jsx)("div", {
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, o.jsx)(i.Y, {
            targetElementRef: p,
            shouldShow: n,
            animation: i.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => r(!0),
            onRequestClose: () => r(!1),
            renderPopout: () => (0, o.jsx)(v, { onClose: () => r(!1) }),
            children: (e, n) => {
                let { isShown: s } = n;
                return (0, o.jsx)(u.A, {
                    ref: p,
                    onClick: () => (0, d.Ft)(),
                    icon: l.V,
                    "aria-label": "DevTools",
                    selected: s,
                    ...t,
                });
            },
        }),
    });
}
