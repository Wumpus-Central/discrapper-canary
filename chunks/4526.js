t.r(r), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(512722),
    i = t.n(s),
    l = t(481060),
    c = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(388032),
    h = t(773958);
r.default = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: x } = e,
        [j, m] = o.useState(!1),
        f = o.useCallback(() => {
            m(!0);
        }, []),
        b = o.useCallback(() => {
            m(!1);
        }, []),
        g = o.useCallback(() => {
            x();
        }, [x]),
        C = (0, a.Z)(),
        { declineLinkRequest: k, isDeclineLoading: p } = (0, c.G)({
            onError: f,
            onSuccess: g
        });
    return (
        i()(!C, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), k(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: j ? u.intl.string(u.t.tJAUys) : void 0,
                        onDismiss: b
                    }),
                    (0, n.jsxs)(l.ModalContent, {
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: r,
                                otherUser: t,
                                header: u.intl.string(u.t.teIRCQ),
                                icon: (0, n.jsx)(l.XSmallIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: h.closeIcon
                                })
                            }),
                            (0, n.jsx)(d.Z.Content, { children: (0, n.jsx)(d.Z.Notice, { notice: u.intl.string(u.t.LcM8BQ) }) })
                        ]
                    }),
                    (0, n.jsx)(l.ModalFooter, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(l.Button, {
                                    type: 'button',
                                    disabled: p,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    onClick: x,
                                    size: l.Button.Sizes.SMALL,
                                    children: u.intl.string(u.t['ETE/oK'])
                                }),
                                (0, n.jsx)(l.Button, {
                                    type: 'submit',
                                    disabled: p,
                                    submitting: p,
                                    color: l.ButtonColors.RED,
                                    size: l.Button.Sizes.SMALL,
                                    children: u.intl.string(u.t.dKxFcn)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
