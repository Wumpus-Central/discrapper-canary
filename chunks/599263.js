n.r(t), n.d(t, { default: () => w }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    s = n(642128),
    a = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(830064),
    m = n(393238),
    h = n(877604),
    p = n(998730),
    x = n(480608),
    f = n(160404),
    g = n(703656),
    j = n(430824),
    v = n(768581),
    b = n(302221),
    N = n(549817),
    _ = n(45966),
    C = n(819553),
    k = n(548473),
    O = n(15320),
    Z = n(973051),
    E = n(981631),
    I = n(388032),
    y = n(161986);
function w(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: w } = (0, m.Z)(),
        P = (0, a.Wu)([_.Z], () => _.Z.getOnboardingPromptsForOnboarding(t)),
        D = (0, a.e7)([_.Z], () => _.Z.getEnabled(t)),
        T = l.useCallback(
            (e, n, r) => {
                N.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        R = l.useCallback(() => {
            N.Z.completeOnboarding(t, P);
        }, [t, P]),
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
        W = (0, p.N)(S),
        B = (0, a.e7)([C.ZP], () => C.ZP.getCurrentOnboardingStep(t)),
        [A, z] = l.useState(null != S ? null : 'cover'),
        L = l.useCallback(
            (e) => {
                z(B), N.Z.setUserOnboardingStep(t, e);
            },
            [t, B]
        ),
        F = (0, a.e7)([f.Z], () => f.Z.isFullServerPreview(t)),
        G = (0, a.e7)([C.ZP], () => C.ZP.getOnboardingStatus(t)),
        U = null != P && P.length > 0,
        q = l.useCallback(() => {
            (0, C.kp)(G) && D && U ? L(0) : R();
        }, [G, D, U, L, R]);
    l.useEffect(() => {
        if (!C.ZP.shouldShowOnboarding(t)) return d.Z.escapeToDefaultChannel(t);
        (0, x.E)(t);
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
            'cover' !== A && null !== A ? 'animate-never' : 'respect-motion-settings'
        ),
        V = C.ZP.shouldShowOnboarding(t),
        X = null == M;
    if (
        (l.useEffect(() => {
            if (!V || X) {
                let e = setTimeout(() => {
                    (0, g.uL)(E.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [V, X, t]),
        !C.ZP.shouldShowOnboarding(t) || null == M)
    )
        return null;
    let Y = () => {
        switch (B) {
            case 'cover':
                return (0, r.jsx)(k.ZP, {
                    guild: M,
                    onboardingStatus: C.uX.READY,
                    onStart: q,
                    disableTracking: F
                });
            case 'rules':
                return (0, r.jsx)(Z.Z, {
                    setCurrentStep: L,
                    previousPromptIndex: P.length - 1,
                    guild: M,
                    prompts: P,
                    completeOnboarding: R,
                    disableTracking: F
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(O.Z, {
                    guild: M,
                    prompts: P,
                    step: B,
                    selectOption: T,
                    completeOnboarding: R,
                    setCurrentStep: L,
                    disableTracking: F
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: y.main,
        ref: n,
        children: [
            null != S
                ? (0, r.jsx)(h.Z, {
                      className: i()(y.artwork),
                      src: S,
                      width: o,
                      height: w,
                      imageClassName: y.cover
                  })
                : (0, r.jsx)(u.Z, {
                      className: y.artwork,
                      preserveAspectRatio: 'xMinYMin slice'
                  }),
            null != W &&
                (0, r.jsx)('div', {
                    className: y.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, b.aD)(W, 0.16), ' 0%, ').concat((0, b.aD)(W, 1), ' 100%)') }
                }),
            (0, r.jsx)('div', { className: y.gradient }),
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
                        children: I.NW.format(I.t.kI6UoK, { privacyLink: E.EYA.PRIVACY })
                    })
                })
        ]
    });
}
