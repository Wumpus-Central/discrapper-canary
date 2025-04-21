i.d(n, { default: () => c });
var e = i(200651);
i(192379);
var d = i(481060),
    l = i(287734),
    a = i(313201),
    r = i(939863),
    _ = i(482241),
    s = i(554747),
    p = i(388032),
    I = i(572583);
function c(t) {
    let { channel: n, transitionState: i, onClose: c } = t,
        E = (0, a.Dt)(),
        o = (0, s.qY)(n.id);
    if (null == o) return null;
    let T = () => {
        l.default.selectVoiceChannel(null), c();
    };
    return (0, e.jsxs)(d.Y0X, {
        transitionState: i,
        'aria-labelledby': E,
        size: d.CgR.SMALL,
        children: [
            (0, e.jsxs)(d.hzk, {
                className: I.content,
                children: [
                    (0, e.jsx)(r.Z, {
                        children: (0, e.jsx)('div', {
                            className: I.iconBackground,
                            children: (0, e.jsx)(d.Que, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 40,
                                width: 40,
                                className: I.icon
                            })
                        })
                    }),
                    (0, e.jsx)(d.X6q, {
                        id: E,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: I.title,
                        children: p.intl.string(p.t['4Ao8LC'])
                    }),
                    (0, e.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: I.subtitle,
                        children: p.intl.string(p.t['0I0B8f'])
                    })
                ]
            }),
            (0, e.jsxs)(d.mzw, {
                children: [
                    (0, e.jsx)(d.zxk, {
                        color: d.zxk.Colors.RED,
                        onClick: () => {
                            _.Z.endEvent(o.id, o.guild_id), T();
                        },
                        children: p.intl.string(p.t.mjB9pa)
                    }),
                    (0, e.jsx)(d.zxk, {
                        color: d.zxk.Colors.PRIMARY,
                        className: I.cancelButton,
                        onClick: T,
                        children: p.intl.string(p.t.P60OAQ)
                    })
                ]
            })
        ]
    });
}
