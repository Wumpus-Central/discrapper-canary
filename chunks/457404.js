"use strict";
n.d(t, { e: () => d });
var i = n(627968),
    s = n(64700),
    l = n(990078),
    r = n(397927),
    a = n(245205),
    o = n(985018);
let c = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, i.jsx)(r.W1t, {
            "data-menu-migrated": !0,
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": o.intl.string(o.t.ljs3Oe),
            children: (0, i.jsx)(r.Drp, {
                id: "delete",
                label: o.intl.string(o.t.oyYWHE),
                icon: r.ucK,
                leadingAccessory: { type: "icon", icon: r.ucK },
                action: async () => {
                    await (0, a.VP)(t);
                },
            }),
        });
    },
    d = s.memo(function (e) {
        let { item: t } = e,
            n = s.useRef(null);
        return (0, i.jsx)(r.YNO, {
            targetElementRef: n,
            renderPopout: (e) => (0, i.jsx)(c, { ...e, item: t }),
            position: "bottom",
            align: "right",
            animation: r.YNO.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(l.m, {
                    text: o.intl.string(o.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, i.jsx)(r.K0, {
                        buttonRef: n,
                        size: "sm",
                        icon: r.jNK,
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
