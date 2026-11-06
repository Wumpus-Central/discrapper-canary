s.d(t, { A: () => g });
var i = s(477900);
s(582128);
var n = s(503698),
    a = s.n(n),
    l = s(315629),
    r = s(534514),
    c = s(834730),
    o = s(688810),
    d = s(65470),
    u = s(792996),
    m = s(719126),
    x = s(956537);
let g = function (e) {
    let { className: t, location: s, analyticsLocation: n, variant: g = "default", onGiftClick: p } = e,
        h = "settings" === g,
        { analyticsLocations: f } = (0, o.Ay)(s);
    return (0, i.jsx)(o.f5, {
        value: f,
        children: (0, i.jsxs)(l.h, {
            className: a()(m.kL, m.pm, t, { [m.W0]: h }),
            color: "purple",
            children: [
                (0, i.jsxs)("div", {
                    className: m.FS,
                    children: [
                        (0, i.jsx)(r.D, {
                            variant: h ? "heading-lg/semibold" : "heading-xxl/semibold",
                            className: m.R_,
                            children: u.intl.string(h ? u.t["3KomGa"] : u.t.Ve9Ge6),
                        }),
                        (0, i.jsx)(c.E, {
                            className: h ? m.OM : void 0,
                            variant: h ? "body-sm/normal" : "body-md/medium",
                            children: u.intl.string(u.t.yQ06u1),
                        }),
                        (0, i.jsx)("div", {
                            className: m.SB,
                            children: (0, i.jsx)(d.A, {
                                onClick: p,
                                buttonTextOverride: u.intl.string(u.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: n,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
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
