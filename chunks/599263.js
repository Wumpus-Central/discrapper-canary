n.r(t), n.d(t, { default: () => D }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    s = n(481752),
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
    v = n(546247),
    _ = n(430824),
    b = n(768581),
    N = n(302221),
    C = n(549817),
    O = n(45966),
    E = n(819553),
    I = n(548473),
    k = n(15320),
    Z = n(973051),
    y = n(981631),
    P = n(388032),
    w = n(113728);
function D(e) {
    let { guildId: t } = e,
        { ref: n, width: i, height: D } = (0, m.ZP)(),
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
        B = (0, a.e7)([_.Z], () => _.Z.getGuild(t)),
        F = l.useMemo(
            () =>
                null == B
                    ? null
                    : b.ZP.getGuildSplashURL({
                          id: B.id,
                          splash: B.splash
                      }),
            [B]
        ),
        L = (0, h.N)(F),
        z = (0, a.e7)([E.ZP], () => E.ZP.getCurrentOnboardingStep(t)),
        [U, G] = l.useState(null != F ? null : 'cover'),
        V = l.useCallback(
            (e) => {
                G(z), C.Z.setUserOnboardingStep(t, e);
            },
            [t, z]
        ),
        q = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
        H = (0, a.e7)([E.ZP], () => E.ZP.getOnboardingStatus(t)),
        W = null != R && R.length > 0,
        X = l.useCallback(() => {
            (0, E.kp)(H) && M && W ? V(0) : S();
        }, [H, M, W, V, S]);
    l.useEffect(() => {
        if (!E.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, x.E)(t);
    }, [t]);
    let Y = (0, c.Yzy)(
            z,
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
            'cover' !== U && null !== U ? 'animate-never' : 'respect-motion-settings'
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
        switch (z) {
            case 'cover':
                return (0, r.jsx)(I.ZP, {
                    guild: B,
                    onboardingStatus: E.uX.READY,
                    onStart: X,
                    disableTracking: q
                });
            case 'rules':
                return (0, r.jsx)(Z.Z, {
                    setCurrentStep: V,
                    previousPromptIndex: R.length - 1,
                    guild: B,
                    prompts: R,
                    completeOnboarding: S,
                    disableTracking: q
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(k.Z, {
                    guild: B,
                    prompts: R,
                    step: z,
                    selectOption: A,
                    completeOnboarding: S,
                    setCurrentStep: V,
                    disableTracking: q
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: o()(w.main, { [w.fullBorderWithGradient]: null == F && T }),
        ref: n,
        children: [
            null != F
                ? (0, r.jsx)(f.Z, {
                      className: w.artwork,
                      src: F,
                      width: i,
                      height: D,
                      imageClassName: w.cover
                  })
                : T
                  ? (0, r.jsx)(v.Z, {})
                  : (0, r.jsx)(d.Z, {
                        className: w.artwork,
                        preserveAspectRatio: 'xMinYMin slice'
                    }),
            null != L &&
                (0, r.jsx)('div', {
                    className: w.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, N.aD)(L, 0.16), ' 0%, ').concat((0, N.aD)(L, 1), ' 100%)') }
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
            'cover' === z &&
                (0, r.jsx)('div', {
                    className: w.bottomCenterContent,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: P.intl.format(P.t.kI6UoK, { privacyLink: y.EYA.PRIVACY })
                    })
                })
        ]
    });
}
