n.d(t, {
    MemberListContentSettingsMenu: () => d,
    Z: () => u
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(485267),
    s = n(71585),
    o = n(981631),
    c = n(388032);
let d = (e) => {
        let { closePopout: t } = e,
            d = (0, l.e7)([s.Z], () => s.Z.hidden);
        return (0, i.jsx)(a.v2r, {
            onSelect: () => {},
            navId: 'member-list-settings-menu',
            onClose: null != t ? t : o.dG4,
            'aria-label': c.intl.string(c.t.w2jvOT),
            children: (0, i.jsxs)(a.kSQ, {
                children: [
                    (0, i.jsx)(a.sNh, {
                        id: 'about',
                        label: c.intl.string(c.t.pWLGnJ),
                        icon: a.d3s,
                        action: () => {
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e('71517').then(n.bind(n, 549505));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                null == t || t();
                        }
                    }),
                    (0, i.jsx)(a.S89, {
                        id: 'hide',
                        label: c.intl.string(c.t.AhNYub),
                        checked: d,
                        action: () => {
                            (0, r.lY)(), null == t || t();
                        }
                    })
                ]
            })
        });
    },
    u = () =>
        (0, i.jsx)(a.yRy, {
            animation: a.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(d, { closePopout: t });
            },
            children: (e) =>
                (0, i.jsx)(a.P3F, {
                    ...e,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    style: {
                        width: '12px',
                        height: '12px',
                        display: 'flex'
                    },
                    children: (0, i.jsx)(a.ewm, { size: 'xxs' })
                })
        });
