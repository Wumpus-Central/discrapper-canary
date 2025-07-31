(r.d(t, { default: () => b }), r(388685));
var n = r(255367),
    o = r(73800),
    i = r(481060),
    s = r(985002),
    a = r(880257),
    c = r(957656),
    l = r(916723),
    d = r(388032),
    u = r(927735);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: b, onClose: f } = e,
        h = o.useCallback(() => {
            f();
        }, [f]),
        p = (0, a.Z)(),
        [j, x] = o.useState(!1),
        [m, g] = o.useState(!1),
        y = o.useCallback(() => {
            (g(!0), x(!1));
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: v } = (0, s.G)({
            onSuccess: h,
            onError: y
        });
    return (0, n.jsx)(c.Z, {
        transitionState: b,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(), O(r));
            },
            children: [
                (0, n.jsx)(c.Z.Error, { error: m ? d.intl.string(l.default.krIDd3) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    'data-migration-pending': !0,
                    children: [
                        (0, n.jsx)(c.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: d.intl.formatToPlainString(l.default.NMSTb2, { isAdult: String(p) }),
                            icon: (0, n.jsx)(i.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.closeIcon
                            })
                        }),
                        (0, n.jsx)(c.Z.Notice, { notice: p ? d.intl.string(l.default.EvMGLS) : d.intl.string(l.default.f1SUeX) }),
                        (0, n.jsx)(i.XZJ, {
                            className: u.acknowledgementCheckbox,
                            type: i.XZJ.Types.INVERTED,
                            value: j,
                            onChange: (e, t) => {
                                (x(t), g(!1));
                            },
                            children: (0, n.jsx)(i.Text, {
                                variant: 'text-xs/semibold',
                                children: p ? d.intl.string(l.default['/MYCeX']) : d.intl.string(l.default.VJaHUV)
                            })
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    'data-migration-pending': !0,
                    children: (0, n.jsx)(c.Z.ButtonFooter, {
                        children: (0, n.jsxs)(i.hE2, {
                            direction: 'horizontal-reverse',
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    variant: 'secondary',
                                    size: 'sm',
                                    text: d.intl.string(d.t['ETE/oK']),
                                    type: 'button',
                                    onClick: f,
                                    disabled: v
                                }),
                                (0, n.jsx)(i.zxk, {
                                    variant: 'critical-primary',
                                    size: 'sm',
                                    text: d.intl.string(l.default['c5L+sr']),
                                    type: 'submit',
                                    disabled: !j || v,
                                    loading: v
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
