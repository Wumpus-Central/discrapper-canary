n.d(t, {
    default: () => O,
    q: () => y,
}),
    n(388685),
    n(781311);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(588529),
    c = n(401302),
    u = n(841110),
    d = n(931604),
    f = n(207385),
    _ = n(388032),
    p = n(467250);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { surveyId: t, survey: n, onClose: a, transitionState: u } = e,
        { getSurveyResponses: h, setResponse: g, trackDisplayedQuestions: b } = (0, c.H)(),
        y = h(t),
        O = (0, d.l6)(n),
        [v, I] = i.useState(O.blockId),
        [T, S] = i.useState(O.pageIndex),
        [A, C] = i.useState(!1),
        N = (e, n) => {
            g(t, e, n);
        },
        R = i.useCallback(() => {
            if (A) return void a();
            (0, s.h7j)((e) =>
                (0, r.jsx)(
                    s.ConfirmModal,
                    E(
                        m(
                            {
                                header: _.intl.string(_.t.T9Sx3z),
                                confirmText: _.intl.string(_.t.p89ACt),
                                cancelText: _.intl.string(_.t.oEAioF),
                                onConfirm: a,
                                confirmButtonColor: o.zx.Colors.RED,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: _.intl.string(_.t.iCK6G0),
                            }),
                        },
                    ),
                ),
            );
        }, [a, A]),
        P = i.useMemo(
            () =>
                null == v
                    ? []
                    : (0, d.B_)(n, {
                          blockId: v,
                          pageIndex: T,
                          responses: y,
                      }),
            [n, v, T, y],
        ),
        w = i.useCallback(() => {
            if (null == n || null == v) return;
            let e = (0, d.KZ)(n, {
                blockId: v,
                pageIndex: T,
                responses: y,
            });
            b(t, P), e.isComplete && l.ZP.submitSurveyResponse(t, y, {}), I(e.blockId), S(e.pageIndex), C(e.isComplete);
        }, [n, v, T, y, t, P, b]);
    i.useEffect(() => {
        0 === P.length && w();
    }, [P, w]);
    let D = (e) =>
            0 === P.length
                ? null
                : (0, r.jsx)("div", {
                      className: p.content,
                      children: P.map((t) => {
                          let n = e.Questions[t];
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    f.Z,
                                    {
                                        question: n,
                                        questionId: t,
                                        responses: y,
                                        onResponseChange: N,
                                    },
                                    t,
                                );
                      }),
                  }),
        x = i.useMemo(() => {
            if (A) return !1;
            for (let r of P) {
                var e, t;
                let i = n.Questions[r];
                if (
                    (null == i || null == (t = i.Validation) || null == (e = t.Settings) ? void 0 : e.ForceResponse) ===
                    "ON"
                ) {
                    let e = y[r];
                    if (null == e || "" === e.trim()) return !1;
                }
            }
            return !0;
        }, [A, P, n, y]),
        L = (0, r.jsxs)(s.xBx, {
            className: p.header,
            children: [
                (0, r.jsxs)("div", {
                    className: p.headerContent,
                    children: [
                        (0, r.jsx)(s.gw7, {
                            color: s.TVs.colors.HEADER_PRIMARY,
                            size: "custom",
                            width: 48,
                            height: 48,
                        }),
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: _.intl.string(_.t.OSqLUF),
                        }),
                    ],
                }),
                (0, r.jsx)(s.olH, { onClick: R }),
            ],
        });
    return A
        ? (0, r.jsxs)(s.IX, {
              transitionState: u,
              onClose: a,
              size: "lg",
              children: [
                  L,
                  (0, r.jsx)(s.fef, {
                      children: (0, r.jsx)("div", {
                          style: { width: "100%" },
                          children: (0, r.jsxs)("div", {
                              className: p.completeContent,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-lg/normal",
                                      children: _.intl.string(_.t["2scvdw"]),
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-lg/normal",
                                      children: _.intl.string(_.t.chZxOD),
                                  }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(s.Go$, {
                      actions: [
                          {
                              variant: "primary",
                              text: _.intl.string(_.t.i4jeWR),
                              onClick: a,
                          },
                      ],
                      actionsFullWidth: !0,
                  }),
              ],
          })
        : (0, r.jsxs)(s.IX, {
              transitionState: u,
              onClose: a,
              size: "lg",
              children: [
                  L,
                  (0, r.jsx)(s.fef, {
                      children: (0, r.jsx)("div", {
                          style: { width: "100%" },
                          children: D(n),
                      }),
                  }),
                  (0, r.jsx)(s.Go$, {
                      actions: [
                          {
                              variant: "primary",
                              text: _.intl.string(_.t.PDTjLN),
                              onClick: w,
                              disabled: !x,
                          },
                      ],
                      actionsFullWidth: !1,
                  }),
              ],
          });
}
async function y(e) {
    null != (await l.ZP.fetchSurveyDetails(e)) &&
        (c.H.getState().clearSurveyResponses(e),
        (0, s.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 126916));
                return (n) => (0, r.jsx)(t, E(m({}, n), { surveyId: e }));
            },
            {
                onCloseRequest: () => {},
            },
        ));
}
function O(e) {
    let { surveyId: t, onClose: n, transitionState: i } = e,
        o = (0, a.e7)([u.Z], () => u.Z.getSurvey(t));
    return null == o
        ? (0, r.jsx)(s.Text, {
              variant: "text-md/medium",
              className: p.loading,
              children: _.intl.string(_.t.MKDeyL),
          })
        : (0, r.jsx)(b, {
              surveyId: t,
              survey: o,
              onClose: n,
              transitionState: i,
          });
}
