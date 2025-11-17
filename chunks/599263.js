n.r(t), n.d(t, { default: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(636606),
    a = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(393238),
    p = n(877604),
    m = n(998730),
    f = n(944163),
    g = n(480608),
    h = n(160404),
    x = n(703656),
    _ = n(546247),
    b = n(430824),
    v = n(768581),
    O = n(302221),
    j = n(549817),
    y = n(45966),
    N = n(819553),
    P = n(637853),
    C = n(71259),
    E = n(548473),
    D = n(15320),
    I = n(973051),
    Z = n(981631),
    T = n(388032),
    w = n(718215);
function S(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: S } = (0, u.ZP)(),
        k = (0, a.Wu)([y.Z], () => y.Z.getOnboardingPromptsForOnboarding(t)),
        A = (0, a.e7)([y.Z], () => y.Z.getEnabled(t)),
        B = (0, a.e7)([y.Z], () => y.Z.getConnections(t)),
        R = (0, a.e7)([f.Z], () => f.Z.getRulesPrompt(t)),
        L = i.useCallback(
            (e, n, r) => {
                j.Z.selectOption(t, e, n, r);
            },
            [t],
        ),
        F = i.useCallback(() => {
            j.Z.completeOnboarding(t, k);
        }, [t, k]),
        M = (0, a.e7)([b.Z], () => b.Z.getGuild(t)),
        G = i.useMemo(
            () =>
                null == M
                    ? null
                    : v.ZP.getGuildSplashURL({
                          id: M.id,
                          splash: M.splash,
                      }),
            [M],
        ),
        V = (0, m.N)(G),
        H = (0, a.e7)([N.ZP], () => N.ZP.getCurrentOnboardingStep(t)),
        [U, q] = i.useState(null != G ? null : "cover"),
        W = i.useCallback(
            (e) => {
                q(H), j.Z.setUserOnboardingStep(t, e);
            },
            [t, H],
        ),
        z = (0, a.e7)([h.Z], () => h.Z.isFullServerPreview(t)),
        J = (0, a.e7)([N.ZP], () => N.ZP.getOnboardingStatus(t)),
        X = null != k && k.length > 0,
        Y = i.useCallback(() => {
            (0, N.kp)(J) && A && (X || 0 !== B.length) ? (B.length > 0 ? W("connections") : W(0)) : F();
        }, [J, A, X, B.length, W, F]);
    i.useEffect(() => {
        if (!N.ZP.shouldShowOnboarding(t)) return d.Z.escapeToDefaultChannel(t);
        (0, g.E)(t);
    }, [t]);
    let Q = (0, c.Yzy)(
            H,
            {
                config: s.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0,
                },
                enter: {
                    scale: 1,
                    opacity: 1,
                },
            },
            "cover" !== U && null !== U ? "animate-never" : "respect-motion-settings",
        ),
        $ = N.ZP.shouldShowOnboarding(t),
        K = null == M;
    return (i.useEffect(() => {
        if (!$ || K) {
            let e = setTimeout(() => {
                (0, x.uL)(Z.Z5c.CHANNEL(t));
            }, 1000);
            return () => clearTimeout(e);
        }
    }, [$, K, t]),
    N.ZP.shouldShowOnboarding(t) && null != M)
        ? (0, r.jsxs)("div", {
              className: l()(w.main, { [w.fullBorderWithGradient]: null == G }),
              ref: n,
              children: [
                  null != G
                      ? (0, r.jsx)(p.Z, {
                            className: w.artwork,
                            src: G,
                            width: o,
                            height: S,
                            imageClassName: w.cover,
                        })
                      : (0, r.jsx)(_.Z, {}),
                  null != V &&
                      (0, r.jsx)("div", {
                          className: w.gradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, O.aD)(V, 0.16), " 0%, ")
                                  .concat((0, O.aD)(V, 1), " 100%)"),
                          },
                      }),
                  null == G ? null : (0, r.jsx)("div", { className: w.gradient }),
                  Q((e, n, i) => {
                      let { key: o } = i;
                      return (0, r.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              children: (() => {
                                  switch (H) {
                                      case "cover":
                                          return (0, r.jsx)(E.ZP, {
                                              guild: M,
                                              onboardingStatus: N.uX.READY,
                                              onStart: Y,
                                              disableTracking: z,
                                          });
                                      case "connections":
                                          return (0, r.jsx)(C.Z, {
                                              guildId: t,
                                              isLastStep: 0 === k.length && !(0, P.O5)(M, R),
                                              disableTracking: z,
                                              onComplete: () => {
                                                  k.length > 0 ? W(0) : (0, P.O5)(M, R) ? W("rules") : F();
                                              },
                                          });
                                      case "rules":
                                          return (0, r.jsx)(I.Z, {
                                              setCurrentStep: W,
                                              previousPromptIndex:
                                                  k.length > 0 ? k.length - 1 : B.length > 0 ? "connections" : "cover",
                                              guild: M,
                                              prompts: k,
                                              completeOnboarding: F,
                                              disableTracking: z,
                                          });
                                      case null:
                                          return null;
                                      default:
                                          return (0, r.jsx)(D.Z, {
                                              guild: M,
                                              prompts: k,
                                              step: H,
                                              selectOption: L,
                                              completeOnboarding: F,
                                              setCurrentStep: W,
                                              disableTracking: z,
                                          });
                                  }
                              })(),
                          },
                          o,
                      );
                  }),
                  "cover" === H &&
                      (0, r.jsx)("div", {
                          className: w.bottomCenterContent,
                          children: (0, r.jsx)(c.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-secondary",
                              children: T.intl.format(T.t.kI6UoD, { privacyLink: Z.EYA.PRIVACY }),
                          }),
                      }),
              ],
          })
        : null;
}
