n.r(t), n.d(t, { default: () => D }), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    s = n(200100),
    a = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(830064),
    m = n(393238),
    f = n(877604),
    h = n(998730),
    p = n(540059),
    x = n(480608),
    g = n(160404),
    j = n(703656),
    N = n(546247),
    v = n(430824),
    _ = n(768581),
    b = n(302221),
    C = n(549817),
    O = n(45966),
    E = n(819553),
    I = n(548473),
    k = n(15320),
    Z = n(973051),
    y = n(981631),
    P = n(388032),
    w = n(18575);
function D(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: D } = (0, m.ZP)(),
        T = (0, p.Q3)('GuildOnboardingPage'),
        R = (0, a.Wu)([O.Z], () => O.Z.getOnboardingPromptsForOnboarding(t)),
        M = (0, a.e7)([O.Z], () => O.Z.getEnabled(t)),
        A = l.useCallback(
            (e, n, r) => {
                C.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        S = l.useCallback(() => {
            C.Z.completeOnboarding(t, R);
        }, [t, R]),
        B = (0, a.e7)([v.Z], () => v.Z.getGuild(t)),
        F = l.useMemo(
            () =>
                null == B
                    ? null
                    : _.ZP.getGuildSplashURL({
                          id: B.id,
                          splash: B.splash
                      }),
            [B]
        ),
        W = (0, h.N)(F),
        L = (0, a.e7)([E.ZP], () => E.ZP.getCurrentOnboardingStep(t)),
        [z, U] = l.useState(null != F ? null : 'cover'),
        G = l.useCallback(
            (e) => {
                U(L), C.Z.setUserOnboardingStep(t, e);
            },
            [t, L]
        ),
        V = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
        q = (0, a.e7)([E.ZP], () => E.ZP.getOnboardingStatus(t)),
        H = null != R && R.length > 0,
        X = l.useCallback(() => {
            (0, E.kp)(q) && M && H ? G(0) : S();
        }, [q, M, H, G, S]);
    l.useEffect(() => {
        if (!E.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, x.E)(t);
    }, [t]);
    let Y = (0, c.Yzy)(
            L,
            {
                config: s.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0
                },
                enter: {
                    scale: 1,
                    opacity: 1
                }
            },
            'cover' !== z && null !== z ? 'animate-never' : 'respect-motion-settings'
        ),
        K = E.ZP.shouldShowOnboarding(t),
        J = null == B;
    if (
        (l.useEffect(() => {
            if (!K || J) {
                let e = setTimeout(() => {
                    (0, j.uL)(y.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [K, J, t]),
        !E.ZP.shouldShowOnboarding(t) || null == B)
    )
        return null;
    let Q = () => {
        switch (L) {
            case 'cover':
                return (0, r.jsx)(I.ZP, {
                    guild: B,
                    onboardingStatus: E.uX.READY,
                    onStart: X,
                    disableTracking: V
                });
            case 'rules':
                return (0, r.jsx)(Z.Z, {
                    setCurrentStep: G,
                    previousPromptIndex: R.length - 1,
                    guild: B,
                    prompts: R,
                    completeOnboarding: S,
                    disableTracking: V
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(k.Z, {
                    guild: B,
                    prompts: R,
                    step: L,
                    selectOption: A,
                    completeOnboarding: S,
                    setCurrentStep: G,
                    disableTracking: V
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: i()(w.main, { [w.fullBorderWithGradient]: null == F && T }),
        ref: n,
        children: [
            null != F
                ? (0, r.jsx)(f.Z, {
                      className: w.artwork,
                      src: F,
                      width: o,
                      height: D,
                      imageClassName: w.cover
                  })
                : T
                  ? (0, r.jsx)(N.Z, {})
                  : (0, r.jsx)(d.Z, {
                        className: w.artwork,
                        preserveAspectRatio: 'xMinYMin slice'
                    }),
            null != W &&
                (0, r.jsx)('div', {
                    className: w.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, b.aD)(W, 0.16), ' 0%, ').concat((0, b.aD)(W, 1), ' 100%)') }
                }),
            T && null == F ? null : (0, r.jsx)('div', { className: w.gradient }),
            Y((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    s.animated.div,
                    {
                        style: e,
                        children: Q()
                    },
                    l
                );
            }),
            'cover' === L &&
                (0, r.jsx)('div', {
                    className: w.bottomCenterContent,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: P.NW.format(P.t.kI6UoK, { privacyLink: y.EYA.PRIVACY })
                    })
                })
        ]
    });
}
