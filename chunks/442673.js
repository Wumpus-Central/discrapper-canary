r.d(t, { default: () => x }), r(47120);
var n = r(200651),
    s = r(192379),
    i = r(481060),
    o = r(985002),
    l = r(880257),
    c = r(957656),
    a = r(388032),
    d = r(336886);
let x = (e) => {
    let { currentUser: t, otherUser: r, transitionState: x, onClose: h } = e,
        u = s.useCallback(() => {
            h();
        }, [h]),
        b = (0, l.Z)(),
        [j, k] = s.useState(!1),
        [m, g] = s.useState(!1),
        f = s.useCallback(() => {
            g(!0), k(!1);
        }, []),
        { disconnectLinkRequest: v, isDisconnectLoading: _ } = (0, o.G)({
            onSuccess: u,
            onError: f
        });
    return (0, n.jsx)(c.Z, {
        transitionState: x,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(), v(r);
            },
            children: [
                (0, n.jsx)(c.Z.Error, { error: m ? a.intl.string(a.t.krIDd3) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(c.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: a.intl.formatToPlainString(a.t.NMSTb2, { isAdult: String(b) }),
                            icon: (0, n.jsx)(i.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: d.closeIcon
                            })
                        }),
                        (0, n.jsx)(c.Z.Notice, { notice: b ? a.intl.string(a.t.EvMGLS) : a.intl.string(a.t.f1SUeX) }),
                        (0, n.jsx)(i.XZJ, {
                            className: d.acknowledgementCheckbox,
                            type: i.XZJ.Types.INVERTED,
                            value: j,
                            onChange: (e, t) => {
                                k(t), g(!1);
                            },
                            children: (0, n.jsx)(i.Text, {
                                variant: 'text-xs/semibold',
                                children: b ? a.intl.string(a.t['/MYCeX']) : a.intl.string(a.t.VJaHUV)
                            })
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsxs)(c.Z.ButtonFooter, {
                        children: [
                            (0, n.jsx)(i.zxk, {
                                type: 'button',
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.PRIMARY,
                                onClick: h,
                                size: i.zxk.Sizes.SMALL,
                                disabled: _,
                                children: a.intl.string(a.t['ETE/oK'])
                            }),
                            (0, n.jsx)(i.zxk, {
                                type: 'submit',
                                disabled: !j || _,
                                submitting: _,
                                color: i.Ttl.RED,
                                size: i.zxk.Sizes.SMALL,
                                children: a.intl.string(a.t['c5L+sr'])
                            })
                        ]
                    })
                })
            ]
        })
    });
};
