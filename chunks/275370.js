t.d(r, { default: () => x }), t(388685);
var n = t(255367),
    o = t(73800),
    l = t(512722),
    s = t.n(l),
    i = t(481060),
    c = t(51144),
    a = t(985002),
    d = t(880257),
    u = t(957656),
    b = t(130310),
    f = t(332495),
    h = t(388032),
    j = t(13625);
let x = (e) => {
    let { currentUser: r, otherUser: t, transitionState: l, onClose: x } = e,
        p = o.useCallback(() => {
            x();
        }, [x]),
        m = (0, d.Z)(),
        [y, O] = o.useState(!1),
        g = o.useCallback(() => {
            O(!0);
        }, []),
        { acceptLinkRequest: k, isAcceptLoading: v } = (0, a.G)({
            onError: g,
            onSuccess: p
        });
    return (
        s()(!m, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(u.Z, {
            transitionState: l,
            'aria-label': h.intl.string(f.default.rlNJwc),
            className: j.root,
            children: [
                (0, n.jsx)(u.Z.Error, { error: y ? h.intl.string(f.default.pegSMz) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: h.intl.string(f.default.rlNJwc),
                            icon: (0, n.jsx)(i.xPt, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.linkIcon
                            })
                        }),
                        (0, n.jsxs)(u.Z.Content, {
                            children: [
                                (0, n.jsx)(b.Z, { inModal: !0 }),
                                (0, n.jsx)(i.Text, {
                                    className: j.disclaimer,
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: h.intl.format(f.default.snlFqa, { username: c.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), k(t);
                        },
                        children: (0, n.jsxs)(u.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    disabled: v,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: x,
                                    size: i.zxk.Sizes.SMALL,
                                    children: h.intl.string(h.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    disabled: v,
                                    submitting: v,
                                    color: i.Ttl.BRAND,
                                    size: i.zxk.Sizes.SMALL,
                                    children: h.intl.string(f.default['wI/jo6'])
                                })
                            ]
                        })
                    })
                })
            ]
        })
    );
};
