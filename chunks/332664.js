n.d(t, { Z: () => j }), n(388685);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(392711),
    i = n.n(o),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    b = n(313201),
    m = n(237617),
    f = n(572539),
    h = n(626135),
    x = n(63063),
    p = n(957115),
    N = n(764920),
    g = n(531578),
    v = n(981631),
    k = n(388032),
    E = n(297849);
function O() {
    return (0, a.jsx)(c.Text, {
        className: E.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: k.NW.format(k.t.ybi2tL, { helpdeskURL: x.Z.getSubmitRequestURL() })
    });
}
function j(e) {
    var t;
    let { modalType: n, header: r, body: o, problemTitle: x, problems: j, transitionState: S, ratingOptions: C, ratingEmojiKind: R, ratingTextLabels: L, freeformNeededProblems: Z = [], otherKey: T, hideDontShowCheckbox: y, startRating: F = null, hideHelpDeskLink: I = !1, onSubmit: A, onClose: D, impression: W, freeformDescription: B } = e,
        M = (0, d.Z)(j),
        [w, P] = l.useState(!1),
        [U, z] = l.useState(F),
        [H, G] = l.useState(null),
        [Y, K] = l.useState(i().shuffle(j)),
        [X, J] = l.useState(''),
        V = (0, b.Dt)(),
        q = (0, m.Z)(U),
        Q = (0, m.Z)(w),
        $ = (0, m.Z)(H),
        ee = (0, m.Z)(A),
        et = (0, m.Z)(X),
        en = null;
    return (
        null == U ? (en = 'RATING') : U !== g.aZ.GOOD && null == H ? (en = 'PROBLEM') : null != H && Z.includes(H.value) && (en = 'FREEFORM'),
        l.useEffect(() => {
            i().isEqual(M, j) || K((0, p.B)(j, T));
        }, [j, M, T]),
        (0, u.ZP)(
            () => (
                h.default.track(v.rMx.OPEN_MODAL, {
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
        (0, a.jsxs)(c.Y0X, {
            impression: W,
            transitionState: S,
            className: E.modalRoot,
            'aria-labelledby': V,
            children: [
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: E.headerContainer,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: r
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: E.ratingBody,
                            children: o
                        })
                    ]
                }),
                ('RATING' === en || ('PROBLEM' === en && null == L)) &&
                    (0, a.jsx)(c.xJW, {
                        className: s()(E.problemInfo, E.ratingSelectorContainer),
                        children: (0, a.jsx)(N.Z, {
                            ratingOptions: C,
                            emojiKind: R,
                            textLabels: L,
                            selectedRating: U,
                            onChangeRating: function (e) {
                                z(e), e === g.aZ.GOOD && D();
                            }
                        })
                    }),
                'PROBLEM' === en &&
                    (0, a.jsx)(c.hzk, {
                        className: E.__invalid_content,
                        children: (0, a.jsx)(c.xJW, {
                            title: x,
                            className: s()(E.problemInfo, E.presetList, { [E.marginBottom16]: y }),
                            children: (0, a.jsx)(f.Z, {
                                options: Y,
                                onClick: function (e) {
                                    G(e), Z.includes(e.value) || D();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !Z.includes(t);
                                }
                            })
                        })
                    }),
                'FREEFORM' === en &&
                    (0, a.jsx)(c.hzk, {
                        className: E.__invalid_content,
                        children: (0, a.jsxs)(c.xJW, {
                            title: null != (t = null == B ? void 0 : B(H)) ? t : k.NW.string(k.t.h95hcn),
                            className: E.problemInfo,
                            children: [
                                (0, a.jsx)(c.Kx8, {
                                    value: X,
                                    maxLength: g.iF,
                                    onChange: J
                                }),
                                !I && (0, a.jsx)(O, {})
                            ]
                        })
                    }),
                'RATING' === en &&
                    !y &&
                    (0, a.jsx)(c.mzw, {
                        className: E.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            size: 18,
                            value: w,
                            onChange: () => P(!w),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: k.NW.string(k.t['5E9SBw'])
                            })
                        })
                    }),
                ('FREEFORM' === en || ('PROBLEM' === en && null != L)) &&
                    (0, a.jsxs)(c.mzw, {
                        className: E.footer,
                        direction: _.Z.Direction.HORIZONTAL,
                        children: [
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    'FREEFORM' === en ? (G(null), J('')) : z(null);
                                },
                                children: k.NW.string(k.t['13/7kZ'])
                            }),
                            (0, a.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                onClick: D,
                                children: k.NW.string(k.t.geKm7u)
                            })
                        ]
                    })
            ]
        })
    );
}
