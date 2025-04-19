n.d(t, { Z: () => L }), n(388685);
var o = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
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
    N = n(981631),
    j = n(388032),
    Z = n(297849);
function O() {
    return (0, o.jsx)(r.Text, {
        className: Z.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: j.NW.format(j.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function L(e) {
    var t;
    let { modalType: n, header: i, body: s, problemTitle: h, problems: L, transitionState: C, ratingOptions: E, ratingEmojiKind: R, ratingTextLabels: k, freeformNeededProblems: F = [], otherKey: y, hideDontShowCheckbox: D, startRating: S = null, hideHelpDeskLink: I = !1, onSubmit: A, onClose: B, impression: W, freeformDescription: M } = e,
        T = (0, d.Z)(L),
        [z, P] = a.useState(!1),
        [w, G] = a.useState(S),
        [K, V] = a.useState(null),
        [U, J] = a.useState(c().shuffle(L)),
        [q, X] = a.useState(''),
        H = (0, m.Dt)(),
        Q = (0, b.Z)(w),
        Y = (0, b.Z)(z),
        $ = (0, b.Z)(K),
        ee = (0, b.Z)(A),
        et = (0, b.Z)(q),
        en = null;
    return (
        null == w ? (en = 'RATING') : w !== f.aZ.GOOD && null == K ? (en = 'PROBLEM') : null != K && F.includes(K.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            c().isEqual(T, L) || J((0, v.B)(L, y));
        }, [L, T, y]),
        (0, u.ZP)(
            () => (
                x.default.track(N.rMx.OPEN_MODAL, {
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
        (0, o.jsxs)(r.Y0X, {
            impression: W,
            transitionState: C,
            className: Z.modalRoot,
            'aria-labelledby': H,
            children: [
                (0, o.jsxs)(r.xBx, {
                    separator: !1,
                    className: Z.headerContainer,
                    children: [
                        (0, o.jsx)(r.X6q, {
                            id: H,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: i
                        }),
                        (0, o.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: Z.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == k)) &&
                    (0, o.jsx)(r.xJW, {
                        className: l()(Z.problemInfo, Z.ratingSelectorContainer),
                        children: (0, o.jsx)(g.Z, {
                            ratingOptions: E,
                            emojiKind: R,
                            textLabels: k,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                G(e), e === f.aZ.GOOD && B();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, o.jsx)(r.hzk, {
                        className: Z.__invalid_content,
                        children: (0, o.jsx)(r.xJW, {
                            title: h,
                            className: l()(Z.problemInfo, Z.presetList, { [Z.marginBottom16]: D }),
                            children: (0, o.jsx)(p.Z, {
                                options: U,
                                onClick: function (e) {
                                    V(e), F.includes(e.value) || B();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !F.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, o.jsx)(r.hzk, {
                        className: Z.__invalid_content,
                        children: (0, o.jsxs)(r.xJW, {
                            title: null != (t = null == M ? void 0 : M(K)) ? t : j.NW.string(j.t.h95hcn),
                            className: Z.problemInfo,
                            children: [
                                (0, o.jsx)(r.Kx8, {
                                    value: q,
                                    maxLength: f.iF,
                                    onChange: X
                                }),
                                !I && (0, o.jsx)(O, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !D &&
                    (0, o.jsx)(r.mzw, {
                        className: Z.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(r.XZJ, {
                            type: r.XZJ.Types.INVERTED,
                            size: 18,
                            value: z,
                            onChange: () => P(!z),
                            children: (0, o.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: j.NW.string(j.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != k)) &&
                    (0, o.jsxs)(r.mzw, {
                        className: Z.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(r.zxk, {
                                size: r.zxk.Sizes.SMALL,
                                look: r.zxk.Looks.LINK,
                                color: r.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (V(null), X('')) : G(null);
                                },
                                children: j.NW.string(j.t['13/7kZ'])
                            }),
                            (0, o.jsx)(r.zxk, {
                                size: r.zxk.Sizes.SMALL,
                                onClick: B,
                                children: j.NW.string(j.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
