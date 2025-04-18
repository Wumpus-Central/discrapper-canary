n.d(t, { Z: () => k }), n(388685);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    i = n.n(s),
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
    N = n(531578),
    O = n(981631),
    v = n(388032),
    E = n(297849);
function j() {
    return (0, r.jsx)(c.Text, {
        className: E.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: v.NW.format(v.t.ybi2tL, { helpdeskURL: g.Z.getSubmitRequestURL() })
    });
}
function k(e) {
    var t;
    let { modalType: n, header: o, body: s, problemTitle: g, problems: k, transitionState: S, ratingOptions: y, ratingEmojiKind: C, ratingTextLabels: R, freeformNeededProblems: T = [], otherKey: I, hideDontShowCheckbox: Z, startRating: L = null, hideHelpDeskLink: A = !1, onSubmit: F, onClose: D, impression: w, freeformDescription: M } = e,
        P = (0, d.Z)(k),
        [B, W] = a.useState(!1),
        [U, z] = a.useState(L),
        [G, H] = a.useState(null),
        [K, Y] = a.useState(i().shuffle(k)),
        [X, J] = a.useState(''),
        V = (0, b.Dt)(),
        q = (0, m.Z)(U),
        Q = (0, m.Z)(B),
        $ = (0, m.Z)(G),
        ee = (0, m.Z)(F),
        et = (0, m.Z)(X),
        en = null;
    return (
        null == U ? (en = 'RATING') : U !== N.aZ.GOOD && null == G ? (en = 'PROBLEM') : null != G && T.includes(G.value) && (en = 'FREEFORM'),
        a.useEffect(() => {
            i().isEqual(P, k) || Y((0, h.B)(k, I));
        }, [k, P, I]),
        (0, u.ZP)(
            () => (
                p.default.track(O.rMx.OPEN_MODAL, {
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
            transitionState: S,
            className: E.modalRoot,
            'aria-labelledby': V,
            children: [
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: E.headerContainer,
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
                            className: E.ratingBody,
                            children: s
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == R)) &&
                    (0, r.jsx)(c.xJW, {
                        className: l()(E.problemInfo, E.ratingSelectorContainer),
                        children: (0, r.jsx)(x.Z, {
                            ratingOptions: y,
                            emojiKind: C,
                            textLabels: R,
                            selectedRating: U,
                            onChangeRating: function (e) {
                                z(e), e === N.aZ.GOOD && D();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, r.jsx)(c.hzk, {
                        className: E.__invalid_content,
                        children: (0, r.jsx)(c.xJW, {
                            title: g,
                            className: l()(E.problemInfo, E.presetList, { [E.marginBottom16]: Z }),
                            children: (0, r.jsx)(f.Z, {
                                options: K,
                                onClick: function (e) {
                                    H(e), T.includes(e.value) || D();
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
                        className: E.__invalid_content,
                        children: (0, r.jsxs)(c.xJW, {
                            title: null != (t = null == M ? void 0 : M(G)) ? t : v.NW.string(v.t.h95hcn),
                            className: E.problemInfo,
                            children: [
                                (0, r.jsx)(c.Kx8, {
                                    value: X,
                                    maxLength: N.iF,
                                    onChange: J
                                }),
                                !A && (0, r.jsx)(j, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !Z &&
                    (0, r.jsx)(c.mzw, {
                        className: E.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, r.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => W(!B),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: v.NW.string(v.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != R)) &&
                    (0, r.jsxs)(c.mzw, {
                        className: E.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (H(null), J('')) : z(null);
                                },
                                children: v.NW.string(v.t['13/7kZ'])
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: D,
                                children: v.NW.string(v.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
