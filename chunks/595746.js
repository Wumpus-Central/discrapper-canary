i.d(e, { default: () => k });
var n = i(477900),
    l = i(582128),
    r = i(132500),
    a = i(834730),
    o = i(123292),
    s = i(772707),
    E = i(331322),
    c = i(885574),
    d = i(821609),
    u = i(632738),
    _ = i(627575),
    m = i(393033),
    A = i(975571),
    g = i(379257),
    f = i(306537),
    L = i(295972),
    R = i(36149),
    S = i(731738),
    h = i(17928),
    p = i(807393),
    x = i(787301);
let O = (0, i(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var v = i(750481),
    I = i(40449),
    P = i(660183);
let T = function (t) {
    let { onClose: e, classificationId: i, onGoogleWalletSelect: n } = t,
        { methods: r, loading: a } = (0, h.cf)([x.A], () => ({ methods: x.A.methods, loading: x.A.loading })),
        { initiateAgeVerification: o } = (0, v.n)({
            onComplete: e,
            entryPoint: f.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: i,
        }),
        [s, E] = l.useState(!1);
    return (
        l.useEffect(() => {
            let t = !1;
            return (
                Promise.resolve(!1).then((e) => {
                    !t &&
                        (p.A.increment({ name: S.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${e}`] }),
                        E(e && O.getConfig({ location: "age_verification_methods" }).enabled));
                }),
                () => {
                    t = !0;
                }
            );
        }, []),
        l.useEffect(() => {
            null == r && (0, L.DJ)();
        }, [r]),
        {
            ageVerificationMethods: l.useMemo(() => {
                let t =
                    r
                        ?.filter((t) => t !== I.VF.GOOGLE_WALLET)
                        .map((t) => {
                            let e = I.uv[t];
                            if (null == e) return null;
                            let { title: i, description: n } = e;
                            return {
                                id: t,
                                title: P.intl.string(i),
                                description: P.intl.string(n),
                                onClick: async (e) => {
                                    ((0, f.St)(e, f.WU.EXPRESSIVE_PRIMARY, f._7.METHOD_SELECT, t), await o(t));
                                },
                            };
                        })
                        .filter((t) => null != t) ?? [];
                if (s && null != n) {
                    let e = I.uv[I.VF.GOOGLE_WALLET];
                    if (null != e)
                        return [
                            ...t,
                            {
                                id: I.VF.GOOGLE_WALLET,
                                title: P.intl.string(e.title),
                                description: P.intl.string(e.description),
                                onClick: (t) => {
                                    (p.A.increment({ name: S.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, f.St)(t, f.WU.EXPRESSIVE_PRIMARY, f._7.METHOD_SELECT, I.VF.GOOGLE_WALLET),
                                        n());
                                },
                            },
                        ];
                }
                return t;
            }, [r, s, n, o]),
            loading: a,
        }
    );
};
var C = i(652215),
    M = i(239093),
    W = i(799719),
    G = i(897345),
    b = i(700129);
function j(t) {
    let { modalSessionId: e, entryPoint: i } = t;
    return (0, m.W$)()
        ? (0, n.jsx)(a.E, {
              variant: "text-xs/medium",
              children: P.intl.format(W.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      (g.A.openUrl(M.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, f.St)(e, f.WU.EXPRESSIVE_PRIMARY, f._7.LEARN_MORE));
                  },
              }),
          })
        : i === f.q1.SAFETY_FLOWS
          ? (0, n.jsx)(o.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: P.intl.string(P.t["2jxGer"]),
                onClick: () => {
                    ((0, f.St)(e, f.WU.EXPRESSIVE_PRIMARY, f._7.LOG_OUT),
                        (0, _.k)("age_verification_get_started_modal"));
                },
            })
          : null;
}
let k = function (t) {
    let { transitionState: e, entryPoint: i, onClose: o, onComplete: _, dismissable: S, classificationId: h } = t,
        p = l.useMemo(() => (0, r.A)(), []),
        x = (0, m.W$)(),
        { loading: O, ageVerificationMethods: v } = T({
            onClose: () => {
                (_?.(), o());
            },
            classificationId: h,
        });
    return (
        l.useEffect(() => {
            (0, f.Bs)(p, f.WU.EXPRESSIVE_PRIMARY, i);
        }, [p, i]),
        (0, n.jsx)(s.k, {
            transitionState: e,
            onClose: o,
            gradientColor: "blue",
            dismissable: S,
            graphic: { type: "image", src: b.A },
            title: (0, R.ST)(i),
            subtitle: (0, R.mK)(
                i,
                () => {
                    (g.A.openUrl(A.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.St)(p, f.WU.EXPRESSIVE_PRIMARY, f._7.LEARN_MORE));
                },
                x,
            ),
            actionBarInput: (0, n.jsx)(j, { modalSessionId: p, entryPoint: i }),
            children: (0, n.jsxs)(E.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, n.jsxs)(E.B, {
                        fullWidth: !1,
                        direction: "horizontal",
                        gap: 8,
                        padding: { top: 8, bottom: 8, left: 12, right: 12 },
                        align: "center",
                        className: G.W,
                        children: [
                            (0, n.jsx)(c.CircleInformationIcon, { size: "lg", color: "currentColor" }),
                            (0, n.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: P.intl.string(W.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == v || 0 === v.length
                        ? (0, n.jsxs)(E.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, n.jsx)(a.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: P.intl.string(W.default.cR6336),
                                  }),
                                  (0, n.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: P.intl.string(W.default.hDvmYP),
                                      onClick: () => {
                                          (0, L.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, n.jsx)(E.B, {
                              direction: "vertical",
                              gap: 8,
                              children: v.map((t) => {
                                  let { title: e, description: i, onClick: l } = t;
                                  return (0, n.jsx)(
                                      u.PQ,
                                      {
                                          variant: "clickable",
                                          title: e,
                                          description: i,
                                          buttonDisabled: O,
                                          onButtonPress: () => l(p),
                                      },
                                      e,
                                  );
                              }),
                          }),
                ],
            }),
        })
    );
};
