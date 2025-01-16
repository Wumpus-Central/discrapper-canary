t.r(r), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(512722),
    i = t.n(s),
    l = t(481060),
    c = t(51144),
    a = t(985002),
    d = t(880257),
    u = t(957656),
    h = t(130310),
    x = t(388032),
    m = t(767804);
r.default = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: j } = e,
        f = o.useCallback(() => {
            j();
        }, [j]),
        g = (0, d.Z)(),
        [p, N] = o.useState(!1),
        k = o.useCallback(() => {
            N(!0);
        }, []),
        { acceptLinkRequest: b, isAcceptLoading: v } = (0, a.G)({
            onError: k,
            onSuccess: f
        });
    return (
        i()(!g, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(u.Z, {
            transitionState: s,
            'aria-label': x.intl.string(x.t.rlNJwc),
            className: m.root,
            children: [
                (0, n.jsx)(u.Z.Error, { error: p ? x.intl.string(x.t.pegSMz) : void 0 }),
                (0, n.jsxs)(l.ModalContent, {
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: x.intl.string(x.t.rlNJwc),
                            icon: (0, n.jsx)(l.LinkIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.linkIcon
                            })
                        }),
                        (0, n.jsxs)(u.Z.Content, {
                            children: [
                                (0, n.jsx)(h.Z, { inModal: !0 }),
                                (0, n.jsx)(l.Text, {
                                    className: m.disclaimer,
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: x.intl.format(x.t.snlFqa, { username: c.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(l.ModalFooter, {
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), b(t);
                        },
                        children: (0, n.jsxs)(u.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(l.Button, {
                                    type: 'button',
                                    disabled: v,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    onClick: j,
                                    size: l.Button.Sizes.SMALL,
                                    children: x.intl.string(x.t['ETE/oK'])
                                }),
                                (0, n.jsx)(l.Button, {
                                    type: 'submit',
                                    disabled: v,
                                    submitting: v,
                                    color: l.ButtonColors.BRAND,
                                    size: l.Button.Sizes.SMALL,
                                    children: x.intl.string(x.t['wI/jo6'])
                                })
                            ]
                        })
                    })
                })
            ]
        })
    );
};
