n.d(t, { Z: () => E }), n(388685);
var o = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    s = n.n(l),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    b = n(600164),
    p = n(313201),
    m = n(237617),
    _ = n(572539),
    f = n(626135),
    h = n(63063),
    O = n(957115),
    g = n(764920),
    v = n(531578),
    y = n(981631),
    x = n(388032),
    j = n(297849);
function w() {
    return (0, o.jsx)(c.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: x.intl.format(x.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function E(e) {
    var t;
    let { modalType: n, header: r, body: l, problemTitle: h, problems: E, transitionState: S, ratingOptions: k, ratingEmojiKind: P, ratingTextLabels: D, freeformNeededProblems: N = [], otherKey: C, hideDontShowAgainCheckbox: Z, startRating: R = null, hideHelpDeskLink: L = !1, onSubmit: I, onClose: A, impression: F, freeformDescription: T } = e,
        B = (0, d.Z)(E),
        [M, U] = i.useState(!1),
        [z, V] = i.useState(R),
        [H, G] = i.useState(null),
        [K, J] = i.useState(s().shuffle(E)),
        [X, W] = i.useState(''),
        q = (0, p.Dt)(),
        Y = (0, m.Z)(z),
        Q = (0, m.Z)(M),
        $ = (0, m.Z)(H),
        ee = (0, m.Z)(I),
        et = (0, m.Z)(X),
        en = null;
    return (
        null == z ? (en = 'RATING') : z !== v.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && N.includes(H.value) && (en = 'FREEFORM'),
        i.useEffect(() => {
            s().isEqual(B, E) || J((0, O.B)(E, C));
        }, [E, B, C]),
        (0, u.ZP)(
            () => (
                f.default.track(y.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: Y.current,
                        problem: $.current,
                        dontShowAgain: Q.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, o.jsxs)(c.Y0X, {
            impression: F,
            transitionState: S,
            className: j.modalRoot,
            'aria-labelledby': q,
            children: [
                (0, o.jsxs)(c.xBx, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            id: q,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: r
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: l
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == D)) &&
                    (0, o.jsx)(c.xJW, {
                        className: a()(j.problemInfo, j.ratingSelectorContainer),
                        children: (0, o.jsx)(g.Z, {
                            ratingOptions: k,
                            emojiKind: P,
                            textLabels: D,
                            selectedRating: z,
                            onChangeRating: function (e) {
                                V(e), e === v.aZ.GOOD && A();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, o.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, o.jsx)(c.xJW, {
                            title: h,
                            className: a()(j.problemInfo, j.presetList, { [j.marginBottom16]: Z }),
                            children: (0, o.jsx)(_.Z, {
                                options: K,
                                onClick: function (e) {
                                    G(e), N.includes(e.value) || A();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !N.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, o.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, o.jsxs)(c.xJW, {
                            title: null != (t = null == T ? void 0 : T(H)) ? t : x.intl.string(x.t.h95hcn),
                            className: j.problemInfo,
                            children: [
                                (0, o.jsx)(c.Kx8, {
                                    value: X,
                                    maxLength: v.iF,
                                    onChange: W
                                }),
                                !L && (0, o.jsx)(w, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !Z &&
                    (0, o.jsx)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => U(!M),
                            children: (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: x.intl.string(x.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != D)) &&
                    (0, o.jsxs)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (G(null), W('')) : V(null);
                                },
                                children: x.intl.string(x.t['13/7kZ'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: A,
                                children: x.intl.string(x.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
