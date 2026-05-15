"use strict";
n.d(t, { default: () => P });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(772707),
    o = n(834730),
    l = n(123292),
    u = n(331322),
    c = n(885574),
    d = n(821609),
    _ = n(632738),
    f = n(627575),
    h = n(393033),
    p = n(975571),
    E = n(139716),
    m = n(847599),
    g = n(295972),
    A = n(36149),
    I = n(731738),
    T = n(17928),
    S = n(807393),
    N = n(787301);
let y = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var C = n(40449),
    v = n(375708);
let O = function (e) {
    let { onClose: t, classificationId: n, onGoogleWalletSelect: i } = e,
        { methods: s, loading: a } = (0, T.cf)([N.A], () => ({ methods: N.A.methods, loading: N.A.loading })),
        { initiateAgeVerification: o } = (0, A.nn)({
            onComplete: t,
            entryPoint: m.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: n,
        }),
        [l, u] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = !1;
            return (
                Promise.resolve(!1).then((t) => {
                    !e &&
                        (S.A.increment({ name: I.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${t}`] }),
                        u(t && y.getConfig({ location: "age_verification_methods" }).enabled));
                }),
                () => {
                    e = !0;
                }
            );
        }, []),
        r.useEffect(() => {
            null == s && (0, g.DJ)();
        }, [s]),
        {
            ageVerificationMethods: r.useMemo(() => {
                let e =
                    s
                        ?.filter((e) => e !== C.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = C.uv[e];
                            if (null == t) return null;
                            let { title: n, description: i } = t;
                            return {
                                id: e,
                                title: v.intl.string(n),
                                description: v.intl.string(i),
                                onClick: async (t) => {
                                    (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.METHOD_SELECT, e), await o(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (l && null != i) {
                    let t = C.uv[C.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            ...e,
                            {
                                id: C.VF.GOOGLE_WALLET,
                                title: v.intl.string(t.title),
                                description: v.intl.string(t.description),
                                onClick: (e) => {
                                    S.A.increment({ name: I.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, m.St)(e, m.WU.EXPRESSIVE_PRIMARY, m._7.METHOD_SELECT, C.VF.GOOGLE_WALLET),
                                        i();
                                },
                            },
                        ];
                }
                return e;
            }, [s, l, i, o]),
            loading: a,
        }
    );
};
var R = n(652215),
    b = n(239093),
    D = n(516761),
    L = n(548416),
    w = n(700129);
function M(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, h.W$)()
        ? (0, i.jsx)(o.E, {
              variant: "text-xs/medium",
              children: v.intl.format(D.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      E.A.openUrl(b.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.LEARN_MORE);
                  },
              }),
          })
        : n === m.q1.SAFETY_FLOWS
          ? (0, i.jsx)(l.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: v.intl.string(v.t["2jxGer"]),
                onClick: () => {
                    (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.LOG_OUT), (0, f.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let P = function (e) {
    let { transitionState: t, entryPoint: n, onClose: l, onComplete: f, dismissable: I, classificationId: T } = e,
        S = r.useMemo(() => (0, s.A)(), []),
        N = (0, h.W$)(),
        { loading: y, ageVerificationMethods: C } = O({
            onClose: () => {
                f?.(), l();
            },
            classificationId: T,
        });
    return (
        r.useEffect(() => {
            (0, m.Bs)(S, m.WU.EXPRESSIVE_PRIMARY, n);
        }, [S, n]),
        (0, i.jsx)(a.k, {
            transitionState: t,
            onClose: l,
            gradientColor: "blue",
            dismissable: I,
            graphic: { type: "image", src: w.A },
            title: (0, A.ST)(n),
            subtitle: (0, A.mK)(
                n,
                () => {
                    E.A.openUrl(p.A.getArticleURL(R.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, m.St)(S, m.WU.EXPRESSIVE_PRIMARY, m._7.LEARN_MORE);
                },
                N,
            ),
            actionBarInput: (0, i.jsx)(M, { modalSessionId: S, entryPoint: n }),
            children: (0, i.jsxs)(u.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, i.jsxs)(u.B, {
                        fullWidth: !1,
                        direction: "horizontal",
                        gap: 8,
                        padding: { top: 8, bottom: 8, left: 12, right: 12 },
                        align: "center",
                        className: L.W,
                        children: [
                            (0, i.jsx)(c.m, { size: "lg", color: "currentColor" }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: v.intl.string(D.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == C || 0 === C.length
                        ? (0, i.jsxs)(u.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, i.jsx)(o.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: v.intl.string(D.default.cR6336),
                                  }),
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: v.intl.string(D.default.hDvmYP),
                                      onClick: () => {
                                          (0, g.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)(u.B, {
                              direction: "vertical",
                              gap: 8,
                              children: C.map((e) => {
                                  let { title: t, description: n, onClick: r } = e;
                                  return (0, i.jsx)(
                                      _.PQ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: y,
                                          onButtonPress: () => r(S),
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
