n.d(t, {
    L: () => N,
    Z: () => S
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    c = n.n(s),
    r = n(481060),
    u = n(493773),
    d = n(110924),
    m = n(600164),
    _ = n(313201),
    h = n(237617),
    g = n(572539),
    p = n(626135),
    x = n(63063),
    v = n(957115),
    b = n(531578),
    f = n(981631),
    j = n(388032),
    Z = n(718050);
let k = [
    {
        className: Z.emojiSad,
        rating: b.aZ.BAD,
        classNameSelected: Z.selected
    },
    {
        className: Z.emojiNeutral,
        rating: b.aZ.NEUTRAL,
        classNameSelected: Z.selected
    },
    {
        className: Z.emojiHappy,
        rating: b.aZ.GOOD,
        classNameSelected: Z.selected
    }
];
function N(e) {
    let { className: t, selectedRating: n, ratingConfigs: l, onChangeRating: o } = e;
    return (0, i.jsx)('div', {
        className: a()(Z.ratingsSelector, t),
        children: (null != l ? l : k).map((e) => {
            let { rating: t, className: l, classNameSelected: s } = e;
            return (0, i.jsx)(
                r.P3F,
                {
                    onClick: () => o(t),
                    'aria-label': t,
                    children: (0, i.jsx)('div', { className: a()(l, n === t ? s : null) })
                },
                t
            );
        })
    });
}
function L() {
    return (0, i.jsx)(r.Text, {
        className: Z.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: j.intl.format(j.t.ybi2tL, { helpdeskURL: x.Z.getSubmitRequestURL() })
    });
}
function S(e) {
    let { modalType: t, header: n, body: o, problemTitle: s, problems: x, transitionState: k, ratingConfigs: S, feedbackProblems: C = [], otherKey: y, ratingsSelectorClassName: D, hideDontShowCheckbox: I, startRating: O = null, hideHelpDeskLink: A = !1, onSubmit: E, onClose: w } = e,
        R = (0, d.Z)(x),
        [T, B] = l.useState(!1),
        [z, M] = l.useState(O),
        [P, F] = l.useState(null),
        [K, G] = l.useState(c().shuffle(x)),
        [H, U] = l.useState(''),
        V = (0, _.Dt)(),
        J = (0, h.Z)(z),
        X = (0, h.Z)(T),
        q = (0, h.Z)(P),
        W = (0, h.Z)(E),
        Q = (0, h.Z)(H),
        Y = null != P && C.includes(P),
        $ = null != z && z !== b.aZ.GOOD,
        ee = Y || !I;
    return (
        l.useEffect(() => {
            c().isEqual(R, x) || G((0, v.B)(x, y));
        }, [x, R, y]),
        (0, u.ZP)(
            () => (
                p.default.track(f.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    W.current({
                        rating: J.current,
                        problem: q.current,
                        dontShowAgain: X.current,
                        feedback: Q.current
                    });
                }
            )
        ),
        (0, i.jsxs)(r.Y0X, {
            transitionState: k,
            className: Z.__invalid_modalRoot,
            'aria-labelledby': V,
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !1,
                    className: Z.headerContainer,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: Z.ratingBody,
                            children: o
                        }),
                        Y
                            ? null
                            : (0, i.jsx)(N, {
                                  className: a()(Z.emojis, D),
                                  selectedRating: z,
                                  onChangeRating: function (e) {
                                      M(e), e === b.aZ.GOOD && w();
                                  },
                                  ratingConfigs: S
                              })
                    ]
                }),
                (Y || $) &&
                    (0, i.jsxs)(r.hzk, {
                        className: Z.__invalid_content,
                        children: [
                            $ && !Y
                                ? (0, i.jsx)(r.xJW, {
                                      title: s,
                                      className: Z.problemInfo,
                                      children: (0, i.jsx)(g.Z, {
                                          options: K,
                                          onClick: function (e) {
                                              let { value: t } = e;
                                              F(t), C.includes(t) || w();
                                          },
                                          hideCaret: (e) => {
                                              let { value: t } = e;
                                              return !C.includes(t);
                                          }
                                      })
                                  })
                                : null,
                            Y
                                ? (0, i.jsxs)(r.xJW, {
                                      title: j.intl.string(j.t.h95hcn),
                                      className: Z.problemInfo,
                                      children: [
                                          (0, i.jsx)(r.Kx8, {
                                              value: H,
                                              maxLength: b.iF,
                                              onChange: U
                                          }),
                                          !A && (0, i.jsx)(L, {})
                                      ]
                                  })
                                : null
                        ]
                    }),
                ee &&
                    (0, i.jsx)(r.mzw, {
                        className: Z.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: Y
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(r.zxk, {
                                          size: r.zxk.Sizes.SMALL,
                                          look: r.zxk.Looks.LINK,
                                          color: r.zxk.Colors.PRIMARY,
                                          onClick: () => {
                                              F(null), U('');
                                          },
                                          children: j.intl.string(j.t['13/7kZ'])
                                      }),
                                      (0, i.jsx)(r.zxk, {
                                          size: r.zxk.Sizes.SMALL,
                                          onClick: w,
                                          children: j.intl.string(j.t.geKm7u)
                                      })
                                  ]
                              })
                            : (0, i.jsx)(r.XZJ, {
                                  type: r.XZJ.Types.INVERTED,
                                  size: 18,
                                  value: T,
                                  onChange: () => B(!T),
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: j.intl.string(j.t['5E9SBw'])
                                  })
                              })
                    })
            ]
        })
    );
}
