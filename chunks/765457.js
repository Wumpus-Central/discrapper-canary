i.r(e), i.d(e, { default: () => T }), i(388685);
var r = i(54381),
    n = i(473749),
    l = i(120356),
    a = i.n(l),
    s = i(481060),
    d = i(37234),
    c = i(2835),
    o = i(410853),
    u = i(425196),
    x = i(860277),
    p = i(118045),
    h = i(221558),
    m = i(360469),
    f = i(741549),
    y = i(271268),
    E = i(626698),
    v = i(612776),
    j = i(231338),
    S = i(79046),
    Z = i(388032),
    D = i(356379);
function T(t) {
    let {} = t,
        [e, i] = n.useState(v.ij.WELCOME),
        l = v.bq[e],
        T = n.useCallback(() => {
            if (e >= v.ij.END_SUMMARY) return void (0, d.xf)();
            i(e + 1);
        }, [e]);
    return (0, r.jsx)(s.f6W, {
        theme: j.BR.DARKER,
        children: (t) =>
            (0, r.jsxs)("div", {
                className: a()(D.container, t),
                "aria-label": Z.intl.string(S.default["CdU/PF"]),
                children: [
                    (0, r.jsxs)(s.MyZ, {
                        activeSlide: l,
                        children: [
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.WELCOME,
                                children: (0, r.jsx)(E.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.MESSAGES,
                                children: (0, r.jsx)(m.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.EMOJIS,
                                children: (0, r.jsx)(o.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.VOICE,
                                children: (0, r.jsx)(y.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.GUILDS,
                                children: (0, r.jsx)(h.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.FRIENDS,
                                children: (0, r.jsx)(x.Z, { step: e }),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.GAMING,
                                children: (0, r.jsx)(p.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.QUESTS,
                                children: (0, r.jsx)(f.Z, {}),
                            }),
                            (0, r.jsx)(s.Mi4, {
                                id: v.yD.END,
                                children: (0, r.jsx)(u.Z, { step: e }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: a()(D.header, t),
                        children: [
                            (0, r.jsxs)("div", {
                                className: D.logo,
                                children: [
                                    (0, r.jsx)(s.gw7, { color: s.TVs.colors.BG_BRAND }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: D.logoText,
                                        children: Z.intl.string(S.default["CdU/PF"]),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.Z, {
                                activeSlide: l,
                                totalSlides: Object.keys(v.yD).length,
                                className: D.stepIndicator,
                            }),
                            (0, r.jsx)(s.P3F, {
                                onClick: d.xf,
                                className: D.closeButton,
                                children: (0, r.jsx)(s.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.P3F, {
                        onClick: T,
                        className: D.nextButton,
                        children: (0, r.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: Z.intl.string(Z.t.PDTjLN),
                        }),
                    }),
                ],
            }),
    });
}
