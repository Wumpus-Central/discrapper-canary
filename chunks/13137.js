(n.d(t, { Z: () => y }), n(388685));
var o = n(255367),
    r = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(392711),
    s = n.n(a),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    b = n(600164),
    m = n(313201),
    p = n(572539),
    f = n(63063),
    _ = n(764920),
    O = n(531578),
    g = n(388032),
    h = n(333575);
let v = (e) =>
    s().shuffle(
        e.map((e) => {
            var t, n, o;
            return (
                (n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (o = o.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            o.forEach(function (t) {
                                var o;
                                ((o = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: o,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = o));
                            }));
                    }
                    return e;
                })({}, e)),
                (o = o =
                    {
                        problemOptions: s()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : [])
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var o = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, o);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                n
            );
        })
    );
function y(e) {
    var t;
    let n,
        i,
        { onMount: a, onSubmit: y, onClose: j, ratingHeader: w, ratingBody: x, ratingOptions: C, ratingEmojiKind: E, initialRating: P = null, categoriesHeader: k, optionsTree: S, hideDontShowAgainCheckbox: D, impression: L, transitionState: R } = e,
        N = (0, d.Z)(S),
        [F, I] = r.useState(v(S));
    r.useEffect(() => {
        s().isEqual(N, S) || I(v(S));
    }, [S, N]);
    let Z = (0, m.Dt)(),
        [T, B] = r.useState(!1),
        [A, M] = r.useState(P),
        [V, H] = r.useState(null),
        [U, K] = r.useState(null),
        [z, J] = r.useState('');
    ((0, u.ZP)(() => (null == a ? void 0 : a())),
        (0, u.zq)(() => {
            var e;
            y({
                rating: A,
                category: null != (e = null == V ? void 0 : V.value) ? e : null,
                problem: U,
                dontShowAgain: T,
                feedback: z
            });
        }));
    let X = !0,
        W = !1;
    return (
        null == A
            ? ((n = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(c.xJW, {
                          className: l()(h.problemInfo, h.ratingSelectorContainer),
                          children: (0, o.jsx)(_.Z, {
                              ratingOptions: C,
                              emojiKind: E,
                              selectedRating: A,
                              onChangeRating: function (e) {
                                  (M(e), e === O.aZ.GOOD && j());
                              }
                          })
                      }),
                      !D &&
                          (0, o.jsx)(c.mzw, {
                              className: h.footer,
                              direction: b.Z.Direction.HORIZONTAL,
                              children: (0, o.jsx)(c.XZJ, {
                                  type: c.XZJ.Types.INVERTED,
                                  size: 18,
                                  value: T,
                                  onChange: () => B(!T),
                                  children: (0, o.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: g.intl.string(g.t['5E9SBw'])
                                  })
                              })
                          })
                  ]
              })),
              (X = !1))
            : A !== O.aZ.GOOD && null == V
              ? ((n = (0, o.jsx)(c.hzk, {
                    className: h.__invalid_content,
                    children: (0, o.jsx)(c.xJW, {
                        title: k,
                        titleClassName: h.noTitleCase,
                        className: l()(h.problemInfo, h.presetList, { [h.marginBottom16]: D }),
                        children: (0, o.jsx)(p.Z, {
                            options: F,
                            onClick: H,
                            hideCaret: () => !0
                        })
                    })
                })),
                (i = () => M(null)))
              : null != V && null == U
                ? ((n = (0, o.jsx)(c.hzk, {
                      className: h.__invalid_content,
                      children: (0, o.jsx)(c.xJW, {
                          title: V.problemsHeader,
                          titleClassName: h.noTitleCase,
                          className: l()(h.problemInfo, h.presetList, { [h.marginBottom16]: D }),
                          children: (0, o.jsx)(p.Z, {
                              options: V.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  (K(e), null != V && null != e && (null == (t = V.freeformConfig) ? void 0 : t.value) !== e.value && j());
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = V.freeformConfig) ? void 0 : t.value) !== n;
                              }
                          })
                      })
                  })),
                  (i = () => H(null)))
                : null != V &&
                  null != U &&
                  (null == (t = V.freeformConfig) ? void 0 : t.value) === U.value &&
                  ((n = (0, o.jsx)(c.hzk, {
                      className: h.__invalid_content,
                      children: (0, o.jsxs)(c.xJW, {
                          title: g.intl.string(g.t.h95hcn),
                          titleClassName: h.noTitleCase,
                          className: h.problemInfo,
                          children: [
                              (0, o.jsx)(c.Kx8, {
                                  value: z,
                                  maxLength: O.iF,
                                  onChange: J
                              }),
                              !V.freeformConfig.hideHelpdeskLink &&
                                  (0, o.jsx)(c.Text, {
                                      className: h.helpdeskLink,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: g.intl.format(g.t.ybi2tL, { helpdeskURL: f.Z.getSubmitRequestURL() })
                                  })
                          ]
                      })
                  })),
                  (i = () => {
                      (J(''), K(null));
                  }),
                  (W = !0)),
        (0, o.jsxs)(c.Y0X, {
            impression: L,
            transitionState: R,
            className: h.modalRoot,
            'aria-labelledby': Z,
            parentComponent: 'FeedbackModalV2',
            children: [
                (0, o.jsxs)(c.xBx, {
                    separator: !1,
                    className: h.headerContainer,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            id: Z,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: w
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: h.ratingBody,
                            children: x
                        })
                    ]
                }),
                n,
                X &&
                    (0, o.jsxs)(c.mzw, {
                        className: h.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(c.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: g.intl.string(g.t['13/7kZ']),
                                onClick: i
                            }),
                            W &&
                                (0, o.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: g.intl.string(g.t.geKm7u),
                                    onClick: j
                                })
                        ]
                    })
            ]
        })
    );
}
