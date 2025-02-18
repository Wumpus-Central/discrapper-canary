n.d(t, { Z: () => Z }), n(47120);
var o = n(200651),
    a = n(192379),
    i = n(392711),
    l = n.n(i),
    s = n(481060),
    c = n(493773),
    r = n(110924),
    d = n(600164),
    u = n(313201),
    _ = n(237617),
    h = n(572539),
    m = n(626135),
    b = n(63063),
    x = n(957115),
    p = n(764920),
    v = n(531578),
    f = n(981631),
    g = n(388032),
    N = n(357099);
function O() {
    return (0, o.jsx)(s.Text, {
        className: N.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.NW.format(g.t.ybi2tL, { helpdeskURL: b.Z.getSubmitRequestURL() })
    });
}
function Z(e) {
    let { modalType: t, header: n, body: i, problemTitle: b, problems: Z, transitionState: j, ratingOptions: E, ratingEmojiKind: k, ratingTextLabels: R, freeformNeededProblems: C = [], otherKey: D, hideDontShowCheckbox: L, startRating: A = null, hideHelpDeskLink: I = !1, onSubmit: y, onClose: S } = e,
        w = (0, r.Z)(Z),
        [B, W] = a.useState(!1),
        [T, F] = a.useState(A),
        [M, U] = a.useState(null),
        [z, P] = a.useState(l().shuffle(Z)),
        [H, G] = a.useState(''),
        V = (0, u.Dt)(),
        K = (0, _.Z)(T),
        J = (0, _.Z)(B),
        X = (0, _.Z)(M),
        q = (0, _.Z)(y),
        Y = (0, _.Z)(H),
        Q = null;
    return (
        null == T ? (Q = 'RATING') : T !== v.aZ.GOOD && null == M ? (Q = 'PROBLEM') : null != M && C.includes(M) && (Q = 'FREEFORM'),
        a.useEffect(() => {
            l().isEqual(w, Z) || P((0, x.B)(Z, D));
        }, [Z, w, D]),
        (0, c.ZP)(
            () => (
                m.default.track(f.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    q.current({
                        rating: K.current,
                        problem: X.current,
                        dontShowAgain: J.current,
                        feedback: Y.current
                    });
                }
            )
        ),
        (0, o.jsxs)(s.Y0X, {
            transitionState: j,
            className: N.__invalid_modalRoot,
            'aria-labelledby': V,
            children: [
                (0, o.jsxs)(s.xBx, {
                    separator: !1,
                    className: N.headerContainer,
                    children: [
                        (0, o.jsx)(s.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: N.ratingBody,
                            children: i
                        })
                    ]
                }),
                ('RATING' === Q || ('PROBLEM' === Q && null == R)) &&
                    (0, o.jsx)(s.hzk, {
                        className: N.__invalid_content,
                        children: (0, o.jsx)(s.xJW, {
                            className: N.problemInfo,
                            children: (0, o.jsx)(p.Z, {
                                ratingOptions: E,
                                emojiKind: k,
                                textLabels: R,
                                selectedRating: T,
                                onChangeRating: function (e) {
                                    F(e), e === v.aZ.GOOD && S();
                                }
                            })
                        })
                    }),
                'PROBLEM' === Q &&
                    (0, o.jsx)(s.hzk, {
                        className: N.__invalid_content,
                        children: (0, o.jsx)(s.xJW, {
                            title: b,
                            className: N.problemInfo,
                            children: (0, o.jsx)(h.Z, {
                                options: z,
                                onClick: function (e) {
                                    let { value: t } = e;
                                    U(t), C.includes(t) || S();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !C.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === Q &&
                    (0, o.jsx)(s.hzk, {
                        className: N.__invalid_content,
                        children: (0, o.jsxs)(s.xJW, {
                            title: g.NW.string(g.t.h95hcn),
                            className: N.problemInfo,
                            children: [
                                (0, o.jsx)(s.Kx8, {
                                    value: H,
                                    maxLength: v.iF,
                                    onChange: G
                                }),
                                !I && (0, o.jsx)(O, {})
                            ]
                        })
                    }),
                'RATING' === Q &&
                    !L &&
                    (0, o.jsx)(s.mzw, {
                        className: N.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(s.XZJ, {
                            type: s.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => W(!B),
                            children: (0, o.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: g.NW.string(g.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === Q || ('PROBLEM' === Q && null != R)) &&
                    (0, o.jsxs)(s.mzw, {
                        className: N.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(s.zxk, {
                                size: s.zxk.Sizes.SMALL,
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === Q ? (U(null), G('')) : F(null);
                                },
                                children: g.NW.string(g.t['13/7kZ'])
                            }),
                            (0, o.jsx)(s.zxk, {
                                size: s.zxk.Sizes.SMALL,
                                onClick: S,
                                children: g.NW.string(g.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
