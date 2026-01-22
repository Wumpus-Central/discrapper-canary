n.r(t),
    n.d(t, {
        default: () => T,
    }),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    c = n(108531),
    a = n(311907),
    o = n(397927),
    d = n(442433),
    u = n(686956),
    f = n(765671),
    p = n(4616),
    b = n(743674),
    m = n(60175),
    g = n(545868),
    O = n(164956),
    x = n(976860),
    h = n(426660),
    j = n(71393),
    v = n(486020),
    y = n(998304),
    _ = n(669953),
    A = n(591552),
    N = n(713125),
    P = n(961973),
    E = n(783153),
    D = n(133266),
    w = n(912417),
    S = n(710434),
    C = n(652215),
    I = n(985018),
    k = n(22004);

function T(e) {
    let { guildId: t } = e,
        { ref: l, width: T, height: R } = (0, f.Ay)(),
        G = (0, a.yK)([A.A], () => A.A.getOnboardingPromptsForOnboarding(t)),
        L = (0, a.bG)([A.A], () => A.A.getEnabled(t)),
        H = (0, a.bG)([A.A], () => A.A.getConnections(t)),
        V = (0, a.bG)([m.A], () => m.A.getRulesPrompt(t)),
        F = i.useCallback(
            (e, n, r) => {
                _.A.selectOption(t, e, n, r);
            },
            [t],
        ),
        M = i.useCallback(() => {
            _.A.completeOnboarding(t, G);
        }, [t, G]),
        B = (0, a.bG)([j.A], () => j.A.getGuild(t)),
        q = i.useMemo(
            () =>
                null == B
                    ? null
                    : v.Ay.getGuildSplashURL({
                          id: B.id,
                          splash: B.splash,
                      }),
            [B],
        ),
        U = (0, b.S)(q),
        K = i.useRef(null),
        $ = i.useCallback(
            (e) => {
                null == q ||
                    (null != K.current && K.current.contains(e.target)) ||
                    (0, d.L3)(e, async () => {
                        let { default: e } = await n.e("95813").then(n.bind(n, 755319));
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
                                (i = i =
                                    {
                                        splashUrl: q,
                                    }),
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
                    });
            },
            [q],
        ),
        J = (0, a.bG)([N.Ay], () => N.Ay.getCurrentOnboardingStep(t)),
        [W, X] = i.useState(null != q ? null : "cover"),
        [z, Q] = i.useState(!1),
        Z = i.useCallback(
            (e) => {
                X(J), _.A.setUserOnboardingStep(t, e);
            },
            [t, J],
        ),
        Y = (0, a.bG)([O.A], () => O.A.isFullServerPreview(t)),
        ee = (0, a.bG)([N.Ay], () => N.Ay.getOnboardingStatus(t)),
        et = null != G && G.length > 0,
        en = i.useCallback(() => {
            (0, N.eg)(ee) && L && (et || 0 !== H.length) ? (H.length > 0 ? Z("connections") : Z(0)) : M();
        }, [ee, L, et, H.length, Z, M]);
    i.useEffect(() => {
        if (!N.Ay.shouldShowOnboarding(t)) return u.A.escapeToDefaultChannel(t);
        (0, g.L)(t);
    }, [t]);
    let er = (0, o.pnh)(
            J,
            {
                config: c.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0,
                },
                enter: {
                    scale: 1,
                    opacity: 1,
                },
            },
            "cover" !== W && null !== W ? "animate-never" : "respect-motion-settings",
        ),
        ei = N.Ay.shouldShowOnboarding(t),
        el = null == B;
    return (i.useEffect(() => {
        if (!ei || el) {
            let e = setTimeout(() => {
                (0, x.pX)(C.BVt.CHANNEL(t));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [ei, el, t]),
    N.Ay.shouldShowOnboarding(t) && null != B)
        ? (0, r.jsxs)("div", {
              className: s()(k.iW, {
                  [k.Me]: null == q,
              }),
              ref: l,
              onContextMenu: $,
              children: [
                  null != q
                      ? (0, r.jsx)(p.A, {
                            className: k.xX,
                            src: q,
                            width: T,
                            height: R,
                            imageClassName: k.Iv,
                        })
                      : (0, r.jsx)(h.A, {}),
                  null != U &&
                      (0, r.jsx)("div", {
                          className: k.D7,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, y.cb)(U, 0.16), " 0%, ")
                                  .concat((0, y.cb)(U, 1), " 100%)"),
                          },
                      }),
                  null == q
                      ? null
                      : (0, r.jsx)("div", {
                            className: k.D7,
                        }),
                  (0, r.jsxs)("div", {
                      ref: K,
                      children: [
                          er((e, n, i) => {
                              let { key: l } = i;
                              return (0, r.jsx)(
                                  c.animated.div,
                                  {
                                      style: e,
                                      children: (() => {
                                          switch (J) {
                                              case "cover":
                                                  return (0, r.jsx)(D.Ay, {
                                                      guild: B,
                                                      onboardingStatus: N.$o.READY,
                                                      onStart: en,
                                                      disableTracking: Y,
                                                  });
                                              case "connections":
                                                  return (0, r.jsx)(E.A, {
                                                      guildId: t,
                                                      isLastStep: 0 === G.length && !(0, P.L1)(B, V),
                                                      isSubmitting: z,
                                                      disableTracking: Y,
                                                      onComplete: () => {
                                                          G.length > 0
                                                              ? Z(0)
                                                              : (0, P.L1)(B, V)
                                                                ? Z("rules")
                                                                : (Q(!0), M());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, r.jsx)(S.A, {
                                                      setCurrentStep: Z,
                                                      previousPromptIndex:
                                                          G.length > 0
                                                              ? G.length - 1
                                                              : H.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: B,
                                                      prompts: G,
                                                      completeOnboarding: M,
                                                      disableTracking: Y,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, r.jsx)(w.A, {
                                                      guild: B,
                                                      prompts: G,
                                                      step: J,
                                                      selectOption: F,
                                                      completeOnboarding: M,
                                                      setCurrentStep: Z,
                                                      disableTracking: Y,
                                                  });
                                          }
                                      })(),
                                  },
                                  l,
                              );
                          }),
                          "cover" === J &&
                              (0, r.jsx)("div", {
                                  className: k.m6,
                                  children: (0, r.jsx)(o.Heading, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      children: I.intl.format(I.t.kI6UoD, {
                                          privacyLink: C.X7G.PRIVACY,
                                      }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
