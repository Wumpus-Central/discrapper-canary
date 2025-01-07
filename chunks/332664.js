n.d(t, {
    L: function () {
        return O;
    },
    Z: function () {
        return k;
    }
}),
    n(47120);
var o = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    r = n.n(s),
    u = n(481060),
    c = n(493773),
    d = n(110924),
    m = n(600164),
    b = n(313201),
    h = n(237617),
    _ = n(572539),
    g = n(626135),
    p = n(63063),
    f = n(957115),
    v = n(531578),
    x = n(981631),
    j = n(388032),
    C = n(720816);
let Z = [
    {
        className: C.emojiSad,
        rating: v.aZ.BAD,
        classNameSelected: C.selected
    },
    {
        className: C.emojiNeutral,
        rating: v.aZ.NEUTRAL,
        classNameSelected: C.selected
    },
    {
        className: C.emojiHappy,
        rating: v.aZ.GOOD,
        classNameSelected: C.selected
    }
];
function O(e) {
    let { className: t, selectedRating: n, ratingConfigs: i, onChangeRating: l } = e;
    return (0, o.jsx)(m.Z, {
        justify: m.Z.Justify.BETWEEN,
        align: m.Z.Align.CENTER,
        className: a()(C.ratingsSelector, t),
        children: (null != i ? i : Z).map((e) => {
            let { rating: t, className: i, classNameSelected: s } = e;
            return (0, o.jsx)(
                u.Clickable,
                {
                    onClick: () => l(t),
                    'aria-label': t,
                    children: (0, o.jsx)('div', { className: a()(i, n === t ? s : null) })
                },
                t
            );
        })
    });
}
function N() {
    return (0, o.jsx)(u.Text, {
        className: C.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: j.intl.format(j.t.ybi2tL, { helpdeskURL: p.Z.getSubmitRequestURL() })
    });
}
function k(e) {
    let { modalType: t, header: n, body: l, problemTitle: s, problems: p, transitionState: Z, ratingConfigs: k, feedbackProblems: E = [], otherKey: L, ratingsSelectorClassName: S, hideDontShowCheckbox: A, startRating: I = null, hideHelpDeskLink: D = !1, onSubmit: y, onClose: B } = e,
        R = (0, d.Z)(p),
        [T, w] = i.useState(!1),
        [M, U] = i.useState(I),
        [H, F] = i.useState(null),
        [K, G] = i.useState(r().shuffle(p)),
        [P, V] = i.useState(''),
        z = (0, b.Dt)(),
        q = (0, h.Z)(M),
        W = (0, h.Z)(T),
        J = (0, h.Z)(H),
        Q = (0, h.Z)(y),
        X = (0, h.Z)(P),
        Y = null != H && E.includes(H);
    return (
        i.useEffect(() => {
            !r().isEqual(R, p) && G((0, f.B)(p, L));
        }, [p, R, L]),
        (0, c.Z)(
            () => (
                g.default.track(x.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    Q.current({
                        rating: q.current,
                        problem: J.current,
                        dontShowAgain: W.current,
                        feedback: X.current
                    });
                }
            )
        ),
        (0, o.jsxs)(u.ModalRoot, {
            transitionState: Z,
            className: C.__invalid_modalRoot,
            'aria-labelledby': z,
            children: [
                (0, o.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: C.headerContainer,
                    children: [
                        (0, o.jsx)(u.Heading, {
                            id: z,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: C.ratingBody,
                            children: l
                        }),
                        Y
                            ? null
                            : (0, o.jsx)(O, {
                                  className: a()(C.emojis, S),
                                  selectedRating: M,
                                  onChangeRating: function (e) {
                                      U(e), e === v.aZ.GOOD && B();
                                  },
                                  ratingConfigs: k
                              })
                    ]
                }),
                (0, o.jsxs)(u.ModalContent, {
                    className: C.__invalid_content,
                    children: [
                        null == M || M === v.aZ.GOOD || Y
                            ? null
                            : (0, o.jsx)(u.FormItem, {
                                  title: s,
                                  className: C.problemInfo,
                                  children: (0, o.jsx)(_.Z, {
                                      options: K,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          F(t), !E.includes(t) && B();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !E.includes(t);
                                      }
                                  })
                              }),
                        Y
                            ? (0, o.jsxs)(u.FormItem, {
                                  title: j.intl.string(j.t.h95hcn),
                                  className: C.problemInfo,
                                  children: [
                                      (0, o.jsx)(u.TextArea, {
                                          value: P,
                                          maxLength: v.iF,
                                          onChange: V
                                      }),
                                      !D && (0, o.jsx)(N, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (Y || !A) &&
                    (0, o.jsx)(u.ModalFooter, {
                        className: C.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: Y
                            ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              F(null), V('');
                                          },
                                          children: j.intl.string(j.t['13/7kZ'])
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: B,
                                          children: j.intl.string(j.t.geKm7u)
                                      })
                                  ]
                              })
                            : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: T,
                                          onChange: () => w(!T),
                                          children: (0, o.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: j.intl.string(j.t['5E9SBw'])
                                          })
                                      }),
                                      null != M &&
                                          M !== v.aZ.GOOD &&
                                          (0, o.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: B,
                                              children: j.intl.string(j.t['5WxrcX'])
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
