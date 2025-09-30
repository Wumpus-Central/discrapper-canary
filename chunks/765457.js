t.r(e), t.d(e, { default: () => T }), t(388685);
var n = t(951288),
    r = t(647438),
    s = t(120356),
    l = t.n(s),
    a = t(481060),
    d = t(37234),
    c = t(198358),
    o = t(363157),
    x = t(860277),
    u = t(221558),
    m = t(360469),
    p = t(271268),
    h = t(626698),
    j = t(612776),
    v = t(231338),
    g = t(509950),
    y = t(388032),
    f = t(356379);
let E = {
    0: j.W.WELCOME,
    1: j.W.MESSAGES,
    2: j.W.EMOJIS,
    3: j.W.VOICE,
    4: j.W.GUILDS,
    5: j.W.FRIENDS,
    6: j.W.BEST_FRIEND,
    7: j.W.GAMING,
    8: j.W.QUESTS,
    9: j.W.END,
};
function T(i) {
    let {} = i,
        [e, t] = r.useState(0),
        s = E[e],
        T = r.useCallback(() => {
            if (e >= j.t.length - 1) return void (0, d.xf)();
            t(e + 1);
        }, [e]);
    return (0, n.jsx)(a.f6W, {
        theme: v.BR.DARKER,
        children: (i) =>
            (0, n.jsxs)("div", {
                className: l()(f.container, i),
                "aria-label": y.intl.string(g.default["CdU/PD"]),
                children: [
                    (0, n.jsxs)(a.MyZ, {
                        activeSlide: s,
                        children: [
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.WELCOME,
                                children: (0, n.jsx)(h.Z, {}),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.MESSAGES,
                                children: (0, n.jsx)(m.Z, {}),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.EMOJIS,
                                children: (0, n.jsx)(c.Z, {
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.VOICE,
                                children: (0, n.jsx)(p.Z, {}),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.GUILDS,
                                children: (0, n.jsx)(u.Z, {}),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.FRIENDS,
                                children: (0, n.jsx)(x.Z, { slide: j.W.FRIENDS }),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.BEST_FRIEND,
                                children: (0, n.jsx)(x.Z, { slide: j.W.BEST_FRIEND }),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.GAMING,
                                children: (0, n.jsx)(c.Z, {
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.QUESTS,
                                children: (0, n.jsx)(c.Z, {
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, n.jsx)(a.Mi4, {
                                id: j.W.END,
                                children: (0, n.jsx)(c.Z, {
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "Thanks for being a gamer.",
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: l()(f.header, i),
                        children: [
                            (0, n.jsxs)("div", {
                                className: f.logo,
                                children: [
                                    (0, n.jsx)(a.gw7, { color: a.TVs.colors.BG_BRAND }),
                                    (0, n.jsx)(a.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: f.logoText,
                                        children: y.intl.string(g.default["CdU/PD"]),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(o.Z, {
                                currentStep: e,
                                totalSteps: j.t.length,
                                className: f.stepIndicator,
                            }),
                            (0, n.jsx)(a.P3F, {
                                onClick: d.xf,
                                className: f.closeButton,
                                children: (0, n.jsx)(a.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, n.jsx)(a.P3F, {
                        onClick: T,
                        className: f.nextButton,
                        children: (0, n.jsx)(a.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: y.intl.string(y.t.PDTjLC),
                        }),
                    }),
                ],
            }),
    });
}
