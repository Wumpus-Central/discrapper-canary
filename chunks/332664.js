n.d(t, { Z: () => w }), n(47120);
var o = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    l = n(392711),
    s = n.n(l),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    b = n(600164),
    p = n(313201),
    m = n(237617),
    _ = n(572539),
    h = n(626135),
    f = n(63063),
    v = n(957115),
    O = n(764920),
    g = n(531578),
    x = n(981631),
    y = n(388032),
    j = n(297849);
function N() {
    return (0, o.jsx)(c.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: y.NW.format(y.t.ybi2tL, { helpdeskURL: f.Z.getSubmitRequestURL() })
    });
}
function w(e) {
    let { modalType: t, header: n, body: a, problemTitle: l, problems: f, transitionState: w, ratingOptions: E, ratingEmojiKind: D, ratingTextLabels: Z, freeformNeededProblems: S = [], otherKey: k, hideDontShowCheckbox: C, startRating: L = null, hideHelpDeskLink: R = !1, onSubmit: P, onClose: A, impression: I } = e,
        B = (0, d.Z)(f),
        [F, W] = i.useState(!1),
        [T, M] = i.useState(L),
        [U, z] = i.useState(null),
        [V, G] = i.useState(s().shuffle(f)),
        [H, K] = i.useState(''),
        J = (0, p.Dt)(),
        X = (0, m.Z)(T),
        q = (0, m.Z)(F),
        Y = (0, m.Z)(U),
        Q = (0, m.Z)(P),
        $ = (0, m.Z)(H),
        ee = null;
    return (
        null == T ? (ee = 'RATING') : T !== g.aZ.GOOD && null == U ? (ee = 'PROBLEM') : null != U && S.includes(U.value) && (ee = 'FREEFORM'),
        i.useEffect(() => {
            s().isEqual(B, f) || G((0, v.B)(f, k));
        }, [f, B, k]),
        (0, u.ZP)(
            () => (
                h.default.track(x.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    Q.current({
                        rating: X.current,
                        problem: Y.current,
                        dontShowAgain: q.current,
                        feedback: $.current
                    });
                }
            )
        ),
        (0, o.jsxs)(c.Y0X, {
            impression: I,
            transitionState: w,
            className: j.modalRoot,
            'aria-labelledby': J,
            children: [
                (0, o.jsxs)(c.xBx, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            id: J,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: a
                        })
                    ]
                }),
                ('RATING' === ee || ('PROBLEM' === ee && null == Z)) &&
                    (0, o.jsx)(c.xJW, {
                        className: r()(j.problemInfo, j.ratingSelectorContainer),
                        children: (0, o.jsx)(O.Z, {
                            ratingOptions: E,
                            emojiKind: D,
                            textLabels: Z,
                            selectedRating: T,
                            onChangeRating: function (e) {
                                M(e), e === g.aZ.GOOD && A();
                            }
                        })
                    }),
                'PROBLEM' === ee &&
                    (0, o.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, o.jsx)(c.xJW, {
                            title: l,
                            className: r()(j.problemInfo, j.presetList),
                            children: (0, o.jsx)(_.Z, {
                                options: V,
                                onClick: function (e) {
                                    z(e), S.includes(e.value) || A();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !S.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === ee &&
                    (0, o.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, o.jsxs)(c.xJW, {
                            title: y.NW.string(y.t.h95hcn),
                            className: j.problemInfo,
                            children: [
                                (0, o.jsx)(c.Kx8, {
                                    value: H,
                                    maxLength: g.iF,
                                    onChange: K
                                }),
                                !R && (0, o.jsx)(N, {})
                            ]
                        })
                    }),
                'RATING' === ee &&
                    !C &&
                    (0, o.jsx)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: F,
                            onChange: () => W(!F),
                            children: (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: y.NW.string(y.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === ee || ('PROBLEM' === ee && null != Z)) &&
                    (0, o.jsxs)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === ee ? (z(null), K('')) : M(null);
                                },
                                children: y.NW.string(y.t['13/7kZ'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: A,
                                children: y.NW.string(y.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
