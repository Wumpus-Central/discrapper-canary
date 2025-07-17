(n.d(t, { Z: () => R }), n(388685));
var a = n(255367),
    l = n(73800),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    u = n.n(s),
    c = n(481060),
    o = n(493773),
    d = n(110924),
    b = n(600164),
    O = n(313201),
    f = n(237617),
    E = n(572539),
    v = n(626135),
    h = n(63063),
    m = n(957115),
    p = n(764920),
    N = n(531578),
    x = n(981631),
    g = n(388032),
    j = n(297849);
function S() {
    return (0, a.jsx)(c.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.intl.format(g.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function R(e) {
    var t;
    let { modalType: n, header: i, body: s, problemTitle: h, problems: R, transitionState: _, ratingOptions: T, ratingEmojiKind: I, ratingTextLabels: y, freeformNeededProblems: L = [], otherKey: C, hideDontShowAgainCheckbox: D, startRating: P = null, hideHelpDeskLink: k = !1, onSubmit: F, onClose: A, impression: Z, freeformDescription: U } = e,
        M = (0, d.Z)(R),
        [B, $] = l.useState(!1),
        [w, G] = l.useState(P),
        [H, z] = l.useState(null),
        [K, V] = l.useState(u().shuffle(R)),
        [Y, J] = l.useState(''),
        Q = (0, O.Dt)(),
        W = (0, f.Z)(w),
        X = (0, f.Z)(B),
        q = (0, f.Z)(H),
        ee = (0, f.Z)(F),
        et = (0, f.Z)(Y),
        en = null;
    return (
        null == w ? (en = 'RATING') : w !== N.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && L.includes(H.value) && (en = 'FREEFORM'),
        l.useEffect(() => {
            u().isEqual(M, R) || V((0, m.Bi)(R, C));
        }, [R, M, C]),
        (0, o.ZP)(
            () => (
                v.default.track(x.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: W.current,
                        problem: q.current,
                        dontShowAgain: X.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, a.jsxs)(c.Y0X, {
            impression: Z,
            transitionState: _,
            className: j.modalRoot,
            'aria-labelledby': Q,
            parentComponent: 'FeedbackModal',
            children: [
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: Q,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: i
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == y)) &&
                    (0, a.jsx)(c.xJW, {
                        className: r()(j.problemInfo, j.ratingSelectorContainer),
                        children: (0, a.jsx)(p.Z, {
                            ratingOptions: T,
                            emojiKind: I,
                            textLabels: y,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                (G(e), e === N.aZ.GOOD && A());
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, a.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, a.jsx)(c.xJW, {
                            title: h,
                            className: r()(j.problemInfo, j.presetList, { [j.marginBottom16]: D }),
                            children: (0, a.jsx)(E.Z, {
                                options: K,
                                onClick: function (e) {
                                    (z(e), L.includes(e.value) || A());
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !L.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, a.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, a.jsxs)(c.xJW, {
                            title: null != (t = null == U ? void 0 : U(H)) ? t : g.intl.string(g.t.h95hcn),
                            className: j.problemInfo,
                            children: [
                                (0, a.jsx)(c.Kx8, {
                                    value: Y,
                                    maxLength: N.iF,
                                    onChange: J
                                }),
                                !k && (0, a.jsx)(S, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !D &&
                    (0, a.jsx)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => $(!B),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: g.intl.string(g.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != y)) &&
                    (0, a.jsx)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(c.hE2, {
                            direction: 'horizontal-reverse',
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    variant: 'secondary',
                                    size: 'sm',
                                    text: g.intl.string(g.t['13/7kZ']),
                                    onClick: () => {
                                        'FREEFORM' === en ? (z(null), J('')) : G(null);
                                    }
                                }),
                                (0, a.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: g.intl.string(g.t.geKm7u),
                                    onClick: A
                                })
                            ]
                        })
                    })
            ]
        })
    );
}
