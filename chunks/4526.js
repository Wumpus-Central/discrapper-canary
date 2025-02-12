t.d(r, { default: () => u }), t(47120);
var n = t(200651),
    s = t(192379),
    i = t(512722),
    o = t.n(i),
    l = t(481060),
    c = t(985002),
    a = t(880257),
    d = t(957656),
    h = t(388032),
    x = t(832663);
let u = (e) => {
    let { currentUser: r, otherUser: t, transitionState: i, onClose: u } = e,
        [j, b] = s.useState(!1),
        k = s.useCallback(() => {
            b(!0);
        }, []),
        m = s.useCallback(() => {
            b(!1);
        }, []),
        f = s.useCallback(() => {
            u();
        }, [u]),
        _ = (0, a.Z)(),
        { declineLinkRequest: z, isDeclineLoading: g } = (0, c.G)({
            onError: k,
            onSuccess: f
        });
    return (
        o()(!_, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'),
        (0, n.jsx)(d.Z, {
            transitionState: i,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), z(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: j ? h.intl.string(h.t.tJAUys) : void 0,
                        onDismiss: m
                    }),
                    (0, n.jsxs)(l.hzk, {
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: r,
                                otherUser: t,
                                header: h.intl.string(h.t.teIRCQ),
                                icon: (0, n.jsx)(l.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: x.closeIcon
                                })
                            }),
                            (0, n.jsx)(d.Z.Content, { children: (0, n.jsx)(d.Z.Notice, { notice: h.intl.string(h.t.LcM8BQ) }) })
                        ]
                    }),
                    (0, n.jsx)(l.mzw, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(l.zxk, {
                                    type: 'button',
                                    disabled: g,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: u,
                                    size: l.zxk.Sizes.SMALL,
                                    children: h.intl.string(h.t['ETE/oK'])
                                }),
                                (0, n.jsx)(l.zxk, {
                                    type: 'submit',
                                    disabled: g,
                                    submitting: g,
                                    color: l.Ttl.RED,
                                    size: l.zxk.Sizes.SMALL,
                                    children: h.intl.string(h.t.dKxFcn)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
