n.d(t, { Z: () => S }), n(388685);
var a = n(951288),
    l = n(647438),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    s = n.n(o),
    u = n(755721),
    c = n(481060),
    d = n(493773),
    b = n(110924),
    f = n(600164),
    O = n(313201),
    v = n(572539),
    _ = n(63063),
    m = n(764920),
    E = n(531578),
    p = n(388032),
    g = n(862083);
let h = (e) =>
    s().shuffle(
        e.map((e) => {
            var t, n, a;
            return (
                (n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        problemOptions: s()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : []),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                n
            );
        }),
    );
function S(e) {
    var t;
    let n,
        i,
        {
            onMount: o,
            onSubmit: S,
            onClose: N,
            ratingHeader: j,
            ratingBody: y,
            ratingOptions: C,
            ratingEmojiKind: D,
            initialRating: x = null,
            categoriesHeader: L,
            optionsTree: I,
            hideDontShowAgainCheckbox: T,
            impression: M,
            transitionState: P,
        } = e,
        R = (0, b.Z)(I),
        [F, A] = l.useState(h(I));
    l.useEffect(() => {
        s().isEqual(R, I) || A(h(I));
    }, [I, R]);
    let k = (0, O.Dt)(),
        [w, Z] = l.useState(!1),
        [U, $] = l.useState(x),
        [B, H] = l.useState(null),
        [J, G] = l.useState(null),
        [V, K] = l.useState("");
    (0, d.ZP)(() => (null == o ? void 0 : o())),
        (0, d.zq)(() => {
            var e;
            S({
                rating: U,
                category: null != (e = null == B ? void 0 : B.value) ? e : null,
                problem: J,
                dontShowAgain: w,
                feedback: V,
            });
        });
    let z = !0,
        X = !1;
    return (
        null == U
            ? ((n = (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)("div", {
                          className: r()(g.problemInfo, g.ratingSelectorContainer),
                          children: (0, a.jsx)(m.Z, {
                              ratingOptions: C,
                              emojiKind: D,
                              selectedRating: U,
                              onChangeRating: function (e) {
                                  $(e), e === E.aZ.GOOD && N();
                              },
                          }),
                      }),
                      !T &&
                          (0, a.jsx)(c.mzw, {
                              className: g.footer,
                              direction: f.Z.Direction.HORIZONTAL,
                              children: (0, a.jsx)(u.$q, {
                                  type: u.M0.INVERTED,
                                  size: 18,
                                  value: w,
                                  onChange: () => Z(!w),
                                  children: (0, a.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      children: p.intl.string(p.t["5E9SBw"]),
                                  }),
                              }),
                          }),
                  ],
              })),
              (z = !1))
            : U !== E.aZ.GOOD && null == B
              ? ((n = (0, a.jsx)(c.hzk, {
                    className: g.__invalid_content,
                    children: (0, a.jsx)(c.xJW, {
                        title: L,
                        titleClassName: g.noTitleCase,
                        className: r()(g.problemInfo, g.presetList, { [g.marginBottom16]: T }),
                        children: (0, a.jsx)(v.Z, {
                            options: F,
                            onClick: H,
                            hideCaret: () => !0,
                        }),
                    }),
                })),
                (i = () => $(null)))
              : null != B && null == J
                ? ((n = (0, a.jsx)(c.hzk, {
                      className: g.__invalid_content,
                      children: (0, a.jsx)(c.xJW, {
                          title: B.problemsHeader,
                          titleClassName: g.noTitleCase,
                          className: r()(g.problemInfo, g.presetList, { [g.marginBottom16]: T }),
                          children: (0, a.jsx)(v.Z, {
                              options: B.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  G(e),
                                      null != B &&
                                          null != e &&
                                          (null == (t = B.freeformConfig) ? void 0 : t.value) !== e.value &&
                                          N();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = B.freeformConfig) ? void 0 : t.value) !== n;
                              },
                          }),
                      }),
                  })),
                  (i = () => H(null)))
                : null != B &&
                  null != J &&
                  (null == (t = B.freeformConfig) ? void 0 : t.value) === J.value &&
                  ((n = (0, a.jsx)(c.hzk, {
                      className: g.__invalid_content,
                      children: (0, a.jsx)(c.Kx8, {
                          label: p.intl.string(p.t.h95hcn),
                          helperText: B.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : p.intl.format(p.t.ybi2tL, { helpdeskURL: _.Z.getSubmitRequestURL() }),
                          value: V,
                          maxLength: E.iF,
                          onChange: K,
                      }),
                  })),
                  (i = () => {
                      K(""), G(null);
                  }),
                  (X = !0)),
        (0, a.jsxs)(c.Y0X, {
            impression: M,
            transitionState: P,
            className: g.modalRoot,
            "aria-labelledby": k,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: g.headerContainer,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: k,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: j,
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: g.ratingBody,
                            children: y,
                        }),
                    ],
                }),
                n,
                z &&
                    (0, a.jsxs)(c.mzw, {
                        className: g.footer,
                        direction: f.Z.Direction.HORIZONTAL,
                        children: [
                            (0, a.jsx)(c.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: p.intl.string(p.t["13/7kZ"]),
                                onClick: i,
                            }),
                            X &&
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: p.intl.string(p.t.geKm7u),
                                    onClick: N,
                                }),
                        ],
                    }),
            ],
        })
    );
}
