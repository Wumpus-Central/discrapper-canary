t.d(r, { default: () => j }), t(47120);
var n = t(200651),
    s = t(192379),
    i = t(512722),
    o = t.n(i),
    l = t(481060),
    a = t(51144),
    c = t(985002),
    d = t(880257),
    x = t(957656),
    h = t(130310),
    u = t(388032),
    m = t(54666);
let j = (e) => {
    let { currentUser: r, otherUser: t, transitionState: i, onClose: j } = e,
        k = s.useCallback(() => {
            j();
        }, [j]),
        b = (0, d.Z)(),
        [_, f] = s.useState(!1),
        N = s.useCallback(() => {
            f(!0);
        }, []),
        { acceptLinkRequest: p, isAcceptLoading: g } = (0, c.G)({
            onError: N,
            onSuccess: k
        });
    return (
        o()(!b, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(x.Z, {
            transitionState: i,
            'aria-label': u.intl.string(u.t.rlNJwc),
            className: m.root,
            children: [
                (0, n.jsx)(x.Z.Error, { error: _ ? u.intl.string(u.t.pegSMz) : void 0 }),
                (0, n.jsxs)(l.hzk, {
                    children: [
                        (0, n.jsx)(x.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: u.intl.string(u.t.rlNJwc),
                            icon: (0, n.jsx)(l.xPt, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.linkIcon
                            })
                        }),
                        (0, n.jsxs)(x.Z.Content, {
                            children: [
                                (0, n.jsx)(h.Z, { inModal: !0 }),
                                (0, n.jsx)(l.Text, {
                                    className: m.disclaimer,
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: u.intl.format(u.t.snlFqa, { username: a.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(l.mzw, {
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), p(t);
                        },
                        children: (0, n.jsxs)(x.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(l.zxk, {
                                    type: 'button',
                                    disabled: g,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: j,
                                    size: l.zxk.Sizes.SMALL,
                                    children: u.intl.string(u.t['ETE/oK'])
                                }),
                                (0, n.jsx)(l.zxk, {
                                    type: 'submit',
                                    disabled: g,
                                    submitting: g,
                                    color: l.Ttl.BRAND,
                                    size: l.zxk.Sizes.SMALL,
                                    children: u.intl.string(u.t['wI/jo6'])
                                })
                            ]
                        })
                    })
                })
            ]
        })
    );
};
