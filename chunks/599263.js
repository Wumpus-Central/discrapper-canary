n.r(t), n.d(t, { default: () => w }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(358458),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(393238),
    m = n(877604),
    f = n(998730),
    p = n(480608),
    h = n(160404),
    g = n(703656),
    x = n(546247),
    v = n(430824),
    j = n(768581),
    _ = n(302221),
    b = n(549817),
    O = n(45966),
    y = n(819553),
    N = n(548473),
    C = n(15320),
    E = n(973051),
    P = n(981631),
    I = n(388032),
    Z = n(718215);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: i, height: w } = (0, d.ZP)(),
        T = (0, s.Wu)([O.Z], () => O.Z.getOnboardingPromptsForOnboarding(t)),
        D = (0, s.e7)([O.Z], () => O.Z.getEnabled(t)),
        S = l.useCallback(
            (e, n, r) => {
                b.Z.selectOption(t, e, n, r);
            },
            [t],
        ),
        R = l.useCallback(() => {
            b.Z.completeOnboarding(t, T);
        }, [t, T]),
        A = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        B = l.useMemo(
            () =>
                null == A
                    ? null
                    : j.ZP.getGuildSplashURL({
                          id: A.id,
                          splash: A.splash,
                      }),
            [A],
        ),
        k = (0, f.N)(B),
        M = (0, s.e7)([y.ZP], () => y.ZP.getCurrentOnboardingStep(t)),
        [F, L] = l.useState(null != B ? null : "cover"),
        G = l.useCallback(
            (e) => {
                L(M), b.Z.setUserOnboardingStep(t, e);
            },
            [t, M],
        ),
        V = (0, s.e7)([h.Z], () => h.Z.isFullServerPreview(t)),
        H = (0, s.e7)([y.ZP], () => y.ZP.getOnboardingStatus(t)),
        U = null != T && T.length > 0,
        W = l.useCallback(() => {
            (0, y.kp)(H) && D && U ? G(0) : R();
        }, [H, D, U, G, R]);
    l.useEffect(() => {
        if (!y.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, p.E)(t);
    }, [t]);
    let q = (0, c.Yzy)(
            M,
            {
                config: o.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0,
                },
                enter: {
                    scale: 1,
                    opacity: 1,
                },
            },
            "cover" !== F && null !== F ? "animate-never" : "respect-motion-settings",
        ),
        J = y.ZP.shouldShowOnboarding(t),
        z = null == A;
    return (l.useEffect(() => {
        if (!J || z) {
            let e = setTimeout(() => {
                (0, g.uL)(P.Z5c.CHANNEL(t));
            }, 1000);
            return () => clearTimeout(e);
        }
    }, [J, z, t]),
    y.ZP.shouldShowOnboarding(t) && null != A)
        ? (0, r.jsxs)("div", {
              className: a()(Z.main, { [Z.fullBorderWithGradient]: null == B }),
              ref: n,
              children: [
                  null != B
                      ? (0, r.jsx)(m.Z, {
                            className: Z.artwork,
                            src: B,
                            width: i,
                            height: w,
                            imageClassName: Z.cover,
                        })
                      : (0, r.jsx)(x.Z, {}),
                  null != k &&
                      (0, r.jsx)("div", {
                          className: Z.gradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, _.aD)(k, 0.16), " 0%, ")
                                  .concat((0, _.aD)(k, 1), " 100%)"),
                          },
                      }),
                  null == B ? null : (0, r.jsx)("div", { className: Z.gradient }),
                  q((e, t, n) => {
                      let { key: l } = n;
                      return (0, r.jsx)(
                          o.animated.div,
                          {
                              style: e,
                              children: (() => {
                                  switch (M) {
                                      case "cover":
                                          return (0, r.jsx)(N.ZP, {
                                              guild: A,
                                              onboardingStatus: y.uX.READY,
                                              onStart: W,
                                              disableTracking: V,
                                          });
                                      case "rules":
                                          return (0, r.jsx)(E.Z, {
                                              setCurrentStep: G,
                                              previousPromptIndex: T.length - 1,
                                              guild: A,
                                              prompts: T,
                                              completeOnboarding: R,
                                              disableTracking: V,
                                          });
                                      case null:
                                          return null;
                                      default:
                                          return (0, r.jsx)(C.Z, {
                                              guild: A,
                                              prompts: T,
                                              step: M,
                                              selectOption: S,
                                              completeOnboarding: R,
                                              setCurrentStep: G,
                                              disableTracking: V,
                                          });
                                  }
                              })(),
                          },
                          l,
                      );
                  }),
                  "cover" === M &&
                      (0, r.jsx)("div", {
                          className: Z.bottomCenterContent,
                          children: (0, r.jsx)(c.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-secondary",
                              children: I.intl.format(I.t.kI6UoD, { privacyLink: P.EYA.PRIVACY }),
                          }),
                      }),
              ],
          })
        : null;
}
