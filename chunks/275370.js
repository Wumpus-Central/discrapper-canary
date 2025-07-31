(t.d(r, { default: () => h }), t(388685));
var n = t(255367),
    o = t(73800),
    i = t(512722),
    a = t.n(i),
    s = t(481060),
    l = t(51144),
    c = t(985002),
    d = t(880257),
    u = t(957656),
    f = t(130310),
    b = t(916723),
    m = t(388032),
    p = t(13625);
let h = (e) => {
    let { currentUser: r, otherUser: t, transitionState: i, onClose: h } = e,
        j = o.useCallback(() => {
            h();
        }, [h]),
        x = (0, d.Z)(),
        [g, y] = o.useState(!1),
        O = o.useCallback(() => {
            y(!0);
        }, []),
        { acceptLinkRequest: v, isAcceptLoading: _ } = (0, c.G)({
            onError: O,
            onSuccess: j
        });
    return (
        a()(!x, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(u.Z, {
            transitionState: i,
            'aria-label': m.intl.string(b.default.rlNJwc),
            className: p.root,
            children: [
                (0, n.jsx)(u.Z.Error, { error: g ? m.intl.string(b.default.pegSMz) : void 0 }),
                (0, n.jsxs)(s.hzk, {
                    'data-migration-pending': !0,
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: m.intl.string(b.default.rlNJwc),
                            icon: (0, n.jsx)(s.xPt, {
                                size: 'md',
                                color: 'currentColor',
                                className: p.linkIcon
                            })
                        }),
                        (0, n.jsxs)(u.Z.Content, {
                            children: [
                                (0, n.jsx)(f.Z, { inModal: !0 }),
                                (0, n.jsx)(s.Text, {
                                    className: p.disclaimer,
                                    variant: 'text-xs/normal',
                                    color: 'text-default',
                                    children: m.intl.format(b.default.snlFqa, { username: l.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(s.mzw, {
                    'data-migration-pending': !0,
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            (e.preventDefault(), v(t));
                        },
                        children: (0, n.jsx)(u.Z.ButtonFooter, {
                            children: (0, n.jsxs)(s.hE2, {
                                direction: 'horizontal-reverse',
                                children: [
                                    (0, n.jsx)(s.zxk, {
                                        variant: 'secondary',
                                        size: 'sm',
                                        text: m.intl.string(m.t['ETE/oK']),
                                        type: 'button',
                                        disabled: _,
                                        onClick: h
                                    }),
                                    (0, n.jsx)(s.zxk, {
                                        variant: 'primary',
                                        size: 'sm',
                                        text: m.intl.string(b.default['wI/jo6']),
                                        type: 'submit',
                                        disabled: _,
                                        loading: _
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    );
};
