n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    b = n(110924),
    d = n(600164),
    _ = n(313201),
    f = n(237617),
    m = n(572539),
    p = n(626135),
    g = n(63063),
    O = n(957115),
    h = n(764920),
    x = n(531578),
    v = n(981631),
    j = n(388032),
    E = n(297849);
function S() {
    return (0, r.jsx)(c.Text, {
        className: E.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: j.intl.format(j.t.ybi2tL, { helpdeskURL: g.Z.getSubmitRequestURL() })
    });
}
function y(e) {
    var t;
    let { modalType: n, header: l, body: i, problemTitle: g, problems: y, transitionState: k, ratingOptions: N, ratingEmojiKind: C, ratingTextLabels: T, freeformNeededProblems: I = [], otherKey: R, hideDontShowAgainCheckbox: D, startRating: P = null, hideHelpDeskLink: Z = !1, onSubmit: w, onClose: A, impression: L, freeformDescription: F } = e,
        M = (0, b.Z)(y),
        [B, U] = o.useState(!1),
        [G, z] = o.useState(P),
        [H, K] = o.useState(null),
        [Y, W] = o.useState(s().shuffle(y)),
        [X, J] = o.useState(''),
        V = (0, _.Dt)(),
        q = (0, f.Z)(G),
        Q = (0, f.Z)(B),
        $ = (0, f.Z)(H),
        ee = (0, f.Z)(w),
        et = (0, f.Z)(X),
        en = null;
    return (
        null == G ? (en = 'RATING') : G !== x.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && I.includes(H.value) && (en = 'FREEFORM'),
        o.useEffect(() => {
            s().isEqual(M, y) || W((0, O.B)(y, R));
        }, [y, M, R]),
        (0, u.ZP)(
            () => (
                p.default.track(v.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: q.current,
                        problem: $.current,
                        dontShowAgain: Q.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, r.jsxs)(c.Y0X, {
            impression: L,
            transitionState: k,
            className: E.modalRoot,
            'aria-labelledby': V,
            children: [
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: E.headerContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: l
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: E.ratingBody,
                            children: i
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == T)) &&
                    (0, r.jsx)(c.xJW, {
                        className: a()(E.problemInfo, E.ratingSelectorContainer),
                        children: (0, r.jsx)(h.Z, {
                            ratingOptions: N,
                            emojiKind: C,
                            textLabels: T,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                z(e), e === x.aZ.GOOD && A();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: E.__invalid_content,
                        children: (0, r.jsx)(c.xJW, {
                            title: g,
                            className: a()(E.problemInfo, E.presetList, { [E.marginBottom16]: D }),
                            children: (0, r.jsx)(m.Z, {
                                options: Y,
                                onClick: function (e) {
                                    K(e), I.includes(e.value) || A();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !I.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: E.__invalid_content,
                        children: (0, r.jsxs)(c.xJW, {
                            title: null != (t = null == F ? void 0 : F(H)) ? t : j.intl.string(j.t.h95hcn),
                            className: E.problemInfo,
                            children: [
                                (0, r.jsx)(c.Kx8, {
                                    value: X,
                                    maxLength: x.iF,
                                    onChange: J
                                }),
                                !Z && (0, r.jsx)(S, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !D &&
                    (0, r.jsx)(c.mzw, {
                        className: E.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: (0, r.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => U(!B),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: j.intl.string(j.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != T)) &&
                    (0, r.jsxs)(c.mzw, {
                        className: E.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (K(null), J('')) : z(null);
                                },
                                children: j.intl.string(j.t['13/7kZ'])
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: A,
                                children: j.intl.string(j.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
