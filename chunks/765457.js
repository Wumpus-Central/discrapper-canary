r.r(i), r.d(i, { default: () => M }), r(388685);
var e = r(951288),
    n = r(647438),
    a = r(120356),
    s = r.n(a),
    l = r(481060),
    d = r(37234),
    c = r(363157),
    o = r(410853),
    x = r(425196),
    u = r(860277),
    p = r(118045),
    h = r(221558),
    m = r(360469),
    v = r(741549),
    j = r(271268),
    f = r(626698),
    y = r(612776),
    T = r(231338),
    E = r(509950),
    Z = r(388032),
    g = r(356379);
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
function M(t) {
    let {} = t,
        [i, r] = n.useState(0),
        a = S[i],
        M = n.useCallback(() => {
            if (i >= y.t.length - 1) return void (0, d.xf)();
            r(i + 1);
        }, [i]);
    return (0, e.jsx)(l.f6W, {
        theme: T.BR.DARKER,
        children: (t) =>
            (0, e.jsxs)("div", {
                className: s()(g.container, t),
                "aria-label": Z.intl.string(E.default["CdU/PD"]),
                children: [
                    (0, e.jsxs)(l.MyZ, {
                        activeSlide: a,
                        children: [
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.WELCOME,
                                children: (0, e.jsx)(f.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.MESSAGES,
                                children: (0, e.jsx)(m.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.EMOJIS,
                                children: (0, e.jsx)(o.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.VOICE,
                                children: (0, e.jsx)(j.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.GUILDS,
                                children: (0, e.jsx)(h.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.FRIENDS,
                                children: (0, e.jsx)(u.Z, { slide: y.W.FRIENDS }),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.BEST_FRIEND,
                                children: (0, e.jsx)(u.Z, { slide: y.W.BEST_FRIEND }),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.GAMING,
                                children: (0, e.jsx)(p.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.QUESTS,
                                children: (0, e.jsx)(v.Z, {}),
                            }),
                            (0, e.jsx)(l.Mi4, {
                                id: y.W.END,
                                children: (0, e.jsx)(x.Z, {}),
                            }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        className: s()(g.header, t),
                        children: [
                            (0, e.jsxs)("div", {
                                className: g.logo,
                                children: [
                                    (0, e.jsx)(l.gw7, { color: l.TVs.colors.BG_BRAND }),
                                    (0, e.jsx)(l.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: g.logoText,
                                        children: Z.intl.string(E.default["CdU/PD"]),
                                    }),
                                ],
                            }),
                            (0, e.jsx)(c.Z, {
                                currentStep: i,
                                totalSteps: y.t.length,
                                className: g.stepIndicator,
                            }),
                            (0, e.jsx)(l.P3F, {
                                onClick: d.xf,
                                className: g.closeButton,
                                children: (0, e.jsx)(l.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, e.jsx)(l.P3F, {
                        onClick: M,
                        className: g.nextButton,
                        children: (0, e.jsx)(l.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: Z.intl.string(Z.t.PDTjLC),
                        }),
                    }),
                ],
            }),
    });
}
