t.d(r, { default: () => h }), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(512722),
    c = t.n(s),
    i = t(481060),
    l = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(388032),
    b = t(682333);
let h = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: h } = e,
        [f, j] = o.useState(!1),
        x = o.useCallback(() => {
            j(!0);
        }, []),
        p = o.useCallback(() => {
            j(!1);
        }, []),
        y = o.useCallback(() => {
            h();
        }, [h]),
        m = (0, a.Z)(),
        { declineLinkRequest: O, isDeclineLoading: g } = (0, l.G)({
            onError: x,
            onSuccess: y
        });
    return (
        c()(!m, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'),
        (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), O(t);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: f ? u.NW.string(u.t.tJAUys) : void 0,
                        onDismiss: p
                    }),
                    (0, n.jsxs)(i.hzk, {
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: r,
                                otherUser: t,
                                header: u.NW.string(u.t.teIRCQ),
                                icon: (0, n.jsx)(i.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: b.closeIcon
                                })
                            }),
                            (0, n.jsx)(d.Z.Content, { children: (0, n.jsx)(d.Z.Notice, { notice: u.NW.string(u.t.LcM8BQ) }) })
                        ]
                    }),
                    (0, n.jsx)(i.mzw, {
                        children: (0, n.jsxs)(d.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    disabled: g,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: h,
                                    size: i.zxk.Sizes.SMALL,
                                    children: u.NW.string(u.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    disabled: g,
                                    submitting: g,
                                    color: i.Ttl.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    children: u.NW.string(u.t.dKxFcn)
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
};
