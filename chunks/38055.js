"use strict";
n.d(t, { A: () => C, MemberListContentSettingsMenu: () => A });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    r = n(980707),
    a = n(477782),
    o = n(885574),
    u = n(192308),
    c = n(952270),
    d = n(922016),
    m = n(939249),
    h = n(625903),
    p = n(180170),
    f = n(435738),
    g = n(652215),
    E = n(375708);
function A(e) {
    let { closePopout: t } = e,
        i = (0, s.bG)([f.A], () => f.A.hidden);
    return (0, l.jsx)(r.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "member-list-settings-menu",
        onClose: null != t ? t : g.tEg,
        "aria-label": E.intl.string(E.t.w2jvOf),
        children: (0, l.jsxs)(a.rX, {
            children: [
                (0, l.jsx)(a.Dr, {
                    id: "about",
                    label: E.intl.string(E.t.pWLGnF),
                    leadingAccessory: { type: "icon", icon: o.m },
                    icon: o.m,
                    action: () => {
                        (0, u.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("10434"),
                                n.e("51778"),
                                n.e("86262"),
                                n.e("90309"),
                            ]).then(n.bind(n, 643460));
                            return (t) => (0, l.jsx)(e, { ...t });
                        }),
                            t?.();
                    },
                }),
                (0, l.jsx)(a.sL, {
                    id: "hide",
                    label: E.intl.string(E.t.AhNYuY),
                    checked: i,
                    leadingAccessory: { type: "icon", icon: c.G },
                    action: () => {
                        (0, p.Il)(), t?.();
                    },
                }),
            ],
        }),
    });
}
let C = function () {
    let e = i.useRef(null);
    return (0, l.jsx)(d.Y, {
        targetElementRef: e,
        animation: d.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(A, { closePopout: t });
        },
        children: (t) =>
            (0, l.jsx)(m.D, {
                ...t,
                innerRef: e,
                "aria-label": E.intl.string(E.t.w2jvOf),
                onClick: (e) => {
                    e.stopPropagation(), t.onClick(e);
                },
                style: { width: "12px", height: "12px", display: "flex" },
                children: (0, l.jsx)(h.Z, { size: "xxs" }),
            }),
    });
};
