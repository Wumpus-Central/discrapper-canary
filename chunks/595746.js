"use strict";
n.d(t, { default: () => k });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(772707),
    o = n(554146),
    l = n(834730),
    u = n(123292),
    c = n(331322),
    d = n(885574),
    _ = n(821609),
    f = n(131607),
    h = n(632738),
    p = n(627575),
    E = n(393033),
    m = n(732061),
    g = n(975571),
    A = n(139716),
    I = n(847599),
    T = n(295972),
    S = n(36149),
    N = n(731738),
    y = n(17928),
    C = n(807393),
    v = n(787301);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var R = n(40449),
    b = n(375708);
let D = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: i, onGoogleWalletSelect: s } = e,
        { methods: a, loading: o } = (0, y.cf)([v.A], () => ({ methods: v.A.methods, loading: v.A.loading })),
        { initiateAgeVerification: l } = (0, S.nn)({
            onComplete: t,
            entryPoint: I.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: i,
        }),
        u = O.useConfig({ location: "age_verification_methods" }).enabled,
        [c, d] = r.useState(!1);
    return (
        r.useEffect(() => {
            u &&
                Promise.resolve(!1).then((e) => {
                    C.A.increment({ name: N.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${e}`] }), d(e);
                });
        }, [u]),
        r.useEffect(() => {
            null == a && (0, T.DJ)();
        }, [a]),
        {
            ageVerificationMethods: r.useMemo(() => {
                let e =
                    a
                        ?.filter((e) => e !== R.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = R.uv[e];
                            if (null == t) return null;
                            let { title: i, description: r } = t;
                            return {
                                id: e,
                                title: b.intl.string(i),
                                description: b.intl.string(r),
                                onClick: async (t) => {
                                    (0, I.St)(t, I.WU.EXPRESSIVE_PRIMARY, I._7.METHOD_SELECT, e), n?.(), await l(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (u && c && null != s) {
                    let t = R.uv[R.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            {
                                id: R.VF.GOOGLE_WALLET,
                                title: b.intl.string(t.title),
                                description: b.intl.string(t.description),
                                onClick: (e) => {
                                    C.A.increment({ name: N.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, I.St)(e, I.WU.EXPRESSIVE_PRIMARY, I._7.METHOD_SELECT, R.VF.GOOGLE_WALLET),
                                        n?.(),
                                        s();
                                },
                            },
                            ...e,
                        ];
                }
                return e;
            }, [a, u, c, s, n, l]),
            loading: o,
        }
    );
};
var L = n(652215),
    w = n(239093),
    M = n(516761),
    P = n(548416),
    x = n(700129);
function U(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, E.W$)()
        ? (0, i.jsx)(l.E, {
              variant: "text-xs/medium",
              children: b.intl.format(M.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      A.A.openUrl(w.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, I.St)(t, I.WU.EXPRESSIVE_PRIMARY, I._7.LEARN_MORE);
                  },
              }),
          })
        : n === I.q1.SAFETY_FLOWS
          ? (0, i.jsx)(u.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: b.intl.string(b.t["2jxGer"]),
                onClick: () => {
                    (0, I.St)(t, I.WU.EXPRESSIVE_PRIMARY, I._7.LOG_OUT), (0, p.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let k = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: p, dismissable: N, classificationId: y } = e,
        [C, v] = r.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        O = r.useRef(C),
        [R, w] = (0, f.kn)([C], void 0, !0),
        k = r.useMemo(() => (0, s.A)(), []),
        G = r.useRef(!1),
        F = (0, E.W$)();
    r.useEffect(() => {
        O.current = R;
    }, [R]);
    let { loading: V, ageVerificationMethods: B } = D({
        onClose: () => {
            p?.(), u();
        },
        onMethodClick: () => {
            v(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: y,
    });
    return (
        r.useLayoutEffect(
            () => () => {
                if (G.current) return;
                let e = O.current;
                null != e &&
                    ((G.current = !0),
                    m.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, I.Bs)(k, I.WU.EXPRESSIVE_PRIMARY, n);
        }, [k, n]),
        (0, i.jsx)(a.k, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: N,
            graphic: { type: "image", src: x.A },
            title: (0, S.ST)(n),
            subtitle: (0, S.mK)(
                n,
                () => {
                    A.A.openUrl(g.A.getArticleURL(L.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, I.St)(k, I.WU.EXPRESSIVE_PRIMARY, I._7.LEARN_MORE);
                },
                F,
            ),
            actionBarInput: (0, i.jsx)(U, { modalSessionId: k, entryPoint: n }),
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
                        className: P.W,
                        children: [
                            (0, i.jsx)(d.m, { size: "lg", color: "currentColor" }),
                            (0, i.jsx)(l.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: b.intl.string(M.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == B || 0 === B.length
                        ? (0, i.jsxs)(c.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, i.jsx)(l.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: b.intl.string(M.default.cR6336),
                                  }),
                                  (0, i.jsx)(_.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: b.intl.string(M.default.hDvmYP),
                                      onClick: () => {
                                          (0, T.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)(c.B, {
                              direction: "vertical",
                              gap: 8,
                              children: B.map((e) => {
                                  let { title: t, description: n, onClick: r } = e;
                                  return (0, i.jsx)(
                                      h.PQ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: V,
                                          onButtonPress: () => r(k),
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
