n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(392711),
    c = n.n(s),
    l = n(481060),
    u = n(493773),
    d = n(110924),
    m = n(600164),
    b = n(313201),
    p = n(237617),
    _ = n(572539),
    x = n(626135),
    h = n(63063),
    f = n(957115),
    j = n(764920),
    g = n(531578),
    O = n(981631),
    v = n(388032),
    R = n(297849);
function k() {
    return (0, r.jsx)(l.Text, {
        className: R.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: v.intl.format(v.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    var t;
    let { modalType: n, header: a, body: s, problemTitle: h, problems: N, transitionState: y, ratingOptions: L, ratingEmojiKind: Z, ratingTextLabels: E, freeformNeededProblems: S = [], otherKey: C, hideDontShowAgainCheckbox: P, startRating: F = null, hideHelpDeskLink: D = !1, onSubmit: T, onClose: w, impression: B, freeformDescription: A } = e,
        I = (0, d.Z)(N),
        [M, z] = o.useState(!1),
        [U, G] = o.useState(F),
        [K, H] = o.useState(null),
        [J, q] = o.useState(c().shuffle(N)),
        [X, W] = o.useState(''),
        Y = (0, b.Dt)(),
        Q = (0, p.Z)(U),
        V = (0, p.Z)(M),
        $ = (0, p.Z)(K),
        ee = (0, p.Z)(T),
        et = (0, p.Z)(X),
        en = null;
    return (
        null == U ? (en = 'RATING') : U !== g.aZ.GOOD && null == K ? (en = 'PROBLEM') : null != K && S.includes(K.value) && (en = 'FREEFORM'),
        o.useEffect(() => {
            c().isEqual(I, N) || q((0, f.B)(N, C));
        }, [N, I, C]),
        (0, u.ZP)(
            () => (
                x.default.track(O.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: Q.current,
                        problem: $.current,
                        dontShowAgain: V.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, r.jsxs)(l.Y0X, {
            impression: B,
            transitionState: y,
            className: R.modalRoot,
            'aria-labelledby': Y,
            children: [
                (0, r.jsxs)(l.xBx, {
                    separator: !1,
                    className: R.headerContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            id: Y,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: a
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: R.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == E)) &&
                    (0, r.jsx)(l.xJW, {
                        className: i()(R.problemInfo, R.ratingSelectorContainer),
                        children: (0, r.jsx)(j.Z, {
                            ratingOptions: L,
                            emojiKind: Z,
                            textLabels: E,
                            selectedRating: U,
                            onChangeRating: function (e) {
                                G(e), e === g.aZ.GOOD && w();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, r.jsx)(l.hzk, {
                        className: R.__invalid_content,
                        children: (0, r.jsx)(l.xJW, {
                            title: h,
                            className: i()(R.problemInfo, R.presetList, { [R.marginBottom16]: P }),
                            children: (0, r.jsx)(_.Z, {
                                options: J,
                                onClick: function (e) {
                                    H(e), S.includes(e.value) || w();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !S.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, r.jsx)(l.hzk, {
                        className: R.__invalid_content,
                        children: (0, r.jsxs)(l.xJW, {
                            title: null != (t = null == A ? void 0 : A(K)) ? t : v.intl.string(v.t.h95hcn),
                            className: R.problemInfo,
                            children: [
                                (0, r.jsx)(l.Kx8, {
                                    value: X,
                                    maxLength: g.iF,
                                    onChange: W
                                }),
                                !D && (0, r.jsx)(k, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !P &&
                    (0, r.jsx)(l.mzw, {
                        className: R.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: (0, r.jsx)(l.XZJ, {
                            type: l.XZJ.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => z(!M),
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: v.intl.string(v.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != E)) &&
                    (0, r.jsxs)(l.mzw, {
                        className: R.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(l.zxk, {
                                size: l.zxk.Sizes.SMALL,
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (H(null), W('')) : G(null);
                                },
                                children: v.intl.string(v.t['13/7kZ'])
                            }),
                            (0, r.jsx)(l.zxk, {
                                size: l.zxk.Sizes.SMALL,
                                onClick: w,
                                children: v.intl.string(v.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
