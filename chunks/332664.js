n.d(t, { Z: () => w }), n(388685);
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
    m = n(313201),
    p = n(237617),
    _ = n(572539),
    h = n(626135),
    f = n(63063),
    v = n(957115),
    g = n(764920),
    O = n(531578),
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
    var t;
    let { modalType: n, header: a, body: l, problemTitle: f, problems: w, transitionState: E, ratingOptions: D, ratingEmojiKind: Z, ratingTextLabels: S, freeformNeededProblems: k = [], otherKey: C, hideDontShowCheckbox: L, startRating: R = null, hideHelpDeskLink: P = !1, onSubmit: A, onClose: I, impression: B, freeformDescription: F } = e,
        W = (0, d.Z)(w),
        [T, M] = i.useState(!1),
        [U, z] = i.useState(R),
        [V, G] = i.useState(null),
        [H, K] = i.useState(s().shuffle(w)),
        [J, X] = i.useState(''),
        q = (0, m.Dt)(),
        Y = (0, p.Z)(U),
        Q = (0, p.Z)(T),
        $ = (0, p.Z)(V),
        ee = (0, p.Z)(A),
        et = (0, p.Z)(J),
        en = null;
    return (
        null == U ? (en = 'RATING') : U !== O.aZ.GOOD && null == V ? (en = 'PROBLEM') : null != V && k.includes(V.value) && (en = 'FREEFORM'),
        i.useEffect(() => {
            s().isEqual(W, w) || K((0, v.B)(w, C));
        }, [w, W, C]),
        (0, u.ZP)(
            () => (
                h.default.track(x.rMx.OPEN_MODAL, {
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
            impression: B,
            transitionState: E,
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
                            children: a
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: l
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == S)) &&
                    (0, o.jsx)(c.xJW, {
                        className: r()(j.problemInfo, j.ratingSelectorContainer),
                        children: (0, o.jsx)(g.Z, {
                            ratingOptions: D,
                            emojiKind: Z,
                            textLabels: S,
                            selectedRating: U,
                            onChangeRating: function (e) {
                                z(e), e === O.aZ.GOOD && I();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, o.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, o.jsx)(c.xJW, {
                            title: f,
                            className: r()(j.problemInfo, j.presetList, { [j.marginBottom16]: L }),
                            children: (0, o.jsx)(_.Z, {
                                options: H,
                                onClick: function (e) {
                                    G(e), k.includes(e.value) || I();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !k.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, o.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, o.jsxs)(c.xJW, {
                            title: null != (t = null == F ? void 0 : F(V)) ? t : y.NW.string(y.t.h95hcn),
                            className: j.problemInfo,
                            children: [
                                (0, o.jsx)(c.Kx8, {
                                    value: J,
                                    maxLength: O.iF,
                                    onChange: X
                                }),
                                !P && (0, o.jsx)(N, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !L &&
                    (0, o.jsx)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: (0, o.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: T,
                            onChange: () => M(!T),
                            children: (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: y.NW.string(y.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != S)) &&
                    (0, o.jsxs)(c.mzw, {
                        className: j.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (G(null), X('')) : z(null);
                                },
                                children: y.NW.string(y.t['13/7kZ'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: I,
                                children: y.NW.string(y.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
