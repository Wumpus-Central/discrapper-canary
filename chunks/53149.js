e.d(n, { default: () => u });
var s = e(200651);
e(192379);
var i = e(442837),
    a = e(481060),
    o = e(87051),
    l = e(9156),
    r = e(621600),
    c = e(388032),
    d = e(278502);
let u = (t) => {
    let { onClose: n, channelId: e, transitionState: u } = t,
        x = (0, i.e7)([l.ZP], () => l.ZP.isChannelMuted(null, e));
    return (0, s.jsxs)(a.Y0X, {
        transitionState: u,
        size: a.CgR.SMALL,
        'aria-label': c.NW.string(c.t.uAmAiI),
        children: [
            (0, s.jsx)(a.olH, {
                className: d.closeButton,
                onClick: n
            }),
            (0, s.jsxs)(a.hzk, {
                className: d.content,
                children: [
                    (0, s.jsx)('div', {
                        className: d.iconContainer,
                        children: x ? (0, s.jsx)(a.owu, { size: 'md' }) : (0, s.jsx)(a.Dkj, { size: 'md' })
                    }),
                    (0, s.jsx)(a.X6q, {
                        className: d.heading,
                        variant: 'heading-xl/bold',
                        children: x ? c.NW.string(c.t['4rg7cH']) : c.NW.string(c.t.uAmAiI)
                    }),
                    (0, s.jsx)(a.Text, {
                        className: d.infoText,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: x ? c.NW.string(c.t['5vton5']) : c.NW.string(c.t.mscFJS)
                    }),
                    (0, s.jsx)(a.zxk, {
                        className: d.button,
                        color: x ? a.zxk.Colors.PRIMARY : a.zxk.Colors.RED,
                        onClick: () => {
                            o.Z.updateChannelOverrideSettings(null, e, { muted: !x }, x ? r.ZB.Unmuted : r.ZB.Muted), n();
                        },
                        children: x ? c.NW.string(c.t.YqAjX1) : c.NW.string(c.t['w4m94+'])
                    })
                ]
            })
        ]
    });
};
