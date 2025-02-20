t.d(r, { default: () => x }), t(47120);
var n = t(200651),
    o = t(192379),
    s = t(512722),
    c = t.n(s),
    i = t(481060),
    l = t(51144),
    a = t(985002),
    d = t(880257),
    u = t(957656),
    b = t(130310),
    h = t(388032),
    j = t(720674);
let x = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: x } = e,
        f = o.useCallback(() => {
            x();
        }, [x]),
        p = (0, d.Z)(),
        [m, y] = o.useState(!1),
        O = o.useCallback(() => {
            y(!0);
        }, []),
        { acceptLinkRequest: g, isAcceptLoading: N } = (0, a.G)({
            onError: O,
            onSuccess: f
        });
    return (
        c()(!p, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(u.Z, {
            transitionState: s,
            'aria-label': h.NW.string(h.t.rlNJwc),
            className: j.root,
            children: [
                (0, n.jsx)(u.Z.Error, { error: m ? h.NW.string(h.t.pegSMz) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: h.NW.string(h.t.rlNJwc),
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
                                    children: h.NW.format(h.t.snlFqa, { username: l.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), g(t);
                        },
                        children: (0, n.jsxs)(u.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    disabled: N,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: x,
                                    size: i.zxk.Sizes.SMALL,
                                    children: h.NW.string(h.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    disabled: N,
                                    submitting: N,
                                    color: i.Ttl.BRAND,
                                    size: i.zxk.Sizes.SMALL,
                                    children: h.NW.string(h.t['wI/jo6'])
                                })
                            ]
                        })
                    })
                })
            ]
        })
    );
};
