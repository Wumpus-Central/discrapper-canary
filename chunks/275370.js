(t.d(r, { default: () => m }), t(388685));
var n = t(255367),
    o = t(73800),
    s = t(512722),
    i = t.n(s),
    l = t(481060),
    a = t(51144),
    c = t(985002),
    d = t(880257),
    u = t(957656),
    f = t(130310),
    b = t(916723),
    h = t(388032),
    j = t(13625);
let m = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: m } = e,
        p = o.useCallback(() => {
            m();
        }, [m]),
        x = (0, d.Z)(),
        [y, O] = o.useState(!1),
        g = o.useCallback(() => {
            O(!0);
        }, []),
        { acceptLinkRequest: v, isAcceptLoading: _ } = (0, c.G)({
            onError: g,
            onSuccess: p
        });
    return (
        i()(!x, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(u.Z, {
            transitionState: s,
            'aria-label': h.intl.string(b.default.rlNJwc),
            className: j.root,
            children: [
                (0, n.jsx)(u.Z.Error, { error: y ? h.intl.string(b.default.pegSMz) : void 0 }),
                (0, n.jsxs)(l.hzk, {
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: h.intl.string(b.default.rlNJwc),
                            icon: (0, n.jsx)(l.xPt, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.linkIcon
                            })
                        }),
                        (0, n.jsxs)(u.Z.Content, {
                            children: [
                                (0, n.jsx)(f.Z, { inModal: !0 }),
                                (0, n.jsx)(l.Text, {
                                    className: j.disclaimer,
                                    variant: 'text-xs/normal',
                                    color: 'text-default',
                                    children: h.intl.format(b.default.snlFqa, { username: a.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(l.mzw, {
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            (e.preventDefault(), v(t));
                        },
                        children: (0, n.jsx)(u.Z.ButtonFooter, {
                            children: (0, n.jsxs)(l.hE2, {
                                direction: 'horizontal-reverse',
                                children: [
                                    (0, n.jsx)(l.zxk, {
                                        variant: 'secondary',
                                        size: 'sm',
                                        text: h.intl.string(h.t['ETE/oK']),
                                        type: 'button',
                                        disabled: _,
                                        onClick: m
                                    }),
                                    (0, n.jsx)(l.zxk, {
                                        variant: 'primary',
                                        size: 'sm',
                                        text: h.intl.string(b.default['wI/jo6']),
                                        type: 'submit',
                                        disabled: _,
                                        loading: _
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    );
};
