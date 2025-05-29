n.d(t, { Z: () => j }), n(388685);
var l = n(255367),
    a = n(73800),
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
    h = n(626135),
    v = n(63063),
    x = n(957115),
    N = n(764920),
    p = n(531578),
    m = n(981631),
    g = n(388032),
    S = n(297849);
function _() {
    return (0, l.jsx)(c.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.intl.format(g.t.ybi2tL, { helpdeskURL: v.Z.getSubmitRequestURL() })
    });
}
function j(e) {
    var t;
    let { modalType: n, header: i, body: s, problemTitle: v, problems: j, transitionState: R, ratingOptions: T, ratingEmojiKind: I, ratingTextLabels: L, freeformNeededProblems: y = [], otherKey: D, hideDontShowAgainCheckbox: k, startRating: C = null, hideHelpDeskLink: P = !1, onSubmit: A, onClose: F, impression: Z, freeformDescription: U } = e,
        M = (0, d.Z)(j),
        [B, $] = a.useState(!1),
        [w, G] = a.useState(C),
        [H, z] = a.useState(null),
        [K, J] = a.useState(u().shuffle(j)),
        [W, V] = a.useState(''),
        X = (0, O.Dt)(),
        Y = (0, f.Z)(w),
        q = (0, f.Z)(B),
        Q = (0, f.Z)(H),
        ee = (0, f.Z)(A),
        et = (0, f.Z)(W),
        en = null;
    return (
        null == w ? (en = 'RATING') : w !== p.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && y.includes(H.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            u().isEqual(M, j) || J((0, x.Bi)(j, D));
        }, [j, M, D]),
        (0, o.ZP)(
            () => (
                h.default.track(m.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: Y.current,
                        problem: Q.current,
                        dontShowAgain: q.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, l.jsxs)(c.Y0X, {
            impression: Z,
            transitionState: R,
            className: S.modalRoot,
            'aria-labelledby': X,
            children: [
                (0, l.jsxs)(c.xBx, {
                    separator: !1,
                    className: S.headerContainer,
                    children: [
                        (0, l.jsx)(c.X6q, {
                            id: X,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: i
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: S.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == L)) &&
                    (0, l.jsx)(c.xJW, {
                        className: r()(S.problemInfo, S.ratingSelectorContainer),
                        children: (0, l.jsx)(N.Z, {
                            ratingOptions: T,
                            emojiKind: I,
                            textLabels: L,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                G(e), e === p.aZ.GOOD && F();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, l.jsx)(c.hzk, {
                        className: S.__invalid_content,
                        children: (0, l.jsx)(c.xJW, {
                            title: v,
                            className: r()(S.problemInfo, S.presetList, { [S.marginBottom16]: k }),
                            children: (0, l.jsx)(E.Z, {
                                options: K,
                                onClick: function (e) {
                                    z(e), y.includes(e.value) || F();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !y.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, l.jsx)(c.hzk, {
                        className: S.__invalid_content,
                        children: (0, l.jsxs)(c.xJW, {
                            title: null != (t = null == U ? void 0 : U(H)) ? t : g.intl.string(g.t.h95hcn),
                            className: S.problemInfo,
                            children: [
                                (0, l.jsx)(c.Kx8, {
                                    value: W,
                                    maxLength: p.iF,
                                    onChange: V
                                }),
                                !P && (0, l.jsx)(_, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !k &&
                    (0, l.jsx)(c.mzw, {
                        className: S.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, l.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => $(!B),
                            children: (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: g.intl.string(g.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != L)) &&
                    (0, l.jsxs)(c.mzw, {
                        className: S.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, l.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (z(null), V('')) : G(null);
                                },
                                children: g.intl.string(g.t['13/7kZ'])
                            }),
                            (0, l.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: F,
                                children: g.intl.string(g.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
