n.d(r, { default: () => x }), n(47120);
var t = n(200651),
    s = n(192379),
    o = n(512722),
    i = n.n(o),
    l = n(481060),
    c = n(985002),
    a = n(880257),
    d = n(957656),
    h = n(388032),
    u = n(776590);
let x = (e) => {
    let { currentUser: r, otherUser: n, transitionState: o, onClose: x } = e,
        [j, m] = s.useState(!1),
        b = s.useCallback(() => {
            m(!0);
        }, []),
        k = s.useCallback(() => {
            m(!1);
        }, []),
        f = s.useCallback(() => {
            x();
        }, [x]),
        _ = (0, a.Z)(),
        { cancelLinkRequest: z, isCancelLoading: p } = (0, c.G)({
            onError: b,
            onSuccess: f
        });
    return (
        i()(_, 'FamilyCenterDeclineLinkModal should only be rendered for parents.'),
        (0, t.jsx)(d.Z, {
            transitionState: o,
            children: (0, t.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), z(n);
                },
                children: [
                    (0, t.jsx)(d.Z.Error, {
                        error: j ? h.intl.string(h.t['6gyAQU']) : void 0,
                        onDismiss: k
                    }),
                    (0, t.jsx)(l.hzk, {
                        children: (0, t.jsx)(d.Z.Header, {
                            currentUser: r,
                            otherUser: n,
                            header: h.intl.string(h.t.HynllZ),
                            icon: (0, t.jsx)(l.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: u.closeIcon
                            })
                        })
                    }),
                    (0, t.jsx)(l.mzw, {
                        children: (0, t.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, t.jsx)(l.zxk, {
                                    type: 'button',
                                    disabled: p,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: x,
                                    size: l.zxk.Sizes.SMALL,
                                    children: h.intl.string(h.t.czincX)
                                }),
                                (0, t.jsx)(l.zxk, {
                                    type: 'submit',
                                    disabled: p || j,
                                    submitting: p,
                                    color: l.Ttl.RED,
                                    size: l.zxk.Sizes.SMALL,
                                    children: h.intl.string(h.t.mK40bm)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
