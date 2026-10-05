n.d(t, { A: () => I, MemberListContentSettingsMenu: () => f });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(980707),
    a = n(477782),
    o = n(885574),
    d = n(192308),
    c = n(952270),
    u = n(922016),
    h = n(939249),
    m = n(625903),
    A = n(180170),
    p = n(435738),
    g = n(652215),
    x = n(375708);
function f(e) {
    let { closePopout: t } = e,
        l = (0, s.bG)([p.A], () => p.A.hidden);
    return (0, i.jsx)(r.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "member-list-settings-menu",
        onClose: null != t ? t : g.tEg,
        "aria-label": x.intl.string(x.t.w2jvOf),
        children: (0, i.jsxs)(a.rX, {
            children: [
                (0, i.jsx)(a.Dr, {
                    id: "about",
                    label: x.intl.string(x.t.pWLGnF),
                    leadingAccessory: { type: "icon", icon: o.CircleInformationIcon },
                    icon: o.CircleInformationIcon,
                    action: () => {
                        ((0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("742445"), n.e("190309")]).then(
                                n.bind(n, 643460),
                            );
                            return (t) => (0, i.jsx)(e, { ...t });
                        }),
                            t?.());
                    },
                }),
                (0, i.jsx)(a.sL, {
                    id: "hide",
                    label: x.intl.string(x.t.AhNYuY),
                    checked: l,
                    leadingAccessory: { type: "icon", icon: c.EyeSlashIcon },
                    action: () => {
                        ((0, A.Il)(), t?.());
                    },
                }),
            ],
        }),
    });
}
let I = function (e) {
    let t = l.useRef(null);
    return (0, i.jsx)(u.Y, {
        targetElementRef: t,
        animation: u.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(f, { closePopout: t });
        },
        children: (n) =>
            (0, i.jsx)(h.D, {
                ...n,
                ...e,
                innerRef: t,
                "aria-label": x.intl.string(x.t.w2jvOf),
                onClick: (e) => {
                    (e.stopPropagation(), n.onClick(e));
                },
                style: { width: "12px", height: "12px", display: "flex" },
                children: (0, i.jsx)(m.SettingsIcon, { size: "xxs" }),
            }),
    });
};
