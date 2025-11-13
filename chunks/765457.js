e.r(r), e.d(r, { default: () => D }), e(388685);
var i = e(951288),
    n = e(647438),
    l = e(120356),
    a = e.n(l),
    s = e(481060),
    d = e(37234),
    c = e(2835),
    o = e(410853),
    u = e(425196),
    x = e(860277),
    p = e(118045),
    h = e(221558),
    y = e(360469),
    f = e(741549),
    m = e(271268),
    E = e(626698),
    v = e(612776),
    j = e(231338),
    S = e(892694),
    T = e(388032),
    Z = e(691446);
function D(t) {
    let {} = t,
        [r, e] = n.useState(v.ij.WELCOME),
        l = v.bq[r],
        D = n.useCallback(() => {
            if (r >= v.ij.END_SUMMARY) return void (0, d.xf)();
            e(r + 1);
        }, [r]);
    return (0, i.jsx)(s.f6W, {
        theme: j.BR.DARKER,
        children: (t) =>
            (0, i.jsxs)("div", {
                className: a()(Z.container, t),
                "aria-label": T.intl.string(S.default["CdU/PF"]),
                children: [
                    (0, i.jsxs)(s.MyZ, {
                        activeSlide: l,
                        children: [
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.WELCOME,
                                children: (0, i.jsx)(E.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.MESSAGES,
                                children: (0, i.jsx)(y.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.EMOJIS,
                                children: (0, i.jsx)(o.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.VOICE,
                                children: (0, i.jsx)(m.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.GUILDS,
                                children: (0, i.jsx)(h.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.FRIENDS,
                                children: (0, i.jsx)(x.Z, { step: r }),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.GAMING,
                                children: (0, i.jsx)(p.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.QUESTS,
                                children: (0, i.jsx)(f.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: v.yD.END,
                                children: (0, i.jsx)(u.Z, { step: r }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(Z.header, t),
                        children: [
                            (0, i.jsxs)("div", {
                                className: Z.logo,
                                children: [
                                    (0, i.jsx)(s.gw7, { color: s.TVs.colors.BG_BRAND }),
                                    (0, i.jsx)(s.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: Z.logoText,
                                        children: T.intl.string(S.default["CdU/PF"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.Z, {
                                activeSlide: l,
                                totalSlides: Object.keys(v.yD).length,
                                className: Z.stepIndicator,
                            }),
                            (0, i.jsx)(s.P3F, {
                                onClick: d.xf,
                                className: Z.closeButton,
                                children: (0, i.jsx)(s.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.P3F, {
                        onClick: D,
                        className: Z.nextButton,
                        children: (0, i.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: T.intl.string(T.t.PDTjLN),
                        }),
                    }),
                ],
            }),
    });
}
