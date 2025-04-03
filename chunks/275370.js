t.d(r, { default: () => f }), t(47120);
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
    h = t(332495),
    j = t(388032),
    x = t(13625);
let f = (e) => {
    let { currentUser: r, otherUser: t, transitionState: s, onClose: f } = e,
        p = o.useCallback(() => {
            f();
        }, [f]),
        m = (0, d.Z)(),
        [y, O] = o.useState(!1),
        g = o.useCallback(() => {
            O(!0);
        }, []),
        { acceptLinkRequest: N, isAcceptLoading: k } = (0, a.G)({
            onError: g,
            onSuccess: p
        });
    return (
        c()(!m, 'FamilyCenterAcceptLinkModal should only be rendered for teens.'),
        (0, n.jsxs)(u.Z, {
            transitionState: s,
            'aria-label': j.NW.string(h.Z.rlNJwc),
            className: x.root,
            children: [
                (0, n.jsx)(u.Z.Error, { error: y ? j.NW.string(h.Z.pegSMz) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: j.NW.string(h.Z.rlNJwc),
                            icon: (0, n.jsx)(i.xPt, {
                                size: 'md',
                                color: 'currentColor',
                                className: x.linkIcon
                            })
                        }),
                        (0, n.jsxs)(u.Z.Content, {
                            children: [
                                (0, n.jsx)(b.Z, { inModal: !0 }),
                                (0, n.jsx)(i.Text, {
                                    className: x.disclaimer,
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: j.NW.format(h.Z.snlFqa, { username: l.ZP.getName(t) })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), N(t);
                        },
                        children: (0, n.jsxs)(u.Z.ButtonFooter, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    disabled: k,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: f,
                                    size: i.zxk.Sizes.SMALL,
                                    children: j.NW.string(j.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    disabled: k,
                                    submitting: k,
                                    color: i.Ttl.BRAND,
                                    size: i.zxk.Sizes.SMALL,
                                    children: j.NW.string(h.Z['wI/jo6'])
                                })
                            ]
                        })
                    })
                })
            ]
        })
    );
};
