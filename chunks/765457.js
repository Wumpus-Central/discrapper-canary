n.r(t), n.d(t, { default: () => E }), n(388685);
var i = n(54381),
    s = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(37234),
    c = n(2835),
    u = n(410853),
    d = n(425196),
    m = n(860277),
    p = n(118045),
    x = n(221558),
    g = n(360469),
    h = n(741549),
    f = n(271268),
    v = n(626698),
    j = n(612776),
    y = n(231338),
    _ = n(140939),
    Z = n(388032),
    M = n(691446);
function E(e) {
    let {} = e,
        [t, n] = s.useState(j.ij.WELCOME),
        r = j.bq[t],
        E = s.useCallback(() => {
            if (t >= j.ij.END_SUMMARY) return void (0, a.xf)();
            n(t + 1);
        }, [t]);
    return (0, i.jsx)(o.f6W, {
        theme: y.BR.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: l()(M.container, e),
                "aria-label": Z.intl.string(_.default["CdU/PF"]),
                children: [
                    (0, i.jsxs)(o.MyZ, {
                        activeSlide: r,
                        children: [
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.WELCOME,
                                children: (0, i.jsx)(v.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.MESSAGES,
                                children: (0, i.jsx)(g.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.EMOJIS,
                                children: (0, i.jsx)(u.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.VOICE,
                                children: (0, i.jsx)(f.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.GUILDS,
                                children: (0, i.jsx)(x.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.FRIENDS,
                                children: (0, i.jsx)(m.Z, { step: t }),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.GAMING,
                                children: (0, i.jsx)(p.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.QUESTS,
                                children: (0, i.jsx)(h.Z, {}),
                            }),
                            (0, i.jsx)(o.Mi4, {
                                id: j.yD.END,
                                children: (0, i.jsx)(d.Z, { step: t }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: l()(M.header, e),
                        children: [
                            (0, i.jsxs)("div", {
                                className: M.logo,
                                children: [
                                    (0, i.jsx)(o.gw7, { color: o.TVs.colors.BG_BRAND }),
                                    (0, i.jsx)(o.Text, {
                                        variant: "display-sm",
                                        color: "text-strong",
                                        className: M.logoText,
                                        children: Z.intl.string(_.default["CdU/PF"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.Z, {
                                activeSlide: r,
                                totalSlides: Object.keys(j.yD).length,
                                className: M.stepIndicator,
                            }),
                            (0, i.jsx)(o.P3F, {
                                onClick: a.xf,
                                className: M.closeButton,
                                children: (0, i.jsx)(o.Uz9, {}),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.P3F, {
                        onClick: E,
                        className: M.nextButton,
                        children: (0, i.jsx)(o.Text, {
                            variant: "display-sm",
                            color: "text-strong",
                            children: Z.intl.string(Z.t.PDTjLN),
                        }),
                    }),
                ],
            }),
    });
}
