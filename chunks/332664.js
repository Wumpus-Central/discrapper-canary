n.d(t, { Z: () => O }), n(388685);
var a = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    o = n(392711),
    i = n.n(o),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    b = n(313201),
    m = n(237617),
    f = n(572539),
    x = n(626135),
    h = n(63063),
    p = n(957115),
    N = n(764920),
    v = n(531578),
    g = n(981631),
    k = n(388032),
    j = n(297849);
function E() {
    return (0, a.jsx)(c.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: k.NW.format(k.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function O(e) {
    let { modalType: t, header: n, body: s, problemTitle: o, problems: h, transitionState: O, ratingOptions: S, ratingEmojiKind: C, ratingTextLabels: L, freeformNeededProblems: R = [], otherKey: Z, hideDontShowCheckbox: y, startRating: F = null, hideHelpDeskLink: T = !1, onSubmit: A, onClose: I, impression: M } = e,
        D = (0, d.Z)(h),
        [W, B] = l.useState(!1),
        [w, P] = l.useState(F),
        [z, U] = l.useState(null),
        [G, H] = l.useState(i().shuffle(h)),
        [K, Y] = l.useState(''),
        J = (0, b.Dt)(),
        X = (0, m.Z)(w),
        q = (0, m.Z)(W),
        Q = (0, m.Z)(z),
        V = (0, m.Z)(A),
        $ = (0, m.Z)(K),
        ee = null;
    return (
        null == w ? (ee = 'RATING') : w !== v.aZ.GOOD && null == z ? (ee = 'PROBLEM') : null != z && R.includes(z.value) && (ee = 'FREEFORM'),
        l.useEffect(() => {
            i().isEqual(D, h) || H((0, p.B)(h, Z));
        }, [h, D, Z]),
        (0, u.ZP)(
            () => (
                x.default.track(g.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    V.current({
                        rating: X.current,
                        problem: Q.current,
                        dontShowAgain: q.current,
                        feedback: $.current
                    });
                }
            )
        ),
        (0, a.jsxs)(c.Y0X, {
            impression: M,
            transitionState: O,
            className: j.modalRoot,
            'aria-labelledby': J,
            children: [
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: J,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === ee || ('PROBLEM' === ee && null == L)) &&
                    (0, a.jsx)(c.xJW, {
                        className: r()(j.problemInfo, j.ratingSelectorContainer),
                        children: (0, a.jsx)(N.Z, {
                            ratingOptions: S,
                            emojiKind: C,
                            textLabels: L,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                P(e), e === v.aZ.GOOD && I();
                            }
                        })
                    }),
                'PROBLEM' === ee &&
                    (0, a.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, a.jsx)(c.xJW, {
                            title: o,
                            className: r()(j.problemInfo, j.presetList),
                            children: (0, a.jsx)(f.Z, {
                                options: G,
                                onClick: function (e) {
                                    U(e), R.includes(e.value) || I();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !R.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === ee &&
                    (0, a.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, a.jsxs)(c.xJW, {
                            title: k.NW.string(k.t.h95hcn),
                            className: j.problemInfo,
                            children: [
                                (0, a.jsx)(c.Kx8, {
                                    value: K,
                                    maxLength: v.iF,
                                    onChange: Y
                                }),
                                !T && (0, a.jsx)(E, {})
                            ]
                        })
                    }),
                'RATING' === ee &&
                    !y &&
                    (0, a.jsx)(c.mzw, {
                        className: j.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: W,
                            onChange: () => B(!W),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: k.NW.string(k.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === ee || ('PROBLEM' === ee && null != L)) &&
                    (0, a.jsxs)(c.mzw, {
                        className: j.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === ee ? (U(null), Y('')) : P(null);
                                },
                                children: k.NW.string(k.t['13/7kZ'])
                            }),
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: I,
                                children: k.NW.string(k.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
