t.r(r), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(512722),
    l = t.n(s),
    i = t(481060),
    c = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(388032),
    h = t(143510);
r.default = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: x } = e,
        [m, j] = o.useState(!1),
        f = o.useCallback(() => {
            j(!0);
        }, []),
        b = o.useCallback(() => {
            j(!1);
        }, []),
        g = o.useCallback(() => {
            x();
        }, [x]),
        p = (0, a.Z)(),
        { cancelLinkRequest: v, isCancelLoading: C } = (0, c.G)({
            onError: f,
            onSuccess: g
        });
    return (
        l()(p, 'FamilyCenterDeclineLinkModal should only be rendered for parents.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), v(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: m ? u.intl.string(u.t['6gyAQU']) : void 0,
                        onDismiss: b
                    }),
                    (0, n.jsx)(i.ModalContent, {
                        children: (0, n.jsx)(d.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: u.intl.string(u.t.HynllZ),
                            icon: (0, n.jsx)(i.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: h.closeIcon
                            })
                        })
                    }),
                    (0, n.jsx)(i.ModalFooter, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.Button, {
                                    type: 'button',
                                    disabled: C,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: x,
                                    size: i.Button.Sizes.SMALL,
                                    children: u.intl.string(u.t.czincX)
                                }),
                                (0, n.jsx)(i.Button, {
                                    type: 'submit',
                                    disabled: C || m,
                                    submitting: C,
                                    color: i.ButtonColors.RED,
                                    size: i.Button.Sizes.SMALL,
                                    children: u.intl.string(u.t.mK40bm)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
