n.r(t), n.d(t, { default: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    l = n(554916),
    s = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(393238),
    p = n(877604),
    f = n(998730),
    m = n(944163),
    b = n(480608),
    g = n(160404),
    h = n(703656),
    x = n(546247),
    v = n(430824),
    O = n(768581),
    j = n(302221),
    _ = n(549817),
    y = n(45966),
    N = n(819553),
    P = n(637853),
    C = n(71259),
    E = n(548473),
    D = n(15320),
    I = n(973051),
    S = n(981631),
    Z = n(388032),
    T = n(321347);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: w } = (0, u.ZP)(),
        k = (0, s.Wu)([y.Z], () => y.Z.getOnboardingPromptsForOnboarding(t)),
        A = (0, s.e7)([y.Z], () => y.Z.getEnabled(t)),
        B = (0, s.e7)([y.Z], () => y.Z.getConnections(t)),
        R = (0, s.e7)([m.Z], () => m.Z.getRulesPrompt(t)),
        L = i.useCallback(
            (e, n, r) => {
                _.Z.selectOption(t, e, n, r);
            },
            [t],
        ),
        F = i.useCallback(() => {
            _.Z.completeOnboarding(t, k);
        }, [t, k]),
        M = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        G = i.useMemo(
            () =>
                null == M
                    ? null
                    : O.ZP.getGuildSplashURL({
                          id: M.id,
                          splash: M.splash,
                      }),
            [M],
        ),
        V = (0, f.N)(G),
        H = (0, s.e7)([N.ZP], () => N.ZP.getCurrentOnboardingStep(t)),
        [U, q] = i.useState(null != G ? null : "cover"),
        [W, z] = i.useState(!1),
        J = i.useCallback(
            (e) => {
                q(H), _.Z.setUserOnboardingStep(t, e);
            },
            [t, H],
        ),
        X = (0, s.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
        Y = (0, s.e7)([N.ZP], () => N.ZP.getOnboardingStatus(t)),
        Q = null != k && k.length > 0,
        $ = i.useCallback(() => {
            (0, N.kp)(Y) && A && (Q || 0 !== B.length) ? (B.length > 0 ? J("connections") : J(0)) : F();
        }, [Y, A, Q, B.length, J, F]);
    i.useEffect(() => {
        if (!N.ZP.shouldShowOnboarding(t)) return d.Z.escapeToDefaultChannel(t);
        (0, b.E)(t);
    }, [t]);
    let K = (0, c.Yzy)(
            H,
            {
                config: l.config.default,
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
        ee = N.ZP.shouldShowOnboarding(t),
        et = null == M;
    return (i.useEffect(() => {
        if (!ee || et) {
            let e = setTimeout(() => {
                (0, h.uL)(S.Z5c.CHANNEL(t));
            }, 1000);
            return () => clearTimeout(e);
        }
    }, [ee, et, t]),
    N.ZP.shouldShowOnboarding(t) && null != M)
        ? (0, r.jsxs)("div", {
              className: a()(T.main, { [T.fullBorderWithGradient]: null == G }),
              ref: n,
              children: [
                  null != G
                      ? (0, r.jsx)(p.Z, {
                            className: T.artwork,
                            src: G,
                            width: o,
                            height: w,
                            imageClassName: T.cover,
                        })
                      : (0, r.jsx)(x.Z, {}),
                  null != V &&
                      (0, r.jsx)("div", {
                          className: T.gradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, j.aD)(V, 0.16), " 0%, ")
                                  .concat((0, j.aD)(V, 1), " 100%)"),
                          },
                      }),
                  null == G ? null : (0, r.jsx)("div", { className: T.gradient }),
                  K((e, n, i) => {
                      let { key: o } = i;
                      return (0, r.jsx)(
                          l.animated.div,
                          {
                              style: e,
                              children: (() => {
                                  switch (H) {
                                      case "cover":
                                          return (0, r.jsx)(E.ZP, {
                                              guild: M,
                                              onboardingStatus: N.uX.READY,
                                              onStart: $,
                                              disableTracking: X,
                                          });
                                      case "connections":
                                          return (0, r.jsx)(C.Z, {
                                              guildId: t,
                                              isLastStep: 0 === k.length && !(0, P.O5)(M, R),
                                              isSubmitting: W,
                                              disableTracking: X,
                                              onComplete: () => {
                                                  k.length > 0 ? J(0) : (0, P.O5)(M, R) ? J("rules") : (z(!0), F());
                                              },
                                          });
                                      case "rules":
                                          return (0, r.jsx)(I.Z, {
                                              setCurrentStep: J,
                                              previousPromptIndex:
                                                  k.length > 0 ? k.length - 1 : B.length > 0 ? "connections" : "cover",
                                              guild: M,
                                              prompts: k,
                                              completeOnboarding: F,
                                              disableTracking: X,
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
                                              setCurrentStep: J,
                                              disableTracking: X,
                                          });
                                  }
                              })(),
                          },
                          o,
                      );
                  }),
                  "cover" === H &&
                      (0, r.jsx)("div", {
                          className: T.bottomCenterContent,
                          children: (0, r.jsx)(c.Heading, {
                              variant: "heading-sm/normal",
                              color: "text-default",
                              children: Z.intl.format(Z.t.kI6UoD, { privacyLink: S.EYA.PRIVACY }),
                          }),
                      }),
              ],
          })
        : null;
}
