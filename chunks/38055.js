t.d(n, { A: () => I, MemberListContentSettingsMenu: () => f });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    r = t(980707),
    a = t(477782),
    o = t(885574),
    d = t(192308),
    c = t(952270),
    u = t(922016),
    h = t(939249),
    m = t(625903),
    A = t(180170),
    p = t(435738),
    g = t(652215),
    x = t(375708);
function f(e) {
    let { closePopout: n } = e,
        l = (0, s.bG)([p.A], () => p.A.hidden);
    return (0, i.jsx)(r.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "member-list-settings-menu",
        onClose: null != n ? n : g.tEg,
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
                            let { default: e } = await Promise.all([t.e("742445"), t.e("190309")]).then(
                                t.bind(t, 643460),
                            );
                            return (n) => (0, i.jsx)(e, { ...n });
                        }),
                            n?.());
                    },
                }),
                (0, i.jsx)(a.sL, {
                    id: "hide",
                    label: x.intl.string(x.t.AhNYuY),
                    checked: l,
                    leadingAccessory: { type: "icon", icon: c.EyeSlashIcon },
                    action: () => {
                        ((0, A.Il)(), n?.());
                    },
                }),
            ],
        }),
    });
}
let I = function (e) {
    let n = l.useRef(null);
    return (0, i.jsx)(u.Y, {
        targetElementRef: n,
        animation: u.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(f, { closePopout: n });
        },
        children: (t) =>
            (0, i.jsx)(h.D, {
                ...t,
                ...e,
                innerRef: n,
                "aria-label": x.intl.string(x.t.w2jvOf),
                onClick: (e) => {
                    (e.stopPropagation(), t.onClick(e));
                },
                style: { width: "12px", height: "12px", display: "flex" },
                children: (0, i.jsx)(m.SettingsIcon, { size: "xxs" }),
            }),
    });
};
