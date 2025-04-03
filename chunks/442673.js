t.d(r, { default: () => b }), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(481060),
    c = t(985002),
    i = t(880257),
    l = t(957656),
    a = t(332495),
    d = t(388032),
    u = t(927735);
let b = (e) => {
    let { currentUser: r, otherUser: t, transitionState: b, onClose: h } = e,
        x = o.useCallback(() => {
            h();
        }, [h]),
        f = (0, i.Z)(),
        [j, p] = o.useState(!1),
        [g, m] = o.useState(!1),
        y = o.useCallback(() => {
            m(!0), p(!1);
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: k } = (0, c.G)({
            onSuccess: x,
            onError: y
        });
    return (0, n.jsx)(l.Z, {
        transitionState: b,
        children: (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(), O(t);
            },
            children: [
                (0, n.jsx)(l.Z.Error, { error: g ? d.NW.string(a.Z.krIDd3) : void 0 }),
                (0, n.jsxs)(s.hzk, {
                    children: [
                        (0, n.jsx)(l.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: d.NW.formatToPlainString(a.Z.NMSTb2, { isAdult: String(f) }),
                            icon: (0, n.jsx)(s.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.closeIcon
                            })
                        }),
                        (0, n.jsx)(l.Z.Notice, { notice: f ? d.NW.string(a.Z.EvMGLS) : d.NW.string(a.Z.f1SUeX) }),
                        (0, n.jsx)(s.XZJ, {
                            className: u.acknowledgementCheckbox,
                            type: s.XZJ.Types.INVERTED,
                            value: j,
                            onChange: (e, r) => {
                                p(r), m(!1);
                            },
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                children: f ? d.NW.string(a.Z['/MYCeX']) : d.NW.string(a.Z.VJaHUV)
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
                                onClick: h,
                                size: s.zxk.Sizes.SMALL,
                                disabled: k,
                                children: d.NW.string(d.t['ETE/oK'])
                            }),
                            (0, n.jsx)(s.zxk, {
                                type: 'submit',
                                disabled: !j || k,
                                submitting: k,
                                color: s.Ttl.RED,
                                size: s.zxk.Sizes.SMALL,
                                children: d.NW.string(a.Z['c5L+sr'])
                            })
                        ]
                    })
                })
            ]
        })
    });
};
