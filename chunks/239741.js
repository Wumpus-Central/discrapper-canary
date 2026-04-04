"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(687498),
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
    p = n(527678),
    A = n(199940),
    f = n(132514),
    j = n(107795),
    N = n(655943),
    E = n(287479),
    b = n(400812),
    C = n(72533),
    T = n(23901),
    I = n(729984),
    v = n(692453),
    S = n(360827),
    y = n(133154),
    R = n(652215),
    O = n(985018),
    L = n(444412);
function G() {
    let e = (0, r.bG)([h.A], () => h.A.getGuild());
    return null == e ? null : (0, i.jsx)(D, { guild: e });
}
function D(e) {
    let { guild: t } = e,
        h = t.id,
        G = (0, r.bG)([E.A], () => E.A.getCurrentPage()),
        D = (0, C.A)(h),
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
            let e = (0, b.ql)(G);
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
        if (G === b.Hy.DEFAULT_CHANNELS) return (0, i.jsx)(I.G, {});
        else if (G === b.Hy.CUSTOMIZATION_QUESTIONS) return (0, i.jsx)(S.fO, {});
        else if (G === b.Hy.HOME_SETTINGS) return (0, i.jsx)(y.A, {});
        else if (G === b.Hy.CONNECTIONS) return (0, i.jsx)(v.R, {});
        else if ((G === b.Hy.LANDING || G === b.Hy.REVIEW) && f.A.hasChanges()) return (0, i.jsx)(y.A, {});
    }
    let Y = G === b.kd[b.kd.length - 1],
        X = async () => {
            let e = N.A.advancedMode;
            if (M)
                try {
                    if (G === b.Hy.DEFAULT_CHANNELS)
                        await (0, _.jr)(t).then(() =>
                            e ? (0, j.dm)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve(),
                        );
                    else if (G === b.Hy.CUSTOMIZATION_QUESTIONS) await (0, j.dm)(t, { ignoreDefaultPrompt: !0 });
                    else if (G === b.Hy.HOME_SETTINGS) {
                        let e = f.A.getSettings();
                        await (0, A.W5)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        },
        J = async () => {
            g.default.track(R.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, m.H$)(h),
                step: b.Hy[G],
                back: !1,
                skip: !M,
            }),
                (0, p.Ay)((0, b.ql)(G)),
                (await X()) && (0, p._k)(h, G);
        },
        Z = async () => {
            g.default.track(R.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, m.H$)(h),
                step: b.Hy[G],
                back: !0,
                skip: !1,
            }),
                (await X()) && (0, p.kP)(h, G);
        },
        q = null;
    P &&
        (G === b.Hy.SAFETY_CHECK
            ? (q = (0, i.jsx)(T.Et, {}))
            : G === b.Hy.DEFAULT_CHANNELS
              ? (q = (0, i.jsx)(T.hz, {}))
              : G === b.Hy.CUSTOMIZATION_QUESTIONS
                ? (q = (0, i.jsx)(T.yP, {}))
                : G === b.Hy.HOME_SETTINGS && (q = (0, i.jsx)(T.QS, {})));
    let Q = (0, i.jsx)("div", {
            className: P ? L.R : void 0,
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
            className: L.hE,
            children: (0, i.jsx)(l.animated.div, {
                className: L.kL,
                style: { backgroundColor: K },
                children: (0, i.jsxs)("div", {
                    className: L.nP,
                    ref: B,
                    children: [
                        P
                            ? (0, i.jsxs)("div", {
                                  className: L.cZ,
                                  children: [
                                      (0, i.jsx)("img", { className: L.kX, src: n(903702), alt: "wumpus" }),
                                      (0, i.jsxs)("div", {
                                          className: L.C0,
                                          children: [q, (0, i.jsx)("div", { className: L.JM })],
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(c.xpW, {
                            containerRef: B,
                            children: (0, i.jsxs)("div", {
                                className: L.o1,
                                children: [
                                    Q,
                                    (0, i.jsxs)("div", {
                                        className: L.K2,
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
