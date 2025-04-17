n.d(t, { Z: () => R }), n(388685);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    c = n.n(s),
    i = n(481060),
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
    N = n(388032),
    O = n(297849);
function k() {
    return (0, r.jsx)(i.Text, {
        className: O.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: N.NW.format(N.t.ybi2tL, { helpdeskURL: p.Z.getSubmitRequestURL() })
    });
}
function R(e) {
    var t;
    let { modalType: n, header: o, body: s, problemTitle: p, problems: R, transitionState: y, ratingOptions: E, ratingEmojiKind: Z, ratingTextLabels: L, freeformNeededProblems: C = [], otherKey: I, hideDontShowCheckbox: F, startRating: S = null, hideHelpDeskLink: D = !1, onSubmit: T, onClose: w, impression: A, freeformDescription: B } = e,
        M = (0, d.Z)(R),
        [P, W] = a.useState(!1),
        [z, G] = a.useState(S),
        [U, K] = a.useState(null),
        [H, J] = a.useState(c().shuffle(R)),
        [X, q] = a.useState(''),
        Q = (0, f.Dt)(),
        V = (0, _.Z)(z),
        Y = (0, _.Z)(P),
        $ = (0, _.Z)(U),
        ee = (0, _.Z)(T),
        et = (0, _.Z)(X),
        en = null;
    return (
        null == z ? (en = 'RATING') : z !== j.aZ.GOOD && null == U ? (en = 'PROBLEM') : null != U && C.includes(U.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            c().isEqual(M, R) || J((0, h.B)(R, I));
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
        (0, r.jsxs)(i.Y0X, {
            impression: A,
            transitionState: y,
            className: O.modalRoot,
            'aria-labelledby': Q,
            children: [
                (0, r.jsxs)(i.xBx, {
                    separator: !1,
                    className: O.headerContainer,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            id: Q,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: o
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: O.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == L)) &&
                    (0, r.jsx)(i.xJW, {
                        className: l()(O.problemInfo, O.ratingSelectorContainer),
                        children: (0, r.jsx)(g.Z, {
                            ratingOptions: E,
                            emojiKind: Z,
                            textLabels: L,
                            selectedRating: z,
                            onChangeRating: function (e) {
                                G(e), e === j.aZ.GOOD && w();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, r.jsx)(i.hzk, {
                        className: O.__invalid_content,
                        children: (0, r.jsx)(i.xJW, {
                            title: p,
                            className: l()(O.problemInfo, O.presetList, { [O.marginBottom16]: F }),
                            children: (0, r.jsx)(b.Z, {
                                options: H,
                                onClick: function (e) {
                                    K(e), C.includes(e.value) || w();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !C.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, r.jsx)(i.hzk, {
                        className: O.__invalid_content,
                        children: (0, r.jsxs)(i.xJW, {
                            title: null != (t = null == B ? void 0 : B(U)) ? t : N.NW.string(N.t.h95hcn),
                            className: O.problemInfo,
                            children: [
                                (0, r.jsx)(i.Kx8, {
                                    value: X,
                                    maxLength: j.iF,
                                    onChange: q
                                }),
                                !D && (0, r.jsx)(k, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !F &&
                    (0, r.jsx)(i.mzw, {
                        className: O.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: (0, r.jsx)(i.XZJ, {
                            type: i.XZJ.Types.INVERTED,
                            size: 18,
                            value: P,
                            onChange: () => W(!P),
                            children: (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                children: N.NW.string(N.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != L)) &&
                    (0, r.jsxs)(i.mzw, {
                        className: O.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(i.zxk, {
                                size: i.zxk.Sizes.SMALL,
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (K(null), q('')) : G(null);
                                },
                                children: N.NW.string(N.t['13/7kZ'])
                            }),
                            (0, r.jsx)(i.zxk, {
                                size: i.zxk.Sizes.SMALL,
                                onClick: w,
                                children: N.NW.string(N.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
