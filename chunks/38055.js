"use strict";
n.d(t, { A: () => T, MemberListContentSettingsMenu: () => p });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(980707),
    l = n(477782),
    o = n(885574),
    d = n(192308),
    c = n(952270),
    u = n(922016),
    _ = n(939249),
    E = n(625903),
    A = n(180170),
    h = n(435738),
    I = n(652215),
    f = n(375708);
function p(e) {
    let { closePopout: t } = e,
        r = (0, a.bG)([h.A], () => h.A.hidden);
    return (0, i.jsx)(s.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "member-list-settings-menu",
        onClose: null != t ? t : I.tEg,
        "aria-label": f.intl.string(f.t.w2jvOf),
        children: (0, i.jsxs)(l.rX, {
            children: [
                (0, i.jsx)(l.Dr, {
                    id: "about",
                    label: f.intl.string(f.t.pWLGnF),
                    leadingAccessory: { type: "icon", icon: o.m },
                    icon: o.m,
                    action: () => {
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49370"),
                                n.e("51778"),
                                n.e("86262"),
                                n.e("90309"),
                            ]).then(n.bind(n, 643460));
                            return (t) => (0, i.jsx)(e, { ...t });
                        }),
                            t?.();
                    },
                }),
                (0, i.jsx)(l.sL, {
                    id: "hide",
                    label: f.intl.string(f.t.AhNYuY),
                    checked: r,
                    leadingAccessory: { type: "icon", icon: c.G },
                    action: () => {
                        (0, A.Il)(), t?.();
                    },
                }),
            ],
        }),
    });
}
let T = function () {
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
            (0, i.jsx)(_.D, {
                ...t,
                innerRef: e,
                "aria-label": f.intl.string(f.t.w2jvOf),
                onClick: (e) => {
                    e.stopPropagation(), t.onClick(e);
                },
                style: { width: "12px", height: "12px", display: "flex" },
                children: (0, i.jsx)(E.Z, { size: "xxs" }),
            }),
    });
};
