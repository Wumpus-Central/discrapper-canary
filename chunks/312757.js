n.d(e, { default: () => c });
var i = n(200651);
n(192379);
var d = n(481060),
    a = n(287734),
    r = n(313201),
    _ = n(939863),
    s = n(482241),
    l = n(554747),
    p = n(388032),
    I = n(572583);
function c(t) {
    let { channel: e, transitionState: n, onClose: c } = t,
        E = (0, r.Dt)(),
        o = (0, l.qY)(e.id);
    if (null == o) return null;
    let N = () => {
        a.default.selectVoiceChannel(null), c();
    };
    return (0, i.jsxs)(d.Y0X, {
        transitionState: n,
        'aria-labelledby': E,
        size: d.CgR.SMALL,
        children: [
            (0, i.jsxs)(d.hzk, {
                className: I.content,
                children: [
                    (0, i.jsx)(_.Z, {
                        children: (0, i.jsx)('div', {
                            className: I.iconBackground,
                            children: (0, i.jsx)(d.Que, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 40,
                                width: 40,
                                className: I.icon
                            })
                        })
                    }),
                    (0, i.jsx)(d.X6q, {
                        id: E,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: I.title,
                        children: p.NW.string(p.t['4Ao8LC'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: I.subtitle,
                        children: p.NW.string(p.t['0I0B8f'])
                    })
                ]
            }),
            (0, i.jsxs)(d.mzw, {
                children: [
                    (0, i.jsx)(d.zxk, {
                        color: d.zxk.Colors.RED,
                        onClick: () => {
                            s.Z.endEvent(o.id, o.guild_id), N();
                        },
                        children: p.NW.string(p.t.mjB9pa)
                    }),
                    (0, i.jsx)(d.zxk, {
                        color: d.zxk.Colors.PRIMARY,
                        className: I.cancelButton,
                        onClick: N,
                        children: p.NW.string(p.t.P60OAQ)
                    })
                ]
            })
        ]
    });
}
