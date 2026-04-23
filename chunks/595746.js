n.d(t, { default: () => L });
var i = n(627968),
    s = n(64700),
    l = n(132500),
    a = n(772707),
    r = n(554146),
    o = n(834730),
    c = n(123292),
    u = n(331322),
    d = n(885574),
    p = n(821609),
    h = n(932001),
    m = n(632738),
    _ = n(627575),
    f = n(393033),
    g = n(732061),
    A = n(975571),
    x = n(139716),
    E = n(847599),
    C = n(295972),
    T = n(36149),
    S = n(731738),
    b = n(17928),
    v = n(831062),
    j = n(787301);
let I = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var y = n(40449),
    R = n(985018);
let N = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: i, onGoogleWalletSelect: l } = e,
        { methods: a, loading: r } = (0, b.cf)([j.A], () => ({ methods: j.A.methods, loading: j.A.loading })),
        { initiateAgeVerification: o } = (0, T.nn)({
            onComplete: t,
            entryPoint: E.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: i,
        }),
        c = I.useConfig({ location: "age_verification_methods" }).enabled,
        [u, d] = s.useState(!1);
    return (
        s.useEffect(() => {
            c &&
                Promise.resolve(!1).then((e) => {
                    v.A.increment({ name: S.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${e}`] }), d(e);
                });
        }, [c]),
        s.useEffect(() => {
            null == a && (0, C.DJ)();
        }, [a]),
        {
            ageVerificationMethods: s.useMemo(() => {
                let e =
                    a
                        ?.filter((e) => e !== y.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = y.uv[e];
                            if (null == t) return null;
                            let { title: i, description: s } = t;
                            return {
                                id: e,
                                title: R.intl.string(i),
                                description: R.intl.string(s),
                                onClick: async (t) => {
                                    (0, E.St)(t, E.WU.EXPRESSIVE_PRIMARY, E._7.METHOD_SELECT, e), n?.(), await o(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (c && u && null != l) {
                    let t = y.uv[y.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            {
                                id: y.VF.GOOGLE_WALLET,
                                title: R.intl.string(t.title),
                                description: R.intl.string(t.description),
                                onClick: (e) => {
                                    v.A.increment({ name: S.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, E.St)(e, E.WU.EXPRESSIVE_PRIMARY, E._7.METHOD_SELECT, y.VF.GOOGLE_WALLET),
                                        n?.(),
                                        l();
                                },
                            },
                            ...e,
                        ];
                }
                return e;
            }, [a, c, u, l, n, o]),
            loading: r,
        }
    );
};
var M = n(652215),
    O = n(239093),
    U = n(516761),
    k = n(548416),
    P = n(700129);
function w(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, f.W$)()
        ? (0, i.jsx)(o.E, {
              variant: "text-xs/medium",
              children: R.intl.format(U.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      x.A.openUrl(O.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, E.St)(t, E.WU.EXPRESSIVE_PRIMARY, E._7.LEARN_MORE);
                  },
              }),
          })
        : n === E.q1.SAFETY_FLOWS
          ? (0, i.jsx)(c.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: R.intl.string(R.t["2jxGer"]),
                onClick: () => {
                    (0, E.St)(t, E.WU.EXPRESSIVE_PRIMARY, E._7.LOG_OUT), (0, _.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let L = function (e) {
    let { transitionState: t, entryPoint: n, onClose: c, onComplete: _, dismissable: S, classificationId: b } = e,
        [v, j] = s.useState(r.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = s.useRef(v),
        [y, O] = (0, h.kn)([v], void 0, !0),
        L = s.useMemo(() => (0, l.A)(), []),
        D = s.useRef(!1),
        F = (0, f.W$)();
    s.useEffect(() => {
        I.current = y;
    }, [y]);
    let { loading: B, ageVerificationMethods: G } = N({
        onClose: () => {
            _?.(), c();
        },
        onMethodClick: () => {
            j(r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: b,
    });
    return (
        s.useLayoutEffect(
            () => () => {
                if (D.current) return;
                let e = I.current;
                null != e &&
                    ((D.current = !0),
                    g.A.maybeOpenAgeVerificationUserFeedback({
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
            onClose: c,
            gradientColor: "blue",
            dismissable: S,
            graphic: { type: "image", src: P.A },
            title: (0, T.ST)(n),
            subtitle: (0, T.mK)(
                n,
                () => {
                    x.A.openUrl(A.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, E.St)(L, E.WU.EXPRESSIVE_PRIMARY, E._7.LEARN_MORE);
                },
                F,
            ),
            actionBarInput: (0, i.jsx)(w, { modalSessionId: L, entryPoint: n }),
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
                        className: k.W,
                        children: [
                            (0, i.jsx)(d.m, { size: "lg", color: "currentColor" }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: R.intl.string(U.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == G || 0 === G.length
                        ? (0, i.jsxs)(u.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, i.jsx)(o.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: R.intl.string(U.default.cR6336),
                                  }),
                                  (0, i.jsx)(p.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: R.intl.string(U.default.hDvmYP),
                                      onClick: () => {
                                          (0, C.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)(u.B, {
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
