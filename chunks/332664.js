n.d(t, { Z: () => R }), n(388685);
var l = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    m = n(600164),
    f = n(313201),
    _ = n(237617),
    b = n(572539),
    x = n(626135),
    p = n(63063),
    h = n(957115),
    g = n(764920),
    j = n(531578),
    v = n(981631),
    O = n(388032),
    N = n(297849);
function k() {
    return (0, l.jsx)(c.Text, {
        className: N.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: O.intl.format(O.t.ybi2tL, { helpdeskURL: p.Z.getSubmitRequestURL() })
    });
}
function R(e) {
    var t;
    let { modalType: n, header: a, body: i, problemTitle: p, problems: R, transitionState: y, ratingOptions: E, ratingEmojiKind: Z, ratingTextLabels: L, freeformNeededProblems: C = [], otherKey: I, hideDontShowCheckbox: F, startRating: S = null, hideHelpDeskLink: D = !1, onSubmit: T, onClose: w, impression: A, freeformDescription: B } = e,
        M = (0, d.Z)(R),
        [P, z] = r.useState(!1),
        [G, U] = r.useState(S),
        [K, H] = r.useState(null),
        [J, X] = r.useState(s().shuffle(R)),
        [W, q] = r.useState(''),
        Q = (0, f.Dt)(),
        V = (0, _.Z)(G),
        Y = (0, _.Z)(P),
        $ = (0, _.Z)(K),
        ee = (0, _.Z)(T),
        et = (0, _.Z)(W),
        en = null;
    return (
        null == G ? (en = 'RATING') : G !== j.aZ.GOOD && null == K ? (en = 'PROBLEM') : null != K && C.includes(K.value) && (en = 'FREEFORM'),
        r.useEffect(() => {
            s().isEqual(M, R) || X((0, h.B)(R, I));
        }, [R, M, I]),
        (0, u.ZP)(
            () => (
                x.default.track(v.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: V.current,
                        problem: $.current,
                        dontShowAgain: Y.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, l.jsxs)(c.Y0X, {
            impression: A,
            transitionState: y,
            className: N.modalRoot,
            'aria-labelledby': Q,
            children: [
                (0, l.jsxs)(c.xBx, {
                    separator: !1,
                    className: N.headerContainer,
                    children: [
                        (0, l.jsx)(c.X6q, {
                            id: Q,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: a
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: N.ratingBody,
                            children: i
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == L)) &&
                    (0, l.jsx)(c.xJW, {
                        className: o()(N.problemInfo, N.ratingSelectorContainer),
                        children: (0, l.jsx)(g.Z, {
                            ratingOptions: E,
                            emojiKind: Z,
                            textLabels: L,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                U(e), e === j.aZ.GOOD && w();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, l.jsx)(c.hzk, {
                        className: N.__invalid_content,
                        children: (0, l.jsx)(c.xJW, {
                            title: p,
                            className: o()(N.problemInfo, N.presetList, { [N.marginBottom16]: F }),
                            children: (0, l.jsx)(b.Z, {
                                options: J,
                                onClick: function (e) {
                                    H(e), C.includes(e.value) || w();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !C.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, l.jsx)(c.hzk, {
                        className: N.__invalid_content,
                        children: (0, l.jsxs)(c.xJW, {
                            title: null != (t = null == B ? void 0 : B(K)) ? t : O.intl.string(O.t.h95hcn),
                            className: N.problemInfo,
                            children: [
                                (0, l.jsx)(c.Kx8, {
                                    value: W,
                                    maxLength: j.iF,
                                    onChange: q
                                }),
                                !D && (0, l.jsx)(k, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !F &&
                    (0, l.jsx)(c.mzw, {
                        className: N.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: (0, l.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: P,
                            onChange: () => z(!P),
                            children: (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: O.intl.string(O.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != L)) &&
                    (0, l.jsxs)(c.mzw, {
                        className: N.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [
                            (0, l.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (H(null), q('')) : U(null);
                                },
                                children: O.intl.string(O.t['13/7kZ'])
                            }),
                            (0, l.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: w,
                                children: O.intl.string(O.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
