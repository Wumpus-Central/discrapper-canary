(t.d(r, { default: () => h }), t(388685));
var n = t(255367),
    o = t(73800),
    s = t(512722),
    i = t.n(s),
    c = t(481060),
    l = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(916723),
    b = t(388032),
    f = t(570580);
let h = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: h } = e,
        [p, j] = o.useState(!1),
        m = o.useCallback(() => {
            j(!0);
        }, []),
        y = o.useCallback(() => {
            j(!1);
        }, []),
        x = o.useCallback(() => {
            h();
        }, [h]),
        O = (0, a.Z)(),
        { cancelLinkRequest: g, isCancelLoading: v } = (0, l.G)({
            onError: m,
            onSuccess: x
        });
    return (
        i()(O, 'FamilyCenterDeclineLinkModal should only be rendered for parents.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    (e.preventDefault(), g(t));
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: p ? b.intl.string(u.default['6gyAQU']) : void 0,
                        onDismiss: y
                    }),
                    (0, n.jsx)(c.hzk, {
                        children: (0, n.jsx)(d.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: b.intl.string(u.default.HynllZ),
                            icon: (0, n.jsx)(c.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: f.closeIcon
                            })
                        })
                    }),
                    (0, n.jsx)(c.mzw, {
                        children: (0, n.jsx)(d.Z.ButtonFooter, {
                            children: (0, n.jsxs)(c.hE2, {
                                direction: 'horizontal-reverse',
                                children: [
                                    (0, n.jsx)(c.zxk, {
                                        variant: 'secondary',
                                        size: 'sm',
                                        text: b.intl.string(u.default.czincX),
                                        type: 'button',
                                        disabled: v,
                                        onClick: h
                                    }),
                                    (0, n.jsx)(c.zxk, {
                                        variant: 'critical-primary',
                                        size: 'sm',
                                        text: b.intl.string(u.default.mK40bm),
                                        type: 'submit',
                                        disabled: v || p,
                                        loading: v
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    );
};
