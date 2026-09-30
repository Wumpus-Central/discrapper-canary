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
    m = n(939249),
    h = n(625903),
    p = n(180170),
    f = n(435738),
    g = n(652215),
    x = n(375708);
function A(e) {
    let { closePopout: t } = e,
        i = (0, s.bG)([f.A], () => f.A.hidden);
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
                        ((0, u.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("742445"),
                                n.e("451778"),
                                n.e("186262"),
                                n.e("190309"),
                            ]).then(n.bind(n, 643460));
                            return (t) => (0, l.jsx)(e, { ...t });
                        }),
                            t?.());
                    },
                }),
                (0, l.jsx)(a.sL, {
                    id: "hide",
                    label: x.intl.string(x.t.AhNYuY),
                    checked: i,
                    leadingAccessory: { type: "icon", icon: c.EyeSlashIcon },
                    action: () => {
                        ((0, p.Il)(), t?.());
                    },
                }),
            ],
        }),
    });
}
let C = function (e) {
    let t = i.useRef(null);
    return (0, l.jsx)(d.Y, {
        targetElementRef: t,
        animation: d.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(A, { closePopout: t });
        },
        children: (n) =>
            (0, l.jsx)(m.D, {
                ...n,
                ...e,
                innerRef: t,
                "aria-label": x.intl.string(x.t.w2jvOf),
                onClick: (e) => {
                    (e.stopPropagation(), n.onClick(e));
                },
                style: { width: "12px", height: "12px", display: "flex" },
                children: (0, l.jsx)(h.SettingsIcon, { size: "xxs" }),
            }),
    });
};
