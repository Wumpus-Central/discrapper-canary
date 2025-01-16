t.r(e),
    t.d(e, {
        default: function () {
            return h;
        }
    });
var r = t(200651);
t(192379);
var i = t(481060),
    l = t(313201),
    c = t(471253),
    s = t(930180),
    o = t(46920),
    a = t(939863),
    d = t(388032),
    u = t(27507);
function h(n) {
    let { channel: e, transitionState: t, onClose: h, ..._ } = n,
        m = (0, l.Dt)(),
        x = (0, s._d)(e.id),
        g = (0, s.K3)(e.id),
        f = async () => {
            await (0, c.yi)(e), h();
        },
        E = async () => {
            await (0, c.RK)(e, !1), h();
        };
    return (0, r.jsx)(i.ModalRoot, {
        transitionState: t,
        'aria-labelledby': m,
        ..._,
        size: i.ModalSize.SMALL,
        children: (0, r.jsxs)(i.ModalContent, {
            className: u.content,
            children: [
                (0, r.jsx)(a.Z, {
                    children: (0, r.jsx)('div', {
                        className: u.stageIconBackground,
                        children: (0, r.jsx)(i.StageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 40,
                            height: 40,
                            className: u.stageIcon
                        })
                    })
                }),
                (0, r.jsx)(i.Heading, {
                    id: m,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: u.headerTitle,
                    children: d.intl.string(d.t.njetU1)
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: u.headerSubtitle,
                    children: d.intl.string(d.t.LQY4JS)
                }),
                (x > 0 || g > 0) && (0, r.jsx)(o.mv, { channelId: e.id }),
                (0, r.jsxs)('div', {
                    className: u.buttonsContainer,
                    children: [
                        (0, r.jsxs)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: E,
                            children: [
                                (0, r.jsx)('div', {
                                    className: u.icon,
                                    children: (0, r.jsx)(i.MicrophoneIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.intl.string(d.t['Q8o/tb'])
                            ]
                        }),
                        (0, r.jsxs)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: f,
                            children: [
                                (0, r.jsx)('div', {
                                    className: u.icon,
                                    children: (0, r.jsx)(i.GroupIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.intl.string(d.t['N3/Oyc'])
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
