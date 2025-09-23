n.d(t, { Z: () => j }), n(388685);
var o = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(392711),
    s = n.n(a),
    c = n(755721),
    u = n(481060),
    d = n(493773),
    b = n(110924),
    p = n(600164),
    m = n(313201),
    f = n(572539),
    _ = n(63063),
    O = n(764920),
    g = n(531578),
    h = n(388032),
    v = n(862083);
let y = (e) =>
    s().shuffle(
        e.map((e) => {
            var t, n, o;
            return (
                (n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (o = o.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            o.forEach(function (t) {
                                var o;
                                (o = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: o,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = o);
                            });
                    }
                    return e;
                })({}, e)),
                (o = o =
                    {
                        problemOptions: s()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : []),
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
        }),
    );
function j(e) {
    var t;
    let n,
        i,
        {
            onMount: a,
            onSubmit: j,
            onClose: w,
            ratingHeader: x,
            ratingBody: C,
            ratingOptions: E,
            ratingEmojiKind: P,
            initialRating: S = null,
            categoriesHeader: D,
            optionsTree: k,
            hideDontShowAgainCheckbox: R,
            impression: L,
            transitionState: F,
        } = e,
        I = (0, b.Z)(k),
        [N, Z] = r.useState(y(k));
    r.useEffect(() => {
        s().isEqual(I, k) || Z(y(k));
    }, [k, I]);
    let T = (0, m.Dt)(),
        [B, M] = r.useState(!1),
        [A, V] = r.useState(S),
        [H, U] = r.useState(null),
        [K, z] = r.useState(null),
        [X, J] = r.useState("");
    (0, d.ZP)(() => (null == a ? void 0 : a())),
        (0, d.zq)(() => {
            var e;
            j({
                rating: A,
                category: null != (e = null == H ? void 0 : H.value) ? e : null,
                problem: K,
                dontShowAgain: B,
                feedback: X,
            });
        });
    let q = !0,
        G = !1;
    return (
        null == A
            ? ((n = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)("div", {
                          className: l()(v.problemInfo, v.ratingSelectorContainer),
                          children: (0, o.jsx)(O.Z, {
                              ratingOptions: E,
                              emojiKind: P,
                              selectedRating: A,
                              onChangeRating: function (e) {
                                  V(e), e === g.aZ.GOOD && w();
                              },
                          }),
                      }),
                      !R &&
                          (0, o.jsx)(u.mzw, {
                              className: v.footer,
                              direction: p.Z.Direction.HORIZONTAL,
                              children: (0, o.jsx)(c.$q, {
                                  type: c.M0.INVERTED,
                                  size: 18,
                                  value: B,
                                  onChange: () => M(!B),
                                  children: (0, o.jsx)(u.Text, {
                                      variant: "text-sm/normal",
                                      children: h.intl.string(h.t["5E9SBw"]),
                                  }),
                              }),
                          }),
                  ],
              })),
              (q = !1))
            : A !== g.aZ.GOOD && null == H
              ? ((n = (0, o.jsx)(u.hzk, {
                    className: v.__invalid_content,
                    children: (0, o.jsx)(u.xJW, {
                        title: D,
                        titleClassName: v.noTitleCase,
                        className: l()(v.problemInfo, v.presetList, { [v.marginBottom16]: R }),
                        children: (0, o.jsx)(f.Z, {
                            options: N,
                            onClick: U,
                            hideCaret: () => !0,
                        }),
                    }),
                })),
                (i = () => V(null)))
              : null != H && null == K
                ? ((n = (0, o.jsx)(u.hzk, {
                      className: v.__invalid_content,
                      children: (0, o.jsx)(u.xJW, {
                          title: H.problemsHeader,
                          titleClassName: v.noTitleCase,
                          className: l()(v.problemInfo, v.presetList, { [v.marginBottom16]: R }),
                          children: (0, o.jsx)(f.Z, {
                              options: H.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  z(e),
                                      null != H &&
                                          null != e &&
                                          (null == (t = H.freeformConfig) ? void 0 : t.value) !== e.value &&
                                          w();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = H.freeformConfig) ? void 0 : t.value) !== n;
                              },
                          }),
                      }),
                  })),
                  (i = () => U(null)))
                : null != H &&
                  null != K &&
                  (null == (t = H.freeformConfig) ? void 0 : t.value) === K.value &&
                  ((n = (0, o.jsx)(u.hzk, {
                      className: v.__invalid_content,
                      children: (0, o.jsx)(u.Kx8, {
                          label: h.intl.string(h.t.h95hcn),
                          helperText: H.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : h.intl.format(h.t.ybi2tL, { helpdeskURL: _.Z.getSubmitRequestURL() }),
                          value: X,
                          maxLength: g.iF,
                          onChange: J,
                      }),
                  })),
                  (i = () => {
                      J(""), z(null);
                  }),
                  (G = !0)),
        (0, o.jsxs)(u.Y0X, {
            impression: L,
            transitionState: F,
            className: v.modalRoot,
            "aria-labelledby": T,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, o.jsxs)(u.xBx, {
                    separator: !1,
                    className: v.headerContainer,
                    children: [
                        (0, o.jsx)(u.X6q, {
                            id: T,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: x,
                        }),
                        (0, o.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: v.ratingBody,
                            children: C,
                        }),
                    ],
                }),
                n,
                q &&
                    (0, o.jsxs)(u.mzw, {
                        className: v.footer,
                        direction: p.Z.Direction.HORIZONTAL,
                        children: [
                            (0, o.jsx)(u.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: h.intl.string(h.t["13/7kZ"]),
                                onClick: i,
                            }),
                            G &&
                                (0, o.jsx)(u.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: h.intl.string(h.t.geKm7u),
                                    onClick: w,
                                }),
                        ],
                    }),
            ],
        })
    );
}
