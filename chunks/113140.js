e.d(c, { default: () => h }), e(266796);
var a = e(200651);
e(192379);
var o = e(481060),
    s = e(313201),
    t = e(471253),
    l = e(939863),
    i = e(388032),
    r = e(555501);
function h(n) {
    let { transitionState: c, onClose: e, channel: h } = n,
        d = (0, s.Dt)(),
        f = (n) => {
            (0, t.RK)(h, n), e();
        };
    return (0, a.jsx)(o.Y0X, {
        size: o.CgR.SMALL,
        transitionState: c,
        'aria-labelledby': d,
        className: r.container,
        children: (0, a.jsxs)(o.hzk, {
            className: r.content,
            children: [
                (0, a.jsx)(l.Z, {
                    children: (0, a.jsx)('div', {
                        className: r.iconBackground,
                        children: (0, a.jsx)(o.S6n, {
                            size: 'custom',
                            color: 'currentColor',
                            height: 40,
                            width: 40,
                            className: r.icon
                        })
                    })
                }),
                (0, a.jsx)(o.X6q, {
                    className: r.header,
                    variant: 'heading-lg/semibold',
                    children: i.NW.string(i.t.Ul1RJS)
                }),
                (0, a.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: r.description,
                    variant: 'text-sm/normal',
                    children: i.NW.format(i.t['Z+3bW1'], {
                        stageChannelHook: () =>
                            (0, a.jsxs)('div', {
                                className: r.channel,
                                children: [
                                    (0, a.jsx)(o.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 14,
                                        width: 14,
                                        className: r.channelIcon
                                    }),
                                    (0, a.jsx)(o.Text, {
                                        className: r.channelName,
                                        variant: 'text-sm/normal',
                                        children: h.name
                                    })
                                ]
                            })
                    })
                }),
                (0, a.jsx)(o.zxk, {
                    fullWidth: !0,
                    color: o.zxk.Colors.GREEN,
                    onClick: () => f(!1),
                    className: r.button,
                    children: i.NW.string(i.t.MMlhsr)
                }),
                (0, a.jsx)(o.zxk, {
                    fullWidth: !0,
                    color: o.zxk.Colors.RED,
                    onClick: () => f(!0),
                    className: r.button,
                    children: i.NW.string(i.t.BVN4pK)
                }),
                (0, a.jsx)(o.zxk, {
                    fullWidth: !0,
                    color: o.zxk.Colors.PRIMARY,
                    look: o.zxk.Looks.LINK,
                    onClick: e,
                    children: i.NW.string(i.t.L5eIZ2)
                })
            ]
        })
    });
}
