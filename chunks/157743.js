n.d(a, { default: () => d });
var s = n(200651);
n(192379);
var r = n(481060),
    c = n(918125),
    o = n(488131),
    t = n(124368),
    i = n(388032),
    l = n(576359);
function d(e) {
    let { guildId: a, onClose: n, transitionState: d } = e;
    return (0, s.jsx)(r.Y0X, {
        className: l.modal,
        transitionState: d,
        'aria-label': i.NW.string(i.t.B2panJ),
        size: r.CgR.DYNAMIC,
        children: (0, s.jsxs)('div', {
            className: l.container,
            children: [
                (0, s.jsxs)('div', {
                    className: l.header,
                    children: [
                        (0, s.jsx)(r.or_, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.threadIcon
                        }),
                        (0, s.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            className: l.__invalid_title,
                            children: i.NW.string(i.t['dOWb+f'])
                        }),
                        (0, s.jsx)('div', { className: l.spacer }),
                        (0, s.jsx)(r.P3F, {
                            className: l.closeIcon,
                            onClick: n,
                            'aria-label': i.NW.string(i.t.cpT0Cg),
                            children: (0, s.jsx)(r.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, s.jsx)(c.Z, {
                    guildId: a,
                    goToThread: (e, a) => {
                        n(), (0, o.ok)(e, !a, t.on.GUILD_ACTIVE_THREADS_MODAL);
                    }
                })
            ]
        })
    });
}
