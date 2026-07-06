"use strict";
n.d(t, { default: () => M });
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
    h = n(627575),
    f = n(393033),
    E = n(975571),
    p = n(379257),
    m = n(847599),
    g = n(295972),
    A = n(36149),
    I = n(731738),
    T = n(17928),
    S = n(807393),
    N = n(787301);
let C = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var y = n(40449),
    O = n(375708);
let R = function (e) {
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
                        u(t && C.getConfig({ location: "age_verification_methods" }).enabled));
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
                        ?.filter((e) => e !== y.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = y.uv[e];
                            if (null == t) return null;
                            let { title: n, description: i } = t;
                            return {
                                id: e,
                                title: O.intl.string(n),
                                description: O.intl.string(i),
                                onClick: async (t) => {
                                    (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.METHOD_SELECT, e), await o(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (l && null != i) {
                    let t = y.uv[y.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            ...e,
                            {
                                id: y.VF.GOOGLE_WALLET,
                                title: O.intl.string(t.title),
                                description: O.intl.string(t.description),
                                onClick: (e) => {
                                    S.A.increment({ name: I.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, m.St)(e, m.WU.EXPRESSIVE_PRIMARY, m._7.METHOD_SELECT, y.VF.GOOGLE_WALLET),
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
var v = n(652215),
    b = n(239093),
    L = n(516761),
    D = n(548416),
    w = n(700129);
function P(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, f.W$)()
        ? (0, i.jsx)(o.E, {
              variant: "text-xs/medium",
              children: O.intl.format(L.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      p.A.openUrl(b.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.LEARN_MORE);
                  },
              }),
          })
        : n === m.q1.SAFETY_FLOWS
          ? (0, i.jsx)(l.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: O.intl.string(O.t["2jxGer"]),
                onClick: () => {
                    (0, m.St)(t, m.WU.EXPRESSIVE_PRIMARY, m._7.LOG_OUT), (0, h.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let M = function (e) {
    let { transitionState: t, entryPoint: n, onClose: l, onComplete: h, dismissable: I, classificationId: T } = e,
        S = r.useMemo(() => (0, s.A)(), []),
        N = (0, f.W$)(),
        { loading: C, ageVerificationMethods: y } = R({
            onClose: () => {
                h?.(), l();
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
                    p.A.openUrl(E.A.getArticleURL(v.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, m.St)(S, m.WU.EXPRESSIVE_PRIMARY, m._7.LEARN_MORE);
                },
                N,
            ),
            actionBarInput: (0, i.jsx)(P, { modalSessionId: S, entryPoint: n }),
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
                        className: D.W,
                        children: [
                            (0, i.jsx)(c.m, { size: "lg", color: "currentColor" }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: O.intl.string(L.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == y || 0 === y.length
                        ? (0, i.jsxs)(u.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, i.jsx)(o.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: O.intl.string(L.default.cR6336),
                                  }),
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: O.intl.string(L.default.hDvmYP),
                                      onClick: () => {
                                          (0, g.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)(u.B, {
                              direction: "vertical",
                              gap: 8,
                              children: y.map((e) => {
                                  let { title: t, description: n, onClick: r } = e;
                                  return (0, i.jsx)(
                                      _.PQ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: C,
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
