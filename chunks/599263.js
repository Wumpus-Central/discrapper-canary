n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    i = n(666912),
    a = n(442837),
    d = n(481060),
    c = n(749210),
    u = n(830064),
    m = n(393238),
    p = n(877604),
    h = n(480608),
    x = n(160404),
    g = n(703656),
    f = n(430824),
    b = n(768581),
    _ = n(302221),
    v = n(956664),
    C = n(549817),
    N = n(45966),
    j = n(819553),
    I = n(548473),
    E = n(15320),
    B = n(973051),
    Z = n(981631),
    T = n(388032),
    k = n(650413);
async function D(e) {
    let t = await new Promise((t, n) => {
        let r = new Image();
        (r.crossOrigin = 'Anonymous'),
            (r.onerror = (e) => {
                n(e), (r.onerror = r.onload = null), (r = null);
            }),
            (r.onload = () => {
                t((0, v.XN)(r, 2, 10)), (r.onerror = r.onload = null), (r = null);
            }),
            (r.src = e);
    });
    return null == t
        ? void 0
        : t.map((e) => {
              let [t, n, r] = e;
              return (0, _.vq)(t, n, r);
          });
}
function P(e) {
    let { guildId: t } = e,
        { ref: n, width: o, height: v } = (0, m.Z)(),
        [P, O] = l.useState(),
        w = (0, a.Wu)([N.Z], () => N.Z.getOnboardingPromptsForOnboarding(t)),
        R = (0, a.e7)([N.Z], () => N.Z.getEnabled(t)),
        L = l.useCallback(
            (e, n, r) => {
                C.Z.selectOption(t, e, n, r);
            },
            [t]
        ),
        M = l.useCallback(() => {
            C.Z.completeOnboarding(t, w);
        }, [t, w]),
        S = (0, a.e7)([f.Z], () => f.Z.getGuild(t)),
        A = l.useMemo(
            () =>
                null == S
                    ? null
                    : b.ZP.getGuildSplashURL({
                          id: S.id,
                          splash: S.splash
                      }),
            [S]
        ),
        F = (0, a.e7)([j.ZP], () => j.ZP.getCurrentOnboardingStep(t)),
        [U, q] = l.useState(null != A ? null : 'cover');
    null != A &&
        null == P &&
        D(A).then((e) => {
            O(e[0]);
        });
    let V = l.useCallback(
            (e) => {
                q(F), C.Z.setUserOnboardingStep(t, e);
            },
            [t, F]
        ),
        y = (0, a.e7)([x.Z], () => x.Z.isFullServerPreview(t)),
        H = (0, a.e7)([j.ZP], () => j.ZP.getOnboardingStatus(t)),
        G = null != w && w.length > 0,
        z = l.useCallback(() => {
            (0, j.kp)(H) && R && G ? V(0) : M();
        }, [H, R, G, V, M]);
    l.useEffect(() => {
        if (!j.ZP.shouldShowOnboarding(t)) return c.Z.escapeToDefaultChannel(t);
        (0, h.E)(t);
    }, [t]);
    let W = (0, d.useTransition)(
            F,
            {
                config: i.config.default,
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
        Y = j.ZP.shouldShowOnboarding(t),
        X = null == S;
    if (
        (l.useEffect(() => {
            if (!Y || X) {
                let e = setTimeout(() => {
                    (0, g.uL)(Z.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [Y, X, t]),
        !j.ZP.shouldShowOnboarding(t) || null == S)
    )
        return null;
    let K = () => {
        switch (F) {
            case 'cover':
                return (0, r.jsx)(I.ZP, {
                    guild: S,
                    onboardingStatus: j.uX.READY,
                    onStart: z,
                    disableTracking: y
                });
            case 'rules':
                return (0, r.jsx)(B.Z, {
                    setCurrentStep: V,
                    previousPromptIndex: w.length - 1,
                    guild: S,
                    prompts: w,
                    completeOnboarding: M,
                    disableTracking: y
                });
            case null:
                return null;
            default:
                return (0, r.jsx)(E.Z, {
                    guild: S,
                    prompts: w,
                    step: F,
                    selectOption: L,
                    completeOnboarding: M,
                    setCurrentStep: V,
                    disableTracking: y
                });
        }
    };
    return (0, r.jsxs)('div', {
        className: k.main,
        ref: n,
        children: [
            null != A
                ? (0, r.jsx)(p.Z, {
                      className: s()(k.artwork),
                      src: A,
                      width: o,
                      height: v,
                      imageClassName: k.cover
                  })
                : (0, r.jsx)(u.Z, {
                      className: k.artwork,
                      preserveAspectRatio: 'xMinYMin slice'
                  }),
            null != P &&
                (0, r.jsx)('div', {
                    className: k.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, _.aD)(P, 0.16), ' 0%, ').concat((0, _.aD)(P, 1), ' 100%)') }
                }),
            (0, r.jsx)('div', { className: k.gradient }),
            W((e, t, n) => {
                let { key: l } = n;
                return (0, r.jsx)(
                    i.animated.div,
                    {
                        style: e,
                        children: K()
                    },
                    l
                );
            }),
            'cover' === F &&
                (0, r.jsx)('div', {
                    className: k.bottomCenterContent,
                    children: (0, r.jsx)(d.Heading, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: T.intl.format(T.t.kI6UoK, { privacyLink: Z.EYA.PRIVACY })
                    })
                })
        ]
    });
}
