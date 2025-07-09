(t.d(e, { default: () => d }), t(953529));
var a = t(255367);
t(73800);
var c = t(481060),
    i = t(313201),
    s = t(471253),
    r = t(939863),
    l = t(388032),
    o = t(555501);
function d(n) {
    let { transitionState: e, onClose: t, channel: d } = n,
        h = (0, i.Dt)(),
        f = (n) => {
            ((0, s.RK)(d, n), t());
        };
    return (0, a.jsx)(c.Y0X, {
        size: c.CgR.SMALL,
        transitionState: e,
        'aria-labelledby': h,
        className: o.container,
        parentComponent: 'InvitedToSpeakModal',
        children: (0, a.jsxs)(c.hzk, {
            className: o.content,
            children: [
                (0, a.jsx)(r.Z, {
                    children: (0, a.jsx)('div', {
                        className: o.iconBackground,
                        children: (0, a.jsx)(c.S6n, {
                            size: 'custom',
                            color: 'currentColor',
                            height: 40,
                            width: 40,
                            className: o.icon
                        })
                    })
                }),
                (0, a.jsx)(c.X6q, {
                    className: o.header,
                    variant: 'heading-lg/semibold',
                    children: l.intl.string(l.t.Ul1RJS)
                }),
                (0, a.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: o.description,
                    variant: 'text-sm/normal',
                    children: l.intl.format(l.t['Z+3bW1'], {
                        stageChannelHook: () =>
                            (0, a.jsxs)('div', {
                                className: o.channel,
                                children: [
                                    (0, a.jsx)(c.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 14,
                                        width: 14,
                                        className: o.channelIcon
                                    }),
                                    (0, a.jsx)(c.Text, {
                                        className: o.channelName,
                                        variant: 'text-sm/normal',
                                        children: d.name
                                    })
                                ]
                            })
                    })
                }),
                (0, a.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: o.button,
                    children: (0, a.jsx)(c.zxk, {
                        variant: 'active',
                        text: l.intl.string(l.t.MMlhsr),
                        fullWidth: !0,
                        onClick: () => f(!1)
                    })
                }),
                (0, a.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: o.button,
                    children: (0, a.jsx)(c.zxk, {
                        variant: 'critical-primary',
                        text: l.intl.string(l.t.BVN4pK),
                        fullWidth: !0,
                        onClick: () => f(!0)
                    })
                }),
                (0, a.jsx)(c.zxk, {
                    variant: 'secondary',
                    text: l.intl.string(l.t.L5eIZ2),
                    fullWidth: !0,
                    onClick: t
                })
            ]
        })
    });
}
