n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    b = n(313201),
    m = n(237617),
    f = n(572539),
    p = n(626135),
    g = n(63063),
    h = n(957115),
    x = n(764920),
    O = n(531578),
    v = n(981631),
    E = n(388032),
    S = n(297849);
function j() {
    return (0, r.jsx)(c.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: E.intl.format(E.t.ybi2tL, { helpdeskURL: g.Z.getSubmitRequestURL() })
    });
}
function k(e) {
    var t;
    let { modalType: n, header: o, body: i, problemTitle: g, problems: k, transitionState: N, ratingOptions: y, ratingEmojiKind: C, ratingTextLabels: I, freeformNeededProblems: R = [], otherKey: T, hideDontShowCheckbox: Z, startRating: L = null, hideHelpDeskLink: D = !1, onSubmit: A, onClose: F, impression: w, freeformDescription: M } = e,
        P = (0, d.Z)(k),
        [B, U] = l.useState(!1),
        [G, z] = l.useState(L),
        [H, Y] = l.useState(null),
        [K, W] = l.useState(s().shuffle(k)),
        [X, J] = l.useState(''),
        V = (0, b.Dt)(),
        q = (0, m.Z)(G),
        Q = (0, m.Z)(B),
        $ = (0, m.Z)(H),
        ee = (0, m.Z)(A),
        et = (0, m.Z)(X),
        en = null;
    return (
        null == G ? (en = 'RATING') : G !== O.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && R.includes(H.value) && (en = 'FREEFORM'),
        l.useEffect(() => {
            s().isEqual(P, k) || W((0, h.B)(k, T));
        }, [k, P, T]),
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
            impression: w,
            transitionState: N,
            className: S.modalRoot,
            'aria-labelledby': V,
            children: [
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: S.headerContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: o
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: S.ratingBody,
                            children: i
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == I)) &&
                    (0, r.jsx)(c.xJW, {
                        className: a()(S.problemInfo, S.ratingSelectorContainer),
                        children: (0, r.jsx)(x.Z, {
                            ratingOptions: y,
                            emojiKind: C,
                            textLabels: I,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                z(e), e === O.aZ.GOOD && F();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: S.__invalid_content,
                        children: (0, r.jsx)(c.xJW, {
                            title: g,
                            className: a()(S.problemInfo, S.presetList, { [S.marginBottom16]: Z }),
                            children: (0, r.jsx)(f.Z, {
                                options: K,
                                onClick: function (e) {
                                    Y(e), R.includes(e.value) || F();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !R.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: S.__invalid_content,
                        children: (0, r.jsxs)(c.xJW, {
                            title: null != (t = null == M ? void 0 : M(H)) ? t : E.intl.string(E.t.h95hcn),
                            className: S.problemInfo,
                            children: [
                                (0, r.jsx)(c.Kx8, {
                                    value: X,
                                    maxLength: O.iF,
                                    onChange: J
                                }),
                                !D && (0, r.jsx)(j, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !Z &&
                    (0, r.jsx)(c.mzw, {
                        className: S.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, r.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => U(!B),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: E.intl.string(E.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != I)) &&
                    (0, r.jsxs)(c.mzw, {
                        className: S.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (Y(null), J('')) : z(null);
                                },
                                children: E.intl.string(E.t['13/7kZ'])
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: F,
                                children: E.intl.string(E.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
