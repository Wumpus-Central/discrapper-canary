r.r(t), r.d(t, { default: () => I }), r(388685);
var e = r(951288),
    n = r(647438),
    a = r(120356),
    l = r.n(a),
    s = r(481060),
    d = r(37234),
    c = r(363157),
    o = r(410853),
    x = r(425196),
    u = r(860277),
    p = r(118045),
    m = r(221558),
    h = r(360469),
    v = r(741549),
    j = r(271268),
    f = r(626698),
    y = r(612776),
    E = r(231338),
    T = r(484718),
    Z = r(388032),
    g = r(691446);
let S = {
    0: y.W.WELCOME,
    1: y.W.MESSAGES,
    2: y.W.EMOJIS,
    3: y.W.VOICE,
    4: y.W.GUILDS,
    5: y.W.FRIENDS,
    6: y.W.BEST_FRIEND,
    7: y.W.GAMING,
    8: y.W.QUESTS,
    9: y.W.END,
};
function I(i) {
    let {} = i,
        [t, r] = n.useState(0),
        a = S[t],
        I = n.useCallback(() => {
            if (t >= y.t.length - 1) return void (0, d.xf)();
            r(t + 1);
        }, [t]);
    return (0, e.jsx)(s.f6W, {
        theme: E.BR.DARKER,
        children: (i) =>
            (0, e.jsxs)("div", {
                className: l()(g.container, i),
                "aria-label": Z.intl.string(T.default["CdU/PD"]),
                children: [
                    (0, e.jsxs)(s.MyZ, {
                        activeSlide: a,
                        children: [
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.WELCOME,
                                children: (0, e.jsx)(f.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.MESSAGES,
                                children: (0, e.jsx)(h.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.EMOJIS,
                                children: (0, e.jsx)(o.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.VOICE,
                                children: (0, e.jsx)(j.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.GUILDS,
                                children: (0, e.jsx)(m.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.FRIENDS,
                                children: (0, e.jsx)(u.Z, { slide: y.W.FRIENDS }),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.BEST_FRIEND,
                                children: (0, e.jsx)(u.Z, { slide: y.W.BEST_FRIEND }),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.GAMING,
                                children: (0, e.jsx)(p.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.QUESTS,
                                children: (0, e.jsx)(v.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: y.W.END,
                                children: (0, e.jsx)(x.Z, {}),
                            }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        className: l()(g.header, i),
                        children: [
                            (0, e.jsxs)("div", {
                                className: g.logo,
                                children: [
                                    (0, e.jsx)(s.gw7, { color: s.TVs.colors.BG_BRAND }),
                                    (0, e.jsx)(s.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: g.logoText,
                                        children: Z.intl.string(T.default["CdU/PD"]),
                                    }),
                                ],
                            }),
                            (0, e.jsx)(c.Z, {
                                currentStep: t,
                                totalSteps: y.t.length,
                                className: g.stepIndicator,
                            }),
                            (0, e.jsx)(s.P3F, {
                                onClick: d.xf,
                                className: g.closeButton,
                                children: (0, e.jsx)(s.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, e.jsx)(s.P3F, {
                        onClick: I,
                        className: g.nextButton,
                        children: (0, e.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: Z.intl.string(Z.t.PDTjLC),
                        }),
                    }),
                ],
            }),
    });
}
