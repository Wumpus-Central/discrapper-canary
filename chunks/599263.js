n.r(t), n.d(t, { default: () => Z }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(642128),
    i = n(442837),
    s = n(481060),
    a = n(749210),
    c = n(830064),
    d = n(393238),
    u = n(877604),
    m = n(998730),
    h = n(480608),
    p = n(160404),
    x = n(703656),
    f = n(430824),
    g = n(768581),
    j = n(302221),
    N = n(549817),
    v = n(45966),
    b = n(819553),
    _ = n(548473),
    C = n(15320),
    O = n(973051),
    E = n(981631),
    k = n(388032),
    I = n(163213);
function Z(e) {
    let { guildId: t } = e,
        { ref: n, width: Z, height: y } = (0, d.Z)(),
        P = (0, i.Wu)([v.Z], () => v.Z.getOnboardingPromptsForOnboarding(t)),
        w = (0, i.e7)([v.Z], () => v.Z.getEnabled(t)),
        D = l.useCallback(
            (e, n, r) => {
                N.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        T = l.useCallback(() => {
            N.Z.completeOnboarding(t, P);
        }, [t, P]),
        R = (0, i.e7)([f.Z], () => f.Z.getGuild(t)),
        M = l.useMemo(
            () =>
                null == R
                    ? null
                    : g.ZP.getGuildSplashURL({
                          id: R.id,
                          splash: R.splash
                      }),
            [R]
        ),
        A = (0, m.N)(M),
        B = (0, i.e7)([b.ZP], () => b.ZP.getCurrentOnboardingStep(t)),
        [S, W] = l.useState(null != M ? null : 'cover'),
        L = l.useCallback(
            (e) => {
                W(B), N.Z.setUserOnboardingStep(t, e);
            },
            [t, B]
        ),
        z = (0, i.e7)([p.Z], () => p.Z.isFullServerPreview(t)),
        F = (0, i.e7)([b.ZP], () => b.ZP.getOnboardingStatus(t)),
        U = null != P && P.length > 0,
        G = l.useCallback(() => {
            (0, b.kp)(F) && w && U ? L(0) : T();
        }, [F, w, U, L, T]);
    l.useEffect(() => {
        if (!b.ZP.shouldShowOnboarding(t)) return a.Z.escapeToDefaultChannel(t);
        (0, h.E)(t);
    }, [t]);
    let q = (0, s.Yzy)(
            B,
            {
                config: o.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0
                },
                enter: {
                    scale: 1,
                    opacity: 1
                }
            },
            'cover' !== S && null !== S ? 'animate-never' : 'respect-motion-settings'
        ),
        V = b.ZP.shouldShowOnboarding(t),
        H = null == R;
    if (
        (l.useEffect(() => {
            if (!V || H) {
                let e = setTimeout(() => {
                    (0, x.uL)(E.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [V, H, t]),
        !b.ZP.shouldShowOnboarding(t) || null == R)
    )
        return null;
    let X = () => {
        switch (B) {
            case 'cover':
                return (0, r.jsx)(_.ZP, {
                    guild: R,
                    onboardingStatus: b.uX.READY,
                    onStart: G,
                    disableTracking: z
                });
            case 'rules':
                return (0, r.jsx)(O.Z, {
                    setCurrentStep: L,
                    previousPromptIndex: P.length - 1,
                    guild: R,
                    prompts: P,
                    completeOnboarding: T,
                    disableTracking: z
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(C.Z, {
                    guild: R,
                    prompts: P,
                    step: B,
                    selectOption: D,
                    completeOnboarding: T,
                    setCurrentStep: L,
                    disableTracking: z
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: I.main,
        ref: n,
        children: [
            null != M
                ? (0, r.jsx)(u.Z, {
                      className: I.artwork,
                      src: M,
                      width: Z,
                      height: y,
                      imageClassName: I.cover
                  })
                : (0, r.jsx)(c.Z, {
                      className: I.artwork,
                      preserveAspectRatio: 'xMinYMin slice'
                  }),
            null != A &&
                (0, r.jsx)('div', {
                    className: I.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, j.aD)(A, 0.16), ' 0%, ').concat((0, j.aD)(A, 1), ' 100%)') }
                }),
            (0, r.jsx)('div', { className: I.gradient }),
            q((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    o.animated.div,
                    {
                        style: e,
                        children: X()
                    },
                    l
                );
            }),
            'cover' === B &&
                (0, r.jsx)('div', {
                    className: I.bottomCenterContent,
                    children: (0, r.jsx)(s.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: k.NW.format(k.t.kI6UoK, { privacyLink: E.EYA.PRIVACY })
                    })
                })
        ]
    });
}
