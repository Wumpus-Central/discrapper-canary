r.r(t), r.d(t, { default: () => S }), r(388685);
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
    v = r(360469),
    h = r(741549),
    j = r(271268),
    y = r(626698),
    f = r(612776),
    g = r(231338),
    T = r(484718),
    Z = r(388032),
    E = r(691446);
function S(i) {
    let {} = i,
        [t, r] = n.useState(0),
        a = f.K5[t],
        S = n.useCallback(() => {
            if (t >= f.t$.length - 1) return void (0, d.xf)();
            r(t + 1);
        }, [t]);
    return (0, e.jsx)(s.f6W, {
        theme: g.BR.DARKER,
        children: (i) =>
            (0, e.jsxs)("div", {
                className: l()(E.container, i),
                "aria-label": Z.intl.string(T.default["CdU/PD"]),
                children: [
                    (0, e.jsxs)(s.MyZ, {
                        activeSlide: a,
                        children: [
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.WELCOME,
                                children: (0, e.jsx)(y.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.MESSAGES,
                                children: (0, e.jsx)(v.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.EMOJIS,
                                children: (0, e.jsx)(o.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.VOICE,
                                children: (0, e.jsx)(j.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.GUILDS,
                                children: (0, e.jsx)(m.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.FRIENDS,
                                children: (0, e.jsx)(u.Z, { slide: f.Ww.FRIENDS }),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.BEST_FRIEND,
                                children: (0, e.jsx)(u.Z, { slide: f.Ww.BEST_FRIEND }),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.GAMING,
                                children: (0, e.jsx)(p.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.QUESTS,
                                children: (0, e.jsx)(h.Z, {}),
                            }),
                            (0, e.jsx)(s.Mi4, {
                                id: f.Ww.END,
                                children: (0, e.jsx)(x.Z, {}),
                            }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        className: l()(E.header, i),
                        children: [
                            (0, e.jsxs)("div", {
                                className: E.logo,
                                children: [
                                    (0, e.jsx)(s.gw7, { color: s.TVs.colors.BG_BRAND }),
                                    (0, e.jsx)(s.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: E.logoText,
                                        children: Z.intl.string(T.default["CdU/PD"]),
                                    }),
                                ],
                            }),
                            (0, e.jsx)(c.Z, {
                                currentStep: t,
                                totalSteps: f.t$.length,
                                className: E.stepIndicator,
                            }),
                            (0, e.jsx)(s.P3F, {
                                onClick: d.xf,
                                className: E.closeButton,
                                children: (0, e.jsx)(s.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, e.jsx)(s.P3F, {
                        onClick: S,
                        className: E.nextButton,
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
