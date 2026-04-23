"use strict";
n.d(t, { A: () => A, MemberListContentSettingsMenu: () => p });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(550079),
    o = n(477782),
    l = n(885574),
    d = n(192308),
    _ = n(952270),
    u = n(922016),
    c = n(939249),
    E = n(625903),
    h = n(180170),
    m = n(435738),
    f = n(652215),
    g = n(985018);
let p = (e) => {
        let { closePopout: t } = e,
            r = (0, s.bG)([m.A], () => m.A.hidden);
        return (0, i.jsx)(a.W, {
            "data-menu-migrated": !0,
            onSelect: () => {},
            navId: "member-list-settings-menu",
            onClose: null != t ? t : f.tEg,
            "aria-label": g.intl.string(g.t.w2jvOf),
            children: (0, i.jsxs)(o.rX, {
                children: [
                    (0, i.jsx)(o.Dr, {
                        id: "about",
                        label: g.intl.string(g.t.pWLGnF),
                        leadingAccessory: { type: "icon", icon: l.m },
                        icon: l.m,
                        action: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await n.e("90309").then(n.bind(n, 643460));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                t?.();
                        },
                    }),
                    (0, i.jsx)(o.sL, {
                        id: "hide",
                        label: g.intl.string(g.t.AhNYuY),
                        checked: r,
                        leadingAccessory: { type: "icon", icon: _.G },
                        action: () => {
                            (0, h.Il)(), t?.();
                        },
                    }),
                ],
            }),
        });
    },
    A = () => {
        let e = r.useRef(null);
        return (0, i.jsx)(u.Y, {
            targetElementRef: e,
            animation: u.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(p, { closePopout: t });
            },
            children: (t) =>
                (0, i.jsx)(c.D, {
                    ...t,
                    innerRef: e,
                    onClick: (e) => {
                        e.stopPropagation(), t.onClick(e);
                    },
                    style: { width: "12px", height: "12px", display: "flex" },
                    children: (0, i.jsx)(E.Z, { size: "xxs" }),
                }),
        });
    };
