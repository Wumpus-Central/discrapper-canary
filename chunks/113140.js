e.d(c, { default: () => h }), e(953529);
var t = e(255367);
e(73800);
var a = e(481060),
    o = e(313201),
    l = e(471253),
    s = e(939863),
    i = e(388032),
    r = e(555501);
function h(n) {
    let { transitionState: c, onClose: e, channel: h } = n,
        d = (0, o.Dt)(),
        f = (n) => {
            (0, l.RK)(h, n), e();
        };
    return (0, t.jsx)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: c,
        'aria-labelledby': d,
        className: r.container,
        children: (0, t.jsxs)(a.hzk, {
            className: r.content,
            children: [
                (0, t.jsx)(s.Z, {
                    children: (0, t.jsx)('div', {
                        className: r.iconBackground,
                        children: (0, t.jsx)(a.S6n, {
                            size: 'custom',
                            color: 'currentColor',
                            height: 40,
                            width: 40,
                            className: r.icon
                        })
                    })
                }),
                (0, t.jsx)(a.X6q, {
                    className: r.header,
                    variant: 'heading-lg/semibold',
                    children: i.intl.string(i.t.Ul1RJS)
                }),
                (0, t.jsx)(a.Text, {
                    color: 'header-secondary',
                    className: r.description,
                    variant: 'text-sm/normal',
                    children: i.intl.format(i.t['Z+3bW1'], {
                        stageChannelHook: () =>
                            (0, t.jsxs)('div', {
                                className: r.channel,
                                children: [
                                    (0, t.jsx)(a.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 14,
                                        width: 14,
                                        className: r.channelIcon
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        className: r.channelName,
                                        variant: 'text-sm/normal',
                                        children: h.name
                                    })
                                ]
                            })
                    })
                }),
                (0, t.jsx)(a.zxk, {
                    fullWidth: !0,
                    color: a.zxk.Colors.GREEN,
                    onClick: () => f(!1),
                    className: r.button,
                    children: i.intl.string(i.t.MMlhsr)
                }),
                (0, t.jsx)(a.zxk, {
                    fullWidth: !0,
                    color: a.zxk.Colors.RED,
                    onClick: () => f(!0),
                    className: r.button,
                    children: i.intl.string(i.t.BVN4pK)
                }),
                (0, t.jsx)(a.zxk, {
                    fullWidth: !0,
                    color: a.zxk.Colors.PRIMARY,
                    look: a.zxk.Looks.LINK,
                    onClick: e,
                    children: i.intl.string(i.t.L5eIZ2)
                })
            ]
        })
    });
}
