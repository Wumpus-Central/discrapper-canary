n.r(t), n.d(t, { default: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(689628),
    a = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(393238),
    m = n(877604),
    p = n(998730),
    f = n(944163),
    g = n(480608),
    h = n(160404),
    x = n(703656),
    v = n(546247),
    _ = n(430824),
    j = n(768581),
    b = n(302221),
    O = n(549817),
    N = n(45966),
    y = n(819553),
    P = n(637853),
    C = n(71259),
    E = n(548473),
    Z = n(15320),
    D = n(973051),
    I = n(981631),
    T = n(388032),
    S = n(718215);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: l, height: w } = (0, u.ZP)(),
        k = (0, a.Wu)([N.Z], () => N.Z.getOnboardingPromptsForOnboarding(t)),
        A = (0, a.e7)([N.Z], () => N.Z.getEnabled(t)),
        B = (0, a.e7)([N.Z], () => N.Z.getConnections(t)),
        R = (0, a.e7)([f.Z], () => f.Z.getRulesPrompt(t)),
        L = i.useCallback(
            (e, n, r) => {
                O.Z.selectOption(t, e, n, r);
            },
            [t],
        ),
        F = i.useCallback(() => {
            O.Z.completeOnboarding(t, k);
        }, [t, k]),
        M = (0, a.e7)([_.Z], () => _.Z.getGuild(t)),
        V = i.useMemo(
            () =>
                null == M
                    ? null
                    : j.ZP.getGuildSplashURL({
                          id: M.id,
                          splash: M.splash,
                      }),
            [M],
        ),
        G = (0, p.N)(V),
        H = (0, a.e7)([y.ZP], () => y.ZP.getCurrentOnboardingStep(t)),
        [U, q] = i.useState(null != V ? null : "cover"),
        W = i.useCallback(
            (e) => {
                q(H), O.Z.setUserOnboardingStep(t, e);
            },
            [t, H],
        ),
        z = (0, a.e7)([h.Z], () => h.Z.isFullServerPreview(t)),
        J = (0, a.e7)([y.ZP], () => y.ZP.getOnboardingStatus(t)),
        X = null != k && k.length > 0,
        Y = i.useCallback(() => {
            (0, y.kp)(J) && A && (X || 0 !== B.length) ? (B.length > 0 ? W("connections") : W(0)) : F();
        }, [J, A, X, B.length, W, F]);
    i.useEffect(() => {
        if (!y.ZP.shouldShowOnboarding(t)) return d.Z.escapeToDefaultChannel(t);
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
        $ = y.ZP.shouldShowOnboarding(t),
        K = null == M;
    return (i.useEffect(() => {
        if (!$ || K) {
            let e = setTimeout(() => {
                (0, x.uL)(I.Z5c.CHANNEL(t));
            }, 1000);
            return () => clearTimeout(e);
        }
    }, [$, K, t]),
    y.ZP.shouldShowOnboarding(t) && null != M)
        ? (0, r.jsxs)("div", {
              className: o()(S.main, { [S.fullBorderWithGradient]: null == V }),
              ref: n,
              children: [
                  null != V
                      ? (0, r.jsx)(m.Z, {
                            className: S.artwork,
                            src: V,
                            width: l,
                            height: w,
                            imageClassName: S.cover,
                        })
                      : (0, r.jsx)(v.Z, {}),
                  null != G &&
                      (0, r.jsx)("div", {
                          className: S.gradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, b.aD)(G, 0.16), " 0%, ")
                                  .concat((0, b.aD)(G, 1), " 100%)"),
                          },
                      }),
                  null == V ? null : (0, r.jsx)("div", { className: S.gradient }),
                  Q((e, n, i) => {
                      let { key: l } = i;
                      return (0, r.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              children: (() => {
                                  switch (H) {
                                      case "cover":
                                          return (0, r.jsx)(E.ZP, {
                                              guild: M,
                                              onboardingStatus: y.uX.READY,
                                              onStart: Y,
                                              disableTracking: z,
                                          });
                                      case "connections":
                                          return (0, r.jsx)(C.Z, {
                                              guildId: t,
                                              isLastStep: 0 === k.length && !(0, P.O5)(M, R),
                                              onComplete: () => {
                                                  k.length > 0 ? W(0) : (0, P.O5)(M, R) ? W("rules") : F();
                                              },
                                          });
                                      case "rules":
                                          return (0, r.jsx)(D.Z, {
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
                                          return (0, r.jsx)(Z.Z, {
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
                          l,
                      );
                  }),
                  "cover" === H &&
                      (0, r.jsx)("div", {
                          className: S.bottomCenterContent,
                          children: (0, r.jsx)(c.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-secondary",
                              children: T.intl.format(T.t.kI6UoD, { privacyLink: I.EYA.PRIVACY }),
                          }),
                      }),
              ],
          })
        : null;
}
