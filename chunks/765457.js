r.r(t), r.d(t, { default: () => g }), r(388685);
var n = r(951288),
    e = r(647438),
    a = r(120356),
    s = r.n(a),
    l = r(481060),
    d = r(37234),
    c = r(2835),
    o = r(410853),
    x = r(425196),
    u = r(860277),
    p = r(118045),
    j = r(221558),
    m = r(360469),
    v = r(741549),
    h = r(271268),
    y = r(626698),
    f = r(612776),
    E = r(231338),
    T = r(506945),
    S = r(388032),
    Z = r(691446);
function g(i) {
    let {} = i,
        [t, r] = e.useState(f.ij.WELCOME),
        a = f.bq[t],
        g = e.useCallback(() => {
            if (t >= f.ij.END) return void (0, d.xf)();
            r(t + 1);
        }, [t]);
    return (0, n.jsx)(l.f6W, {
        theme: E.BR.DARKER,
        children: (i) =>
            (0, n.jsxs)("div", {
                className: s()(Z.container, i),
                "aria-label": S.intl.string(T.default["CdU/PF"]),
                children: [
                    (0, n.jsxs)(l.MyZ, {
                        activeSlide: a,
                        children: [
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.WELCOME,
                                children: (0, n.jsx)(y.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.MESSAGES,
                                children: (0, n.jsx)(m.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.EMOJIS,
                                children: (0, n.jsx)(o.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.VOICE,
                                children: (0, n.jsx)(h.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.GUILDS,
                                children: (0, n.jsx)(j.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.FRIENDS,
                                children: (0, n.jsx)(u.Z, { step: t }),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.GAMING,
                                children: (0, n.jsx)(p.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.QUESTS,
                                children: (0, n.jsx)(v.Z, {}),
                            }),
                            (0, n.jsx)(l.Mi4, {
                                id: f.yD.END,
                                children: (0, n.jsx)(x.Z, {}),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: s()(Z.header, i),
                        children: [
                            (0, n.jsxs)("div", {
                                className: Z.logo,
                                children: [
                                    (0, n.jsx)(l.gw7, { color: l.TVs.colors.BG_BRAND }),
                                    (0, n.jsx)(l.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: Z.logoText,
                                        children: S.intl.string(T.default["CdU/PF"]),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.Z, {
                                activeSlide: a,
                                totalSlides: Object.keys(f.yD).length,
                                className: Z.stepIndicator,
                            }),
                            (0, n.jsx)(l.P3F, {
                                onClick: d.xf,
                                className: Z.closeButton,
                                children: (0, n.jsx)(l.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, n.jsx)(l.P3F, {
                        onClick: g,
                        className: Z.nextButton,
                        children: (0, n.jsx)(l.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: S.intl.string(S.t.PDTjLN),
                        }),
                    }),
                ],
            }),
    });
}
