n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
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
    j = n(297849);
function k() {
    return (0, r.jsx)(c.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: E.intl.format(E.t.ybi2tL, { helpdeskURL: g.Z.getSubmitRequestURL() })
    });
}
function S(e) {
    var t;
    let { modalType: n, header: a, body: i, problemTitle: g, problems: S, transitionState: N, ratingOptions: y, ratingEmojiKind: C, ratingTextLabels: R, freeformNeededProblems: T = [], otherKey: I, hideDontShowCheckbox: Z, startRating: L = null, hideHelpDeskLink: A = !1, onSubmit: F, onClose: D, impression: w, freeformDescription: M } = e,
        P = (0, d.Z)(S),
        [B, U] = l.useState(!1),
        [z, G] = l.useState(L),
        [H, K] = l.useState(null),
        [Y, W] = l.useState(s().shuffle(S)),
        [X, J] = l.useState(''),
        V = (0, b.Dt)(),
        q = (0, m.Z)(z),
        Q = (0, m.Z)(B),
        $ = (0, m.Z)(H),
        ee = (0, m.Z)(F),
        et = (0, m.Z)(X),
        en = null;
    return (
        null == z ? (en = 'RATING') : z !== O.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && T.includes(H.value) && (en = 'FREEFORM'),
        l.useEffect(() => {
            s().isEqual(P, S) || W((0, h.B)(S, I));
        }, [S, P, I]),
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
            className: j.modalRoot,
            'aria-labelledby': V,
            children: [
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: a
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: i
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == R)) &&
                    (0, r.jsx)(c.xJW, {
                        className: o()(j.problemInfo, j.ratingSelectorContainer),
                        children: (0, r.jsx)(x.Z, {
                            ratingOptions: y,
                            emojiKind: C,
                            textLabels: R,
                            selectedRating: z,
                            onChangeRating: function (e) {
                                G(e), e === O.aZ.GOOD && D();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, r.jsx)(c.xJW, {
                            title: g,
                            className: o()(j.problemInfo, j.presetList, { [j.marginBottom16]: Z }),
                            children: (0, r.jsx)(f.Z, {
                                options: Y,
                                onClick: function (e) {
                                    K(e), T.includes(e.value) || D();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !T.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: j.__invalid_content,
                        children: (0, r.jsxs)(c.xJW, {
                            title: null != (t = null == M ? void 0 : M(H)) ? t : E.intl.string(E.t.h95hcn),
                            className: j.problemInfo,
                            children: [
                                (0, r.jsx)(c.Kx8, {
                                    value: X,
                                    maxLength: O.iF,
                                    onChange: J
                                }),
                                !A && (0, r.jsx)(k, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !Z &&
                    (0, r.jsx)(c.mzw, {
                        className: j.footer,
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
                ('FREEFORM' === en || ('PROBLEM' === en && null != R)) &&
                    (0, r.jsxs)(c.mzw, {
                        className: j.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (K(null), J('')) : G(null);
                                },
                                children: E.intl.string(E.t['13/7kZ'])
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: D,
                                children: E.intl.string(E.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
