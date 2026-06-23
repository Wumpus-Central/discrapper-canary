l.d(n, { A: () => N });
var i = l(627968),
    t = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(735438),
    o = l.n(s),
    d = l(935462),
    u = l(150934),
    c = l(452027),
    m = l(260598),
    h = l(534514),
    f = l(834730),
    g = l(821609),
    p = l(964486),
    x = l(475743),
    j = l(235986),
    v = l(915089),
    C = l(124480),
    b = l(975571),
    k = l(321563),
    A = l(670455),
    O = l(375708),
    y = l(636852);
function S(e) {
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
            ratingBody: E,
            ratingOptions: R,
            ratingEmojiKind: L,
            initialRating: K = null,
            categoriesHeader: T,
            optionsTree: $,
            hideDontShowAgainCheckbox: q,
            impression: H,
            transitionState: P,
        } = e,
        B = (0, x.A)($),
        [G, U] = t.useState(S($));
    t.useEffect(() => {
        o().isEqual(B, $) || U(S($));
    }, [$, B]);
    let w = (0, v.GV)(),
        [z, F] = t.useState(!1),
        [I, M] = t.useState(K),
        [V, Z] = t.useState(1 === G.length ? G[0] : null),
        [_, Q] = t.useState(null),
        [X, J] = t.useState("");
    (0, p.Ay)(() => a?.()),
        (0, p.l0)(() => {
            s({ rating: I, category: V?.value ?? null, problem: _, dontShowAgain: z, feedback: X });
        });
    let W = !0,
        Y = !1;
    return (
        null == I
            ? ((n = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: r()(y.OS, y.Ko),
                          children: (0, i.jsx)(k.A, {
                              ratingOptions: R,
                              emojiKind: L,
                              selectedRating: I,
                              onChangeRating: function (e) {
                                  M(e), e === A.P0.GOOD && N();
                              },
                          }),
                      }),
                      !q &&
                          (0, i.jsx)(d.jl, {
                              "data-migration-pending": !0,
                              className: y.qr,
                              direction: j.A.Direction.HORIZONTAL,
                              children: (0, i.jsx)(u.S, {
                                  checked: z,
                                  onChange: () => F(!z),
                                  label: O.intl.string(O.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (W = !1))
            : I !== A.P0.GOOD && null == V
              ? ((n = (0, i.jsx)(d.$m, {
                    "data-migration-pending": !0,
                    children: (0, i.jsx)(c.D, {
                        label: T,
                        children: (0, i.jsx)(C.A, { options: G, onClick: Z, hideCaret: () => !0 }),
                    }),
                })),
                (l = () => M(null)))
              : null != V && null == _
                ? ((n = (0, i.jsx)(d.$m, {
                      children: (0, i.jsx)(c.D, {
                          label: V.problemsHeader,
                          children: (0, i.jsx)(C.A, {
                              options: V.problemOptions,
                              onClick: function (e) {
                                  Q(e), null != V && null != e && V.freeformConfig?.value !== e.value && N();
                              },
                              hideCaret: (e) => {
                                  let { value: n } = e;
                                  return V.freeformConfig?.value !== n;
                              },
                          }),
                      }),
                  })),
                  (l = () => (1 === G.length ? M(null) : Z(null))))
                : null != V &&
                  null != _ &&
                  V.freeformConfig?.value === _.value &&
                  ((n = (0, i.jsx)(d.$m, {
                      "data-migration-pending": !0,
                      children: (0, i.jsx)(m.f, {
                          label: O.intl.string(O.t.h95hcn),
                          helperText: V.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : O.intl.format(O.t.ybi2tD, { helpdeskURL: b.A.getSubmitRequestURL() }),
                          value: X,
                          maxLength: A.u0,
                          onChange: J,
                      }),
                  })),
                  (l = () => {
                      J(""), Q(null);
                  }),
                  (Y = !0)),
        (0, i.jsxs)(d.EO, {
            "data-migration-pending": !0,
            impression: H,
            transitionState: P,
            className: y.CR,
            "aria-labelledby": w,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, i.jsxs)(d.rQ, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: y.N1,
                    children: [
                        (0, i.jsx)(h.D, { id: w, variant: "heading-xl/extrabold", color: "none", children: D }),
                        (0, i.jsx)(f.E, { variant: "text-md/normal", color: "none", className: y.sB, children: E }),
                    ],
                }),
                n,
                W &&
                    (0, i.jsxs)(d.jl, {
                        "data-migration-pending": !0,
                        className: y.qr,
                        direction: j.A.Direction.HORIZONTAL,
                        children: [
                            (0, i.jsx)(g.$, {
                                variant: "secondary",
                                size: "sm",
                                text: O.intl.string(O.t["13/7kX"]),
                                onClick: l,
                            }),
                            Y &&
                                (0, i.jsx)(g.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: O.intl.string(O.t.geKm7t),
                                    onClick: N,
                                }),
                        ],
                    }),
            ],
        })
    );
}
