(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    c = n(481060),
    u = n(493773),
    m = n(110924),
    b = n(600164),
    d = n(313201),
    f = n(572539),
    p = n(63063),
    _ = n(764920),
    O = n(531578),
    g = n(388032),
    y = n(333575);
let h = (e) =>
    s().shuffle(
        e.map((e) => {
            var t, n, r;
            return (
                (n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        problemOptions: s()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : [])
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n
            );
        })
    );
function v(e) {
    var t;
    let n,
        i,
        { onMount: a, onSubmit: v, onClose: j, ratingHeader: x, ratingBody: S, ratingOptions: w, ratingEmojiKind: E, initialRating: k = null, categoriesHeader: C, optionsTree: P, hideDontShowAgainCheckbox: R, impression: T, transitionState: N } = e,
        L = (0, m.Z)(P),
        [F, D] = l.useState(h(P));
    l.useEffect(() => {
        s().isEqual(L, P) || D(h(P));
    }, [P, L]);
    let I = (0, d.Dt)(),
        [Z, B] = l.useState(!1),
        [M, H] = l.useState(k),
        [A, V] = l.useState(null),
        [X, z] = l.useState(null),
        [Y, K] = l.useState('');
    ((0, u.ZP)(() => (null == a ? void 0 : a())),
        (0, u.zq)(() => {
            var e;
            v({
                rating: M,
                category: null != (e = null == A ? void 0 : A.value) ? e : null,
                problem: X,
                dontShowAgain: Z,
                feedback: Y
            });
        }));
    let U = !0,
        G = !1;
    return (
        null == M
            ? ((n = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.xJW, {
                          className: o()(y.problemInfo, y.ratingSelectorContainer),
                          children: (0, r.jsx)(_.Z, {
                              ratingOptions: w,
                              emojiKind: E,
                              selectedRating: M,
                              onChangeRating: function (e) {
                                  (H(e), e === O.aZ.GOOD && j());
                              }
                          })
                      }),
                      !R &&
                          (0, r.jsx)(c.mzw, {
                              className: y.footer,
                              direction: b.Z.Direction.HORIZONTAL,
                              children: (0, r.jsx)(c.XZJ, {
                                  type: c.XZJ.Types.INVERTED,
                                  size: 18,
                                  value: Z,
                                  onChange: () => B(!Z),
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: g.intl.string(g.t['5E9SBw'])
                                  })
                              })
                          })
                  ]
              })),
              (U = !1))
            : M !== O.aZ.GOOD && null == A
              ? ((n = (0, r.jsx)(c.hzk, {
                    className: y.__invalid_content,
                    children: (0, r.jsx)(c.xJW, {
                        title: C,
                        titleClassName: y.noTitleCase,
                        className: o()(y.problemInfo, y.presetList, { [y.marginBottom16]: R }),
                        children: (0, r.jsx)(f.Z, {
                            options: F,
                            onClick: V,
                            hideCaret: () => !0
                        })
                    })
                })),
                (i = () => H(null)))
              : null != A && null == X
                ? ((n = (0, r.jsx)(c.hzk, {
                      className: y.__invalid_content,
                      children: (0, r.jsx)(c.xJW, {
                          title: A.problemsHeader,
                          titleClassName: y.noTitleCase,
                          className: o()(y.problemInfo, y.presetList, { [y.marginBottom16]: R }),
                          children: (0, r.jsx)(f.Z, {
                              options: A.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  (z(e), null != A && null != e && (null == (t = A.freeformConfig) ? void 0 : t.value) !== e.value && j());
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = A.freeformConfig) ? void 0 : t.value) !== n;
                              }
                          })
                      })
                  })),
                  (i = () => V(null)))
                : null != A &&
                  null != X &&
                  (null == (t = A.freeformConfig) ? void 0 : t.value) === X.value &&
                  ((n = (0, r.jsx)(c.hzk, {
                      className: y.__invalid_content,
                      children: (0, r.jsxs)(c.xJW, {
                          title: g.intl.string(g.t.h95hcn),
                          titleClassName: y.noTitleCase,
                          className: y.problemInfo,
                          children: [
                              (0, r.jsx)(c.Kx8, {
                                  value: Y,
                                  maxLength: O.iF,
                                  onChange: K
                              }),
                              !A.freeformConfig.hideHelpdeskLink &&
                                  (0, r.jsx)(c.Text, {
                                      className: y.helpdeskLink,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: g.intl.format(g.t.ybi2tL, { helpdeskURL: p.Z.getSubmitRequestURL() })
                                  })
                          ]
                      })
                  })),
                  (i = () => {
                      (K(''), z(null));
                  }),
                  (G = !0)),
        (0, r.jsxs)(c.Y0X, {
            impression: T,
            transitionState: N,
            className: y.modalRoot,
            'aria-labelledby': I,
            parentComponent: 'FeedbackModalV2',
            children: [
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: y.headerContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: I,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: x
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: y.ratingBody,
                            children: S
                        })
                    ]
                }),
                n,
                U &&
                    (0, r.jsxs)(c.mzw, {
                        className: y.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: g.intl.string(g.t['13/7kZ']),
                                onClick: i
                            }),
                            G &&
                                (0, r.jsx)(c.zxk, {
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
