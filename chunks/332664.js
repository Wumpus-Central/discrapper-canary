n.d(t, { Z: () => C }), n(388685);
var i = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    c = n.n(s),
    r = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    m = n(313201),
    b = n(237617),
    p = n(572539),
    x = n(626135),
    h = n(63063),
    v = n(957115),
    g = n(764920),
    f = n(531578),
    j = n(981631),
    Z = n(388032),
    O = n(297849);
function L() {
    return (0, i.jsx)(r.Text, {
        className: O.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: Z.intl.format(Z.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function C(e) {
    var t;
    let { modalType: n, header: a, body: s, problemTitle: h, problems: C, transitionState: E, ratingOptions: N, ratingEmojiKind: R, ratingTextLabels: k, freeformNeededProblems: F = [], otherKey: y, hideDontShowCheckbox: D, startRating: S = null, hideHelpDeskLink: I = !1, onSubmit: A, onClose: B, impression: M, freeformDescription: T } = e,
        z = (0, d.Z)(C),
        [P, w] = o.useState(!1),
        [G, K] = o.useState(S),
        [V, U] = o.useState(null),
        [J, q] = o.useState(c().shuffle(C)),
        [W, X] = o.useState(''),
        H = (0, m.Dt)(),
        Q = (0, b.Z)(G),
        Y = (0, b.Z)(P),
        $ = (0, b.Z)(V),
        ee = (0, b.Z)(A),
        et = (0, b.Z)(W),
        en = null;
    return (
        null == G ? (en = 'RATING') : G !== f.aZ.GOOD && null == V ? (en = 'PROBLEM') : null != V && F.includes(V.value) && (en = 'FREEFORM'),
        o.useEffect(() => {
            c().isEqual(z, C) || q((0, v.B)(C, y));
        }, [C, z, y]),
        (0, u.ZP)(
            () => (
                x.default.track(j.rMx.OPEN_MODAL, {
                    type: n,
                    source: 'Feedback Modal'
                }),
                () => {
                    ee.current({
                        rating: Q.current,
                        problem: $.current,
                        dontShowAgain: Y.current,
                        feedback: et.current
                    });
                }
            )
        ),
        (0, i.jsxs)(r.Y0X, {
            impression: M,
            transitionState: E,
            className: O.modalRoot,
            'aria-labelledby': H,
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !1,
                    className: O.headerContainer,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            id: H,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: a
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: O.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == k)) &&
                    (0, i.jsx)(r.xJW, {
                        className: l()(O.problemInfo, O.ratingSelectorContainer),
                        children: (0, i.jsx)(g.Z, {
                            ratingOptions: N,
                            emojiKind: R,
                            textLabels: k,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                K(e), e === f.aZ.GOOD && B();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, i.jsx)(r.hzk, {
                        className: O.__invalid_content,
                        children: (0, i.jsx)(r.xJW, {
                            title: h,
                            className: l()(O.problemInfo, O.presetList, { [O.marginBottom16]: D }),
                            children: (0, i.jsx)(p.Z, {
                                options: J,
                                onClick: function (e) {
                                    U(e), F.includes(e.value) || B();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !F.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, i.jsx)(r.hzk, {
                        className: O.__invalid_content,
                        children: (0, i.jsxs)(r.xJW, {
                            title: null != (t = null == T ? void 0 : T(V)) ? t : Z.intl.string(Z.t.h95hcn),
                            className: O.problemInfo,
                            children: [
                                (0, i.jsx)(r.Kx8, {
                                    value: W,
                                    maxLength: f.iF,
                                    onChange: X
                                }),
                                !I && (0, i.jsx)(L, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !D &&
                    (0, i.jsx)(r.mzw, {
                        className: O.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, i.jsx)(r.XZJ, {
                            type: r.XZJ.Types.INVERTED,
                            size: 18,
                            value: P,
                            onChange: () => w(!P),
                            children: (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: Z.intl.string(Z.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != k)) &&
                    (0, i.jsxs)(r.mzw, {
                        className: O.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, i.jsx)(r.zxk, {
                                size: r.zxk.Sizes.SMALL,
                                look: r.zxk.Looks.LINK,
                                color: r.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (U(null), X('')) : K(null);
                                },
                                children: Z.intl.string(Z.t['13/7kZ'])
                            }),
                            (0, i.jsx)(r.zxk, {
                                size: r.zxk.Sizes.SMALL,
                                onClick: B,
                                children: Z.intl.string(Z.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
