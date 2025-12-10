n.d(t, {
    default: () => O,
    q: () => y,
}),
    n(388685),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(588529),
    c = n(401302),
    u = n(841110),
    d = n(689946),
    f = n(207385),
    p = n(388032),
    _ = n(467250);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
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
    let { surveyId: t, survey: n, onClose: o, transitionState: u } = e,
        { getSurveyResponses: m, setResponse: g, trackDisplayedQuestions: b } = (0, c.H)(),
        y = m(t),
        O = (0, d.l6)(n),
        [v, S] = i.useState(O.blockId),
        [I, T] = i.useState(O.pageIndex),
        [C, A] = i.useState(!1),
        N = (e, n) => {
            g(t, e, n);
        },
        P = i.useCallback(
            () => (
                C
                    ? o()
                    : (0, s.h7j)((e) =>
                          (0, r.jsx)(
                              a.Modal,
                              E(
                                  h(
                                      {
                                          title: p.intl.string(p.t.T9Sx3z),
                                          actions: [
                                              {
                                                  variant: "secondary",
                                                  text: p.intl.string(p.t.oEAioF),
                                                  onClick: e.onClose,
                                              },
                                              {
                                                  variant: "critical-primary",
                                                  text: p.intl.string(p.t.p89ACt),
                                                  onClick: () => {
                                                      e.onClose(), o();
                                                  },
                                              },
                                          ],
                                      },
                                      e,
                                  ),
                                  {
                                      children: (0, r.jsx)(s.Text, {
                                          variant: "text-md/normal",
                                          children: p.intl.string(p.t.iCK6G0),
                                      }),
                                  },
                              ),
                          ),
                      ),
                Promise.resolve()
            ),
            [o, C],
        ),
        R = i.useMemo(
            () =>
                null == v
                    ? []
                    : (0, d.B_)(n, {
                          blockId: v,
                          pageIndex: I,
                          responses: y,
                      }),
            [n, v, I, y],
        ),
        D = i.useCallback(() => {
            if (null == n || null == v) return;
            let e = (0, d.KZ)(n, {
                blockId: v,
                pageIndex: I,
                responses: y,
            });
            b(t, R), e.isComplete && l.ZP.submitSurveyResponse(t, y), S(e.blockId), T(e.pageIndex), A(e.isComplete);
        }, [n, v, I, y, t, R, b]);
    i.useEffect(() => {
        0 === R.length && D();
    }, [R, D]);
    let w = (e) =>
            0 === R.length
                ? null
                : (0, r.jsx)("div", {
                      className: _.content,
                      children: R.map((t) => {
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
            if (C) return !1;
            for (let r of R) {
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
        }, [C, R, n, y]);
    return C
        ? (0, r.jsxs)(a.Modal, {
              transitionState: u,
              onClose: o,
              size: "md",
              title: p.intl.string(p.t.OSqLUF),
              actions: [
                  {
                      variant: "primary",
                      text: p.intl.string(p.t.i4jeWR),
                      onClick: o,
                  },
              ],
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: "text-md/normal",
                      children: p.intl.string(p.t["2scvdw"]),
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-md/normal",
                      children: p.intl.string(p.t.chZxOD),
                  }),
              ],
          })
        : (0, r.jsx)(a.Modal, {
              transitionState: u,
              onClose: P,
              title: p.intl.string(p.t.OSqLUF),
              size: "md",
              actions: [
                  {
                      variant: "primary",
                      text: p.intl.string(p.t.PDTjLN),
                      onClick: D,
                      disabled: !x,
                  },
              ],
              children: (0, r.jsx)("div", {
                  style: { width: "100%" },
                  children: w(n),
              }),
          });
}
async function y(e) {
    null != (await l.ZP.fetchSurveyDetails(e)) &&
        (c.H.getState().clearSurveyResponses(e),
        (0, s.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 126916));
                return (n) => (0, r.jsx)(t, E(h({}, n), { surveyId: e }));
            },
            {
                onCloseRequest: () => {},
            },
        ));
}
function O(e) {
    let { surveyId: t, onClose: n, transitionState: i } = e,
        a = (0, o.e7)([u.Z], () => u.Z.getSurvey(t));
    return null == a
        ? (0, r.jsx)(s.Text, {
              variant: "text-md/medium",
              className: _.loading,
              children: p.intl.string(p.t.MKDeyL),
          })
        : (0, r.jsx)(b, {
              surveyId: t,
              survey: a,
              onClose: n,
              transitionState: i,
          });
}
