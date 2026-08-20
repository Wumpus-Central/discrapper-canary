l.d(n, { A: () => N });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(435558),
    o = l.n(s),
    d = l(935462),
    c = l(150934),
    u = l(452027),
    m = l(103557),
    g = l(297264),
    h = l(834730),
    p = l(821609),
    f = l(964486),
    x = l(475743),
    j = l(235986),
    b = l(915089),
    C = l(124480),
    k = l(975571),
    v = l(321563),
    O = l(670455),
    A = l(375708),
    S = l(830141);
function y(e) {
    return o().shuffle(
        e.map((e) => ({
            ...e,
            problemOptions: o()
                .shuffle(e.problemOptions)
                .concat(e.freeformConfig ?? []),
        })),
    );
}
function N(e) {
    let n,
        l,
        {
            onMount: a,
            onSubmit: s,
            onClose: N,
            ratingHeader: D,
            ratingBody: R,
            ratingOptions: L,
            ratingEmojiKind: E,
            initialRating: $ = null,
            categoriesHeader: q,
            optionsTree: H,
            hideDontShowAgainCheckbox: T,
            impression: G,
            transitionState: K,
        } = e,
        w = (0, x.Ay)(H),
        [z, B] = i.useState(y(H));
    i.useEffect(() => {
        o().isEqual(w, H) || B(y(H));
    }, [H, w]);
    let F = (0, b.GV)(),
        [I, P] = i.useState(!1),
        [U, V] = i.useState($),
        [Z, _] = i.useState(1 === z.length ? z[0] : null),
        [M, Q] = i.useState(null),
        [X, J] = i.useState("");
    (0, f.Ay)(() => a?.()),
        (0, f.l0)(() => {
            s({ rating: U, category: Z?.value ?? null, problem: M, dontShowAgain: I, feedback: X });
        });
    let W = !0,
        Y = !1;
    return (
        null == U
            ? ((n = (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("div", {
                          className: r()(S.OS, S.Ko),
                          children: (0, t.jsx)(v.A, {
                              ratingOptions: L,
                              emojiKind: E,
                              selectedRating: U,
                              onChangeRating: function (e) {
                                  V(e), e === O.P0.GOOD && N();
                              },
                          }),
                      }),
                      !T &&
                          (0, t.jsx)(d.jl, {
                              "data-migration-pending": !0,
                              className: S.qr,
                              direction: j.A.Direction.HORIZONTAL,
                              children: (0, t.jsx)(c.S, {
                                  checked: I,
                                  onChange: () => P(!I),
                                  label: A.intl.string(A.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (W = !1))
            : U !== O.P0.GOOD && null == Z
              ? ((n = (0, t.jsx)(d.$m, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(u.D, {
                        label: q,
                        children: (0, t.jsx)(C.A, { options: z, onClick: _, hideCaret: () => !0 }),
                    }),
                })),
                (l = () => V(null)))
              : null != Z && null == M
                ? ((n = (0, t.jsx)(d.$m, {
                      children: (0, t.jsx)(u.D, {
                          label: Z.problemsHeader,
                          children: (0, t.jsx)(C.A, {
                              options: Z.problemOptions,
                              onClick: function (e) {
                                  Q(e), null != Z && null != e && Z.freeformConfig?.value !== e.value && N();
                              },
                              hideCaret: (e) => {
                                  let { value: n } = e;
                                  return Z.freeformConfig?.value !== n;
                              },
                          }),
                      }),
                  })),
                  (l = () => (1 === z.length ? V(null) : _(null))))
                : null != Z &&
                  null != M &&
                  Z.freeformConfig?.value === M.value &&
                  ((n = (0, t.jsx)(d.$m, {
                      "data-migration-pending": !0,
                      children: (0, t.jsx)(m.f, {
                          label: A.intl.string(A.t.h95hcn),
                          helperText: Z.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : A.intl.format(A.t.ybi2tD, { helpdeskURL: k.A.getSubmitRequestURL() }),
                          value: X,
                          maxLength: O.u0,
                          onChange: J,
                      }),
                  })),
                  (l = () => {
                      J(""), Q(null);
                  }),
                  (Y = !0)),
        (0, t.jsxs)(d.EO, {
            "data-migration-pending": !0,
            impression: G,
            transitionState: K,
            className: S.CR,
            "aria-labelledby": F,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, t.jsxs)(d.rQ, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: S.N1,
                    children: [
                        (0, t.jsx)(g.D, { id: F, variant: "heading-xl/extrabold", color: "none", children: D }),
                        (0, t.jsx)(h.E, { variant: "text-md/normal", color: "none", className: S.sB, children: R }),
                    ],
                }),
                n,
                W &&
                    (0, t.jsxs)(d.jl, {
                        "data-migration-pending": !0,
                        className: S.qr,
                        direction: j.A.Direction.HORIZONTAL,
                        children: [
                            (0, t.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(A.t["13/7kX"]),
                                onClick: l,
                            }),
                            Y &&
                                (0, t.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: A.intl.string(A.t.geKm7t),
                                    onClick: N,
                                }),
                        ],
                    }),
            ],
        })
    );
}
