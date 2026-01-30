n.d(t, {
    A: () => S,
}),
    n(896048);
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    u = n.n(s),
    d = n(397927),
    o = n(964486),
    O = n(475743),
    b = n(235986),
    c = n(915089),
    f = n(124480),
    v = n(975571),
    E = n(321563),
    g = n(670455),
    p = n(985018),
    h = n(520783);
let j = (e) =>
    u().shuffle(
        e.map((e) => {
            var t, n, l;
            return (
                (n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, e)),
                (l = l =
                    {
                        problemOptions: u()
                            .shuffle(e.problemOptions)
                            .concat(null != (t = e.freeformConfig) ? t : []),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
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
            onMount: s,
            onSubmit: S,
            onClose: m,
            ratingHeader: N,
            ratingBody: U,
            ratingOptions: D,
            ratingEmojiKind: y,
            initialRating: _ = null,
            categoriesHeader: A,
            optionsTree: C,
            hideDontShowAgainCheckbox: I,
            impression: L,
            transitionState: R,
        } = e,
        T = (0, O.A)(C),
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
    (0, o.Ay)(() => (null == s ? void 0 : s())),
        (0, o.l0)(() => {
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
            ? ((n = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: r()(h.OS, h.Ko),
                          children: (0, l.jsx)(E.A, {
                              ratingOptions: D,
                              emojiKind: y,
                              selectedRating: H,
                              onChangeRating: function (e) {
                                  F(e), e === g.P0.GOOD && m();
                              },
                          }),
                      }),
                      !I &&
                          (0, l.jsx)(d.jlY, {
                              "data-migration-pending": !0,
                              className: h.qr,
                              direction: b.A.Direction.HORIZONTAL,
                              children: (0, l.jsx)(d.Checkbox, {
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
              ? ((n = (0, l.jsx)(d.$mQ, {
                    "data-migration-pending": !0,
                    children: (0, l.jsx)(d.D0$, {
                        label: A,
                        children: (0, l.jsx)(f.A, {
                            options: P,
                            onClick: B,
                            hideCaret: () => !0,
                        }),
                    }),
                })),
                (i = () => F(null)))
              : null != G && null == M
                ? ((n = (0, l.jsx)(d.$mQ, {
                      children: (0, l.jsx)(d.D0$, {
                          label: G.problemsHeader,
                          children: (0, l.jsx)(f.A, {
                              options: G.problemOptions,
                              onClick: function (e) {
                                  var t;
                                  X(e),
                                      null != G &&
                                          null != e &&
                                          (null == (t = G.freeformConfig) ? void 0 : t.value) !== e.value &&
                                          m();
                              },
                              hideCaret: (e) => {
                                  var t;
                                  let { value: n } = e;
                                  return (null == (t = G.freeformConfig) ? void 0 : t.value) !== n;
                              },
                          }),
                      }),
                  })),
                  (i = () => (1 === P.length ? F(null) : B(null))))
                : null != G &&
                  null != M &&
                  (null == (t = G.freeformConfig) ? void 0 : t.value) === M.value &&
                  ((n = (0, l.jsx)(d.$mQ, {
                      "data-migration-pending": !0,
                      children: (0, l.jsx)(d.fs1, {
                          label: p.intl.string(p.t.h95hcn),
                          helperText: G.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : p.intl.format(p.t.ybi2tD, {
                                    helpdeskURL: v.A.getSubmitRequestURL(),
                                }),
                          value: K,
                          maxLength: g.u0,
                          onChange: Y,
                      }),
                  })),
                  (i = () => {
                      Y(""), X(null);
                  }),
                  (Q = !0)),
        (0, l.jsxs)(d.EOs, {
            "data-migration-pending": !0,
            impression: L,
            transitionState: R,
            className: h.CR,
            "aria-labelledby": x,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, l.jsxs)(d.rQ0, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: h.N1,
                    children: [
                        (0, l.jsx)(d.Heading, {
                            id: x,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: N,
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: h.sB,
                            children: U,
                        }),
                    ],
                }),
                n,
                q &&
                    (0, l.jsxs)(d.jlY, {
                        "data-migration-pending": !0,
                        className: h.qr,
                        direction: b.A.Direction.HORIZONTAL,
                        children: [
                            (0, l.jsx)(d.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: p.intl.string(p.t["13/7kX"]),
                                onClick: i,
                            }),
                            Q &&
                                (0, l.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: p.intl.string(p.t.geKm7t),
                                    onClick: m,
                                }),
                        ],
                    }),
            ],
        })
    );
}
