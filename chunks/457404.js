n.d(t, { e: () => m });
var s = n(627968),
    a = n(64700),
    l = n(990078),
    i = n(861672),
    r = n(477782),
    o = n(241326),
    d = n(265872),
    c = n(408278),
    u = n(365199),
    h = n(245205),
    _ = n(985018);
let A = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, s.jsx)(i.W, {
            "data-menu-migrated": !0,
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": _.intl.string(_.t.ljs3Oe),
            children: (0, s.jsx)(r.Dr, {
                id: "delete",
                label: _.intl.string(_.t.oyYWHE),
                icon: o.u,
                leadingAccessory: { type: "icon", icon: o.u },
                action: async () => {
                    await (0, h.VP)(t);
                },
            }),
        });
    },
    m = a.memo(function (e) {
        let { item: t } = e,
            n = a.useRef(null);
        return (0, s.jsx)(d.Y, {
            targetElementRef: n,
            renderPopout: (e) => (0, s.jsx)(A, { ...e, item: t }),
            position: "bottom",
            align: "right",
            animation: d.Y.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, s.jsx)(l.m, {
                    text: _.intl.string(_.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, s.jsx)(c.K, {
                        buttonRef: n,
                        size: "sm",
                        icon: u.j,
                        variant: "icon-only",
                        "aria-label": _.intl.string(_.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        onClick: (e) => {
                            e.stopPropagation(), t(e);
                        },
                        role: "button",
                    }),
                });
            },
        });
    });
