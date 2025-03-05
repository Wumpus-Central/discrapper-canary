n.r(t), n.d(t, { default: () => T }), n(47120);
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
    x = n(540059),
    f = n(480608),
    g = n(160404),
    j = n(703656),
    v = n(546247),
    N = n(430824),
    b = n(594174),
    _ = n(768581),
    C = n(302221),
    O = n(549817),
    E = n(45966),
    I = n(819553),
    k = n(548473),
    Z = n(15320),
    y = n(973051),
    P = n(981631),
    w = n(388032),
    D = n(163213);
function T(e) {
    var t, n;
    let { guildId: o } = e,
        { ref: T, width: R, height: M } = (0, m.Z)(),
        A = (0, x.Q3)('GuildOnboardingPage'),
        B = null !== (n = null === (t = b.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        S = (0, a.Wu)([E.Z], () => E.Z.getOnboardingPromptsForOnboarding(o)),
        W = (0, a.e7)([E.Z], () => E.Z.getEnabled(o)),
        L = l.useCallback(
            (e, t, n) => {
                O.Z.selectOption(o, e, t, n);
            },
            [o]
        ),
        z = l.useCallback(() => {
            O.Z.completeOnboarding(o, S);
        }, [o, S]),
        F = (0, a.e7)([N.Z], () => N.Z.getGuild(o)),
        G = l.useMemo(
            () =>
                null == F
                    ? null
                    : _.ZP.getGuildSplashURL({
                          id: F.id,
                          splash: F.splash
                      }),
            [F]
        ),
        U = (0, p.N)(G),
        q = (0, a.e7)([I.ZP], () => I.ZP.getCurrentOnboardingStep(o)),
        [V, H] = l.useState(null != G ? null : 'cover'),
        X = l.useCallback(
            (e) => {
                H(q), O.Z.setUserOnboardingStep(o, e);
            },
            [o, q]
        ),
        Y = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(o)),
        K = (0, a.e7)([I.ZP], () => I.ZP.getOnboardingStatus(o)),
        J = null != S && S.length > 0,
        Q = l.useCallback(() => {
            (0, I.kp)(K) && W && J ? X(0) : z();
        }, [K, W, J, X, z]);
    l.useEffect(() => {
        if (!I.ZP.shouldShowOnboarding(o)) return d.Z.escapeToDefaultChannel(o);
        (0, f.E)(o);
    }, [o]);
    let $ = (0, c.Yzy)(
            q,
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
            'cover' !== V && null !== V ? 'animate-never' : 'respect-motion-settings'
        ),
        ee = I.ZP.shouldShowOnboarding(o),
        et = null == F;
    if (
        (l.useEffect(() => {
            if (!ee || et) {
                let e = setTimeout(() => {
                    (0, j.uL)(P.Z5c.CHANNEL(o));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [ee, et, o]),
        !I.ZP.shouldShowOnboarding(o) || null == F)
    )
        return null;
    let en = () => {
        switch (q) {
            case 'cover':
                return (0, r.jsx)(k.ZP, {
                    guild: F,
                    onboardingStatus: I.uX.READY,
                    onStart: Q,
                    disableTracking: Y
                });
            case 'rules':
                return (0, r.jsx)(y.Z, {
                    setCurrentStep: X,
                    previousPromptIndex: S.length - 1,
                    guild: F,
                    prompts: S,
                    completeOnboarding: z,
                    disableTracking: Y
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(Z.Z, {
                    guild: F,
                    prompts: S,
                    step: q,
                    selectOption: L,
                    completeOnboarding: z,
                    setCurrentStep: X,
                    disableTracking: Y
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: i()(D.main, { [D.fullBorderWithGradient]: null == G && A && B }),
        ref: T,
        children: [
            null != G
                ? (0, r.jsx)(h.Z, {
                      className: D.artwork,
                      src: G,
                      width: R,
                      height: M,
                      imageClassName: D.cover
                  })
                : A && B
                  ? (0, r.jsx)(v.Z, {})
                  : (0, r.jsx)(u.Z, {
                        className: D.artwork,
                        preserveAspectRatio: 'xMinYMin slice'
                    }),
            null != U &&
                (0, r.jsx)('div', {
                    className: D.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, C.aD)(U, 0.16), ' 0%, ').concat((0, C.aD)(U, 1), ' 100%)') }
                }),
            A && null == G && B ? null : (0, r.jsx)('div', { className: D.gradient }),
            $((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    s.animated.div,
                    {
                        style: e,
                        children: en()
                    },
                    l
                );
            }),
            'cover' === q &&
                (0, r.jsx)('div', {
                    className: D.bottomCenterContent,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: w.NW.format(w.t.kI6UoK, { privacyLink: P.EYA.PRIVACY })
                    })
                })
        ]
    });
}
