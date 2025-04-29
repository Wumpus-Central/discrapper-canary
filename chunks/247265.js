t.d(r, { default: () => h }), t(388685);
var n = t(255367),
    o = t(73800),
    s = t(512722),
    l = t.n(s),
    c = t(481060),
    i = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(332495),
    b = t(388032),
    f = t(570580);
let h = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: h } = e,
        [j, p] = o.useState(!1),
        x = o.useCallback(() => {
            p(!0);
        }, []),
        y = o.useCallback(() => {
            p(!1);
        }, []),
        m = o.useCallback(() => {
            h();
        }, [h]),
        O = (0, a.Z)(),
        { cancelLinkRequest: g, isCancelLoading: v } = (0, i.G)({
            onError: x,
            onSuccess: m
        });
    return (
        l()(O, 'FamilyCenterDeclineLinkModal should only be rendered for parents.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), g(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: j ? b.intl.string(u.default['6gyAQU']) : void 0,
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
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(c.zxk, {
                                    type: 'button',
                                    disabled: v,
                                    look: c.zxk.Looks.LINK,
                                    color: c.zxk.Colors.PRIMARY,
                                    onClick: h,
                                    size: c.zxk.Sizes.SMALL,
                                    children: b.intl.string(u.default.czincX)
                                }),
                                (0, n.jsx)(c.zxk, {
                                    type: 'submit',
                                    disabled: v || j,
                                    submitting: v,
                                    color: c.Ttl.RED,
                                    size: c.zxk.Sizes.SMALL,
                                    children: b.intl.string(u.default.mK40bm)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
