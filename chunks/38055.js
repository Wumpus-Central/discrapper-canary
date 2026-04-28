"use strict";
n.d(t, { A: () => A, MemberListContentSettingsMenu: () => C });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(550079),
    r = n(477782),
    o = n(885574),
    c = n(192308),
    u = n(952270),
    d = n(922016),
    h = n(939249),
    m = n(625903),
    p = n(180170),
    f = n(435738),
    g = n(652215),
    x = n(985018);
let C = (e) => {
        let { closePopout: t } = e,
            i = (0, s.bG)([f.A], () => f.A.hidden);
        return (0, l.jsx)(a.W, {
            "data-menu-migrated": !0,
            onSelect: () => {},
            navId: "member-list-settings-menu",
            onClose: null != t ? t : g.tEg,
            "aria-label": x.intl.string(x.t.w2jvOf),
            children: (0, l.jsxs)(r.rX, {
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "about",
                        label: x.intl.string(x.t.pWLGnF),
                        leadingAccessory: { type: "icon", icon: o.m },
                        icon: o.m,
                        action: () => {
                            (0, c.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("10434"),
                                    n.e("29852"),
                                    n.e("51778"),
                                    n.e("90309"),
                                ]).then(n.bind(n, 643460));
                                return (t) => (0, l.jsx)(e, { ...t });
                            }),
                                t?.();
                        },
                    }),
                    (0, l.jsx)(r.sL, {
                        id: "hide",
                        label: x.intl.string(x.t.AhNYuY),
                        checked: i,
                        leadingAccessory: { type: "icon", icon: u.G },
                        action: () => {
                            (0, p.Il)(), t?.();
                        },
                    }),
                ],
            }),
        });
    },
    A = () => {
        let e = i.useRef(null);
        return (0, l.jsx)(d.Y, {
            targetElementRef: e,
            animation: d.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(C, { closePopout: t });
            },
            children: (t) =>
                (0, l.jsx)(h.D, {
                    ...t,
                    innerRef: e,
                    onClick: (e) => {
                        e.stopPropagation(), t.onClick(e);
                    },
                    style: { width: "12px", height: "12px", display: "flex" },
                    children: (0, l.jsx)(m.Z, { size: "xxs" }),
                }),
        });
    };
