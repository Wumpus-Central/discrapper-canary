t.d(r, { default: () => u }), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(481060),
    c = t(985002),
    i = t(880257),
    l = t(957656),
    a = t(388032),
    d = t(792360);
let u = (e) => {
    let { currentUser: r, otherUser: t, transitionState: u, onClose: b } = e,
        h = o.useCallback(() => {
            b();
        }, [b]),
        x = (0, i.Z)(),
        [f, j] = o.useState(!1),
        [p, g] = o.useState(!1),
        m = o.useCallback(() => {
            g(!0), j(!1);
        }, []),
        { disconnectLinkRequest: y, isDisconnectLoading: O } = (0, c.G)({
            onSuccess: h,
            onError: m
        });
    return (0, n.jsx)(l.Z, {
        transitionState: u,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(), y(t);
            },
            children: [
                (0, n.jsx)(l.Z.Error, { error: p ? a.NW.string(a.t.krIDd3) : void 0 }),
                (0, n.jsxs)(s.hzk, {
                    children: [
                        (0, n.jsx)(l.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: a.NW.formatToPlainString(a.t.NMSTb2, { isAdult: String(x) }),
                            icon: (0, n.jsx)(s.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: d.closeIcon
                            })
                        }),
                        (0, n.jsx)(l.Z.Notice, { notice: x ? a.NW.string(a.t.EvMGLS) : a.NW.string(a.t.f1SUeX) }),
                        (0, n.jsx)(s.XZJ, {
                            className: d.acknowledgementCheckbox,
                            type: s.XZJ.Types.INVERTED,
                            value: f,
                            onChange: (e, r) => {
                                j(r), g(!1);
                            },
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                children: x ? a.NW.string(a.t['/MYCeX']) : a.NW.string(a.t.VJaHUV)
                            })
                        })
                    ]
                }),
                (0, n.jsx)(s.mzw, {
                    children: (0, n.jsxs)(l.Z.ButtonFooter, {
                        children: [
                            (0, n.jsx)(s.zxk, {
                                type: 'button',
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: b,
                                size: s.zxk.Sizes.SMALL,
                                disabled: O,
                                children: a.NW.string(a.t['ETE/oK'])
                            }),
                            (0, n.jsx)(s.zxk, {
                                type: 'submit',
                                disabled: !f || O,
                                submitting: O,
                                color: s.Ttl.RED,
                                size: s.zxk.Sizes.SMALL,
                                children: a.NW.string(a.t['c5L+sr'])
                            })
                        ]
                    })
                })
            ]
        })
    });
};
