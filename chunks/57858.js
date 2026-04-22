n.r(t), n.d(t, { default: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(517738),
    o = n(311907),
    c = n(866323),
    d = n(534514),
    u = n(442433),
    m = n(686956),
    _ = n(765671),
    p = n(4616),
    x = n(743674),
    g = n(60175),
    h = n(545868),
    f = n(164956),
    A = n(976860),
    v = n(426660),
    N = n(71393),
    E = n(486020),
    j = n(998304),
    b = n(669953),
    C = n(591552),
    I = n(713125),
    O = n(961973),
    D = n(783153),
    y = n(133266),
    P = n(912417),
    S = n(488053),
    k = n(652215),
    T = n(985018),
    R = n(339875);
function L(e) {
    let { guildId: t } = e,
        { ref: l, width: L, height: G } = (0, _.Ay)(),
        w = (0, o.yK)([C.A], () => C.A.getOnboardingPromptsForOnboarding(t)),
        H = (0, o.bG)([C.A], () => C.A.getEnabled(t)),
        V = (0, o.bG)([C.A], () => C.A.getConnections(t)),
        F = (0, o.bG)([g.A], () => g.A.getRulesPrompt(t)),
        B = s.useCallback(
            (e, n, i) => {
                b.A.selectOption(t, e, n, i);
            },
            [t],
        ),
        M = s.useCallback(() => {
            b.A.completeOnboarding(t, w);
        }, [t, w]),
        $ = (0, o.bG)([N.A], () => N.A.getGuild(t)),
        q = s.useMemo(() => (null == $ ? null : E.Ay.getGuildSplashURL({ id: $.id, splash: $.splash })), [$]),
        U = (0, x.S)(q),
        K = s.useRef(null),
        J = s.useCallback(
            (e) => {
                null == q ||
                    (null != K.current && K.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await n.e("95813").then(n.bind(n, 755319));
                        return (t) => (0, i.jsx)(e, { ...t, splashUrl: q });
                    });
            },
            [q],
        ),
        W = (0, o.bG)([I.Ay], () => I.Ay.getCurrentOnboardingStep(t)),
        [X, z] = s.useState(null != q ? null : "cover"),
        [Q, Z] = s.useState(!1),
        Y = s.useCallback(
            (e) => {
                z(W), b.A.setUserOnboardingStep(t, e);
            },
            [t, W],
        ),
        ee = (0, o.bG)([f.A], () => f.A.isFullServerPreview(t)),
        et = (0, o.bG)([I.Ay], () => I.Ay.getOnboardingStatus(t)),
        en = null != w && w.length > 0,
        ei = s.useCallback(() => {
            (0, I.eg)(et) && H && (en || 0 !== V.length) ? (V.length > 0 ? Y("connections") : Y(0)) : M();
        }, [et, H, en, V.length, Y, M]);
    s.useEffect(() => {
        if (!I.Ay.shouldShowOnboarding(t)) return m.A.escapeToDefaultChannel(t);
        (0, h.L)(t);
    }, [t]);
    let es = (0, c.p)(
            W,
            { config: a.config.default, from: { scale: 0.8, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
            "cover" !== X && null !== X ? "animate-never" : "respect-motion-settings",
        ),
        el = I.Ay.shouldShowOnboarding(t),
        er = null == $;
    return (s.useEffect(() => {
        if (!el || er) {
            let e = setTimeout(() => {
                (0, A.pX)(k.BVt.CHANNEL(t));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [el, er, t]),
    I.Ay.shouldShowOnboarding(t) && null != $)
        ? (0, i.jsxs)("div", {
              className: r()(R.iW, { [R.Me]: null == q }),
              ref: l,
              onContextMenu: J,
              children: [
                  null != q
                      ? (0, i.jsx)(p.A, { className: R.xX, src: q, width: L, height: G, imageClassName: R.Iv })
                      : (0, i.jsx)(v.A, {}),
                  null != U &&
                      (0, i.jsx)("div", {
                          className: R.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, j.cb)(U, 0.16)} 0%, ${(0, j.cb)(U, 1)} 100%)`,
                          },
                      }),
                  null == q ? null : (0, i.jsx)("div", { className: R.D7 }),
                  (0, i.jsxs)("div", {
                      ref: K,
                      children: [
                          es((e, n, s) => {
                              let { key: l } = s;
                              return (0, i.jsx)(
                                  a.animated.div,
                                  {
                                      style: e,
                                      children: (() => {
                                          switch (W) {
                                              case "cover":
                                                  return (0, i.jsx)(y.Ay, {
                                                      guild: $,
                                                      onboardingStatus: I.$o.READY,
                                                      onStart: ei,
                                                      disableTracking: ee,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)(D.A, {
                                                      guildId: t,
                                                      isLastStep: 0 === w.length && !(0, O.L1)($, F),
                                                      isSubmitting: Q,
                                                      disableTracking: ee,
                                                      onComplete: () => {
                                                          w.length > 0
                                                              ? Y(0)
                                                              : (0, O.L1)($, F)
                                                                ? Y("rules")
                                                                : (Z(!0), M());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, i.jsx)(S.A, {
                                                      setCurrentStep: Y,
                                                      previousPromptIndex:
                                                          w.length > 0
                                                              ? w.length - 1
                                                              : V.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: $,
                                                      prompts: w,
                                                      completeOnboarding: M,
                                                      disableTracking: ee,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(P.A, {
                                                      guild: $,
                                                      prompts: w,
                                                      step: W,
                                                      selectOption: B,
                                                      completeOnboarding: M,
                                                      setCurrentStep: Y,
                                                      disableTracking: ee,
                                                  });
                                          }
                                      })(),
                                  },
                                  l,
                              );
                          }),
                          "cover" === W &&
                              (0, i.jsx)("div", {
                                  className: R.m6,
                                  children: (0, i.jsx)(d.D, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      children: T.intl.format(T.t.kI6UoD, { privacyLink: k.X7G.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
