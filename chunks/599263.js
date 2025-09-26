n.r(t), n.d(t, { default: () => w }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(786920),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(393238),
    m = n(877604),
    f = n(998730),
    p = n(480608),
    h = n(160404),
    x = n(703656),
    g = n(546247),
    v = n(430824),
    j = n(768581),
    _ = n(302221),
    b = n(549817),
    O = n(45966),
    y = n(819553),
    N = n(548473),
    C = n(15320),
    P = n(973051),
    E = n(981631),
    Z = n(388032),
    I = n(718215);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: i, height: w } = (0, d.ZP)(),
        T = (0, s.Wu)([O.Z], () => O.Z.getOnboardingPromptsForOnboarding(t)),
        D = (0, s.e7)([O.Z], () => O.Z.getEnabled(t)),
        k = l.useCallback(
            (e, n, r) => {
                b.Z.selectOption(t, e, n, r);
            },
            [t],
        ),
        S = l.useCallback(() => {
            b.Z.completeOnboarding(t, T);
        }, [t, T]),
        R = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        A = l.useMemo(
            () =>
                null == R
                    ? null
                    : j.ZP.getGuildSplashURL({
                          id: R.id,
                          splash: R.splash,
                      }),
            [R],
        ),
        B = (0, f.N)(A),
        M = (0, s.e7)([y.ZP], () => y.ZP.getCurrentOnboardingStep(t)),
        [F, L] = l.useState(null != A ? null : "cover"),
        G = l.useCallback(
            (e) => {
                L(M), b.Z.setUserOnboardingStep(t, e);
            },
            [t, M],
        ),
        q = (0, s.e7)([h.Z], () => h.Z.isFullServerPreview(t)),
        V = (0, s.e7)([y.ZP], () => y.ZP.getOnboardingStatus(t)),
        U = null != T && T.length > 0,
        W = l.useCallback(() => {
            (0, y.kp)(V) && D && U ? G(0) : S();
        }, [V, D, U, G, S]);
    l.useEffect(() => {
        if (!y.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, p.E)(t);
    }, [t]);
    let H = (0, c.Yzy)(
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
        z = y.ZP.shouldShowOnboarding(t),
        X = null == R;
    return (l.useEffect(() => {
        if (!z || X) {
            let e = setTimeout(() => {
                (0, x.uL)(E.Z5c.CHANNEL(t));
            }, 1000);
            return () => clearTimeout(e);
        }
    }, [z, X, t]),
    y.ZP.shouldShowOnboarding(t) && null != R)
        ? (0, r.jsxs)("div", {
              className: a()(I.main, { [I.fullBorderWithGradient]: null == A }),
              ref: n,
              children: [
                  null != A
                      ? (0, r.jsx)(m.Z, {
                            className: I.artwork,
                            src: A,
                            width: i,
                            height: w,
                            imageClassName: I.cover,
                        })
                      : (0, r.jsx)(g.Z, {}),
                  null != B &&
                      (0, r.jsx)("div", {
                          className: I.gradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, _.aD)(B, 0.16), " 0%, ")
                                  .concat((0, _.aD)(B, 1), " 100%)"),
                          },
                      }),
                  null == A ? null : (0, r.jsx)("div", { className: I.gradient }),
                  H((e, t, n) => {
                      let { key: l } = n;
                      return (0, r.jsx)(
                          o.animated.div,
                          {
                              style: e,
                              children: (() => {
                                  switch (M) {
                                      case "cover":
                                          return (0, r.jsx)(N.ZP, {
                                              guild: R,
                                              onboardingStatus: y.uX.READY,
                                              onStart: W,
                                              disableTracking: q,
                                          });
                                      case "rules":
                                          return (0, r.jsx)(P.Z, {
                                              setCurrentStep: G,
                                              previousPromptIndex: T.length - 1,
                                              guild: R,
                                              prompts: T,
                                              completeOnboarding: S,
                                              disableTracking: q,
                                          });
                                      case null:
                                          return null;
                                      default:
                                          return (0, r.jsx)(C.Z, {
                                              guild: R,
                                              prompts: T,
                                              step: M,
                                              selectOption: k,
                                              completeOnboarding: S,
                                              setCurrentStep: G,
                                              disableTracking: q,
                                          });
                                  }
                              })(),
                          },
                          l,
                      );
                  }),
                  "cover" === M &&
                      (0, r.jsx)("div", {
                          className: I.bottomCenterContent,
                          children: (0, r.jsx)(c.X6q, {
                              variant: "heading-sm/normal",
                              color: "header-secondary",
                              children: Z.intl.format(Z.t.kI6UoK, { privacyLink: E.EYA.PRIVACY }),
                          }),
                      }),
              ],
          })
        : null;
}
