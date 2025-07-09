(n.d(t, { Z: () => y }), n(388685));
var o = n(255367),
    i = n(73800),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    s = n.n(a),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    m = n(600164),
    b = n(313201),
    p = n(572539),
    _ = n(63063),
    f = n(764920),
    g = n(531578),
    h = n(388032),
    O = n(333575);
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
        r,
        { onMount: a, onSubmit: y, onClose: x, ratingHeader: j, ratingBody: w, ratingOptions: C, ratingEmojiKind: E, initialRating: k = null, categoriesHeader: S, optionsTree: P, hideDontShowAgainCheckbox: D, impression: L, transitionState: N } = e,
        R = (0, d.Z)(P),
        [I, Z] = i.useState(v(P));
    i.useEffect(() => {
        s().isEqual(R, P) || Z(v(P));
    }, [P, R]);
    let T = (0, b.Dt)(),
        [F, B] = i.useState(!1),
        [M, A] = i.useState(k),
        [H, V] = i.useState(null),
        [U, z] = i.useState(null),
        [J, X] = i.useState('');
    ((0, u.ZP)(a),
        (0, u.zq)(() => {
            var e;
            y({
                rating: M,
                category: null != (e = null == H ? void 0 : H.value) ? e : null,
                problem: U,
                dontShowAgain: F,
                feedback: J
            });
        }));
    let K = !0,
        W = !1;
    return (
        null == M
            ? ((n = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(c.xJW, {
                          className: l()(O.problemInfo, O.ratingSelectorContainer),
                          children: (0, o.jsx)(f.Z, {
                              ratingOptions: C,
                              emojiKind: E,
                              selectedRating: M,
                              onChangeRating: function (e) {
                                  (A(e), e === g.aZ.GOOD && x());
                              }
                          })
                      }),
                      !D &&
                          (0, o.jsx)(c.mzw, {
                              className: O.footer,
                              direction: m.Z.Direction.HORIZONTAL,
                              children: (0, o.jsx)(c.XZJ, {
                                  type: c.XZJ.Types.INVERTED,
                                  size: 18,
                                  value: F,
                                  onChange: () => B(!F),
                                  children: (0, o.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: h.intl.string(h.t['5E9SBw'])
                                  })
                              })
                          })
                  ]
              })),
              (K = !1))
            : M !== g.aZ.GOOD && null == H
              ? ((n = (0, o.jsx)(c.hzk, {
                    className: O.__invalid_content,
                    children: (0, o.jsx)(c.xJW, {
                        title: S,
                        titleClassName: O.noTitleCase,
                        className: l()(O.problemInfo, O.presetList, { [O.marginBottom16]: D }),
                        children: (0, o.jsx)(p.Z, {
                            options: I,
                            onClick: V,
                            hideCaret: () => !0
                        })
                    })
                })),
                (r = () => A(null)))
              : null != H && null == U
                ? ((n = (0, o.jsx)(c.hzk, {
                      className: O.__invalid_content,
                      children: (0, o.jsx)(c.xJW, {
                          title: H.problemsHeader,
                          titleClassName: O.noTitleCase,
                          className: l()(O.problemInfo, O.presetList, { [O.marginBottom16]: D }),
                          children: (0, o.jsx)(p.Z, {
                              options: H.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  (z(e), null != H && null != e && (null == (t = H.freeformConfig) ? void 0 : t.value) !== e.value && x());
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = H.freeformConfig) ? void 0 : t.value) !== n;
                              }
                          })
                      })
                  })),
                  (r = () => V(null)))
                : null != H &&
                  null != U &&
                  (null == (t = H.freeformConfig) ? void 0 : t.value) === U.value &&
                  ((n = (0, o.jsx)(c.hzk, {
                      className: O.__invalid_content,
                      children: (0, o.jsxs)(c.xJW, {
                          title: h.intl.string(h.t.h95hcn),
                          titleClassName: O.noTitleCase,
                          className: O.problemInfo,
                          children: [
                              (0, o.jsx)(c.Kx8, {
                                  value: J,
                                  maxLength: g.iF,
                                  onChange: X
                              }),
                              !H.freeformConfig.hideHelpdeskLink &&
                                  (0, o.jsx)(c.Text, {
                                      className: O.helpdeskLink,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: h.intl.format(h.t.ybi2tL, { helpdeskURL: _.Z.getSubmitRequestURL() })
                                  })
                          ]
                      })
                  })),
                  (r = () => {
                      (X(''), z(null));
                  }),
                  (W = !0)),
        (0, o.jsxs)(c.Y0X, {
            impression: L,
            transitionState: N,
            className: O.modalRoot,
            'aria-labelledby': T,
            parentComponent: 'FeedbackModalV2',
            children: [
                (0, o.jsxs)(c.xBx, {
                    separator: !1,
                    className: O.headerContainer,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            id: T,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: j
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: O.ratingBody,
                            children: w
                        })
                    ]
                }),
                n,
                K &&
                    (0, o.jsxs)(c.mzw, {
                        className: O.footer,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(c.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: h.intl.string(h.t['13/7kZ']),
                                onClick: r
                            }),
                            W &&
                                (0, o.jsx)(c.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: h.intl.string(h.t.geKm7u),
                                    onClick: x
                                })
                        ]
                    })
            ]
        })
    );
}
