t.d(r, { default: () => f }), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(512722),
    c = t.n(s),
    i = t(481060),
    l = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(332495),
    b = t(388032),
    h = t(570580);
let f = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: f } = e,
        [j, p] = o.useState(!1),
        x = o.useCallback(() => {
            p(!0);
        }, []),
        y = o.useCallback(() => {
            p(!1);
        }, []),
        m = o.useCallback(() => {
            f();
        }, [f]),
        O = (0, a.Z)(),
        { cancelLinkRequest: g, isCancelLoading: v } = (0, l.G)({
            onError: x,
            onSuccess: m
        });
    return (
        c()(O, 'FamilyCenterDeclineLinkModal should only be rendered for parents.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), g(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: j ? b.NW.string(u.Z['6gyAQU']) : void 0,
                        onDismiss: y
                    }),
                    (0, n.jsx)(i.hzk, {
                        children: (0, n.jsx)(d.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: b.NW.string(u.Z.HynllZ),
                            icon: (0, n.jsx)(i.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: h.closeIcon
                            })
                        })
                    }),
                    (0, n.jsx)(i.mzw, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    disabled: v,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: f,
                                    size: i.zxk.Sizes.SMALL,
                                    children: b.NW.string(u.Z.czincX)
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    disabled: v || j,
                                    submitting: v,
                                    color: i.Ttl.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    children: b.NW.string(u.Z.mK40bm)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
