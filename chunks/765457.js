r.r(e), r.d(e, { default: () => T }), r(388685);
var i = r(951288),
    n = r(647438),
    l = r(120356),
    a = r.n(l),
    s = r(481060),
    d = r(37234),
    c = r(2835),
    o = r(410853),
    u = r(425196),
    x = r(860277),
    p = r(118045),
    h = r(221558),
    f = r(360469),
    y = r(741549),
    m = r(271268),
    v = r(626698),
    E = r(612776),
    j = r(231338),
    S = r(506945),
    Z = r(388032),
    D = r(691446);
function T(t) {
    let {} = t,
        [e, r] = n.useState(E.ij.WELCOME),
        l = E.bq[e],
        T = n.useCallback(() => {
            if (e >= E.ij.END_SUMMARY) return void (0, d.xf)();
            r(e + 1);
        }, [e]);
    return (0, i.jsx)(s.f6W, {
        theme: j.BR.DARKER,
        children: (t) =>
            (0, i.jsxs)("div", {
                className: a()(D.container, t),
                "aria-label": Z.intl.string(S.default["CdU/PF"]),
                children: [
                    (0, i.jsxs)(s.MyZ, {
                        activeSlide: l,
                        children: [
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.WELCOME,
                                children: (0, i.jsx)(v.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.MESSAGES,
                                children: (0, i.jsx)(f.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.EMOJIS,
                                children: (0, i.jsx)(o.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.VOICE,
                                children: (0, i.jsx)(m.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.GUILDS,
                                children: (0, i.jsx)(h.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.FRIENDS,
                                children: (0, i.jsx)(x.Z, { step: e }),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.GAMING,
                                children: (0, i.jsx)(p.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.QUESTS,
                                children: (0, i.jsx)(y.Z, {}),
                            }),
                            (0, i.jsx)(s.Mi4, {
                                id: E.yD.END,
                                children: (0, i.jsx)(u.Z, { step: e }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(D.header, t),
                        children: [
                            (0, i.jsxs)("div", {
                                className: D.logo,
                                children: [
                                    (0, i.jsx)(s.gw7, { color: s.TVs.colors.BG_BRAND }),
                                    (0, i.jsx)(s.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: D.logoText,
                                        children: Z.intl.string(S.default["CdU/PF"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.Z, {
                                activeSlide: l,
                                totalSlides: Object.keys(E.yD).length,
                                className: D.stepIndicator,
                            }),
                            (0, i.jsx)(s.P3F, {
                                onClick: d.xf,
                                className: D.closeButton,
                                children: (0, i.jsx)(s.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.P3F, {
                        onClick: T,
                        className: D.nextButton,
                        children: (0, i.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: Z.intl.string(Z.t.PDTjLN),
                        }),
                    }),
                ],
            }),
    });
}
