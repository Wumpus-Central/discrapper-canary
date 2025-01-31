n.d(t, { U: () => l });
var s = n(200651);
n(192379);
var r = n(481060),
    a = n(46140),
    o = n(388032);
function i(e) {
    let { onClose: t, onSelect: n, quest: i } = e;
    return (0, s.jsx)(r.v2r, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(i.id),
        'aria-label': o.intl.string(o.t.ogxXGh),
        onClose: t,
        children: (0, s.jsxs)(
            r.kSQ,
            {
                children: [
                    (0, s.jsx)(r.sNh, {
                        id: 'desktop',
                        label: o.intl.string(o.t.QXc019),
                        action: () => n(a.cd.DESKTOP),
                        icon: r.pzj
                    }),
                    (0, s.jsx)(r.sNh, {
                        id: 'console',
                        label: o.intl.string(o.t['8lAfuL']),
                        action: () => n(a.cd.CONSOLE),
                        icon: r.iWm
                    })
                ]
            },
            'actions'
        )
    });
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, s.jsx)(r.yRy, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i, {
                ...n,
                onClose: t
            });
        },
        children: t
    });
}
