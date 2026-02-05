"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(92674),
    r = n(311907),
    a = n(827734),
    o = n(73939),
    d = n(582754),
    c = n(397927),
    u = n(736653),
    m = n(58149),
    g = n(954571),
    x = n(203982),
    h = n(555337),
    _ = n(418448),
    A = n(527678),
    p = n(199940),
    f = n(132514),
    j = n(107795),
    N = n(655943),
    E = n(287479),
    b = n(400812),
    T = n(72533),
    C = n(246282),
    I = n(729984),
    v = n(692453),
    S = n(360827),
    y = n(133154),
    R = n(652215),
    O = n(985018),
    G = n(484729);
function L() {
    let e = (0, r.bG)([h.A], () => h.A.getGuild());
    return null == e ? null : (0, i.jsx)(D, { guild: e });
}
function D(e) {
    let { guild: t } = e,
        h = t.id,
        L = (0, r.bG)([E.A], () => E.A.getCurrentPage()),
        D = (0, T.A)(h),
        {
            hasChanges: M,
            hasConfiguredAnythingForCurrentStep: k,
            hasErrors: U,
        } = (0, r.cf)([E.A], () => ({
            hasChanges: E.A.hasChanges(),
            hasConfiguredAnythingForCurrentStep: E.A.hasConfiguredAnythingForCurrentStep(),
            hasErrors: E.A.hasErrors(),
        })),
        P = (0, r.bG)([E.A], () => {
            let e = (0, b.ql)(L);
            return null != e && !E.A.isEducationUpsellDismissed(e);
        }),
        w = (0, u.Ay)(),
        B = s.useRef(null),
        [{ spring: F }, H] = (0, c.zhh)(() => ({ spring: 0 }), "animate-always");
    s.useEffect(() => {
        function e() {
            H({ spring: 1, config: l.config.gentle }), H({ spring: 0, config: l.config.gentle, delay: 1e3 });
        }
        return (
            x._.subscribe(R.jej.EMPHASIZE_NOTICE, e),
            () => {
                x._.unsubscribe(R.jej.EMPHASIZE_NOTICE, e);
            }
        );
    }, [H]);
    let V = (0, c.rdh)(a.A.colors.BACKGROUND_SURFACE_HIGH).hex(),
        z = (0, c.rdh)(a.A.unsafe_rawColors.PRIMARY_160).hex(),
        W = (0, d.Mw)(w) ? V : z,
        K = F.to({ range: [0, 1], output: [W, (0, c.rdh)(a.A.colors.BACKGROUND_FEEDBACK_CRITICAL).hex()] });
    if (D) {
        if (L === b.Hy.DEFAULT_CHANNELS) return (0, i.jsx)(I.G, {});
        else if (L === b.Hy.CUSTOMIZATION_QUESTIONS) return (0, i.jsx)(S.fO, {});
        else if (L === b.Hy.HOME_SETTINGS) return (0, i.jsx)(y.A, {});
        else if (L === b.Hy.CONNECTIONS) return (0, i.jsx)(v.R, {});
        else if ((L === b.Hy.LANDING || L === b.Hy.REVIEW) && f.A.hasChanges()) return (0, i.jsx)(y.A, {});
    }
    let Y = L === b.kd[b.kd.length - 1],
        X = async () => {
            let e = N.A.advancedMode;
            if (M)
                try {
                    if (L === b.Hy.DEFAULT_CHANNELS)
                        await (0, _.jr)(t).then(() =>
                            e ? (0, j.dm)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve(),
                        );
                    else if (L === b.Hy.CUSTOMIZATION_QUESTIONS) await (0, j.dm)(t, { ignoreDefaultPrompt: !0 });
                    else if (L === b.Hy.HOME_SETTINGS) {
                        let e = f.A.getSettings();
                        await (0, p.W5)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        },
        J = async () => {
            g.default.track(R.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, m.H$)(h),
                step: b.Hy[L],
                back: !1,
                skip: !M,
            }),
                (0, A.Ay)((0, b.ql)(L)),
                (await X()) && (0, A._k)(h, L);
        },
        Z = async () => {
            g.default.track(R.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, m.H$)(h),
                step: b.Hy[L],
                back: !0,
                skip: !1,
            }),
                (await X()) && (0, A.kP)(h, L);
        },
        Q = null;
    P &&
        (L === b.Hy.SAFETY_CHECK
            ? (Q = (0, i.jsx)(C.Et, {}))
            : L === b.Hy.DEFAULT_CHANNELS
              ? (Q = (0, i.jsx)(C.hz, {}))
              : L === b.Hy.CUSTOMIZATION_QUESTIONS
                ? (Q = (0, i.jsx)(C.yP, {}))
                : L === b.Hy.HOME_SETTINGS && (Q = (0, i.jsx)(C.QS, {})));
    let q = (0, i.jsx)("div", {
            className: P ? G.R : void 0,
            children: (0, i.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                text: O.intl.string(O.t["13/7kX"]),
                icon: c.rJJ,
                iconPosition: "start",
                onClick: Z,
                disabled: P || U,
            }),
        }),
        $ = (0, i.jsx)(c.Button, {
            size: "sm",
            variant: k ? "primary" : "secondary",
            text: k ? O.intl.string(O.t.PDTjLN) : O.intl.string(O.t["5Wxrcd"]),
            icon: c.EdP,
            iconPosition: "end",
            onClick: J,
            disabled: P || U,
        });
    return (0, i.jsx)(o.F, {
        component: "div",
        children: (0, i.jsx)(c.FQk, {
            className: G.hE,
            children: (0, i.jsx)(l.animated.div, {
                className: G.kL,
                style: { backgroundColor: K },
                children: (0, i.jsxs)("div", {
                    className: G.nP,
                    ref: B,
                    children: [
                        P
                            ? (0, i.jsxs)("div", {
                                  className: G.cZ,
                                  children: [
                                      (0, i.jsx)("img", { className: G.kX, src: n(903702), alt: "wumpus" }),
                                      (0, i.jsxs)("div", {
                                          className: G.C0,
                                          children: [Q, (0, i.jsx)("div", { className: G.JM })],
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(c.xpW, {
                            containerRef: B,
                            children: (0, i.jsxs)("div", {
                                className: G.o1,
                                children: [
                                    q,
                                    (0, i.jsxs)("div", {
                                        className: G.K2,
                                        children: [
                                            U
                                                ? (0, i.jsx)(c.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "status-warning",
                                                      children: O.intl.string(O.t.DhYsPL),
                                                  })
                                                : null,
                                            Y ? null : $,
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
