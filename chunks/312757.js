i.d(n, { default: () => I });
var e = i(255367);
i(73800);
var d = i(481060),
    l = i(287734),
    a = i(313201),
    r = i(939863),
    _ = i(482241),
    s = i(554747),
    p = i(388032),
    c = i(572583);
function I(t) {
    let { channel: n, transitionState: i, onClose: I } = t,
        E = (0, a.Dt)(),
        o = (0, s.qY)(n.id);
    if (null == o) return null;
    let T = () => {
        (l.default.selectVoiceChannel(null), I());
    };
    return (0, e.jsxs)(d.Y0X, {
        transitionState: i,
        'aria-labelledby': E,
        size: d.CgR.SMALL,
        parentComponent: 'EndEventModal',
        children: [
            (0, e.jsxs)(d.hzk, {
                className: c.content,
                children: [
                    (0, e.jsx)(r.Z, {
                        children: (0, e.jsx)('div', {
                            className: c.iconBackground,
                            children: (0, e.jsx)(d.Que, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 40,
                                width: 40,
                                className: c.icon
                            })
                        })
                    }),
                    (0, e.jsx)(d.X6q, {
                        id: E,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: c.title,
                        children: p.intl.string(p.t['4Ao8LC'])
                    }),
                    (0, e.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: c.subtitle,
                        children: p.intl.string(p.t['0I0B8f'])
                    })
                ]
            }),
            (0, e.jsxs)(d.mzw, {
                children: [
                    (0, e.jsx)(d.zxk, {
                        variant: 'critical-primary',
                        text: p.intl.string(p.t.mjB9pa),
                        onClick: () => {
                            (_.Z.endEvent(o.id, o.guild_id), T());
                        }
                    }),
                    (0, e.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: c.cancelButton,
                        children: (0, e.jsx)(d.zxk, {
                            variant: 'secondary',
                            text: p.intl.string(p.t.P60OAQ),
                            onClick: T
                        })
                    })
                ]
            })
        ]
    });
}
