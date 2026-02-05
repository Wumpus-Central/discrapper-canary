l.d(a, { A: () => S });
var t = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    d = l(735438),
    s = l.n(d),
    u = l(397927),
    E = l(964486),
    O = l(475743),
    b = l(235986),
    v = l(915089),
    o = l(124480),
    f = l(975571),
    c = l(321563),
    g = l(670455),
    N = l(985018),
    h = l(520783);
let U = (e) =>
    s().shuffle(
        e.map((e) => ({
            ...e,
            problemOptions: s()
                .shuffle(e.problemOptions)
                .concat(e.freeformConfig ?? []),
        })),
    );
function S(e) {
    let a,
        l,
        {
            onMount: i,
            onSubmit: d,
            onClose: S,
            ratingHeader: m,
            ratingBody: _,
            ratingOptions: A,
            ratingEmojiKind: j,
            initialRating: C = null,
            categoriesHeader: D,
            optionsTree: L,
            hideDontShowAgainCheckbox: I,
            impression: T,
            transitionState: V,
        } = e,
        p = (0, O.A)(L),
        [R, x] = n.useState(U(L));
    n.useEffect(() => {
        s().isEqual(p, L) || x(U(L));
    }, [L, p]);
    let H = (0, v.GV)(),
        [k, F] = n.useState(!1),
        [G, P] = n.useState(C),
        [B, M] = n.useState(1 === R.length ? R[0] : null),
        [X, y] = n.useState(null),
        [Y, K] = n.useState("");
    (0, E.Ay)(() => i?.()),
        (0, E.l0)(() => {
            d({ rating: G, category: B?.value ?? null, problem: X, dontShowAgain: k, feedback: Y });
        });
    let q = !0,
        Q = !1;
    return (
        null == G
            ? ((a = (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("div", {
                          className: r()(h.OS, h.Ko),
                          children: (0, t.jsx)(c.A, {
                              ratingOptions: A,
                              emojiKind: j,
                              selectedRating: G,
                              onChangeRating: function (e) {
                                  P(e), e === g.P0.GOOD && S();
                              },
                          }),
                      }),
                      !I &&
                          (0, t.jsx)(u.jlY, {
                              "data-migration-pending": !0,
                              className: h.qr,
                              direction: b.A.Direction.HORIZONTAL,
                              children: (0, t.jsx)(u.Checkbox, {
                                  checked: k,
                                  onChange: () => F(!k),
                                  label: N.intl.string(N.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (q = !1))
            : G !== g.P0.GOOD && null == B
              ? ((a = (0, t.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(u.D0$, {
                        label: D,
                        children: (0, t.jsx)(o.A, { options: R, onClick: M, hideCaret: () => !0 }),
                    }),
                })),
                (l = () => P(null)))
              : null != B && null == X
                ? ((a = (0, t.jsx)(u.$mQ, {
                      children: (0, t.jsx)(u.D0$, {
                          label: B.problemsHeader,
                          children: (0, t.jsx)(o.A, {
                              options: B.problemOptions,
                              onClick: function (e) {
                                  y(e), null != B && null != e && B.freeformConfig?.value !== e.value && S();
                              },
                              hideCaret: (e) => {
                                  let { value: a } = e;
                                  return B.freeformConfig?.value !== a;
                              },
                          }),
                      }),
                  })),
                  (l = () => (1 === R.length ? P(null) : M(null))))
                : null != B &&
                  null != X &&
                  B.freeformConfig?.value === X.value &&
                  ((a = (0, t.jsx)(u.$mQ, {
                      "data-migration-pending": !0,
                      children: (0, t.jsx)(u.fs1, {
                          label: N.intl.string(N.t.h95hcn),
                          helperText: B.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : N.intl.format(N.t.ybi2tD, { helpdeskURL: f.A.getSubmitRequestURL() }),
                          value: Y,
                          maxLength: g.u0,
                          onChange: K,
                      }),
                  })),
                  (l = () => {
                      K(""), y(null);
                  }),
                  (Q = !0)),
        (0, t.jsxs)(u.EOs, {
            "data-migration-pending": !0,
            impression: T,
            transitionState: V,
            className: h.CR,
            "aria-labelledby": H,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, t.jsxs)(u.rQ0, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: h.N1,
                    children: [
                        (0, t.jsx)(u.Heading, { id: H, variant: "heading-xl/extrabold", color: "none", children: m }),
                        (0, t.jsx)(u.Text, { variant: "text-md/normal", color: "none", className: h.sB, children: _ }),
                    ],
                }),
                a,
                q &&
                    (0, t.jsxs)(u.jlY, {
                        "data-migration-pending": !0,
                        className: h.qr,
                        direction: b.A.Direction.HORIZONTAL,
                        children: [
                            (0, t.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: N.intl.string(N.t["13/7kX"]),
                                onClick: l,
                            }),
                            Q &&
                                (0, t.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: N.intl.string(N.t.geKm7t),
                                    onClick: S,
                                }),
                        ],
                    }),
            ],
        })
    );
}
