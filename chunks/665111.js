t.d(n, { default: () => _ });
var i = t(200651);
t(192379);
var r = t(481060),
    s = t(313201),
    l = t(471253),
    a = t(930180),
    o = t(46920),
    c = t(939863),
    d = t(388032),
    u = t(359917);
function _(e) {
    let { channel: n, transitionState: t, onClose: _, ...h } = e,
        m = (0, s.Dt)(),
        x = (0, a._d)(n.id),
        g = (0, a.K3)(n.id),
        E = async () => {
            await (0, l.yi)(n), _();
        },
        T = async () => {
            await (0, l.RK)(n, !1), _();
        };
    return (0, i.jsx)(r.Y0X, {
        transitionState: t,
        'aria-labelledby': m,
        ...h,
        size: r.CgR.SMALL,
        children: (0, i.jsxs)(r.hzk, {
            className: u.content,
            children: [
                (0, i.jsx)(c.Z, {
                    children: (0, i.jsx)('div', {
                        className: u.stageIconBackground,
                        children: (0, i.jsx)(r.ewx, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 40,
                            height: 40,
                            className: u.stageIcon
                        })
                    })
                }),
                (0, i.jsx)(r.X6q, {
                    id: m,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: u.headerTitle,
                    children: d.intl.string(d.t.njetU1)
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: u.headerSubtitle,
                    children: d.intl.string(d.t.LQY4JS)
                }),
                (x > 0 || g > 0) && (0, i.jsx)(o.mv, { channelId: n.id }),
                (0, i.jsxs)('div', {
                    className: u.buttonsContainer,
                    children: [
                        (0, i.jsxs)(r.zxk, {
                            color: r.zxk.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: T,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.icon,
                                    children: (0, i.jsx)(r.S6n, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                }),
                                d.intl.string(d.t['Q8o/tb'])
                            ]
                        }),
                        (0, i.jsxs)(r.zxk, {
                            color: r.zxk.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.innerButton,
                            onClick: E,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.icon,
                                    children: (0, i.jsx)(r.BFJ, {
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
