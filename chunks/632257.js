n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(410575),
    u = n(666743),
    d = n(410030),
    f = n(984370),
    p = n(594174),
    _ = n(74538),
    m = n(981631),
    h = n(474936),
    g = n(388032),
    E = n(845761);
let b = (e) => {
        let { isAuthenticated: t, user: n } = e,
            i = (0, _.I5)(n, h.PremiumTypes.TIER_2),
            o = (0, d.ZP)();
        return (0, r.jsx)(c.Z, {
            section: m.jXE.NAVIGATION,
            children: (0, r.jsx)(l.f6W, {
                theme: o,
                children: (e) =>
                    (0, r.jsxs)(f.Z, {
                        isAuthenticated: t,
                        className: a()(e, {
                            [E.headerBarV2LightBackground]: !i && !(0, s.wj)(o),
                            [E.headerBarV2DarkBackground]: !i && (0, s.wj)(o),
                        }),
                        role: "navigation",
                        children: [
                            (0, r.jsx)(f.Z.Icon, {
                                icon: l.SrA,
                                "aria-hidden": !0,
                                color: i ? void 0 : l.TVs.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                            (0, r.jsx)(f.Z.Title, { children: g.intl.string(g.t.Ipxkog) }),
                        ],
                    }),
            }),
        });
    },
    y = o.ZP.connectStores([p.default], () => ({ user: p.default.getCurrentUser() }))((0, u.Z)(b));
