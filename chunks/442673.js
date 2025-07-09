(t.d(r, { default: () => b }), t(388685));
var n = t(255367),
    o = t(73800),
    i = t(481060),
    s = t(985002),
    c = t(880257),
    l = t(957656),
    a = t(916723),
    d = t(388032),
    u = t(927735);
let b = (e) => {
    let { currentUser: r, otherUser: t, transitionState: b, onClose: f } = e,
        h = o.useCallback(() => {
            f();
        }, [f]),
        j = (0, c.Z)(),
        [x, p] = o.useState(!1),
        [m, g] = o.useState(!1),
        y = o.useCallback(() => {
            (g(!0), p(!1));
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: v } = (0, s.G)({
            onSuccess: h,
            onError: y
        });
    return (0, n.jsx)(l.Z, {
        transitionState: b,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(), O(t));
            },
            children: [
                (0, n.jsx)(l.Z.Error, { error: m ? d.intl.string(a.default.krIDd3) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(l.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: d.intl.formatToPlainString(a.default.NMSTb2, { isAdult: String(j) }),
                            icon: (0, n.jsx)(i.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.closeIcon
                            })
                        }),
                        (0, n.jsx)(l.Z.Notice, { notice: j ? d.intl.string(a.default.EvMGLS) : d.intl.string(a.default.f1SUeX) }),
                        (0, n.jsx)(i.XZJ, {
                            className: u.acknowledgementCheckbox,
                            type: i.XZJ.Types.INVERTED,
                            value: x,
                            onChange: (e, r) => {
                                (p(r), g(!1));
                            },
                            children: (0, n.jsx)(i.Text, {
                                variant: 'text-xs/semibold',
                                children: j ? d.intl.string(a.default['/MYCeX']) : d.intl.string(a.default.VJaHUV)
                            })
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(l.Z.ButtonFooter, {
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
                                    text: d.intl.string(a.default['c5L+sr']),
                                    type: 'submit',
                                    disabled: !x || v,
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
