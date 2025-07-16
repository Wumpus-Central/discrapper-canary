(t.d(e, { default: () => d }), t(953529));
var c = t(255367);
t(73800);
var a = t(481060),
    i = t(313201),
    s = t(471253),
    l = t(939863),
    r = t(388032),
    o = t(555501);
function d(n) {
    let { transitionState: e, onClose: t, channel: d } = n,
        h = (0, i.Dt)(),
        f = (n) => {
            ((0, s.RK)(d, n), t());
        };
    return (0, c.jsx)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: e,
        'aria-labelledby': h,
        className: o.container,
        parentComponent: 'InvitedToSpeakModal',
        children: (0, c.jsxs)(a.hzk, {
            className: o.content,
            children: [
                (0, c.jsx)(l.Z, {
                    children: (0, c.jsx)('div', {
                        className: o.iconBackground,
                        children: (0, c.jsx)(a.S6n, {
                            size: 'custom',
                            color: 'currentColor',
                            height: 40,
                            width: 40,
                            className: o.icon
                        })
                    })
                }),
                (0, c.jsx)(a.X6q, {
                    className: o.header,
                    variant: 'heading-lg/semibold',
                    children: r.intl.string(r.t.Ul1RJS)
                }),
                (0, c.jsx)(a.Text, {
                    color: 'header-secondary',
                    className: o.description,
                    variant: 'text-sm/normal',
                    children: r.intl.format(r.t['Z+3bW1'], {
                        stageChannelHook: () =>
                            (0, c.jsxs)('div', {
                                className: o.channel,
                                children: [
                                    (0, c.jsx)(a.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 14,
                                        width: 14,
                                        className: o.channelIcon
                                    }),
                                    (0, c.jsx)(a.Text, {
                                        className: o.channelName,
                                        variant: 'text-sm/normal',
                                        children: d.name
                                    })
                                ]
                            })
                    })
                }),
                (0, c.jsxs)('div', {
                    className: o.buttons,
                    children: [
                        (0, c.jsx)(a.zxk, {
                            variant: 'active',
                            text: r.intl.string(r.t.MMlhsr),
                            fullWidth: !0,
                            onClick: () => f(!1)
                        }),
                        (0, c.jsx)(a.zxk, {
                            variant: 'critical-primary',
                            text: r.intl.string(r.t.BVN4pK),
                            fullWidth: !0,
                            onClick: () => f(!0)
                        }),
                        (0, c.jsx)(a.zxk, {
                            variant: 'secondary',
                            text: r.intl.string(r.t.L5eIZ2),
                            fullWidth: !0,
                            onClick: t
                        })
                    ]
                })
            ]
        })
    });
}
