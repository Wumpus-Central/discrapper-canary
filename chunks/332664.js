n.d(t, { Z: () => L }), n(388685);
var o = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(392711),
    c = n.n(l),
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
    let { modalType: t, header: n, body: i, problemTitle: l, problems: h, transitionState: L, ratingOptions: C, ratingEmojiKind: E, ratingTextLabels: R, freeformNeededProblems: k = [], otherKey: F, hideDontShowCheckbox: y, startRating: D = null, hideHelpDeskLink: S = !1, onSubmit: I, onClose: A, impression: W } = e,
        B = (0, d.Z)(h),
        [M, T] = a.useState(!1),
        [z, P] = a.useState(D),
        [w, G] = a.useState(null),
        [K, V] = a.useState(c().shuffle(h)),
        [U, J] = a.useState(''),
        q = (0, m.Dt)(),
        X = (0, b.Z)(z),
        H = (0, b.Z)(M),
        Q = (0, b.Z)(w),
        Y = (0, b.Z)(I),
        $ = (0, b.Z)(U),
        ee = null;
    return (
        null == z ? (ee = 'RATING') : z !== f.aZ.GOOD && null == w ? (ee = 'PROBLEM') : null != w && k.includes(w.value) && (ee = 'FREEFORM'),
        a.useEffect(() => {
            c().isEqual(B, h) || V((0, v.B)(h, F));
        }, [h, B, F]),
        (0, u.ZP)(
            () => (
                x.default.track(N.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    Y.current({
                        rating: X.current,
                        problem: Q.current,
                        dontShowAgain: H.current,
                        feedback: $.current
                    });
                }
            )
        ),
        (0, o.jsxs)(r.Y0X, {
            impression: W,
            transitionState: L,
            className: Z.modalRoot,
            'aria-labelledby': q,
            children: [
                (0, o.jsxs)(r.xBx, {
                    separator: !1,
                    className: Z.headerContainer,
                    children: [
                        (0, o.jsx)(r.X6q, {
                            id: q,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: Z.ratingBody,
                            children: i
                        })
                    ]
                }),
                ('RATING' === ee || ('PROBLEM' === ee && null == R)) &&
                    (0, o.jsx)(r.xJW, {
                        className: s()(Z.problemInfo, Z.ratingSelectorContainer),
                        children: (0, o.jsx)(g.Z, {
                            ratingOptions: C,
                            emojiKind: E,
                            textLabels: R,
                            selectedRating: z,
                            onChangeRating: function (e) {
                                P(e), e === f.aZ.GOOD && A();
                            }
                        })
                    }),
                'PROBLEM' === ee &&
                    (0, o.jsx)(r.hzk, {
                        className: Z.__invalid_content,
                        children: (0, o.jsx)(r.xJW, {
                            title: l,
                            className: s()(Z.problemInfo, Z.presetList),
                            children: (0, o.jsx)(p.Z, {
                                options: K,
                                onClick: function (e) {
                                    G(e), k.includes(e.value) || A();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !k.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === ee &&
                    (0, o.jsx)(r.hzk, {
                        className: Z.__invalid_content,
                        children: (0, o.jsxs)(r.xJW, {
                            title: j.NW.string(j.t.h95hcn),
                            className: Z.problemInfo,
                            children: [
                                (0, o.jsx)(r.Kx8, {
                                    value: U,
                                    maxLength: f.iF,
                                    onChange: J
                                }),
                                !S && (0, o.jsx)(O, {})
                            ]
                        })
                    }),
                'RATING' === ee &&
                    !y &&
                    (0, o.jsx)(r.mzw, {
                        className: Z.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(r.XZJ, {
                            type: r.XZJ.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => T(!M),
                            children: (0, o.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: j.NW.string(j.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === ee || ('PROBLEM' === ee && null != R)) &&
                    (0, o.jsxs)(r.mzw, {
                        className: Z.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(r.zxk, {
                                size: r.zxk.Sizes.SMALL,
                                look: r.zxk.Looks.LINK,
                                color: r.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === ee ? (G(null), J('')) : P(null);
                                },
                                children: j.NW.string(j.t['13/7kZ'])
                            }),
                            (0, o.jsx)(r.zxk, {
                                size: r.zxk.Sizes.SMALL,
                                onClick: A,
                                children: j.NW.string(j.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
