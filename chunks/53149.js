i.d(n, { default: () => u });
var e = i(200651);
i(192379);
var s = i(442837),
    a = i(481060),
    l = i(87051),
    o = i(9156),
    r = i(621600),
    c = i(388032),
    d = i(743879);
let u = (t) => {
    let { onClose: n, channelId: i, transitionState: u } = t,
        x = (0, s.e7)([o.ZP], () => o.ZP.isChannelMuted(null, i));
    return (0, e.jsxs)(a.Y0X, {
        transitionState: u,
        size: a.CgR.SMALL,
        'aria-label': c.intl.string(c.t.uAmAiI),
        children: [
            (0, e.jsx)(a.olH, {
                className: d.closeButton,
                onClick: n
            }),
            (0, e.jsxs)(a.hzk, {
                className: d.content,
                children: [
                    (0, e.jsx)('div', {
                        className: d.iconContainer,
                        children: x ? (0, e.jsx)(a.owu, { size: 'md' }) : (0, e.jsx)(a.Dkj, { size: 'md' })
                    }),
                    (0, e.jsx)(a.X6q, {
                        className: d.heading,
                        variant: 'heading-xl/bold',
                        children: x ? c.intl.string(c.t['4rg7cH']) : c.intl.string(c.t.uAmAiI)
                    }),
                    (0, e.jsx)(a.Text, {
                        className: d.infoText,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: x ? c.intl.string(c.t['5vton5']) : c.intl.string(c.t.mscFJS)
                    }),
                    (0, e.jsx)(a.zxk, {
                        className: d.button,
                        color: x ? a.zxk.Colors.PRIMARY : a.zxk.Colors.RED,
                        onClick: () => {
                            l.Z.updateChannelOverrideSettings(null, i, { muted: !x }, x ? r.ZB.Unmuted : r.ZB.Muted), n();
                        },
                        children: x ? c.intl.string(c.t.YqAjX1) : c.intl.string(c.t['w4m94+'])
                    })
                ]
            })
        ]
    });
};
