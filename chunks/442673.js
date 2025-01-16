r.r(t), r(47120);
var n = r(200651),
    o = r(192379),
    s = r(481060),
    i = r(985002),
    c = r(880257),
    l = r(957656),
    a = r(388032),
    d = r(277516);
t.default = (e) => {
    let { currentUser: t, otherUser: r, transitionState: u, onClose: h } = e,
        x = o.useCallback(() => {
            h();
        }, [h]),
        j = (0, c.Z)(),
        [m, g] = o.useState(!1),
        [f, b] = o.useState(!1),
        k = o.useCallback(() => {
            b(!0), g(!1);
        }, []),
        { disconnectLinkRequest: C, isDisconnectLoading: v } = (0, i.G)({
            onSuccess: x,
            onError: k
        });
    return (0, n.jsx)(l.Z, {
        transitionState: u,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(), C(r);
            },
            children: [
                (0, n.jsx)(l.Z.Error, { error: f ? a.intl.string(a.t.krIDd3) : void 0 }),
                (0, n.jsxs)(s.ModalContent, {
                    children: [
                        (0, n.jsx)(l.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: a.intl.formatToPlainString(a.t.NMSTb2, { isAdult: String(j) }),
                            icon: (0, n.jsx)(s.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: d.closeIcon
                            })
                        }),
                        (0, n.jsx)(l.Z.Notice, { notice: j ? a.intl.string(a.t.EvMGLS) : a.intl.string(a.t.f1SUeX) }),
                        (0, n.jsx)(s.Checkbox, {
                            className: d.acknowledgementCheckbox,
                            type: s.Checkbox.Types.INVERTED,
                            value: m,
                            onChange: (e, t) => {
                                g(t), b(!1);
                            },
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                children: j ? a.intl.string(a.t['/MYCeX']) : a.intl.string(a.t.VJaHUV)
                            })
                        })
                    ]
                }),
                (0, n.jsx)(s.ModalFooter, {
                    children: (0, n.jsxs)(l.Z.ButtonFooter, {
                        children: [
                            (0, n.jsx)(s.Button, {
                                type: 'button',
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                onClick: h,
                                size: s.Button.Sizes.SMALL,
                                disabled: v,
                                children: a.intl.string(a.t['ETE/oK'])
                            }),
                            (0, n.jsx)(s.Button, {
                                type: 'submit',
                                disabled: !m || v,
                                submitting: v,
                                color: s.ButtonColors.RED,
                                size: s.Button.Sizes.SMALL,
                                children: a.intl.string(a.t['c5L+sr'])
                            })
                        ]
                    })
                })
            ]
        })
    });
};
