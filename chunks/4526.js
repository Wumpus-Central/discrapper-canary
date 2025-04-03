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
    h = t(497251);
let f = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: f } = e,
        [j, x] = o.useState(!1),
        p = o.useCallback(() => {
            x(!0);
        }, []),
        y = o.useCallback(() => {
            x(!1);
        }, []),
        m = o.useCallback(() => {
            f();
        }, [f]),
        O = (0, a.Z)(),
        { declineLinkRequest: g, isDeclineLoading: k } = (0, l.G)({
            onError: p,
            onSuccess: m
        });
    return (
        c()(!O, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), g(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: j ? b.NW.string(u.Z.tJAUys) : void 0,
                        onDismiss: y
                    }),
                    (0, n.jsxs)(i.hzk, {
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: r,
                                otherUser: t,
                                header: b.NW.string(u.Z.teIRCQ),
                                icon: (0, n.jsx)(i.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: h.closeIcon
                                })
                            }),
                            (0, n.jsx)(d.Z.Content, { children: (0, n.jsx)(d.Z.Notice, { notice: b.NW.string(u.Z.LcM8BQ) }) })
                        ]
                    }),
                    (0, n.jsx)(i.mzw, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    disabled: k,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: f,
                                    size: i.zxk.Sizes.SMALL,
                                    children: b.NW.string(b.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    disabled: k,
                                    submitting: k,
                                    color: i.Ttl.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    children: b.NW.string(u.Z.dKxFcn)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
