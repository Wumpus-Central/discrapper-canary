n.d(t, { Z: () => E }), n(388685);
var o = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    s = n.n(r),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    m = n(313201),
    b = n(237617),
    p = n(572539),
    f = n(626135),
    h = n(63063),
    v = n(957115),
    x = n(764920),
    g = n(531578),
    O = n(981631),
    j = n(388032),
    y = n(297849);
function Z() {
    return (0, o.jsx)(c.Text, {
        className: y.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: j.intl.format(j.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function E(e) {
    var t;
    let { modalType: n, header: a, body: r, problemTitle: h, problems: E, transitionState: k, ratingOptions: N, ratingEmojiKind: L, ratingTextLabels: R, freeformNeededProblems: C = [], otherKey: S, hideDontShowAgainCheckbox: D, startRating: F = null, hideHelpDeskLink: I = !1, onSubmit: P, onClose: T, impression: w, freeformDescription: A } = e,
        B = (0, d.Z)(E),
        [M, z] = i.useState(!1),
        [G, U] = i.useState(F),
        [V, K] = i.useState(null),
        [J, q] = i.useState(s().shuffle(E)),
        [W, X] = i.useState(''),
        H = (0, m.Dt)(),
        Q = (0, b.Z)(G),
        Y = (0, b.Z)(M),
        $ = (0, b.Z)(V),
        ee = (0, b.Z)(P),
        et = (0, b.Z)(W),
        en = null;
    return (
        null == G ? (en = 'RATING') : G !== g.aZ.GOOD && null == V ? (en = 'PROBLEM') : null != V && C.includes(V.value) && (en = 'FREEFORM'),
        i.useEffect(() => {
            s().isEqual(B, E) || q((0, v.B)(E, S));
        }, [E, B, S]),
        (0, u.ZP)(
            () => (
                f.default.track(O.rMx.OPEN_MODAL, {
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
        (0, o.jsxs)(c.Y0X, {
            impression: w,
            transitionState: k,
            className: y.modalRoot,
            'aria-labelledby': H,
            children: [
                (0, o.jsxs)(c.xBx, {
                    separator: !1,
                    className: y.headerContainer,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            id: H,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: a
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: y.ratingBody,
                            children: r
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == R)) &&
                    (0, o.jsx)(c.xJW, {
                        className: l()(y.problemInfo, y.ratingSelectorContainer),
                        children: (0, o.jsx)(x.Z, {
                            ratingOptions: N,
                            emojiKind: L,
                            textLabels: R,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                U(e), e === g.aZ.GOOD && T();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, o.jsx)(c.hzk, {
                        className: y.__invalid_content,
                        children: (0, o.jsx)(c.xJW, {
                            title: h,
                            className: l()(y.problemInfo, y.presetList, { [y.marginBottom16]: D }),
                            children: (0, o.jsx)(p.Z, {
                                options: J,
                                onClick: function (e) {
                                    K(e), C.includes(e.value) || T();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !C.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, o.jsx)(c.hzk, {
                        className: y.__invalid_content,
                        children: (0, o.jsxs)(c.xJW, {
                            title: null != (t = null == A ? void 0 : A(V)) ? t : j.intl.string(j.t.h95hcn),
                            className: y.problemInfo,
                            children: [
                                (0, o.jsx)(c.Kx8, {
                                    value: W,
                                    maxLength: g.iF,
                                    onChange: X
                                }),
                                !I && (0, o.jsx)(Z, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !D &&
                    (0, o.jsx)(c.mzw, {
                        className: y.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => z(!M),
                            children: (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: j.intl.string(j.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != R)) &&
                    (0, o.jsxs)(c.mzw, {
                        className: y.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (K(null), X('')) : U(null);
                                },
                                children: j.intl.string(j.t['13/7kZ'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: T,
                                children: j.intl.string(j.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
