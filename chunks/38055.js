"use strict";
n.d(t, { A: () => _, MemberListContentSettingsMenu: () => d });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(708197),
    l = n(435738),
    u = n(652215),
    c = n(985018);
let d = (e) => {
        let { closePopout: t } = e,
            i = (0, a.bG)([l.A], () => l.A.hidden);
        return (0, r.jsx)(s.W1t, {
            "data-menu-migrated": !0,
            onSelect: () => {},
            navId: "member-list-settings-menu",
            onClose: null != t ? t : u.tEg,
            "aria-label": c.intl.string(c.t.w2jvOf),
            children: (0, r.jsxs)(s.rXV, {
                children: [
                    (0, r.jsx)(s.Drp, {
                        id: "about",
                        label: c.intl.string(c.t.pWLGnF),
                        leadingAccessory: { type: "icon", icon: s.mir },
                        icon: s.mir,
                        action: () => {
                            (0, s.mMO)(async () => {
                                let { default: e } = await n.e("90309").then(n.bind(n, 643460));
                                return (t) => (0, r.jsx)(e, { ...t });
                            }),
                                t?.();
                        },
                    }),
                    (0, r.jsx)(s.sLh, {
                        id: "hide",
                        label: c.intl.string(c.t.AhNYuY),
                        checked: i,
                        leadingAccessory: { type: "icon", icon: s.G3N },
                        action: () => {
                            (0, o.Il)(), t?.();
                        },
                    }),
                ],
            }),
        });
    },
    _ = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(s.YNO, {
            targetElementRef: e,
            animation: s.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(d, { closePopout: t });
            },
            children: (t) =>
                (0, r.jsx)(s.DUT, {
                    ...t,
                    innerRef: e,
                    onClick: (e) => {
                        e.stopPropagation(), t.onClick(e);
                    },
                    style: { width: "12px", height: "12px", display: "flex" },
                    children: (0, r.jsx)(s.Zes, { size: "xxs" }),
                }),
        });
    };
