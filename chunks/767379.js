n.d(t, { default: () => O });
var i = n(627968),
    s = n(64700),
    l = n(835245),
    a = n(772707),
    r = n(554146),
    o = n(834730),
    d = n(123292),
    c = n(331322),
    u = n(885574),
    p = n(821609),
    h = n(932001),
    m = n(632738),
    _ = n(627575),
    A = n(393033),
    f = n(105428),
    g = n(975571),
    x = n(935649),
    E = n(847599),
    C = n(295972),
    T = n(36149),
    v = n(807734),
    S = n(652215),
    b = n(239093),
    j = n(516761),
    I = n(985018),
    R = n(548416),
    N = n(700129);
function y(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, A.W$)()
        ? (0, i.jsx)(o.E, {
              variant: "text-xs/medium",
              children: I.intl.format(j.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      x.A.openUrl(b.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, E.St)(t, E.WU.EXPRESSIVE_PRIMARY, E._7.LEARN_MORE);
                  },
              }),
          })
        : n === E.q1.SAFETY_FLOWS
          ? (0, i.jsx)(d.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: I.intl.string(I.t["2jxGer"]),
                onClick: () => {
                    (0, E.St)(t, E.WU.EXPRESSIVE_PRIMARY, E._7.LOG_OUT), (0, _.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let O = function (e) {
    let { transitionState: t, entryPoint: n, onClose: d, onComplete: _, dismissable: b, classificationId: O } = e,
        [M, U] = s.useState(r.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        k = s.useRef(M),
        [P, w] = (0, h.kn)([M], void 0, !0),
        L = s.useMemo(() => (0, l.A)(), []),
        D = s.useRef(!1),
        F = (0, A.W$)();
    s.useEffect(() => {
        k.current = P;
    }, [P]);
    let { loading: B, ageVerificationMethods: G } = (0, v.A)({
        onClose: () => {
            _?.(), d();
        },
        onMethodClick: () => {
            U(r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: O,
    });
    return (
        s.useLayoutEffect(
            () => () => {
                if (D.current) return;
                let e = k.current;
                null != e &&
                    ((D.current = !0),
                    f.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        s.useEffect(() => {
            (0, E.Bs)(L, E.WU.EXPRESSIVE_PRIMARY, n);
        }, [L, n]),
        (0, i.jsx)(a.k, {
            transitionState: t,
            onClose: d,
            gradientColor: "blue",
            dismissable: b,
            graphic: { type: "image", src: N.A },
            title: (0, T.ST)(n),
            subtitle: (0, T.mK)(
                n,
                () => {
                    x.A.openUrl(g.A.getArticleURL(S.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, E.St)(L, E.WU.EXPRESSIVE_PRIMARY, E._7.LEARN_MORE);
                },
                F,
            ),
            actionBarInput: (0, i.jsx)(y, { modalSessionId: L, entryPoint: n }),
            children: (0, i.jsxs)(c.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, i.jsxs)(c.B, {
                        fullWidth: !1,
                        direction: "horizontal",
                        gap: 8,
                        padding: { top: 8, bottom: 8, left: 12, right: 12 },
                        align: "center",
                        className: R.W,
                        children: [
                            (0, i.jsx)(u.m, { size: "lg", color: "currentColor" }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: I.intl.string(j.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == G || 0 === G.length
                        ? (0, i.jsxs)(c.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, i.jsx)(o.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: I.intl.string(j.default.cR6336),
                                  }),
                                  (0, i.jsx)(p.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: I.intl.string(j.default.hDvmYP),
                                      onClick: () => {
                                          (0, C.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)(c.B, {
                              direction: "vertical",
                              gap: 8,
                              children: G.map((e) => {
                                  let { title: t, description: n, onClick: s } = e;
                                  return (0, i.jsx)(
                                      m.PQ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: B,
                                          onButtonPress: () => s(L),
                                      },
                                      t,
                                  );
                              }),
                          }),
                ],
            }),
        })
    );
};
