r.r(e), r.d(e, { default: () => m }), r(388685);
var t = r(951288),
    n = r(647438),
    s = r(120356),
    l = r.n(s),
    a = r(481060),
    d = r(37234),
    c = r(198358),
    o = r(363157),
    x = r(612776),
    h = r(231338),
    j = r(509950),
    p = r(388032),
    E = r(356379);
let u = {
    0: x.W.WELCOME,
    1: x.W.MESSAGES,
    2: x.W.EMOJIS,
    3: x.W.VOICE,
    4: x.W.GUILDS,
    5: x.W.FRIENDS,
    6: x.W.BEST_FRIEND,
    7: x.W.GAMING,
    8: x.W.QUESTS,
    9: x.W.END,
};
function m(i) {
    let {} = i,
        [e, r] = n.useState(0),
        s = u[e],
        m = n.useCallback(() => {
            if (e >= x.t.length - 1) return void (0, d.xf)();
            r(e + 1);
        }, [e]);
    return (0, t.jsx)(a.f6W, {
        theme: h.BR.DARKER,
        children: (i) =>
            (0, t.jsxs)("div", {
                className: l()(E.container, i),
                "aria-label": p.intl.string(j.default["CdU/PD"]),
                children: [
                    (0, t.jsxs)(a.MyZ, {
                        activeSlide: s,
                        children: [
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.WELCOME,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: p.intl.string(j.default.wnuxp6),
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.MESSAGES,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.EMOJIS,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.VOICE,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.GUILDS,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.FRIENDS,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.BEST_FRIEND,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.GAMING,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.QUESTS,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "TBD",
                                    }),
                                }),
                            }),
                            (0, t.jsx)(a.Mi4, {
                                id: x.W.END,
                                children: (0, t.jsx)(c.Z, {
                                    children: (0, t.jsx)(a.Text, {
                                        variant: "display-lg",
                                        color: "text-primary",
                                        children: "Thanks for being a gamer.",
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        className: l()(E.header, i),
                        children: [
                            (0, t.jsxs)("div", {
                                className: E.logo,
                                children: [
                                    (0, t.jsx)(a.gw7, { color: a.TVs.colors.BG_BRAND }),
                                    (0, t.jsx)(a.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: E.logoText,
                                        children: p.intl.string(j.default["CdU/PD"]),
                                    }),
                                ],
                            }),
                            (0, t.jsx)(o.Z, {
                                currentStep: e,
                                totalSteps: x.t.length,
                                className: E.stepIndicator,
                            }),
                            (0, t.jsx)(a.P3F, {
                                onClick: d.xf,
                                className: E.closeButton,
                                children: (0, t.jsx)(a.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, t.jsx)(a.P3F, {
                        onClick: m,
                        className: E.nextButton,
                        children: (0, t.jsx)(a.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.intl.string(p.t.PDTjLC),
                        }),
                    }),
                ],
            }),
    });
}
