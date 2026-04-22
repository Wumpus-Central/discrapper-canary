n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(265872),
    o = n(861672),
    c = n(477782),
    d = n(138134),
    u = n(939249),
    m = n(365199),
    p = n(442433),
    h = n(928658),
    g = n(985018),
    x = n(620266);
function f(e) {
    let { widget: t, userId: n, className: a, menuItems: f } = e,
        E = l.useRef(null),
        y = () => {
            (0, h.GJ)(n, t);
        };
    return (0, i.jsx)(s.Y, {
        targetElementRef: E,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, p.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": g.intl.string(g.t.xpSHSk),
                children: (0, i.jsxs)(c.rX, {
                    children: [
                        f,
                        (0, i.jsx)(
                            c.Dr,
                            {
                                id: "flag-widget",
                                label: g.intl.string(g.t.D4GvHE),
                                action: y,
                                color: "danger",
                                icon: d.i,
                                leadingAccessory: { type: "icon", icon: d.i },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(u.D, {
                ...e,
                innerRef: E,
                "aria-label": g.intl.string(g.t.xpSHSk),
                className: r()(x.x, a),
                children: (0, i.jsx)(m.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
