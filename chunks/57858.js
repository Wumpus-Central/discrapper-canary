n.r(t), n.d(t, { default: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(880013),
    o = n(311907),
    c = n(397927),
    d = n(442433),
    u = n(686956),
    m = n(765671),
    _ = n(4616),
    x = n(743674),
    p = n(60175),
    g = n(545868),
    h = n(164956),
    f = n(976860),
    A = n(426660),
    v = n(71393),
    N = n(486020),
    j = n(998304),
    b = n(669953),
    E = n(591552),
    C = n(713125),
    I = n(961973),
    O = n(783153),
    T = n(133266),
    y = n(912417),
    D = n(710434),
    S = n(652215),
    P = n(985018),
    k = n(449434);
function R(e) {
    let { guildId: t } = e,
        { ref: l, width: R, height: L } = (0, m.Ay)(),
        G = (0, o.yK)([E.A], () => E.A.getOnboardingPromptsForOnboarding(t)),
        H = (0, o.bG)([E.A], () => E.A.getEnabled(t)),
        w = (0, o.bG)([E.A], () => E.A.getConnections(t)),
        B = (0, o.bG)([p.A], () => p.A.getRulesPrompt(t)),
        V = s.useCallback(
            (e, n, i) => {
                b.A.selectOption(t, e, n, i);
            },
            [t],
        ),
        F = s.useCallback(() => {
            b.A.completeOnboarding(t, G);
        }, [t, G]),
        M = (0, o.bG)([v.A], () => v.A.getGuild(t)),
        q = s.useMemo(() => (null == M ? null : N.Ay.getGuildSplashURL({ id: M.id, splash: M.splash })), [M]),
        U = (0, x.S)(q),
        $ = s.useRef(null),
        K = s.useCallback(
            (e) => {
                null == q ||
                    (null != $.current && $.current.contains(e.target)) ||
                    (0, d.L3)(e, async () => {
                        let { default: e } = await n.e("95813").then(n.bind(n, 755319));
                        return (t) => (0, i.jsx)(e, { ...t, splashUrl: q });
                    });
            },
            [q],
        ),
        J = (0, o.bG)([C.Ay], () => C.Ay.getCurrentOnboardingStep(t)),
        [W, X] = s.useState(null != q ? null : "cover"),
        [z, Q] = s.useState(!1),
        Z = s.useCallback(
            (e) => {
                X(J), b.A.setUserOnboardingStep(t, e);
            },
            [t, J],
        ),
        Y = (0, o.bG)([h.A], () => h.A.isFullServerPreview(t)),
        ee = (0, o.bG)([C.Ay], () => C.Ay.getOnboardingStatus(t)),
        et = null != G && G.length > 0,
        en = s.useCallback(() => {
            (0, C.eg)(ee) && H && (et || 0 !== w.length) ? (w.length > 0 ? Z("connections") : Z(0)) : F();
        }, [ee, H, et, w.length, Z, F]);
    s.useEffect(() => {
        if (!C.Ay.shouldShowOnboarding(t)) return u.A.escapeToDefaultChannel(t);
        (0, g.L)(t);
    }, [t]);
    let ei = (0, c.pnh)(
            J,
            { config: a.config.default, from: { scale: 0.8, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
            "cover" !== W && null !== W ? "animate-never" : "respect-motion-settings",
        ),
        es = C.Ay.shouldShowOnboarding(t),
        el = null == M;
    return (s.useEffect(() => {
        if (!es || el) {
            let e = setTimeout(() => {
                (0, f.pX)(S.BVt.CHANNEL(t));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [es, el, t]),
    C.Ay.shouldShowOnboarding(t) && null != M)
        ? (0, i.jsxs)("div", {
              className: r()(k.iW, { [k.Me]: null == q }),
              ref: l,
              onContextMenu: K,
              children: [
                  null != q
                      ? (0, i.jsx)(_.A, { className: k.xX, src: q, width: R, height: L, imageClassName: k.Iv })
                      : (0, i.jsx)(A.A, {}),
                  null != U &&
                      (0, i.jsx)("div", {
                          className: k.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, j.cb)(U, 0.16)} 0%, ${(0, j.cb)(U, 1)} 100%)`,
                          },
                      }),
                  null == q ? null : (0, i.jsx)("div", { className: k.D7 }),
                  (0, i.jsxs)("div", {
                      ref: $,
                      children: [
                          ei((e, n, s) => {
                              let { key: l } = s;
                              return (0, i.jsx)(
                                  a.animated.div,
                                  {
                                      style: e,
                                      children: (() => {
                                          switch (J) {
                                              case "cover":
                                                  return (0, i.jsx)(T.Ay, {
                                                      guild: M,
                                                      onboardingStatus: C.$o.READY,
                                                      onStart: en,
                                                      disableTracking: Y,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)(O.A, {
                                                      guildId: t,
                                                      isLastStep: 0 === G.length && !(0, I.L1)(M, B),
                                                      isSubmitting: z,
                                                      disableTracking: Y,
                                                      onComplete: () => {
                                                          G.length > 0
                                                              ? Z(0)
                                                              : (0, I.L1)(M, B)
                                                                ? Z("rules")
                                                                : (Q(!0), F());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, i.jsx)(D.A, {
                                                      setCurrentStep: Z,
                                                      previousPromptIndex:
                                                          G.length > 0
                                                              ? G.length - 1
                                                              : w.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: M,
                                                      prompts: G,
                                                      completeOnboarding: F,
                                                      disableTracking: Y,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(y.A, {
                                                      guild: M,
                                                      prompts: G,
                                                      step: J,
                                                      selectOption: V,
                                                      completeOnboarding: F,
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
                              (0, i.jsx)("div", {
                                  className: k.m6,
                                  children: (0, i.jsx)(c.Heading, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      children: P.intl.format(P.t.kI6UoD, { privacyLink: S.X7G.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
