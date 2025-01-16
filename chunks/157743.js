a.r(n),
    a.d(n, {
        default: function () {
            return d;
        }
    });
var r = a(200651);
a(192379);
var s = a(481060),
    c = a(918125),
    t = a(488131),
    o = a(124368),
    i = a(388032),
    l = a(258533);
function d(e) {
    let { guildId: n, onClose: a, transitionState: d } = e;
    return (0, r.jsx)(s.ModalRoot, {
        className: l.modal,
        transitionState: d,
        'aria-label': i.intl.string(i.t.B2panJ),
        size: s.ModalSize.DYNAMIC,
        children: (0, r.jsxs)('div', {
            className: l.container,
            children: [
                (0, r.jsxs)('div', {
                    className: l.header,
                    children: [
                        (0, r.jsx)(s.ThreadIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.threadIcon
                        }),
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            className: l.__invalid_title,
                            children: i.intl.string(i.t['dOWb+f'])
                        }),
                        (0, r.jsx)('div', { className: l.spacer }),
                        (0, r.jsx)(s.Clickable, {
                            className: l.closeIcon,
                            onClick: a,
                            'aria-label': i.intl.string(i.t.cpT0Cg),
                            children: (0, r.jsx)(s.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.Z, {
                    guildId: n,
                    goToThread: (e, n) => {
                        a(), (0, t.ok)(e, !n, o.on.GUILD_ACTIVE_THREADS_MODAL);
                    }
                })
            ]
        })
    });
}
