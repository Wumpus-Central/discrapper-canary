n.r(t),
    n.d(t, {
        MemberListContentSettingsMenu: function () {
            return d;
        }
    });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(485267),
    s = n(71585),
    o = n(981631),
    c = n(388032);
let d = (e) => {
    let { closePopout: t } = e,
        d = (0, l.e7)([s.Z], () => s.Z.hidden);
    return (0, i.jsx)(r.Menu, {
        onSelect: () => {},
        navId: 'member-list-settings-menu',
        onClose: null != t ? t : o.dG4,
        'aria-label': c.intl.string(c.t.w2jvOT),
        children: (0, i.jsxs)(r.MenuGroup, {
            children: [
                (0, i.jsx)(r.MenuItem, {
                    id: 'about',
                    label: c.intl.string(c.t.pWLGnJ),
                    icon: r.CircleInformationIcon,
                    action: () => {
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e('71517').then(n.bind(n, 549505));
                            return (t) => (0, i.jsx)(e, { ...t });
                        }),
                            null == t || t();
                    }
                }),
                (0, i.jsx)(r.MenuCheckboxItem, {
                    id: 'hide',
                    label: c.intl.string(c.t.AhNYub),
                    checked: d,
                    action: () => {
                        (0, a.lY)(), null == t || t();
                    }
                })
            ]
        })
    });
};
t.default = () =>
    (0, i.jsx)(r.Popout, {
        animation: r.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(d, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(r.Clickable, {
                ...e,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick(t);
                },
                style: {
                    width: '12px',
                    height: '12px',
                    display: 'flex'
                },
                children: (0, i.jsx)(r.SettingsIcon, { size: 'xxs' })
            })
    });
