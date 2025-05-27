n.d(t, { Z: () => j }), n(388685);
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
    s = n(392711),
    u = n.n(s),
    c = n(481060),
    o = n(493773),
    d = n(110924),
    O = n(600164),
    f = n(313201),
    b = n(237617),
    E = n(572539),
    v = n(626135),
    x = n(63063),
    N = n(957115),
    p = n(764920),
    m = n(531578),
    g = n(981631),
    h = n(388032),
    _ = n(297849);
function S() {
    return (0, l.jsx)(c.Text, {
        className: _.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: h.intl.format(h.t.ybi2tL, { helpdeskURL: x.Z.getSubmitRequestURL() })
    });
}
function j(e) {
    var t;
    let { modalType: n, header: r, body: s, problemTitle: x, problems: j, transitionState: R, ratingOptions: T, ratingEmojiKind: I, ratingTextLabels: L, freeformNeededProblems: y = [], otherKey: D, hideDontShowAgainCheckbox: C, startRating: P = null, hideHelpDeskLink: k = !1, onSubmit: A, onClose: F, impression: Z, freeformDescription: U } = e,
        M = (0, d.Z)(j),
        [B, $] = a.useState(!1),
        [w, H] = a.useState(P),
        [G, z] = a.useState(null),
        [K, J] = a.useState(u().shuffle(j)),
        [V, W] = a.useState(''),
        X = (0, f.Dt)(),
        Y = (0, b.Z)(w),
        q = (0, b.Z)(B),
        Q = (0, b.Z)(G),
        ee = (0, b.Z)(A),
        et = (0, b.Z)(V),
        en = null;
    return (
        null == w ? (en = 'RATING') : w !== m.aZ.GOOD && null == G ? (en = 'PROBLEM') : null != G && y.includes(G.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            u().isEqual(M, j) || J((0, N.Bi)(j, D));
        }, [j, M, D]),
        (0, o.ZP)(
            () => (
                v.default.track(g.rMx.OPEN_MODAL, {
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
            className: _.modalRoot,
            'aria-labelledby': X,
            children: [
                (0, l.jsxs)(c.xBx, {
                    separator: !1,
                    className: _.headerContainer,
                    children: [
                        (0, l.jsx)(c.X6q, {
                            id: X,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: r
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: _.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == L)) &&
                    (0, l.jsx)(c.xJW, {
                        className: i()(_.problemInfo, _.ratingSelectorContainer),
                        children: (0, l.jsx)(p.Z, {
                            ratingOptions: T,
                            emojiKind: I,
                            textLabels: L,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                H(e), e === m.aZ.GOOD && F();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, l.jsx)(c.hzk, {
                        className: _.__invalid_content,
                        children: (0, l.jsx)(c.xJW, {
                            title: x,
                            className: i()(_.problemInfo, _.presetList, { [_.marginBottom16]: C }),
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
                        className: _.__invalid_content,
                        children: (0, l.jsxs)(c.xJW, {
                            title: null != (t = null == U ? void 0 : U(G)) ? t : h.intl.string(h.t.h95hcn),
                            className: _.problemInfo,
                            children: [
                                (0, l.jsx)(c.Kx8, {
                                    value: V,
                                    maxLength: m.iF,
                                    onChange: W
                                }),
                                !k && (0, l.jsx)(S, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !C &&
                    (0, l.jsx)(c.mzw, {
                        className: _.footer,
                        direction: O.Z.Direction.HORIZONTAL,
                        children: (0, l.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => $(!B),
                            children: (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: h.intl.string(h.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != L)) &&
                    (0, l.jsxs)(c.mzw, {
                        className: _.footer,
                        direction: O.Z.Direction.HORIZONTAL,
                        children: [
                            (0, l.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (z(null), W('')) : H(null);
                                },
                                children: h.intl.string(h.t['13/7kZ'])
                            }),
                            (0, l.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: F,
                                children: h.intl.string(h.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
