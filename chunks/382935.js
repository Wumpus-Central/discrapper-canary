a.d(l, { A: () => S });
var t = a(627968),
    n = a(64700),
    i = a(503698),
    r = a.n(i),
    d = a(735438),
    s = a.n(d),
    u = a(397927),
    E = a(964486),
    O = a(475743),
    b = a(235986),
    v = a(915089),
    o = a(124480),
    f = a(975571),
    c = a(321563),
    N = a(670455),
    g = a(985018),
    h = a(12537);
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
    let l,
        a,
        {
            onMount: i,
            onSubmit: d,
            onClose: S,
            ratingHeader: m,
            ratingBody: A,
            ratingOptions: _,
            ratingEmojiKind: D,
            initialRating: j = null,
            categoriesHeader: C,
            optionsTree: L,
            hideDontShowAgainCheckbox: I,
            impression: T,
            transitionState: V,
        } = e,
        R = (0, O.A)(L),
        [p, x] = n.useState(U(L));
    n.useEffect(() => {
        s().isEqual(R, L) || x(U(L));
    }, [L, R]);
    let H = (0, v.GV)(),
        [k, P] = n.useState(!1),
        [F, G] = n.useState(j),
        [B, M] = n.useState(1 === p.length ? p[0] : null),
        [X, y] = n.useState(null),
        [Y, K] = n.useState("");
    (0, E.Ay)(() => i?.()),
        (0, E.l0)(() => {
            d({ rating: F, category: B?.value ?? null, problem: X, dontShowAgain: k, feedback: Y });
        });
    let q = !0,
        Q = !1;
    return (
        null == F
            ? ((l = (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("div", {
                          className: r()(h.OS, h.Ko),
                          children: (0, t.jsx)(c.A, {
                              ratingOptions: _,
                              emojiKind: D,
                              selectedRating: F,
                              onChangeRating: function (e) {
                                  G(e), e === N.P0.GOOD && S();
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
                                  onChange: () => P(!k),
                                  label: g.intl.string(g.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (q = !1))
            : F !== N.P0.GOOD && null == B
              ? ((l = (0, t.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(u.D0$, {
                        label: C,
                        children: (0, t.jsx)(o.A, { options: p, onClick: M, hideCaret: () => !0 }),
                    }),
                })),
                (a = () => G(null)))
              : null != B && null == X
                ? ((l = (0, t.jsx)(u.$mQ, {
                      children: (0, t.jsx)(u.D0$, {
                          label: B.problemsHeader,
                          children: (0, t.jsx)(o.A, {
                              options: B.problemOptions,
                              onClick: function (e) {
                                  y(e), null != B && null != e && B.freeformConfig?.value !== e.value && S();
                              },
                              hideCaret: (e) => {
                                  let { value: l } = e;
                                  return B.freeformConfig?.value !== l;
                              },
                          }),
                      }),
                  })),
                  (a = () => (1 === p.length ? G(null) : M(null))))
                : null != B &&
                  null != X &&
                  B.freeformConfig?.value === X.value &&
                  ((l = (0, t.jsx)(u.$mQ, {
                      "data-migration-pending": !0,
                      children: (0, t.jsx)(u.fs1, {
                          label: g.intl.string(g.t.h95hcn),
                          helperText: B.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : g.intl.format(g.t.ybi2tD, { helpdeskURL: f.A.getSubmitRequestURL() }),
                          value: Y,
                          maxLength: N.u0,
                          onChange: K,
                      }),
                  })),
                  (a = () => {
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
                        (0, t.jsx)(u.Text, { variant: "text-md/normal", color: "none", className: h.sB, children: A }),
                    ],
                }),
                l,
                q &&
                    (0, t.jsxs)(u.jlY, {
                        "data-migration-pending": !0,
                        className: h.qr,
                        direction: b.A.Direction.HORIZONTAL,
                        children: [
                            (0, t.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: g.intl.string(g.t["13/7kX"]),
                                onClick: a,
                            }),
                            Q &&
                                (0, t.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: g.intl.string(g.t.geKm7t),
                                    onClick: S,
                                }),
                        ],
                    }),
            ],
        })
    );
}
