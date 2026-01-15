n.r(t), n.d(t, { default: () => k }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    l = n(853590),
    s = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    p = n(393238),
    f = n(877604),
    m = n(998730),
    b = n(944163),
    g = n(480608),
    h = n(160404),
    x = n(703656),
    O = n(546247),
    j = n(430824),
    v = n(768581),
    y = n(302221),
    _ = n(549817),
    P = n(45966),
    N = n(819553),
    C = n(637853),
    E = n(71259),
    D = n(548473),
    I = n(15320),
    w = n(973051),
    S = n(981631),
    Z = n(388032),
    T = n(321347);
function k(e) {
    let { guildId: t } = e,
        { ref: o, width: k, height: A } = (0, p.ZP)(),
        B = (0, s.Wu)([P.Z], () => P.Z.getOnboardingPromptsForOnboarding(t)),
        R = (0, s.e7)([P.Z], () => P.Z.getEnabled(t)),
        L = (0, s.e7)([P.Z], () => P.Z.getConnections(t)),
        F = (0, s.e7)([b.Z], () => b.Z.getRulesPrompt(t)),
        M = i.useCallback(
            (e, n, r) => {
                _.Z.selectOption(t, e, n, r);
            },
            [t],
        ),
        G = i.useCallback(() => {
            _.Z.completeOnboarding(t, B);
        }, [t, B]),
        V = (0, s.e7)([j.Z], () => j.Z.getGuild(t)),
        H = i.useMemo(
            () =>
                null == V
                    ? null
                    : v.ZP.getGuildSplashURL({
                          id: V.id,
                          splash: V.splash,
                      }),
            [V],
        ),
        U = (0, m.N)(H),
        q = i.useRef(null),
        W = i.useCallback(
            (e) => {
                null != H &&
                    ((null != q.current && q.current.contains(e.target)) ||
                        (0, d.jW)(e, async () => {
                            let { default: e } = await n.e("89372").then(n.bind(n, 231477));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (i = i = { splashUrl: H }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n),
                                );
                            };
                        }));
            },
            [H],
        ),
        z = (0, s.e7)([N.ZP], () => N.ZP.getCurrentOnboardingStep(t)),
        [J, X] = i.useState(null != H ? null : "cover"),
        [Y, Q] = i.useState(!1),
        $ = i.useCallback(
            (e) => {
                X(z), _.Z.setUserOnboardingStep(t, e);
            },
            [t, z],
        ),
        K = (0, s.e7)([h.Z], () => h.Z.isFullServerPreview(t)),
        ee = (0, s.e7)([N.ZP], () => N.ZP.getOnboardingStatus(t)),
        et = null != B && B.length > 0,
        en = i.useCallback(() => {
            (0, N.kp)(ee) && R && (et || 0 !== L.length) ? (L.length > 0 ? $("connections") : $(0)) : G();
        }, [ee, R, et, L.length, $, G]);
    i.useEffect(() => {
        if (!N.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, g.E)(t);
    }, [t]);
    let er = (0, c.Yzy)(
            z,
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
            "cover" !== J && null !== J ? "animate-never" : "respect-motion-settings",
        ),
        ei = N.ZP.shouldShowOnboarding(t),
        eo = null == V;
    return (i.useEffect(() => {
        if (!ei || eo) {
            let e = setTimeout(() => {
                (0, x.uL)(S.Z5c.CHANNEL(t));
            }, 1000);
            return () => clearTimeout(e);
        }
    }, [ei, eo, t]),
    N.ZP.shouldShowOnboarding(t) && null != V)
        ? (0, r.jsxs)("div", {
              className: a()(T.main, { [T.fullBorderWithGradient]: null == H }),
              ref: o,
              onContextMenu: W,
              children: [
                  null != H
                      ? (0, r.jsx)(f.Z, {
                            className: T.artwork,
                            src: H,
                            width: k,
                            height: A,
                            imageClassName: T.cover,
                        })
                      : (0, r.jsx)(O.Z, {}),
                  null != U &&
                      (0, r.jsx)("div", {
                          className: T.gradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, y.aD)(U, 0.16), " 0%, ")
                                  .concat((0, y.aD)(U, 1), " 100%)"),
                          },
                      }),
                  null == H ? null : (0, r.jsx)("div", { className: T.gradient }),
                  (0, r.jsxs)("div", {
                      ref: q,
                      children: [
                          er((e, n, i) => {
                              let { key: o } = i;
                              return (0, r.jsx)(
                                  l.animated.div,
                                  {
                                      style: e,
                                      children: (() => {
                                          switch (z) {
                                              case "cover":
                                                  return (0, r.jsx)(D.ZP, {
                                                      guild: V,
                                                      onboardingStatus: N.uX.READY,
                                                      onStart: en,
                                                      disableTracking: K,
                                                  });
                                              case "connections":
                                                  return (0, r.jsx)(E.Z, {
                                                      guildId: t,
                                                      isLastStep: 0 === B.length && !(0, C.O5)(V, F),
                                                      isSubmitting: Y,
                                                      disableTracking: K,
                                                      onComplete: () => {
                                                          B.length > 0
                                                              ? $(0)
                                                              : (0, C.O5)(V, F)
                                                                ? $("rules")
                                                                : (Q(!0), G());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, r.jsx)(w.Z, {
                                                      setCurrentStep: $,
                                                      previousPromptIndex:
                                                          B.length > 0
                                                              ? B.length - 1
                                                              : L.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: V,
                                                      prompts: B,
                                                      completeOnboarding: G,
                                                      disableTracking: K,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, r.jsx)(I.Z, {
                                                      guild: V,
                                                      prompts: B,
                                                      step: z,
                                                      selectOption: M,
                                                      completeOnboarding: G,
                                                      setCurrentStep: $,
                                                      disableTracking: K,
                                                  });
                                          }
                                      })(),
                                  },
                                  o,
                              );
                          }),
                          "cover" === z &&
                              (0, r.jsx)("div", {
                                  className: T.bottomCenterContent,
                                  children: (0, r.jsx)(c.Heading, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      children: Z.intl.format(Z.t.kI6UoD, { privacyLink: S.EYA.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
