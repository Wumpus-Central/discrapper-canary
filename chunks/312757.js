n.d(e, { default: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    d = n(287734),
    r = n(313201),
    a = n(939863),
    s = n(482241),
    _ = n(554747),
    u = n(388032),
    E = n(3977);
function c(t) {
    let { channel: e, transitionState: n, onClose: c } = t,
        o = (0, r.Dt)(),
        I = (0, _.qY)(e.id);
    if (null == I) return null;
    let p = () => {
        d.default.selectVoiceChannel(null), c();
    };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: n,
        'aria-labelledby': o,
        size: l.CgR.SMALL,
        children: [
            (0, i.jsxs)(l.hzk, {
                className: E.content,
                children: [
                    (0, i.jsx)(a.Z, {
                        children: (0, i.jsx)('div', {
                            className: E.iconBackground,
                            children: (0, i.jsx)(l.Que, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 40,
                                width: 40,
                                className: E.icon
                            })
                        })
                    }),
                    (0, i.jsx)(l.X6q, {
                        id: o,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: E.title,
                        children: u.intl.string(u.t['4Ao8LC'])
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: E.subtitle,
                        children: u.intl.string(u.t['0I0B8f'])
                    })
                ]
            }),
            (0, i.jsxs)(l.mzw, {
                children: [
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.RED,
                        onClick: () => {
                            s.Z.endEvent(I.id, I.guild_id), p();
                        },
                        children: u.intl.string(u.t.mjB9pa)
                    }),
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        className: E.cancelButton,
                        onClick: p,
                        children: u.intl.string(u.t.P60OAQ)
                    })
                ]
            })
        ]
    });
}
