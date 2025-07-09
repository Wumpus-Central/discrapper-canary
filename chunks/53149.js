e.d(n, { default: () => x });
var i = e(255367);
e(73800);
var s = e(442837),
    a = e(755721),
    o = e(481060),
    l = e(87051),
    r = e(9156),
    c = e(621600),
    d = e(388032),
    u = e(278502);
let x = (t) => {
    let { onClose: n, channelId: e, transitionState: x } = t,
        h = (0, s.e7)([r.ZP], () => r.ZP.isChannelMuted(null, e));
    return (0, i.jsxs)(o.Y0X, {
        transitionState: x,
        size: o.CgR.SMALL,
        'aria-label': d.intl.string(d.t.uAmAiI),
        parentComponent: 'MuteAppNotificationsModal',
        children: [
            (0, i.jsx)(o.olH, {
                className: u.closeButton,
                onClick: n
            }),
            (0, i.jsxs)(o.hzk, {
                className: u.content,
                children: [
                    (0, i.jsx)('div', {
                        className: u.iconContainer,
                        children: h ? (0, i.jsx)(o.owu, { size: 'md' }) : (0, i.jsx)(o.Dkj, { size: 'md' })
                    }),
                    (0, i.jsx)(o.X6q, {
                        className: u.heading,
                        variant: 'heading-xl/bold',
                        children: h ? d.intl.string(d.t['4rg7cH']) : d.intl.string(d.t.uAmAiI)
                    }),
                    (0, i.jsx)(o.Text, {
                        className: u.infoText,
                        variant: 'text-md/normal',
                        color: 'text-default',
                        children: h ? d.intl.string(d.t['5vton5']) : d.intl.string(d.t.mscFJS)
                    }),
                    (0, i.jsx)(a.zx, {
                        className: u.button,
                        color: h ? a.zx.Colors.PRIMARY : a.zx.Colors.RED,
                        onClick: () => {
                            (l.Z.updateChannelOverrideSettings(null, e, { muted: !h }, h ? c.ZB.Unmuted : c.ZB.Muted), n());
                        },
                        children: h ? d.intl.string(d.t.YqAjX1) : d.intl.string(d.t['w4m94+'])
                    })
                ]
            })
        ]
    });
};
