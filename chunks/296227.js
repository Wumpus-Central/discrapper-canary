n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(442433),
    d = n(928658),
    c = n(985018),
    u = n(418843);
function g(e) {
    let { widget: t, userId: n, className: a, menuItems: g } = e,
        m = l.useRef(null),
        x = () => {
            (0, d.GJ)(n, t);
        };
    return (0, i.jsx)(s.YNO, {
        targetElementRef: m,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(s.W1t, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, o.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": c.intl.string(c.t.xpSHSk),
                children: (0, i.jsxs)(s.rXV, {
                    children: [
                        g,
                        (0, i.jsx)(
                            s.Drp,
                            {
                                id: "flag-widget",
                                label: c.intl.string(c.t.D4GvHE),
                                action: x,
                                color: "danger",
                                icon: s.iFK,
                                leadingAccessory: { type: "icon", icon: s.iFK },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(s.DUT, {
                ...e,
                innerRef: m,
                "aria-label": c.intl.string(c.t.xpSHSk),
                className: r()(u.x, a),
                children: (0, i.jsx)(s.jNK, { size: "sm", color: "currentColor" }),
            }),
    });
}
