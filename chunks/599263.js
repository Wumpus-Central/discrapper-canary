(n.r(t), n.d(t, { default: () => T }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(626415),
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
    C = n(819553),
    y = n(548473),
    N = n(15320),
    E = n(973051),
    P = n(981631),
    Z = n(388032),
    I = n(113728);
function T(e) {
    let { guildId: t } = e,
        { ref: n, width: i, height: T } = (0, d.ZP)(),
        w = (0, s.Wu)([O.Z], () => O.Z.getOnboardingPromptsForOnboarding(t)),
        k = (0, s.e7)([O.Z], () => O.Z.getEnabled(t)),
        D = l.useCallback(
            (e, n, r) => {
                b.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        R = l.useCallback(() => {
            b.Z.completeOnboarding(t, w);
        }, [t, w]),
        S = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        B = l.useMemo(
            () =>
                null == S
                    ? null
                    : j.ZP.getGuildSplashURL({
                          id: S.id,
                          splash: S.splash
                      }),
            [S]
        ),
        A = (0, f.N)(B),
        M = (0, s.e7)([C.ZP], () => C.ZP.getCurrentOnboardingStep(t)),
        [F, L] = l.useState(null != B ? null : 'cover'),
        V = l.useCallback(
            (e) => {
                (L(M), b.Z.setUserOnboardingStep(t, e));
            },
            [t, M]
        ),
        q = (0, s.e7)([h.Z], () => h.Z.isFullServerPreview(t)),
        G = (0, s.e7)([C.ZP], () => C.ZP.getOnboardingStatus(t)),
        U = null != w && w.length > 0,
        W = l.useCallback(() => {
            (0, C.kp)(G) && k && U ? V(0) : R();
        }, [G, k, U, V, R]);
    l.useEffect(() => {
        if (!C.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, p.E)(t);
    }, [t]);
    let H = (0, c.Yzy)(
            M,
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
        z = C.ZP.shouldShowOnboarding(t),
        X = null == S;
    if (
        (l.useEffect(() => {
            if (!z || X) {
                let e = setTimeout(() => {
                    (0, x.uL)(P.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [z, X, t]),
        !C.ZP.shouldShowOnboarding(t) || null == S)
    )
        return null;
    let J = () => {
        switch (M) {
            case 'cover':
                return (0, r.jsx)(y.ZP, {
                    guild: S,
                    onboardingStatus: C.uX.READY,
                    onStart: W,
                    disableTracking: q
                });
            case 'rules':
                return (0, r.jsx)(E.Z, {
                    setCurrentStep: V,
                    previousPromptIndex: w.length - 1,
                    guild: S,
                    prompts: w,
                    completeOnboarding: R,
                    disableTracking: q
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(N.Z, {
                    guild: S,
                    prompts: w,
                    step: M,
                    selectOption: D,
                    completeOnboarding: R,
                    setCurrentStep: V,
                    disableTracking: q
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: o()(I.main, { [I.fullBorderWithGradient]: null == B }),
        ref: n,
        children: [
            null != B
                ? (0, r.jsx)(m.Z, {
                      className: I.artwork,
                      src: B,
                      width: i,
                      height: T,
                      imageClassName: I.cover
                  })
                : (0, r.jsx)(g.Z, {}),
            null != A &&
                (0, r.jsx)('div', {
                    className: I.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, _.aD)(A, 0.16), ' 0%, ').concat((0, _.aD)(A, 1), ' 100%)') }
                }),
            null == B ? null : (0, r.jsx)('div', { className: I.gradient }),
            H((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    a.animated.div,
                    {
                        style: e,
                        children: J()
                    },
                    l
                );
            }),
            'cover' === M &&
                (0, r.jsx)('div', {
                    className: I.bottomCenterContent,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: Z.intl.format(Z.t.kI6UoK, { privacyLink: P.EYA.PRIVACY })
                    })
                })
        ]
    });
}
