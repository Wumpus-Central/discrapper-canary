n.d(t, { z: () => c });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(833592),
    s = n(388032);
let o = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, i.jsx)(a.v2r, {
            navId: 'notification-actions',
            onClose: n,
            onSelect: n,
            'aria-label': s.intl.string(s.t.ljs3OT),
            children: (0, i.jsx)(a.sNh, {
                id: 'delete',
                label: s.intl.string(s.t.oyYWHB),
                icon: a.XHJ,
                action: async () => {
                    await (0, r.g3)(t);
                }
            })
        });
    },
    c = l.memo(function (e) {
        let { item: t } = e;
        return (0, i.jsx)(a.yRy, {
            renderPopout: (e) =>
                (0, i.jsx)(o, {
                    ...e,
                    item: t
                }),
            position: 'bottom',
            align: 'right',
            animation: a.yRy.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(a.M0o, {
                    tooltip: s.intl.string(s.t.UKOtz8),
                    color: a.YX$.TERTIARY,
                    icon: (0, i.jsx)(a.xhG, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: (e) => {
                        e.stopPropagation(), t(e);
                    },
                    'aria-haspopup': 'menu'
                });
            }
        });
    });
