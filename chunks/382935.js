l.d(t, { A: () => S }), l(896048);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    r = l.n(i),
    s = l(735438),
    u = l.n(s),
    d = l(397927),
    O = l(964486),
    b = l(475743),
    o = l(235986),
    c = l(915089),
    f = l(124480),
    v = l(975571),
    E = l(321563),
    g = l(670455),
    p = l(985018),
    h = l(520783);
let j = (e) =>
    u().shuffle(
        e.map((e) => {
            var t, l, n;
            return (
                (l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n =
                    {
                        problemOptions: u()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : []),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var l = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              l.push.apply(l, n);
                          }
                          return l;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                l
            );
        }),
    );
function S(e) {
    var t;
    let l,
        i,
        {
            onMount: s,
            onSubmit: S,
            onClose: N,
            ratingHeader: U,
            ratingBody: m,
            ratingOptions: D,
            ratingEmojiKind: y,
            initialRating: _ = null,
            categoriesHeader: A,
            optionsTree: C,
            hideDontShowAgainCheckbox: I,
            impression: L,
            transitionState: R,
        } = e,
        T = (0, b.A)(C),
        [P, V] = a.useState(j(C));
    a.useEffect(() => {
        u().isEqual(T, C) || V(j(C));
    }, [C, T]);
    let x = (0, c.GV)(),
        [k, w] = a.useState(!1),
        [H, F] = a.useState(_),
        [G, B] = a.useState(1 === P.length ? P[0] : null),
        [M, X] = a.useState(null),
        [K, Y] = a.useState("");
    (0, O.Ay)(() => (null == s ? void 0 : s())),
        (0, O.l0)(() => {
            var e;
            S({
                rating: H,
                category: null != (e = null == G ? void 0 : G.value) ? e : null,
                problem: M,
                dontShowAgain: k,
                feedback: K,
            });
        });
    let q = !0,
        Q = !1;
    return (
        null == H
            ? ((l = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", {
                          className: r()(h.OS, h.Ko),
                          children: (0, n.jsx)(E.A, {
                              ratingOptions: D,
                              emojiKind: y,
                              selectedRating: H,
                              onChangeRating: function (e) {
                                  F(e), e === g.P0.GOOD && N();
                              },
                          }),
                      }),
                      !I &&
                          (0, n.jsx)(d.jlY, {
                              className: h.qr,
                              direction: o.A.Direction.HORIZONTAL,
                              children: (0, n.jsx)(d.Checkbox, {
                                  checked: k,
                                  onChange: () => w(!k),
                                  label: p.intl.string(p.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (q = !1))
            : H !== g.P0.GOOD && null == G
              ? ((l = (0, n.jsx)(d.$mQ, {
                    children: (0, n.jsx)(d.D0$, {
                        label: A,
                        children: (0, n.jsx)(f.A, {
                            options: P,
                            onClick: B,
                            hideCaret: () => !0,
                        }),
                    }),
                })),
                (i = () => F(null)))
              : null != G && null == M
                ? ((l = (0, n.jsx)(d.$mQ, {
                      children: (0, n.jsx)(d.D0$, {
                          label: G.problemsHeader,
                          children: (0, n.jsx)(f.A, {
                              options: G.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  X(e),
                                      null != G &&
                                          null != e &&
                                          (null == (t = G.freeformConfig) ? void 0 : t.value) !== e.value &&
                                          N();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: l } = e;
                                  return (null == (t = G.freeformConfig) ? void 0 : t.value) !== l;
                              },
                          }),
                      }),
                  })),
                  (i = () => (1 === P.length ? F(null) : B(null))))
                : null != G &&
                  null != M &&
                  (null == (t = G.freeformConfig) ? void 0 : t.value) === M.value &&
                  ((l = (0, n.jsx)(d.$mQ, {
                      children: (0, n.jsx)(d.fs1, {
                          label: p.intl.string(p.t.h95hcn),
                          helperText: G.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : p.intl.format(p.t.ybi2tD, { helpdeskURL: v.A.getSubmitRequestURL() }),
                          value: K,
                          maxLength: g.u0,
                          onChange: Y,
                      }),
                  })),
                  (i = () => {
                      Y(""), X(null);
                  }),
                  (Q = !0)),
        (0, n.jsxs)(d.EOs, {
            impression: L,
            transitionState: R,
            className: h.CR,
            "aria-labelledby": x,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, n.jsxs)(d.rQ0, {
                    separator: !1,
                    className: h.N1,
                    children: [
                        (0, n.jsx)(d.Heading, {
                            id: x,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: U,
                        }),
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: h.sB,
                            children: m,
                        }),
                    ],
                }),
                l,
                q &&
                    (0, n.jsxs)(d.jlY, {
                        className: h.qr,
                        direction: o.A.Direction.HORIZONTAL,
                        children: [
                            (0, n.jsx)(d.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: p.intl.string(p.t["13/7kX"]),
                                onClick: i,
                            }),
                            Q &&
                                (0, n.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: p.intl.string(p.t.geKm7t),
                                    onClick: N,
                                }),
                        ],
                    }),
            ],
        })
    );
}
