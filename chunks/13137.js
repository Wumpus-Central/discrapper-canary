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
    v = n(333575);
let O = (e) =>
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
        { onMount: a, onSubmit: y, onClose: j, ratingHeader: x, ratingBody: w, ratingOptions: C, ratingEmojiKind: E, initialRating: k = null, categoriesHeader: S, optionsTree: P, hideDontShowAgainCheckbox: D, impression: L, transitionState: R } = e,
        N = (0, d.Z)(P),
        [F, I] = i.useState(O(P));
    i.useEffect(() => {
        s().isEqual(N, P) || I(O(P));
    }, [P, N]);
    let Z = (0, b.Dt)(),
        [T, A] = i.useState(!1),
        [B, M] = i.useState(k),
        [V, H] = i.useState(null),
        [U, K] = i.useState(null),
        [z, J] = i.useState('');
    ((0, u.ZP)(a),
        (0, u.zq)(() => {
            var e;
            y({
                rating: B,
                category: null != (e = null == V ? void 0 : V.value) ? e : null,
                problem: U,
                dontShowAgain: T,
                feedback: z
            });
        }));
    let X = !0,
        W = !1;
    return (
        null == B
            ? ((n = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(c.xJW, {
                          className: l()(v.problemInfo, v.ratingSelectorContainer),
                          children: (0, o.jsx)(f.Z, {
                              ratingOptions: C,
                              emojiKind: E,
                              selectedRating: B,
                              onChangeRating: function (e) {
                                  (M(e), e === g.aZ.GOOD && j());
                              }
                          })
                      }),
                      !D &&
                          (0, o.jsx)(c.mzw, {
                              className: v.footer,
                              direction: m.Z.Direction.HORIZONTAL,
                              children: (0, o.jsx)(c.XZJ, {
                                  type: c.XZJ.Types.INVERTED,
                                  size: 18,
                                  value: T,
                                  onChange: () => A(!T),
                                  children: (0, o.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: h.intl.string(h.t['5E9SBw'])
                                  })
                              })
                          })
                  ]
              })),
              (X = !1))
            : B !== g.aZ.GOOD && null == V
              ? ((n = (0, o.jsx)(c.hzk, {
                    className: v.__invalid_content,
                    children: (0, o.jsx)(c.xJW, {
                        title: S,
                        titleClassName: v.noTitleCase,
                        className: l()(v.problemInfo, v.presetList, { [v.marginBottom16]: D }),
                        children: (0, o.jsx)(p.Z, {
                            options: F,
                            onClick: H,
                            hideCaret: () => !0
                        })
                    })
                })),
                (r = () => M(null)))
              : null != V && null == U
                ? ((n = (0, o.jsx)(c.hzk, {
                      className: v.__invalid_content,
                      children: (0, o.jsx)(c.xJW, {
                          title: V.problemsHeader,
                          titleClassName: v.noTitleCase,
                          className: l()(v.problemInfo, v.presetList, { [v.marginBottom16]: D }),
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
                  (r = () => H(null)))
                : null != V &&
                  null != U &&
                  (null == (t = V.freeformConfig) ? void 0 : t.value) === U.value &&
                  ((n = (0, o.jsx)(c.hzk, {
                      className: v.__invalid_content,
                      children: (0, o.jsxs)(c.xJW, {
                          title: h.intl.string(h.t.h95hcn),
                          titleClassName: v.noTitleCase,
                          className: v.problemInfo,
                          children: [
                              (0, o.jsx)(c.Kx8, {
                                  value: z,
                                  maxLength: g.iF,
                                  onChange: J
                              }),
                              !V.freeformConfig.hideHelpdeskLink &&
                                  (0, o.jsx)(c.Text, {
                                      className: v.helpdeskLink,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: h.intl.format(h.t.ybi2tL, { helpdeskURL: _.Z.getSubmitRequestURL() })
                                  })
                          ]
                      })
                  })),
                  (r = () => {
                      (J(''), K(null));
                  }),
                  (W = !0)),
        (0, o.jsxs)(c.Y0X, {
            impression: L,
            transitionState: R,
            className: v.modalRoot,
            'aria-labelledby': Z,
            parentComponent: 'FeedbackModalV2',
            children: [
                (0, o.jsxs)(c.xBx, {
                    separator: !1,
                    className: v.headerContainer,
                    children: [
                        (0, o.jsx)(c.X6q, {
                            id: Z,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: x
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: v.ratingBody,
                            children: w
                        })
                    ]
                }),
                n,
                X &&
                    (0, o.jsxs)(c.mzw, {
                        className: v.footer,
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
                                    onClick: j
                                })
                        ]
                    })
            ]
        })
    );
}
