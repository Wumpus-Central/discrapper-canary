n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    s = n(517738),
    r = n(311907),
    a = n(827734),
    o = n(73939),
    d = n(462887),
    c = n(717421),
    u = n(602853),
    m = n(821609),
    g = n(477155),
    h = n(935286),
    x = n(871682),
    _ = n(187322),
    p = n(834730),
    A = n(736653),
    E = n(58149),
    f = n(954571),
    j = n(203982),
    N = n(555337),
    I = n(418448),
    C = n(527678),
    b = n(199940),
    v = n(132514),
    S = n(107795),
    T = n(655943),
    y = n(287479),
    R = n(400812),
    L = n(72533),
    D = n(23901),
    O = n(729984),
    G = n(692453),
    M = n(360827),
    k = n(133154),
    U = n(652215),
    w = n(985018),
    P = n(132140);
function B() {
    let e = (0, r.bG)([N.A], () => N.A.getGuild());
    return null == e ? null : (0, i.jsx)(F, { guild: e });
}
function F(e) {
    let { guild: t } = e,
        N = t.id,
        B = (0, r.bG)([y.A], () => y.A.getCurrentPage()),
        F = (0, L.A)(N),
        {
            hasChanges: H,
            hasConfiguredAnythingForCurrentStep: V,
            hasErrors: z,
        } = (0, r.cf)([y.A], () => ({
            hasChanges: y.A.hasChanges(),
            hasConfiguredAnythingForCurrentStep: y.A.hasConfiguredAnythingForCurrentStep(),
            hasErrors: y.A.hasErrors(),
        })),
        W = (0, r.bG)([y.A], () => {
            let e = (0, R.ql)(B);
            return null != e && !y.A.isEducationUpsellDismissed(e);
        }),
        Y = (0, A.Ay)(),
        K = l.useRef(null),
        [{ spring: X }, Z] = (0, c.z)(() => ({ spring: 0 }), "animate-always");
    l.useEffect(() => {
        function e() {
            Z({ spring: 1, config: s.config.gentle }), Z({ spring: 0, config: s.config.gentle, delay: 1e3 });
        }
        return (
            j._.subscribe(U.jej.EMPHASIZE_NOTICE, e),
            () => {
                j._.unsubscribe(U.jej.EMPHASIZE_NOTICE, e);
            }
        );
    }, [Z]);
    let J = (0, u.r)(a.A.colors.BACKGROUND_SURFACE_HIGH).hex(),
        q = (0, u.r)(a.A.unsafe_rawColors.PRIMARY_160).hex(),
        Q = (0, d.M)(Y) ? J : q,
        $ = X.to({ range: [0, 1], output: [Q, (0, u.r)(a.A.colors.BACKGROUND_FEEDBACK_CRITICAL).hex()] });
    if (F) {
        if (B === R.Hy.DEFAULT_CHANNELS) return (0, i.jsx)(O.G, {});
        else if (B === R.Hy.CUSTOMIZATION_QUESTIONS) return (0, i.jsx)(M.fO, {});
        else if (B === R.Hy.HOME_SETTINGS) return (0, i.jsx)(k.A, {});
        else if (B === R.Hy.CONNECTIONS) return (0, i.jsx)(G.R, {});
        else if ((B === R.Hy.LANDING || B === R.Hy.REVIEW) && v.A.hasChanges()) return (0, i.jsx)(k.A, {});
    }
    let ee = B === R.kd[R.kd.length - 1],
        et = async () => {
            let e = T.A.advancedMode;
            if (H)
                try {
                    if (B === R.Hy.DEFAULT_CHANNELS)
                        await (0, I.jr)(t).then(() =>
                            e ? (0, S.dm)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve(),
                        );
                    else if (B === R.Hy.CUSTOMIZATION_QUESTIONS) await (0, S.dm)(t, { ignoreDefaultPrompt: !0 });
                    else if (B === R.Hy.HOME_SETTINGS) {
                        let e = v.A.getSettings();
                        await (0, b.W5)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        },
        en = async () => {
            f.default.track(U.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, E.H$)(N),
                step: R.Hy[B],
                back: !1,
                skip: !H,
            }),
                (0, C.Ay)((0, R.ql)(B)),
                (await et()) && (0, C._k)(N, B);
        },
        ei = async () => {
            f.default.track(U.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, E.H$)(N),
                step: R.Hy[B],
                back: !0,
                skip: !1,
            }),
                (await et()) && (0, C.kP)(N, B);
        },
        el = null;
    W &&
        (B === R.Hy.SAFETY_CHECK
            ? (el = (0, i.jsx)(D.Et, {}))
            : B === R.Hy.DEFAULT_CHANNELS
              ? (el = (0, i.jsx)(D.hz, {}))
              : B === R.Hy.CUSTOMIZATION_QUESTIONS
                ? (el = (0, i.jsx)(D.yP, {}))
                : B === R.Hy.HOME_SETTINGS && (el = (0, i.jsx)(D.QS, {})));
    let es = (0, i.jsx)("div", {
            className: W ? P.R : void 0,
            children: (0, i.jsx)(m.$, {
                size: "sm",
                variant: "secondary",
                text: w.intl.string(w.t["13/7kX"]),
                icon: g.r,
                iconPosition: "start",
                onClick: ei,
                disabled: W || z,
            }),
        }),
        er = (0, i.jsx)(m.$, {
            size: "sm",
            variant: V ? "primary" : "secondary",
            text: V ? w.intl.string(w.t.PDTjLN) : w.intl.string(w.t["5Wxrcd"]),
            icon: h.E,
            iconPosition: "end",
            onClick: en,
            disabled: W || z,
        });
    return (0, i.jsx)(o.F, {
        component: "div",
        children: (0, i.jsx)(x.F, {
            className: P.hE,
            children: (0, i.jsx)(s.animated.div, {
                className: P.kL,
                style: { backgroundColor: $ },
                children: (0, i.jsxs)("div", {
                    className: P.nP,
                    ref: K,
                    children: [
                        W
                            ? (0, i.jsxs)("div", {
                                  className: P.cZ,
                                  children: [
                                      (0, i.jsx)("img", { className: P.kX, src: n(903702), alt: "wumpus" }),
                                      (0, i.jsxs)("div", {
                                          className: P.C0,
                                          children: [el, (0, i.jsx)("div", { className: P.JM })],
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(_.xp, {
                            containerRef: K,
                            children: (0, i.jsxs)("div", {
                                className: P.o1,
                                children: [
                                    es,
                                    (0, i.jsxs)("div", {
                                        className: P.K2,
                                        children: [
                                            z
                                                ? (0, i.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "status-warning",
                                                      children: w.intl.string(w.t.DhYsPL),
                                                  })
                                                : null,
                                            ee ? null : er,
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
