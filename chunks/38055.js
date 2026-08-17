"use strict";
n.d(t, { A: () => C, MemberListContentSettingsMenu: () => A });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(980707),
    a = n(477782),
    o = n(885574),
    u = n(192308),
    c = n(952270),
    d = n(922016),
    h = n(939249),
    m = n(625903),
    f = n(180170),
    p = n(435738),
    g = n(652215),
    x = n(375708);
function A(e) {
    let { closePopout: t } = e,
        i = (0, s.bG)([p.A], () => p.A.hidden);
    return (0, l.jsx)(r.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "member-list-settings-menu",
        onClose: null != t ? t : g.tEg,
        "aria-label": x.intl.string(x.t.w2jvOf),
        children: (0, l.jsxs)(a.rX, {
            children: [
                (0, l.jsx)(a.Dr, {
                    id: "about",
                    label: x.intl.string(x.t.pWLGnF),
                    leadingAccessory: { type: "icon", icon: o.CircleInformationIcon },
                    icon: o.CircleInformationIcon,
                    action: () => {
                        (0, u.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("949370"),
                                n.e("451778"),
                                n.e("186262"),
                                n.e("190309"),
                            ]).then(n.bind(n, 643460));
                            return (t) => (0, l.jsx)(e, { ...t });
                        }),
                            t?.();
                    },
                }),
                (0, l.jsx)(a.sL, {
                    id: "hide",
                    label: x.intl.string(x.t.AhNYuY),
                    checked: i,
                    leadingAccessory: { type: "icon", icon: c.EyeSlashIcon },
                    action: () => {
                        (0, f.Il)(), t?.();
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
            (0, l.jsx)(h.D, {
                ...t,
                innerRef: e,
                "aria-label": x.intl.string(x.t.w2jvOf),
                onClick: (e) => {
                    e.stopPropagation(), t.onClick(e);
                },
                style: { width: "12px", height: "12px", display: "flex" },
                children: (0, l.jsx)(m.SettingsIcon, { size: "xxs" }),
            }),
    });
};
