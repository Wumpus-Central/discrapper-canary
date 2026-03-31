n.d(t, { e: () => d });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(397927),
    r = n(245205),
    o = n(985018);
let c = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, i.jsx)(a.W1t, {
            "data-menu-migrated": !0,
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": o.intl.string(o.t.ljs3Oe),
            children: (0, i.jsx)(a.Drp, {
                id: "delete",
                label: o.intl.string(o.t.oyYWHE),
                icon: a.ucK,
                leadingAccessory: { type: "icon", icon: a.ucK },
                action: async () => {
                    await (0, r.VP)(t);
                },
            }),
        });
    },
    d = l.memo(function (e) {
        let { item: t } = e,
            n = l.useRef(null);
        return (0, i.jsx)(a.YNO, {
            targetElementRef: n,
            renderPopout: (e) => (0, i.jsx)(c, { ...e, item: t }),
            position: "bottom",
            align: "right",
            animation: a.YNO.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(s.m, {
                    text: o.intl.string(o.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, i.jsx)(a.K0, {
                        buttonRef: n,
                        size: "sm",
                        icon: a.jNK,
                        variant: "icon-only",
                        "aria-label": o.intl.string(o.t["UKOtz+"]),
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
