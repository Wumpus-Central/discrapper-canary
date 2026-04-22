a.d(t, { A: () => C });
var l = a(627968),
    n = a(64700),
    i = a(503698),
    r = a.n(i),
    d = a(735438),
    s = a.n(d),
    u = a(935462),
    o = a(150934),
    b = a(452027),
    v = a(260598),
    c = a(534514),
    E = a(834730),
    f = a(821609),
    O = a(964486),
    g = a(475743),
    h = a(235986),
    m = a(915089),
    N = a(124480),
    p = a(975571),
    S = a(321563),
    U = a(670455),
    A = a(985018),
    x = a(636852);
let j = (e) =>
    s().shuffle(
        e.map((e) => ({
            ...e,
            problemOptions: s()
                .shuffle(e.problemOptions)
                .concat(e.freeformConfig ?? []),
        })),
    );
function C(e) {
    let t,
        a,
        {
            onMount: i,
            onSubmit: d,
            onClose: C,
            ratingHeader: L,
            ratingBody: _,
            ratingOptions: D,
            ratingEmojiKind: V,
            initialRating: I = null,
            categoriesHeader: R,
            optionsTree: T,
            hideDontShowAgainCheckbox: y,
            impression: P,
            transitionState: F,
        } = e,
        M = (0, g.A)(T),
        [H, k] = n.useState(j(T));
    n.useEffect(() => {
        s().isEqual(M, T) || k(j(T));
    }, [T, M]);
    let G = (0, m.GV)(),
        [w, B] = n.useState(!1),
        [X, z] = n.useState(I),
        [K, Y] = n.useState(1 === H.length ? H[0] : null),
        [q, Q] = n.useState(null),
        [Z, $] = n.useState("");
    (0, O.Ay)(() => i?.()),
        (0, O.l0)(() => {
            d({ rating: X, category: K?.value ?? null, problem: q, dontShowAgain: w, feedback: Z });
        });
    let W = !0,
        J = !1;
    return (
        null == X
            ? ((t = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: r()(x.OS, x.Ko),
                          children: (0, l.jsx)(S.A, {
                              ratingOptions: D,
                              emojiKind: V,
                              selectedRating: X,
                              onChangeRating: function (e) {
                                  z(e), e === U.P0.GOOD && C();
                              },
                          }),
                      }),
                      !y &&
                          (0, l.jsx)(u.jl, {
                              "data-migration-pending": !0,
                              className: x.qr,
                              direction: h.A.Direction.HORIZONTAL,
                              children: (0, l.jsx)(o.S, {
                                  checked: w,
                                  onChange: () => B(!w),
                                  label: A.intl.string(A.t["5E9SB9"]),
                                  labelType: "secondary",
                              }),
                          }),
                  ],
              })),
              (W = !1))
            : X !== U.P0.GOOD && null == K
              ? ((t = (0, l.jsx)(u.$m, {
                    "data-migration-pending": !0,
                    children: (0, l.jsx)(b.D, {
                        label: R,
                        children: (0, l.jsx)(N.A, { options: H, onClick: Y, hideCaret: () => !0 }),
                    }),
                })),
                (a = () => z(null)))
              : null != K && null == q
                ? ((t = (0, l.jsx)(u.$m, {
                      children: (0, l.jsx)(b.D, {
                          label: K.problemsHeader,
                          children: (0, l.jsx)(N.A, {
                              options: K.problemOptions,
                              onClick: function (e) {
                                  Q(e), null != K && null != e && K.freeformConfig?.value !== e.value && C();
                              },
                              hideCaret: (e) => {
                                  let { value: t } = e;
                                  return K.freeformConfig?.value !== t;
                              },
                          }),
                      }),
                  })),
                  (a = () => (1 === H.length ? z(null) : Y(null))))
                : null != K &&
                  null != q &&
                  K.freeformConfig?.value === q.value &&
                  ((t = (0, l.jsx)(u.$m, {
                      "data-migration-pending": !0,
                      children: (0, l.jsx)(v.f, {
                          label: A.intl.string(A.t.h95hcn),
                          helperText: K.freeformConfig.hideHelpdeskLink
                              ? void 0
                              : A.intl.format(A.t.ybi2tD, { helpdeskURL: p.A.getSubmitRequestURL() }),
                          value: Z,
                          maxLength: U.u0,
                          onChange: $,
                      }),
                  })),
                  (a = () => {
                      $(""), Q(null);
                  }),
                  (J = !0)),
        (0, l.jsxs)(u.EO, {
            "data-migration-pending": !0,
            impression: P,
            transitionState: F,
            className: x.CR,
            "aria-labelledby": G,
            parentComponent: "FeedbackModalV2",
            children: [
                (0, l.jsxs)(u.rQ, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: x.N1,
                    children: [
                        (0, l.jsx)(c.D, { id: G, variant: "heading-xl/extrabold", color: "none", children: L }),
                        (0, l.jsx)(E.E, { variant: "text-md/normal", color: "none", className: x.sB, children: _ }),
                    ],
                }),
                t,
                W &&
                    (0, l.jsxs)(u.jl, {
                        "data-migration-pending": !0,
                        className: x.qr,
                        direction: h.A.Direction.HORIZONTAL,
                        children: [
                            (0, l.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(A.t["13/7kX"]),
                                onClick: a,
                            }),
                            J &&
                                (0, l.jsx)(f.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: A.intl.string(A.t.geKm7t),
                                    onClick: C,
                                }),
                        ],
                    }),
            ],
        })
    );
}
