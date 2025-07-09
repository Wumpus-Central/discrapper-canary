(n.r(t), n.d(t, { default: () => w }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    s = n(264738),
    a = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(393238),
    m = n(877604),
    f = n(998730),
    h = n(480608),
    p = n(160404),
    x = n(703656),
    g = n(546247),
    j = n(430824),
    v = n(768581),
    _ = n(302221),
    b = n(549817),
    N = n(45966),
    C = n(819553),
    E = n(548473),
    O = n(15320),
    I = n(973051),
    Z = n(981631),
    y = n(388032),
    P = n(113728);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: w } = (0, d.ZP)(),
        D = (0, a.Wu)([N.Z], () => N.Z.getOnboardingPromptsForOnboarding(t)),
        T = (0, a.e7)([N.Z], () => N.Z.getEnabled(t)),
        R = l.useCallback(
            (e, n, r) => {
                b.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        k = l.useCallback(() => {
            b.Z.completeOnboarding(t, D);
        }, [t, D]),
        M = (0, a.e7)([j.Z], () => j.Z.getGuild(t)),
        S = l.useMemo(
            () =>
                null == M
                    ? null
                    : v.ZP.getGuildSplashURL({
                          id: M.id,
                          splash: M.splash
                      }),
            [M]
        ),
        A = (0, f.N)(S),
        B = (0, a.e7)([C.ZP], () => C.ZP.getCurrentOnboardingStep(t)),
        [L, F] = l.useState(null != S ? null : 'cover'),
        z = l.useCallback(
            (e) => {
                (F(B), b.Z.setUserOnboardingStep(t, e));
            },
            [t, B]
        ),
        U = (0, a.e7)([p.Z], () => p.Z.isFullServerPreview(t)),
        G = (0, a.e7)([C.ZP], () => C.ZP.getOnboardingStatus(t)),
        V = null != D && D.length > 0,
        q = l.useCallback(() => {
            (0, C.kp)(G) && T && V ? z(0) : k();
        }, [G, T, V, z, k]);
    l.useEffect(() => {
        if (!C.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
        (0, h.E)(t);
    }, [t]);
    let H = (0, c.Yzy)(
            B,
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
            'cover' !== L && null !== L ? 'animate-never' : 'respect-motion-settings'
        ),
        W = C.ZP.shouldShowOnboarding(t),
        X = null == M;
    if (
        (l.useEffect(() => {
            if (!W || X) {
                let e = setTimeout(() => {
                    (0, x.uL)(Z.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [W, X, t]),
        !C.ZP.shouldShowOnboarding(t) || null == M)
    )
        return null;
    let Y = () => {
        switch (B) {
            case 'cover':
                return (0, r.jsx)(E.ZP, {
                    guild: M,
                    onboardingStatus: C.uX.READY,
                    onStart: q,
                    disableTracking: U
                });
            case 'rules':
                return (0, r.jsx)(I.Z, {
                    setCurrentStep: z,
                    previousPromptIndex: D.length - 1,
                    guild: M,
                    prompts: D,
                    completeOnboarding: k,
                    disableTracking: U
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(O.Z, {
                    guild: M,
                    prompts: D,
                    step: B,
                    selectOption: R,
                    completeOnboarding: k,
                    setCurrentStep: z,
                    disableTracking: U
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: i()(P.main, { [P.fullBorderWithGradient]: null == S }),
        ref: n,
        children: [
            null != S
                ? (0, r.jsx)(m.Z, {
                      className: P.artwork,
                      src: S,
                      width: o,
                      height: w,
                      imageClassName: P.cover
                  })
                : (0, r.jsx)(g.Z, {}),
            null != A &&
                (0, r.jsx)('div', {
                    className: P.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, _.aD)(A, 0.16), ' 0%, ').concat((0, _.aD)(A, 1), ' 100%)') }
                }),
            null == S ? null : (0, r.jsx)('div', { className: P.gradient }),
            H((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    s.animated.div,
                    {
                        style: e,
                        children: Y()
                    },
                    l
                );
            }),
            'cover' === B &&
                (0, r.jsx)('div', {
                    className: P.bottomCenterContent,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: y.intl.format(y.t.kI6UoK, { privacyLink: Z.EYA.PRIVACY })
                    })
                })
        ]
    });
}
