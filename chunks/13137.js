o.d(t, { Z: () => y }), o(388685);
var n = o(255367),
    r = o(73800),
    i = o(120356),
    l = o.n(i),
    a = o(392711),
    s = o.n(a),
    c = o(481060),
    u = o(493773),
    d = o(110924),
    b = o(600164),
    m = o(313201),
    p = o(572539),
    _ = o(63063),
    f = o(764920),
    h = o(531578),
    g = o(388032),
    O = o(333575);
let v = (e) =>
    s().shuffle(
        e.map((e) => {
            var t, o, n;
            return (
                (o = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(o);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(o).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = o[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n =
                    {
                        problemOptions: s()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : [])
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var o = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              o.push.apply(o, n);
                          }
                          return o;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                o
            );
        })
    );
function y(e) {
    var t;
    let o,
        i,
        { onMount: a, onSubmit: y, onClose: x, ratingHeader: j, ratingBody: w, ratingOptions: C, ratingEmojiKind: k, initialRating: S = null, categoriesHeader: E, optionsTree: P, hideDontShowAgainCheckbox: D, impression: L, transitionState: R } = e,
        I = (0, d.Z)(P),
        [N, Z] = r.useState(v(P));
    r.useEffect(() => {
        s().isEqual(I, P) || Z(v(P));
    }, [P, I]);
    let F = (0, m.Dt)(),
        [A, M] = r.useState(!1),
        [T, B] = r.useState(S),
        [H, V] = r.useState(null),
        [z, U] = r.useState(null),
        [J, X] = r.useState('');
    (0, u.ZP)(a),
        (0, u.zq)(() => {
            var e;
            y({
                rating: T,
                category: null != (e = null == H ? void 0 : H.value) ? e : null,
                problem: z,
                dontShowAgain: A,
                feedback: J
            });
        });
    let K = !0,
        W = !1;
    return (
        null == T
            ? ((o = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(c.xJW, {
                          className: l()(O.problemInfo, O.ratingSelectorContainer),
                          children: (0, n.jsx)(f.Z, {
                              ratingOptions: C,
                              emojiKind: k,
                              selectedRating: T,
                              onChangeRating: function (e) {
                                  B(e), e === h.aZ.GOOD && x();
                              }
                          })
                      }),
                      !D &&
                          (0, n.jsx)(c.mzw, {
                              className: O.footer,
                              direction: b.Z.Direction.HORIZONTAL,
                              children: (0, n.jsx)(c.XZJ, {
                                  type: c.XZJ.Types.INVERTED,
                                  size: 18,
                                  value: A,
                                  onChange: () => M(!A),
                                  children: (0, n.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: g.intl.string(g.t['5E9SBw'])
                                  })
                              })
                          })
                  ]
              })),
              (K = !1))
            : T !== h.aZ.GOOD && null == H
              ? ((o = (0, n.jsx)(c.hzk, {
                    className: O.__invalid_content,
                    children: (0, n.jsx)(c.xJW, {
                        title: E,
                        className: l()(O.problemInfo, O.presetList, { [O.marginBottom16]: D }),
                        children: (0, n.jsx)(p.Z, {
                            options: N,
                            onClick: V,
                            hideCaret: () => !0
                        })
                    })
                })),
                (i = () => B(null)))
              : null != H && null == z
                ? ((o = (0, n.jsx)(c.hzk, {
                      className: O.__invalid_content,
                      children: (0, n.jsx)(c.xJW, {
                          title: H.problemsHeader,
                          className: l()(O.problemInfo, O.presetList, { [O.marginBottom16]: D }),
                          children: (0, n.jsx)(p.Z, {
                              options: H.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  U(e), null != H && null != e && (null == (t = H.freeformConfig) ? void 0 : t.value) !== e.value && x();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: o } = e;
                                  return (null == (t = H.freeformConfig) ? void 0 : t.value) !== o;
                              }
                          })
                      })
                  })),
                  (i = () => V(null)))
                : null != H &&
                  null != z &&
                  (null == (t = H.freeformConfig) ? void 0 : t.value) === z.value &&
                  ((o = (0, n.jsx)(c.hzk, {
                      className: O.__invalid_content,
                      children: (0, n.jsxs)(c.xJW, {
                          title: g.intl.string(g.t.h95hcn),
                          className: O.problemInfo,
                          children: [
                              (0, n.jsx)(c.Kx8, {
                                  value: J,
                                  maxLength: h.iF,
                                  onChange: X
                              }),
                              !H.freeformConfig.hideHelpdeskLink &&
                                  (0, n.jsx)(c.Text, {
                                      className: O.helpdeskLink,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: g.intl.format(g.t.ybi2tL, { helpdeskURL: _.Z.getSubmitRequestURL() })
                                  })
                          ]
                      })
                  })),
                  (i = () => {
                      X(''), U(null);
                  }),
                  (W = !0)),
        (0, n.jsxs)(c.Y0X, {
            impression: L,
            transitionState: R,
            className: O.modalRoot,
            'aria-labelledby': F,
            children: [
                (0, n.jsxs)(c.xBx, {
                    separator: !1,
                    className: O.headerContainer,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            id: F,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: j
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: O.ratingBody,
                            children: w
                        })
                    ]
                }),
                o,
                K &&
                    (0, n.jsxs)(c.mzw, {
                        className: O.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, n.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: i,
                                children: g.intl.string(g.t['13/7kZ'])
                            }),
                            W &&
                                (0, n.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: x,
                                    children: g.intl.string(g.t.geKm7u)
                                })
                        ]
                    })
            ]
        })
    );
}
