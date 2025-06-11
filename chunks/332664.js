n.d(t, { Z: () => j }), n(388685);
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
    h = n(626135),
    v = n(63063),
    p = n(957115),
    x = n(764920),
    N = n(531578),
    m = n(981631),
    g = n(388032),
    S = n(297849);
function R() {
    return (0, l.jsx)(o.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.intl.format(g.t.ybi2tL, { helpdeskURL: v.Z.getSubmitRequestURL() })
    });
}
function j(e) {
    var t;
    let { modalType: n, header: i, body: s, problemTitle: v, problems: j, transitionState: _, ratingOptions: I, ratingEmojiKind: T, ratingTextLabels: L, freeformNeededProblems: y = [], otherKey: C, hideDontShowAgainCheckbox: k, startRating: D = null, hideHelpDeskLink: P = !1, onSubmit: A, onClose: F, impression: Z, freeformDescription: M } = e,
        U = (0, d.Z)(j),
        [B, w] = a.useState(!1),
        [$, G] = a.useState(D),
        [H, z] = a.useState(null),
        [K, V] = a.useState(u().shuffle(j)),
        [Y, J] = a.useState(''),
        W = (0, O.Dt)(),
        X = (0, f.Z)($),
        Q = (0, f.Z)(B),
        q = (0, f.Z)(H),
        ee = (0, f.Z)(A),
        et = (0, f.Z)(Y),
        en = null;
    return (
        null == $ ? (en = 'RATING') : $ !== N.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && y.includes(H.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            u().isEqual(U, j) || V((0, p.Bi)(j, C));
        }, [j, U, C]),
        (0, c.ZP)(
            () => (
                h.default.track(m.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: X.current,
                        problem: q.current,
                        dontShowAgain: Q.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, l.jsxs)(o.Y0X, {
            impression: Z,
            transitionState: _,
            className: S.modalRoot,
            'aria-labelledby': W,
            parentComponent: 'FeedbackModal',
            children: [
                (0, l.jsxs)(o.xBx, {
                    separator: !1,
                    className: S.headerContainer,
                    children: [
                        (0, l.jsx)(o.X6q, {
                            id: W,
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
                        children: (0, l.jsx)(x.Z, {
                            ratingOptions: I,
                            emojiKind: T,
                            textLabels: L,
                            selectedRating: $,
                            onChangeRating: function (e) {
                                G(e), e === N.aZ.GOOD && F();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, l.jsx)(o.hzk, {
                        className: S.__invalid_content,
                        children: (0, l.jsx)(o.xJW, {
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
                    (0, l.jsx)(o.hzk, {
                        className: S.__invalid_content,
                        children: (0, l.jsxs)(o.xJW, {
                            title: null != (t = null == M ? void 0 : M(H)) ? t : g.intl.string(g.t.h95hcn),
                            className: S.problemInfo,
                            children: [
                                (0, l.jsx)(o.Kx8, {
                                    value: Y,
                                    maxLength: N.iF,
                                    onChange: J
                                }),
                                !P && (0, l.jsx)(R, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !k &&
                    (0, l.jsx)(o.mzw, {
                        className: S.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, l.jsx)(o.XZJ, {
                            type: o.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => w(!B),
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
