(n.d(t, { Z: () => j }), n(388685));
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    u = n.n(s),
    o = n(481060),
    c = n(493773),
    d = n(110924),
    b = n(600164),
    O = n(313201),
    f = n(237617),
    E = n(572539),
    v = n(626135),
    h = n(63063),
    p = n(957115),
    N = n(764920),
    x = n(531578),
    m = n(981631),
    g = n(388032),
    S = n(297849);
function R() {
    return (0, l.jsx)(o.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.intl.format(g.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function j(e) {
    var t;
    let { modalType: n, header: i, body: s, problemTitle: h, problems: j, transitionState: _, ratingOptions: T, ratingEmojiKind: I, ratingTextLabels: L, freeformNeededProblems: C = [], otherKey: y, hideDontShowAgainCheckbox: D, startRating: k = null, hideHelpDeskLink: P = !1, onSubmit: A, onClose: F, impression: Z, freeformDescription: M } = e,
        U = (0, d.Z)(j),
        [B, $] = a.useState(!1),
        [w, G] = a.useState(k),
        [H, z] = a.useState(null),
        [K, Y] = a.useState(u().shuffle(j)),
        [V, J] = a.useState(''),
        Q = (0, O.Dt)(),
        W = (0, f.Z)(w),
        X = (0, f.Z)(B),
        q = (0, f.Z)(H),
        ee = (0, f.Z)(A),
        et = (0, f.Z)(V),
        en = null;
    return (
        null == w ? (en = 'RATING') : w !== x.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && C.includes(H.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            u().isEqual(U, j) || Y((0, p.Bi)(j, y));
        }, [j, U, y]),
        (0, c.ZP)(
            () => (
                v.default.track(m.rMx.OPEN_MODAL, {
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
        (0, l.jsxs)(o.Y0X, {
            impression: Z,
            transitionState: _,
            className: S.modalRoot,
            'aria-labelledby': Q,
            parentComponent: 'FeedbackModal',
            children: [
                (0, l.jsxs)(o.xBx, {
                    separator: !1,
                    className: S.headerContainer,
                    children: [
                        (0, l.jsx)(o.X6q, {
                            id: Q,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: i
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: S.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == L)) &&
                    (0, l.jsx)(o.xJW, {
                        className: r()(S.problemInfo, S.ratingSelectorContainer),
                        children: (0, l.jsx)(N.Z, {
                            ratingOptions: T,
                            emojiKind: I,
                            textLabels: L,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                (G(e), e === x.aZ.GOOD && F());
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, l.jsx)(o.hzk, {
                        className: S.__invalid_content,
                        children: (0, l.jsx)(o.xJW, {
                            title: h,
                            className: r()(S.problemInfo, S.presetList, { [S.marginBottom16]: D }),
                            children: (0, l.jsx)(E.Z, {
                                options: K,
                                onClick: function (e) {
                                    (z(e), C.includes(e.value) || F());
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !C.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, l.jsx)(o.hzk, {
                        className: S.__invalid_content,
                        children: (0, l.jsxs)(o.xJW, {
                            title: null != (t = null == M ? void 0 : M(H)) ? t : g.intl.string(g.t.h95hcn),
                            className: S.problemInfo,
                            children: [
                                (0, l.jsx)(o.Kx8, {
                                    value: V,
                                    maxLength: x.iF,
                                    onChange: J
                                }),
                                !P && (0, l.jsx)(R, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !D &&
                    (0, l.jsx)(o.mzw, {
                        className: S.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, l.jsx)(o.XZJ, {
                            type: o.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => $(!B),
                            children: (0, l.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: g.intl.string(g.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != L)) &&
                    (0, l.jsxs)(o.mzw, {
                        className: S.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, l.jsx)(o.zxk, {
                                size: o.zxk.Sizes.SMALL,
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (z(null), J('')) : G(null);
                                },
                                children: g.intl.string(g.t['13/7kZ'])
                            }),
                            (0, l.jsx)(o.zxk, {
                                size: o.zxk.Sizes.SMALL,
                                onClick: F,
                                children: g.intl.string(g.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
