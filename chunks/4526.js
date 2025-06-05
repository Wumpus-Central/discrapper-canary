t.d(r, { default: () => h }), t(388685);
var n = t(255367),
    o = t(73800),
    s = t(512722),
    i = t.n(s),
    l = t(481060),
    c = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(524499),
    b = t(388032),
    f = t(497251);
let h = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: h } = e,
        [j, p] = o.useState(!1),
        x = o.useCallback(() => {
            p(!0);
        }, []),
        m = o.useCallback(() => {
            p(!1);
        }, []),
        y = o.useCallback(() => {
            h();
        }, [h]),
        O = (0, a.Z)(),
        { declineLinkRequest: g, isDeclineLoading: k } = (0, c.G)({
            onError: x,
            onSuccess: y
        });
    return (
        i()(!O, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), g(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: j ? b.intl.string(u.default.tJAUys) : void 0,
                        onDismiss: m
                    }),
                    (0, n.jsxs)(l.hzk, {
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: r,
                                otherUser: t,
                                header: b.intl.string(u.default.teIRCQ),
                                icon: (0, n.jsx)(l.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.closeIcon
                                })
                            }),
                            (0, n.jsx)(d.Z.Content, { children: (0, n.jsx)(d.Z.Notice, { notice: b.intl.string(u.default.LcM8BQ) }) })
                        ]
                    }),
                    (0, n.jsx)(l.mzw, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(l.zxk, {
                                    type: 'button',
                                    disabled: k,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: h,
                                    size: l.zxk.Sizes.SMALL,
                                    children: b.intl.string(b.t['ETE/oK'])
                                }),
                                (0, n.jsx)(l.zxk, {
                                    type: 'submit',
                                    disabled: k,
                                    submitting: k,
                                    color: l.Ttl.RED,
                                    size: l.zxk.Sizes.SMALL,
                                    children: b.intl.string(u.default.dKxFcn)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
