i.d(t, { A: () => g });
var s = i(477900);
i(582128);
var n = i(503698),
    a = i.n(n),
    l = i(315629),
    r = i(534514),
    c = i(834730),
    o = i(688810),
    d = i(65470),
    u = i(792996),
    m = i(719126),
    x = i(956537);
let g = function (e) {
    let { className: t, location: i, analyticsLocation: n, variant: g = "default", onGiftClick: p } = e,
        h = "settings" === g,
        { analyticsLocations: f } = (0, o.Ay)(i);
    return (0, s.jsx)(o.f5, {
        value: f,
        children: (0, s.jsxs)(l.h, {
            className: a()(m.kL, m.pm, t, { [m.W0]: h }),
            color: "purple",
            children: [
                (0, s.jsxs)("div", {
                    className: m.FS,
                    children: [
                        (0, s.jsx)(r.D, {
                            variant: h ? "heading-lg/semibold" : "heading-xxl/semibold",
                            className: m.R_,
                            children: u.intl.string(h ? u.t["3KomGa"] : u.t.Ve9Ge6),
                        }),
                        (0, s.jsx)(c.E, {
                            className: h ? m.OM : void 0,
                            variant: h ? "body-sm/normal" : "body-md/medium",
                            children: u.intl.string(u.t.yQ06u1),
                        }),
                        (0, s.jsx)("div", {
                            className: m.SB,
                            children: (0, s.jsx)(d.A, {
                                onClick: p,
                                buttonTextOverride: u.intl.string(u.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: n,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("img", {
                    src: h
                        ? x
                        : "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: m._e,
                    alt: h ? "" : "gift nitro banner",
                }),
            ],
        }),
    });
};
