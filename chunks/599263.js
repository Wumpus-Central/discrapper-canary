n.r(t), n.d(t, { default: () => P }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    s = n(695469),
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
    k = n(981631),
    Z = n(388032),
    y = n(113728);
function P(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: P } = (0, d.ZP)(),
        w = (0, a.Wu)([N.Z], () => N.Z.getOnboardingPromptsForOnboarding(t)),
        D = (0, a.e7)([N.Z], () => N.Z.getEnabled(t)),
        T = l.useCallback(
            (e, n, r) => {
                b.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        R = l.useCallback(() => {
            b.Z.completeOnboarding(t, w);
        }, [t, w]),
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
        [F, L] = l.useState(null != S ? null : 'cover'),
        z = l.useCallback(
            (e) => {
                L(B), b.Z.setUserOnboardingStep(t, e);
            },
            [t, B]
        ),
        U = (0, a.e7)([p.Z], () => p.Z.isFullServerPreview(t)),
        G = (0, a.e7)([C.ZP], () => C.ZP.getOnboardingStatus(t)),
        V = null != w && w.length > 0,
        q = l.useCallback(() => {
            (0, C.kp)(G) && D && V ? z(0) : R();
        }, [G, D, V, z, R]);
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
            'cover' !== F && null !== F ? 'animate-never' : 'respect-motion-settings'
        ),
        W = C.ZP.shouldShowOnboarding(t),
        X = null == M;
    if (
        (l.useEffect(() => {
            if (!W || X) {
                let e = setTimeout(() => {
                    (0, x.uL)(k.Z5c.CHANNEL(t));
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
                    previousPromptIndex: w.length - 1,
                    guild: M,
                    prompts: w,
                    completeOnboarding: R,
                    disableTracking: U
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(O.Z, {
                    guild: M,
                    prompts: w,
                    step: B,
                    selectOption: T,
                    completeOnboarding: R,
                    setCurrentStep: z,
                    disableTracking: U
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: i()(y.main, { [y.fullBorderWithGradient]: null == S }),
        ref: n,
        children: [
            null != S
                ? (0, r.jsx)(m.Z, {
                      className: y.artwork,
                      src: S,
                      width: o,
                      height: P,
                      imageClassName: y.cover
                  })
                : (0, r.jsx)(g.Z, {}),
            null != A &&
                (0, r.jsx)('div', {
                    className: y.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, _.aD)(A, 0.16), ' 0%, ').concat((0, _.aD)(A, 1), ' 100%)') }
                }),
            null == S ? null : (0, r.jsx)('div', { className: y.gradient }),
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
                    className: y.bottomCenterContent,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: Z.intl.format(Z.t.kI6UoK, { privacyLink: k.EYA.PRIVACY })
                    })
                })
        ]
    });
}
