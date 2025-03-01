n.d(t, { Z: () => j }), n(47120);
var o = n(200651),
    i = n(192379),
    a = n(392711),
    s = n.n(a),
    l = n(481060),
    r = n(493773),
    c = n(110924),
    u = n(600164),
    d = n(313201),
    _ = n(237617),
    m = n(572539),
    b = n(626135),
    h = n(63063),
    p = n(957115),
    f = n(764920),
    v = n(531578),
    x = n(981631),
    g = n(388032),
    O = n(585144);
function N() {
    return (0, o.jsx)(l.Text, {
        className: O.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.NW.format(g.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function j(e) {
    let { modalType: t, header: n, body: a, problemTitle: h, problems: j, transitionState: Z, ratingOptions: y, ratingEmojiKind: E, ratingTextLabels: k, freeformNeededProblems: D = [], otherKey: C, hideDontShowCheckbox: R, startRating: L = null, hideHelpDeskLink: w = !1, onSubmit: A, onClose: I, impression: S } = e,
        B = (0, c.Z)(j),
        [W, F] = i.useState(!1),
        [T, P] = i.useState(L),
        [M, U] = i.useState(null),
        [z, G] = i.useState(s().shuffle(j)),
        [H, K] = i.useState(''),
        V = (0, d.Dt)(),
        J = (0, _.Z)(T),
        X = (0, _.Z)(W),
        q = (0, _.Z)(M),
        Y = (0, _.Z)(A),
        Q = (0, _.Z)(H),
        $ = null;
    return (
        null == T ? ($ = 'RATING') : T !== v.aZ.GOOD && null == M ? ($ = 'PROBLEM') : null != M && D.includes(M) && ($ = 'FREEFORM'),
        i.useEffect(() => {
            s().isEqual(B, j) || G((0, p.B)(j, C));
        }, [j, B, C]),
        (0, r.ZP)(
            () => (
                b.default.track(x.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    Y.current({
                        rating: J.current,
                        problem: q.current,
                        dontShowAgain: X.current,
                        feedback: Q.current
                    });
                }
            )
        ),
        (0, o.jsxs)(l.Y0X, {
            impression: S,
            transitionState: Z,
            className: O.__invalid_modalRoot,
            'aria-labelledby': V,
            children: [
                (0, o.jsxs)(l.xBx, {
                    separator: !1,
                    className: O.headerContainer,
                    children: [
                        (0, o.jsx)(l.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: O.ratingBody,
                            children: a
                        })
                    ]
                }),
                ('RATING' === $ || ('PROBLEM' === $ && null == k)) &&
                    (0, o.jsx)(l.hzk, {
                        className: O.__invalid_content,
                        children: (0, o.jsx)(l.xJW, {
                            className: O.problemInfo,
                            children: (0, o.jsx)(f.Z, {
                                ratingOptions: y,
                                emojiKind: E,
                                textLabels: k,
                                selectedRating: T,
                                onChangeRating: function (e) {
                                    P(e), e === v.aZ.GOOD && I();
                                }
                            })
                        })
                    }),
                'PROBLEM' === $ &&
                    (0, o.jsx)(l.hzk, {
                        className: O.__invalid_content,
                        children: (0, o.jsx)(l.xJW, {
                            title: h,
                            className: O.problemInfo,
                            children: (0, o.jsx)(m.Z, {
                                options: z,
                                onClick: function (e) {
                                    let { value: t } = e;
                                    U(t), D.includes(t) || I();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !D.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === $ &&
                    (0, o.jsx)(l.hzk, {
                        className: O.__invalid_content,
                        children: (0, o.jsxs)(l.xJW, {
                            title: g.NW.string(g.t.h95hcn),
                            className: O.problemInfo,
                            children: [
                                (0, o.jsx)(l.Kx8, {
                                    value: H,
                                    maxLength: v.iF,
                                    onChange: K
                                }),
                                !w && (0, o.jsx)(N, {})
                            ]
                        })
                    }),
                'RATING' === $ &&
                    !R &&
                    (0, o.jsx)(l.mzw, {
                        className: O.footer,
                        direction: u.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(l.XZJ, {
                            type: l.XZJ.Types.INVERTED,
                            size: 18,
                            value: W,
                            onChange: () => F(!W),
                            children: (0, o.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: g.NW.string(g.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === $ || ('PROBLEM' === $ && null != k)) &&
                    (0, o.jsxs)(l.mzw, {
                        className: O.footer,
                        direction: u.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(l.zxk, {
                                size: l.zxk.Sizes.SMALL,
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === $ ? (U(null), K('')) : P(null);
                                },
                                children: g.NW.string(g.t['13/7kZ'])
                            }),
                            (0, o.jsx)(l.zxk, {
                                size: l.zxk.Sizes.SMALL,
                                onClick: I,
                                children: g.NW.string(g.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
