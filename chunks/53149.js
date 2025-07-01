e.d(n, { default: () => u });
var i = e(255367);
e(73800);
var s = e(442837),
    a = e(481060),
    o = e(87051),
    l = e(9156),
    r = e(621600),
    c = e(388032),
    d = e(278502);
let u = (t) => {
    let { onClose: n, channelId: e, transitionState: u } = t,
        x = (0, s.e7)([l.ZP], () => l.ZP.isChannelMuted(null, e));
    return (0, i.jsxs)(a.Y0X, {
        transitionState: u,
        size: a.CgR.SMALL,
        'aria-label': c.intl.string(c.t.uAmAiI),
        parentComponent: 'MuteAppNotificationsModal',
        children: [
            (0, i.jsx)(a.olH, {
                className: d.closeButton,
                onClick: n
            }),
            (0, i.jsxs)(a.hzk, {
                className: d.content,
                children: [
                    (0, i.jsx)('div', {
                        className: d.iconContainer,
                        children: x ? (0, i.jsx)(a.owu, { size: 'md' }) : (0, i.jsx)(a.Dkj, { size: 'md' })
                    }),
                    (0, i.jsx)(a.X6q, {
                        className: d.heading,
                        variant: 'heading-xl/bold',
                        children: x ? c.intl.string(c.t['4rg7cH']) : c.intl.string(c.t.uAmAiI)
                    }),
                    (0, i.jsx)(a.Text, {
                        className: d.infoText,
                        variant: 'text-md/normal',
                        color: 'text-default',
                        children: x ? c.intl.string(c.t['5vton5']) : c.intl.string(c.t.mscFJS)
                    }),
                    (0, i.jsx)(a.zxk, {
                        className: d.button,
                        color: x ? a.zxk.Colors.PRIMARY : a.zxk.Colors.RED,
                        onClick: () => {
                            (o.Z.updateChannelOverrideSettings(null, e, { muted: !x }, x ? r.ZB.Unmuted : r.ZB.Muted), n());
                        },
                        children: x ? c.intl.string(c.t.YqAjX1) : c.intl.string(c.t['w4m94+'])
                    })
                ]
            })
        ]
    });
};
