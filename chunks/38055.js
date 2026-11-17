var i = t(477900),
    l = t(582128),
    r = t(855986),
    s = t(165862),
    a = t(477782),
    o = t(885574),
    d = t(192308),
    c = t(952270),
    u = t(265872),
    h = t(939249),
    A = t(625903),
    m = t(396696),
    p = t(435738),
    g = t(652215),
    f = t(792996),
    x = t(569709);
function I(e) {
    let { closePopout: n } = e,
        l = (0, r.bG)([p.A], () => p.A.hidden);
    return (0, i.jsx)(s.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "member-list-settings-menu",
        onClose: null != n ? n : g.tEg,
        "aria-label": f.intl.string(f.t.w2jvOf),
        children: (0, i.jsxs)(a.rX, {
            children: [
                (0, i.jsx)(a.Dr, {
                    id: "about",
                    label: f.intl.string(f.t.pWLGnF),
                    leadingAccessory: { type: "icon", icon: o.CircleInformationIcon },
                    icon: o.CircleInformationIcon,
                    action: () => {
                        ((0, d.mM)(async () => {
                            let { default: e } = await Promise.all([t.e(742445), t.e(190309)]).then(t.bind(t, 643460));
                            return (n) => (0, i.jsx)(e, { ...n });
                        }),
                            n?.());
                    },
                }),
                (0, i.jsx)(a.sL, {
                    id: "hide",
                    label: f.intl.string(f.t.AhNYuY),
                    checked: l,
                    leadingAccessory: { type: "icon", icon: c.EyeSlashIcon },
                    action: () => {
                        ((0, m.Il)(), n?.());
                    },
                }),
            ],
        }),
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = l.useRef(null);
            return (0, i.jsx)(u.Y, {
                targetElementRef: n,
                animation: u.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(I, { closePopout: n });
                },
                children: (t) =>
                    (0, i.jsx)(h.D, {
                        ...t,
                        ...e,
                        innerRef: n,
                        "aria-label": f.intl.string(f.t.w2jvOf),
                        "aria-haspopup": !0,
                        onClick: (e) => {
                            (e.stopPropagation(), t.onClick(e));
                        },
                        className: x.Se,
                        focusProps: { offset: 4 },
                        children: (0, i.jsx)(A.SettingsIcon, { size: "xxs", color: "currentColor" }),
                    }),
            });
        },
        MemberListContentSettingsMenu: I,
    },
);
