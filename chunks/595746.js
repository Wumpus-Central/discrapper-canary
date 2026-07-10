"use strict";
n.d(t, { default: () => U });
var i = n(627968),
    r = n(64700),
    a = n(132500),
    s = n(772707),
    l = n(834730),
    o = n(123292),
    d = n(331322),
    c = n(885574),
    u = n(821609),
    _ = n(632738),
    E = n(627575),
    A = n(393033),
    h = n(975571),
    I = n(379257),
    f = n(847599),
    p = n(295972),
    T = n(36149),
    m = n(731738),
    g = n(17928),
    S = n(807393),
    N = n(787301);
let C = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var R = n(40449),
    O = n(375708);
let L = function (e) {
    let { onClose: t, classificationId: n, onGoogleWalletSelect: i } = e,
        { methods: a, loading: s } = (0, g.cf)([N.A], () => ({ methods: N.A.methods, loading: N.A.loading })),
        { initiateAgeVerification: l } = (0, T.nn)({
            onComplete: t,
            entryPoint: f.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: n,
        }),
        [o, d] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = !1;
            return (
                Promise.resolve(!1).then((t) => {
                    !e &&
                        (S.A.increment({ name: m.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${t}`] }),
                        d(t && C.getConfig({ location: "age_verification_methods" }).enabled));
                }),
                () => {
                    e = !0;
                }
            );
        }, []),
        r.useEffect(() => {
            null == a && (0, p.DJ)();
        }, [a]),
        {
            ageVerificationMethods: r.useMemo(() => {
                let e =
                    a
                        ?.filter((e) => e !== R.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = R.uv[e];
                            if (null == t) return null;
                            let { title: n, description: i } = t;
                            return {
                                id: e,
                                title: O.intl.string(n),
                                description: O.intl.string(i),
                                onClick: async (t) => {
                                    (0, f.St)(t, f.WU.EXPRESSIVE_PRIMARY, f._7.METHOD_SELECT, e), await l(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (o && null != i) {
                    let t = R.uv[R.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            ...e,
                            {
                                id: R.VF.GOOGLE_WALLET,
                                title: O.intl.string(t.title),
                                description: O.intl.string(t.description),
                                onClick: (e) => {
                                    S.A.increment({ name: m.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, f.St)(e, f.WU.EXPRESSIVE_PRIMARY, f._7.METHOD_SELECT, R.VF.GOOGLE_WALLET),
                                        i();
                                },
                            },
                        ];
                }
                return e;
            }, [a, o, i, l]),
            loading: s,
        }
    );
};
var D = n(652215),
    y = n(239093),
    v = n(432632),
    b = n(973632),
    M = n(700129);
function P(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, A.W$)()
        ? (0, i.jsx)(l.E, {
              variant: "text-xs/medium",
              children: O.intl.format(v.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      I.A.openUrl(y.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, f.St)(t, f.WU.EXPRESSIVE_PRIMARY, f._7.LEARN_MORE);
                  },
              }),
          })
        : n === f.q1.SAFETY_FLOWS
          ? (0, i.jsx)(o.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: O.intl.string(O.t["2jxGer"]),
                onClick: () => {
                    (0, f.St)(t, f.WU.EXPRESSIVE_PRIMARY, f._7.LOG_OUT), (0, E.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let U = function (e) {
    let { transitionState: t, entryPoint: n, onClose: o, onComplete: E, dismissable: m, classificationId: g } = e,
        S = r.useMemo(() => (0, a.A)(), []),
        N = (0, A.W$)(),
        { loading: C, ageVerificationMethods: R } = L({
            onClose: () => {
                E?.(), o();
            },
            classificationId: g,
        });
    return (
        r.useEffect(() => {
            (0, f.Bs)(S, f.WU.EXPRESSIVE_PRIMARY, n);
        }, [S, n]),
        (0, i.jsx)(s.k, {
            transitionState: t,
            onClose: o,
            gradientColor: "blue",
            dismissable: m,
            graphic: { type: "image", src: M.A },
            title: (0, T.ST)(n),
            subtitle: (0, T.mK)(
                n,
                () => {
                    I.A.openUrl(h.A.getArticleURL(D.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.St)(S, f.WU.EXPRESSIVE_PRIMARY, f._7.LEARN_MORE);
                },
                N,
            ),
            actionBarInput: (0, i.jsx)(P, { modalSessionId: S, entryPoint: n }),
            children: (0, i.jsxs)(d.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, i.jsxs)(d.B, {
                        fullWidth: !1,
                        direction: "horizontal",
                        gap: 8,
                        padding: { top: 8, bottom: 8, left: 12, right: 12 },
                        align: "center",
                        className: b.W,
                        children: [
                            (0, i.jsx)(c.m, { size: "lg", color: "currentColor" }),
                            (0, i.jsx)(l.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: O.intl.string(v.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == R || 0 === R.length
                        ? (0, i.jsxs)(d.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, i.jsx)(l.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: O.intl.string(v.default.cR6336),
                                  }),
                                  (0, i.jsx)(u.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: O.intl.string(v.default.hDvmYP),
                                      onClick: () => {
                                          (0, p.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)(d.B, {
                              direction: "vertical",
                              gap: 8,
                              children: R.map((e) => {
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
