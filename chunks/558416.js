n.d(t, { w: () => g });
var i = n(627968),
    r = n(64700),
    a = n(192308),
    l = n(861672),
    s = n(477782),
    o = n(92446),
    d = n(509434),
    u = n(290136),
    c = n(265872),
    A = n(975807),
    h = n(189252),
    _ = n(975571),
    E = n(985018);
let p = () =>
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e("81008").then(n.bind(n, 572723));
        return (t) => (0, i.jsx)(e, { ...t });
    });
function m(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(l.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": E.intl.string(E.t.HpQykc),
        children: (0, i.jsxs)(s.rX, {
            children: [
                (0, i.jsx)(s.Dr, {
                    id: "staff-help-bug-reporter",
                    label: E.intl.string(E.t["5LqopY"]),
                    icon: o.Q,
                    leadingAccessory: { type: "icon", icon: o.Q },
                    action: p,
                }),
                (0, i.jsx)(s.Dr, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: d.I,
                    leadingAccessory: { type: "icon", icon: u.c },
                    trailingIndicator: { type: "icon", icon: d.I },
                    action: () => (0, A.A)(_.C),
                }),
            ],
        }),
    });
}
function g(e) {
    let { focusSectionProps: t } = e,
        [n, a] = r.useState(!1),
        [l, s] = r.useState(0),
        d = r.useRef(null),
        u = (e) => {
            clearTimeout(l),
                s(
                    setTimeout(() => {
                        a(e);
                    }, 100),
                );
        };
    return (0, i.jsx)("div", {
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        children: (0, i.jsx)(c.Y, {
            targetElementRef: d,
            shouldShow: n,
            animation: c.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => a(!0),
            onRequestClose: () => a(!1),
            renderPopout: () => (0, i.jsx)(m, { onClose: () => a(!1) }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(h.A, {
                    ref: d,
                    onClick: p,
                    icon: o.Q,
                    "aria-label": E.intl.string(E.t["5LqopY"]),
                    selected: r,
                    ...t,
                });
            },
        }),
    });
}
