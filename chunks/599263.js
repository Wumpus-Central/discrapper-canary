n.r(t), n.d(t, { default: () => D }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(642128),
    i = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(830064),
    m = n(393238),
    h = n(877604),
    x = n(998730),
    p = n(540059),
    f = n(480608),
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
    w = n(113728);
function D(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: D } = (0, m.Z)(),
        T = (0, p.Q3)('GuildOnboardingPage'),
        R = (0, i.Wu)([O.Z], () => O.Z.getOnboardingPromptsForOnboarding(t)),
        M = (0, i.e7)([O.Z], () => O.Z.getEnabled(t)),
        A = l.useCallback(
            (e, n, r) => {
                C.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        B = l.useCallback(() => {
            C.Z.completeOnboarding(t, R);
        }, [t, R]),
        S = (0, i.e7)([v.Z], () => v.Z.getGuild(t)),
        W = l.useMemo(
            () =>
                null == S
                    ? null
                    : _.ZP.getGuildSplashURL({
                          id: S.id,
                          splash: S.splash
                      }),
            [S]
        ),
        L = (0, x.N)(W),
        z = (0, i.e7)([E.ZP], () => E.ZP.getCurrentOnboardingStep(t)),
        [F, G] = l.useState(null != W ? null : 'cover'),
        U = l.useCallback(
            (e) => {
                G(z), C.Z.setUserOnboardingStep(t, e);
            },
            [t, z]
        ),
        q = (0, i.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
        V = (0, i.e7)([E.ZP], () => E.ZP.getOnboardingStatus(t)),
        H = null != R && R.length > 0,
        X = l.useCallback(() => {
            (0, E.kp)(V) && M && H ? U(0) : B();
        }, [V, M, H, U, B]);
    l.useEffect(() => {
        if (!E.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, f.E)(t);
    }, [t]);
    let Y = (0, c.Yzy)(
            z,
            {
                config: a.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0
                },
                enter: {
                    scale: 1,
                    opacity: 1
                }
            },
            'cover' !== F && null !== F ? 'animate-never' : 'respect-motion-settings'
        ),
        K = E.ZP.shouldShowOnboarding(t),
        J = null == S;
    if (
        (l.useEffect(() => {
            if (!K || J) {
                let e = setTimeout(() => {
                    (0, j.uL)(y.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [K, J, t]),
        !E.ZP.shouldShowOnboarding(t) || null == S)
    )
        return null;
    let Q = () => {
        switch (z) {
            case 'cover':
                return (0, r.jsx)(I.ZP, {
                    guild: S,
                    onboardingStatus: E.uX.READY,
                    onStart: X,
                    disableTracking: q
                });
            case 'rules':
                return (0, r.jsx)(Z.Z, {
                    setCurrentStep: U,
                    previousPromptIndex: R.length - 1,
                    guild: S,
                    prompts: R,
                    completeOnboarding: B,
                    disableTracking: q
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(k.Z, {
                    guild: S,
                    prompts: R,
                    step: z,
                    selectOption: A,
                    completeOnboarding: B,
                    setCurrentStep: U,
                    disableTracking: q
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: s()(w.main, { [w.fullBorderWithGradient]: null == W && T }),
        ref: n,
        children: [
            null != W
                ? (0, r.jsx)(h.Z, {
                      className: w.artwork,
                      src: W,
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
            null != L &&
                (0, r.jsx)('div', {
                    className: w.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, b.aD)(L, 0.16), ' 0%, ').concat((0, b.aD)(L, 1), ' 100%)') }
                }),
            T && null == W ? null : (0, r.jsx)('div', { className: w.gradient }),
            Y((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    a.animated.div,
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
                        children: P.NW.format(P.t.kI6UoK, { privacyLink: y.EYA.PRIVACY })
                    })
                })
        ]
    });
}
