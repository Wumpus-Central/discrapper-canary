"use strict";
n.d(t, { A: () => A, MemberListContentSettingsMenu: () => g });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(861672),
    o = n(477782),
    l = n(885574),
    u = n(192308),
    c = n(952270),
    d = n(265872),
    _ = n(939249),
    f = n(625903),
    p = n(708197),
    h = n(435738),
    E = n(652215),
    m = n(985018);
let g = (e) => {
        let { closePopout: t } = e,
            i = (0, s.bG)([h.A], () => h.A.hidden);
        return (0, r.jsx)(a.W, {
            "data-menu-migrated": !0,
            onSelect: () => {},
            navId: "member-list-settings-menu",
            onClose: null != t ? t : E.tEg,
            "aria-label": m.intl.string(m.t.w2jvOf),
            children: (0, r.jsxs)(o.rX, {
                children: [
                    (0, r.jsx)(o.Dr, {
                        id: "about",
                        label: m.intl.string(m.t.pWLGnF),
                        leadingAccessory: { type: "icon", icon: l.m },
                        icon: l.m,
                        action: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await n.e("90309").then(n.bind(n, 643460));
                                return (t) => (0, r.jsx)(e, { ...t });
                            }),
                                t?.();
                        },
                    }),
                    (0, r.jsx)(o.sL, {
                        id: "hide",
                        label: m.intl.string(m.t.AhNYuY),
                        checked: i,
                        leadingAccessory: { type: "icon", icon: c.G },
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
        return (0, r.jsx)(d.Y, {
            targetElementRef: e,
            animation: d.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g, { closePopout: t });
            },
            children: (t) =>
                (0, r.jsx)(_.D, {
                    ...t,
                    innerRef: e,
                    onClick: (e) => {
                        e.stopPropagation(), t.onClick(e);
                    },
                    style: { width: "12px", height: "12px", display: "flex" },
                    children: (0, r.jsx)(f.Z, { size: "xxs" }),
                }),
        });
    };
