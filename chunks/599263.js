n.r(t), n.d(t, { default: () => w }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(642128),
    a = n(442837),
    d = n(481060),
    c = n(749210),
    u = n(830064),
    m = n(393238),
    x = n(877604),
    h = n(998730),
    p = n(480608),
    f = n(160404),
    g = n(703656),
    v = n(430824),
    _ = n(768581),
    j = n(302221),
    C = n(549817),
    N = n(45966),
    b = n(819553),
    k = n(548473),
    Z = n(15320),
    I = n(973051),
    E = n(981631),
    D = n(388032),
    T = n(577692);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: i, height: w } = (0, m.Z)(),
        R = (0, a.Wu)([N.Z], () => N.Z.getOnboardingPromptsForOnboarding(t)),
        P = (0, a.e7)([N.Z], () => N.Z.getEnabled(t)),
        O = r.useCallback(
            (e, n, l) => {
                C.Z.selectOption(t, e, n, l);
            },
            [t]
        ),
        M = r.useCallback(() => {
            C.Z.completeOnboarding(t, R);
        }, [t, R]),
        B = (0, a.e7)([v.Z], () => v.Z.getGuild(t)),
        y = r.useMemo(
            () =>
                null == B
                    ? null
                    : _.ZP.getGuildSplashURL({
                          id: B.id,
                          splash: B.splash
                      }),
            [B]
        ),
        S = (0, h.N)(y),
        z = (0, a.e7)([b.ZP], () => b.ZP.getCurrentOnboardingStep(t)),
        [A, L] = r.useState(null != y ? null : 'cover'),
        F = r.useCallback(
            (e) => {
                L(z), C.Z.setUserOnboardingStep(t, e);
            },
            [t, z]
        ),
        U = (0, a.e7)([f.Z], () => f.Z.isFullServerPreview(t)),
        q = (0, a.e7)([b.ZP], () => b.ZP.getOnboardingStatus(t)),
        G = null != R && R.length > 0,
        H = r.useCallback(() => {
            (0, b.kp)(q) && P && G ? F(0) : M();
        }, [q, P, G, F, M]);
    r.useEffect(() => {
        if (!b.ZP.shouldShowOnboarding(t)) return c.Z.escapeToDefaultChannel(t);
        (0, p.E)(t);
    }, [t]);
    let W = (0, d.Yzy)(
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
            'cover' !== A && null !== A ? 'animate-never' : 'respect-motion-settings'
        ),
        V = b.ZP.shouldShowOnboarding(t),
        X = null == B;
    if (
        (r.useEffect(() => {
            if (!V || X) {
                let e = setTimeout(() => {
                    (0, g.uL)(E.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [V, X, t]),
        !b.ZP.shouldShowOnboarding(t) || null == B)
    )
        return null;
    let Y = () => {
        switch (z) {
            case 'cover':
                return (0, l.jsx)(k.ZP, {
                    guild: B,
                    onboardingStatus: b.uX.READY,
                    onStart: H,
                    disableTracking: U
                });
            case 'rules':
                return (0, l.jsx)(I.Z, {
                    setCurrentStep: F,
                    previousPromptIndex: R.length - 1,
                    guild: B,
                    prompts: R,
                    completeOnboarding: M,
                    disableTracking: U
                });
            case null:
                return null;
            default:
                return (0, l.jsx)(Z.Z, {
                    guild: B,
                    prompts: R,
                    step: z,
                    selectOption: O,
                    completeOnboarding: M,
                    setCurrentStep: F,
                    disableTracking: U
                });
        }
    };
    return (0, l.jsxs)('div', {
        className: T.main,
        ref: n,
        children: [
            null != y
                ? (0, l.jsx)(x.Z, {
                      className: o()(T.artwork),
                      src: y,
                      width: i,
                      height: w,
                      imageClassName: T.cover
                  })
                : (0, l.jsx)(u.Z, {
                      className: T.artwork,
                      preserveAspectRatio: 'xMinYMin slice'
                  }),
            null != S &&
                (0, l.jsx)('div', {
                    className: T.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, j.aD)(S, 0.16), ' 0%, ').concat((0, j.aD)(S, 1), ' 100%)') }
                }),
            (0, l.jsx)('div', { className: T.gradient }),
            W((e, t, n) => {
                let { key: r } = n;
                return (0, l.jsx)(
                    s.animated.div,
                    {
                        style: e,
                        children: Y()
                    },
                    r
                );
            }),
            'cover' === z &&
                (0, l.jsx)('div', {
                    className: T.bottomCenterContent,
                    children: (0, l.jsx)(d.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: D.intl.format(D.t.kI6UoK, { privacyLink: E.EYA.PRIVACY })
                    })
                })
        ]
    });
}
