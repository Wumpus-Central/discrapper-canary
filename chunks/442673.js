t.d(r, { default: () => b }), t(388685);
var n = t(255367),
    o = t(73800),
    s = t(481060),
    i = t(985002),
    c = t(880257),
    l = t(957656),
    a = t(332495),
    d = t(388032),
    u = t(927735);
let b = (e) => {
    let { currentUser: r, otherUser: t, transitionState: b, onClose: f } = e,
        h = o.useCallback(() => {
            f();
        }, [f]),
        x = (0, c.Z)(),
        [j, p] = o.useState(!1),
        [g, m] = o.useState(!1),
        y = o.useCallback(() => {
            m(!0), p(!1);
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: k } = (0, i.G)({
            onSuccess: h,
            onError: y
        });
    return (0, n.jsx)(l.Z, {
        transitionState: b,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(), O(t);
            },
            children: [
                (0, n.jsx)(l.Z.Error, { error: g ? d.intl.string(a.default.krIDd3) : void 0 }),
                (0, n.jsxs)(s.hzk, {
                    children: [
                        (0, n.jsx)(l.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: d.intl.formatToPlainString(a.default.NMSTb2, { isAdult: String(x) }),
                            icon: (0, n.jsx)(s.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.closeIcon
                            })
                        }),
                        (0, n.jsx)(l.Z.Notice, { notice: x ? d.intl.string(a.default.EvMGLS) : d.intl.string(a.default.f1SUeX) }),
                        (0, n.jsx)(s.XZJ, {
                            className: u.acknowledgementCheckbox,
                            type: s.XZJ.Types.INVERTED,
                            value: j,
                            onChange: (e, r) => {
                                p(r), m(!1);
                            },
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                children: x ? d.intl.string(a.default['/MYCeX']) : d.intl.string(a.default.VJaHUV)
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
                                onClick: f,
                                size: s.zxk.Sizes.SMALL,
                                disabled: k,
                                children: d.intl.string(d.t['ETE/oK'])
                            }),
                            (0, n.jsx)(s.zxk, {
                                type: 'submit',
                                disabled: !j || k,
                                submitting: k,
                                color: s.Ttl.RED,
                                size: s.zxk.Sizes.SMALL,
                                children: d.intl.string(a.default['c5L+sr'])
                            })
                        ]
                    })
                })
            ]
        })
    });
};
