(t.d(r, { default: () => h }), t(388685));
var n = t(255367),
    o = t(73800),
    i = t(512722),
    s = t.n(i),
    c = t(481060),
    l = t(985002),
    a = t(880257),
    d = t(957656),
    u = t(916723),
    b = t(388032),
    f = t(497251);
let h = (e) => {
    let { currentUser: r, otherUser: t, transitionState: i, onClose: h } = e,
        [p, j] = o.useState(!1),
        m = o.useCallback(() => {
            j(!0);
        }, []),
        x = o.useCallback(() => {
            j(!1);
        }, []),
        y = o.useCallback(() => {
            h();
        }, [h]),
        g = (0, a.Z)(),
        { declineLinkRequest: O, isDeclineLoading: v } = (0, l.G)({
            onError: m,
            onSuccess: y
        });
    return (
        s()(!g, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'),
        (0, n.jsx)(d.Z, {
            transitionState: i,
            children: (0, n.jsxs)('form', {
                onSubmit: (e) => {
                    (e.preventDefault(), O(t));
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: p ? b.intl.string(u.default.tJAUys) : void 0,
                        onDismiss: x
                    }),
                    (0, n.jsxs)(c.hzk, {
                        'data-migration-pending': !0,
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: r,
                                otherUser: t,
                                header: b.intl.string(u.default.teIRCQ),
                                icon: (0, n.jsx)(c.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.closeIcon
                                })
                            }),
                            (0, n.jsx)(d.Z.Content, { children: (0, n.jsx)(d.Z.Notice, { notice: b.intl.string(u.default.LcM8BQ) }) })
                        ]
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
                                        text: b.intl.string(b.t['ETE/oK']),
                                        type: 'button',
                                        disabled: v,
                                        onClick: h
                                    }),
                                    (0, n.jsx)(c.zxk, {
                                        variant: 'critical-primary',
                                        size: 'sm',
                                        text: b.intl.string(u.default.dKxFcn),
                                        type: 'submit',
                                        disabled: v,
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
