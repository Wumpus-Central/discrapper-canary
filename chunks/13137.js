n.d(t, { Z: () => h }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    s = n.n(o),
    u = n(481060),
    d = n(493773),
    c = n(110924),
    b = n(600164),
    f = n(313201),
    O = n(572539),
    v = n(63063),
    _ = n(764920),
    m = n(531578),
    E = n(388032),
    p = n(50312);
let g = (e) =>
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
function h(e) {
    var t;
    let n,
        i,
        {
            onMount: o,
            onSubmit: h,
            onClose: S,
            ratingHeader: j,
            ratingBody: y,
            ratingOptions: N,
            ratingEmojiKind: C,
            initialRating: D = null,
            categoriesHeader: x,
            optionsTree: L,
            hideDontShowAgainCheckbox: I,
            impression: P,
            transitionState: T,
        } = e,
        F = (0, c.Z)(L),
        [R, M] = l.useState(g(L));
    l.useEffect(() => {
        s().isEqual(F, L) || M(g(L));
    }, [L, F]);
    let A = (0, f.Dt)(),
        [k, w] = l.useState(!1),
        [U, Z] = l.useState(D),
        [$, H] = l.useState(null),
        [B, G] = l.useState(null),
        [J, K] = l.useState("");
    (0, d.ZP)(() => (null == o ? void 0 : o())),
        (0, d.zq)(() => {
            var e;
            h({
                rating: U,
                category: null != (e = null == $ ? void 0 : $.value) ? e : null,
                problem: B,
                dontShowAgain: k,
                feedback: J,
            });
        });
    let V = !0,
        z = !1;
    return (
        null == U
            ? ((n = (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)("div", {
                          className: r()(p.problemInfo, p.ratingSelectorContainer),
                          children: (0, a.jsx)(_.Z, {
                              ratingOptions: N,
                              emojiKind: C,
                              selectedRating: U,
                              onChangeRating: function (e) {
                                  Z(e), e === m.aZ.GOOD && S();
                              },
                          }),
                      }),
                      !I &&
                          (0, a.jsx)(u.mzw, {
                              className: p.footer,
                              direction: b.Z.Direction.HORIZONTAL,
                              children: (0, a.jsx)(u.Checkbox, {
                                  checked: k,
                                  onChange: () => w(!k),
                                  label: E.intl.string(E.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (V = !1))
            : U !== m.aZ.GOOD && null == $
              ? ((n = (0, a.jsx)(u.hzk, {
                    children: (0, a.jsx)(u.gNt, {
                        label: x,
                        children: (0, a.jsx)(O.Z, {
                            options: R,
                            onClick: H,
                            hideCaret: () => !0,
                        }),
                    }),
                })),
                (i = () => Z(null)))
              : null != $ && null == B
                ? ((n = (0, a.jsx)(u.hzk, {
                      children: (0, a.jsx)(u.gNt, {
                          label: $.problemsHeader,
                          children: (0, a.jsx)(O.Z, {
                              options: $.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  G(e),
                                      null != $ &&
                                          null != e &&
                                          (null == (t = $.freeformConfig) ? void 0 : t.value) !== e.value &&
                                          S();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = $.freeformConfig) ? void 0 : t.value) !== n;
                              },
                          }),
                      }),
                  })),
                  (i = () => H(null)))
                : null != $ &&
                  null != B &&
                  (null == (t = $.freeformConfig) ? void 0 : t.value) === B.value &&
                  ((n = (0, a.jsx)(u.hzk, {
                      children: (0, a.jsx)(u.Kx8, {
                          label: E.intl.string(E.t.h95hcn),
                          helperText: $.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : E.intl.format(E.t.ybi2tD, { helpdeskURL: v.Z.getSubmitRequestURL() }),
                          value: J,
                          maxLength: m.iF,
                          onChange: K,
                      }),
                  })),
                  (i = () => {
                      K(""), G(null);
                  }),
                  (z = !0)),
        (0, a.jsxs)(u.Y0X, {
            impression: P,
            transitionState: T,
            className: p.modalRoot,
            "aria-labelledby": A,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, a.jsxs)(u.xBx, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, a.jsx)(u.Heading, {
                            id: A,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: j,
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: p.ratingBody,
                            children: y,
                        }),
                    ],
                }),
                n,
                V &&
                    (0, a.jsxs)(u.mzw, {
                        className: p.footer,
                        direction: b.Z.Direction.HORIZONTAL,
                        children: [
                            (0, a.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(E.t["13/7kX"]),
                                onClick: i,
                            }),
                            z &&
                                (0, a.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: E.intl.string(E.t.geKm7t),
                                    onClick: S,
                                }),
                        ],
                    }),
            ],
        })
    );
}
