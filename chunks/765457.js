i.r(e), i.d(e, { default: () => D }), i(388685);
var n = i(54381),
    r = i(473749),
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
    S = i(140939),
    Z = i(388032),
    T = i(691446);
function D(t) {
    let {} = t,
        [e, i] = r.useState(v.ij.WELCOME),
        l = v.bq[e],
        D = r.useCallback(() => {
            if (e >= v.ij.END_SUMMARY) return void (0, d.xf)();
            i(e + 1);
        }, [e]);
    return (0, n.jsx)(s.f6W, {
        theme: j.BR.DARKER,
        children: (t) =>
            (0, n.jsxs)("div", {
                className: a()(T.container, t),
                "aria-label": Z.intl.string(S.default["CdU/PF"]),
                children: [
                    (0, n.jsxs)(s.MyZ, {
                        activeSlide: l,
                        children: [
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.WELCOME,
                                children: (0, n.jsx)(E.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.MESSAGES,
                                children: (0, n.jsx)(m.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.EMOJIS,
                                children: (0, n.jsx)(o.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.VOICE,
                                children: (0, n.jsx)(y.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.GUILDS,
                                children: (0, n.jsx)(h.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.FRIENDS,
                                children: (0, n.jsx)(x.Z, { step: e }),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.GAMING,
                                children: (0, n.jsx)(p.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.QUESTS,
                                children: (0, n.jsx)(f.Z, {}),
                            }),
                            (0, n.jsx)(s.Mi4, {
                                id: v.yD.END,
                                children: (0, n.jsx)(u.Z, { step: e }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(T.header, t),
                        children: [
                            (0, n.jsxs)("div", {
                                className: T.logo,
                                children: [
                                    (0, n.jsx)(s.gw7, { color: s.TVs.colors.BG_BRAND }),
                                    (0, n.jsx)(s.Text, {
                                        variant: "display-sm",
                                        color: "text-primary",
                                        className: T.logoText,
                                        children: Z.intl.string(S.default["CdU/PF"]),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.Z, {
                                activeSlide: l,
                                totalSlides: Object.keys(v.yD).length,
                                className: T.stepIndicator,
                            }),
                            (0, n.jsx)(s.P3F, {
                                onClick: d.xf,
                                className: T.closeButton,
                                children: (0, n.jsx)(s.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, n.jsx)(s.P3F, {
                        onClick: D,
                        className: T.nextButton,
                        children: (0, n.jsx)(s.Text, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: Z.intl.string(Z.t.PDTjLN),
                        }),
                    }),
                ],
            }),
    });
}
