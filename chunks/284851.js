n.d(t, { U: () => l });
var r = n(200651);
n(192379);
var o = n(481060),
    s = n(46140),
    a = n(388032);
function i(e) {
    let { onClose: t, onSelect: n, quest: i } = e;
    return (0, r.jsx)(o.v2r, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(i.id),
        'aria-label': a.intl.string(a.t.ogxXGh),
        onClose: t,
        children: (0, r.jsxs)(
            o.kSQ,
            {
                children: [
                    (0, r.jsx)(o.sNh, {
                        id: 'desktop',
                        label: a.intl.string(a.t.QXc019),
                        action: () => n(s.cd.DESKTOP),
                        icon: o.pzj
                    }),
                    (0, r.jsx)(o.sNh, {
                        id: 'console',
                        label: a.intl.string(a.t['8lAfuL']),
                        action: () => n(s.cd.CONSOLE),
                        icon: o.iWm
                    })
                ]
            },
            'actions'
        )
    });
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(o.yRy, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(i, {
                ...n,
                onClose: t
            });
        },
        children: t
    });
}
