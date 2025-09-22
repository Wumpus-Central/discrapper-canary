n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(755721),
    u = n(481060),
    m = n(493773),
    b = n(110924),
    d = n(600164),
    f = n(313201),
    p = n(572539),
    _ = n(63063),
    O = n(764920),
    g = n(531578),
    y = n(388032),
    h = n(50312);
let v = (e) =>
    s().shuffle(
        e.map((e) => {
            var t, n, r;
            return (
                (n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        problemOptions: s()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : []),
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
        }),
    );
function j(e) {
    var t;
    let n,
        l,
        {
            onMount: a,
            onSubmit: j,
            onClose: S,
            ratingHeader: w,
            ratingBody: x,
            ratingOptions: E,
            ratingEmojiKind: P,
            initialRating: C = null,
            categoriesHeader: k,
            optionsTree: R,
            hideDontShowAgainCheckbox: T,
            impression: N,
            transitionState: F,
        } = e,
        D = (0, b.Z)(R),
        [L, I] = i.useState(v(R));
    i.useEffect(() => {
        s().isEqual(D, R) || I(v(R));
    }, [R, D]);
    let B = (0, f.Dt)(),
        [M, Z] = i.useState(!1),
        [H, A] = i.useState(C),
        [V, z] = i.useState(null),
        [X, Y] = i.useState(null),
        [K, U] = i.useState("");
    (0, m.ZP)(() => (null == a ? void 0 : a())),
        (0, m.zq)(() => {
            var e;
            j({
                rating: H,
                category: null != (e = null == V ? void 0 : V.value) ? e : null,
                problem: X,
                dontShowAgain: M,
                feedback: K,
            });
        });
    let G = !0,
        q = !1;
    return (
        null == H
            ? ((n = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: o()(h.problemInfo, h.ratingSelectorContainer),
                          children: (0, r.jsx)(O.Z, {
                              ratingOptions: E,
                              emojiKind: P,
                              selectedRating: H,
                              onChangeRating: function (e) {
                                  A(e), e === g.aZ.GOOD && S();
                              },
                          }),
                      }),
                      !T &&
                          (0, r.jsx)(u.mzw, {
                              className: h.footer,
                              direction: d.Z.Direction.HORIZONTAL,
                              children: (0, r.jsx)(c.$q, {
                                  type: c.M0.INVERTED,
                                  size: 18,
                                  value: M,
                                  onChange: () => Z(!M),
                                  children: (0, r.jsx)(u.Text, {
                                      variant: "text-sm/normal",
                                      children: y.intl.string(y.t["5E9SBw"]),
                                  }),
                              }),
                          }),
                  ],
              })),
              (G = !1))
            : H !== g.aZ.GOOD && null == V
              ? ((n = (0, r.jsx)(u.hzk, {
                    className: h.__invalid_content,
                    children: (0, r.jsx)(u.xJW, {
                        title: k,
                        titleClassName: h.noTitleCase,
                        className: o()(h.problemInfo, h.presetList, { [h.marginBottom16]: T }),
                        children: (0, r.jsx)(p.Z, {
                            options: L,
                            onClick: z,
                            hideCaret: () => !0,
                        }),
                    }),
                })),
                (l = () => A(null)))
              : null != V && null == X
                ? ((n = (0, r.jsx)(u.hzk, {
                      className: h.__invalid_content,
                      children: (0, r.jsx)(u.xJW, {
                          title: V.problemsHeader,
                          titleClassName: h.noTitleCase,
                          className: o()(h.problemInfo, h.presetList, { [h.marginBottom16]: T }),
                          children: (0, r.jsx)(p.Z, {
                              options: V.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  Y(e),
                                      null != V &&
                                          null != e &&
                                          (null == (t = V.freeformConfig) ? void 0 : t.value) !== e.value &&
                                          S();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = V.freeformConfig) ? void 0 : t.value) !== n;
                              },
                          }),
                      }),
                  })),
                  (l = () => z(null)))
                : null != V &&
                  null != X &&
                  (null == (t = V.freeformConfig) ? void 0 : t.value) === X.value &&
                  ((n = (0, r.jsx)(u.hzk, {
                      className: h.__invalid_content,
                      children: (0, r.jsx)(u.Kx8, {
                          label: y.intl.string(y.t.h95hcn),
                          helperText: V.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : y.intl.format(y.t.ybi2tL, { helpdeskURL: _.Z.getSubmitRequestURL() }),
                          value: K,
                          maxLength: g.iF,
                          onChange: U,
                      }),
                  })),
                  (l = () => {
                      U(""), Y(null);
                  }),
                  (q = !0)),
        (0, r.jsxs)(u.Y0X, {
            impression: N,
            transitionState: F,
            className: h.modalRoot,
            "aria-labelledby": B,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, r.jsxs)(u.xBx, {
                    separator: !1,
                    className: h.headerContainer,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            id: B,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: w,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: h.ratingBody,
                            children: x,
                        }),
                    ],
                }),
                n,
                G &&
                    (0, r.jsxs)(u.mzw, {
                        className: h.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: y.intl.string(y.t["13/7kZ"]),
                                onClick: l,
                            }),
                            q &&
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: y.intl.string(y.t.geKm7u),
                                    onClick: S,
                                }),
                        ],
                    }),
            ],
        })
    );
}
