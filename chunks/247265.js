(t.d(r, { default: () => p }), t(388685));
var n = t(255367),
    o = t(73800),
    i = t(512722),
    s = t.n(i),
    c = t(481060),
    a = t(985002),
    l = t(880257),
    d = t(957656),
    u = t(916723),
    b = t(388032),
    f = t(570580);
let p = (e) => {
    let { currentUser: r, otherUser: t, transitionState: i, onClose: p } = e,
        [h, j] = o.useState(!1),
        m = o.useCallback(() => {
            j(!0);
        }, []),
        y = o.useCallback(() => {
            j(!1);
        }, []),
        x = o.useCallback(() => {
            p();
        }, [p]),
        g = (0, l.Z)(),
        { cancelLinkRequest: O, isCancelLoading: v } = (0, a.G)({
            onError: m,
            onSuccess: x
        });
    return (
        s()(g, 'FamilyCenterDeclineLinkModal should only be rendered for parents.'),
        (0, n.jsx)(d.Z, {
            transitionState: i,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    (e.preventDefault(), O(t));
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: h ? b.intl.string(u.default['6gyAQU']) : void 0,
                        onDismiss: y
                    }),
                    (0, n.jsx)(c.hzk, {
                        'data-migration-pending': !0,
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
                        'data-migration-pending': !0,
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
                                        onClick: p
                                    }),
                                    (0, n.jsx)(c.zxk, {
                                        variant: 'critical-primary',
                                        size: 'sm',
                                        text: b.intl.string(u.default.mK40bm),
                                        type: 'submit',
                                        disabled: v || h,
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
