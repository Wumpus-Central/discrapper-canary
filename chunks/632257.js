n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(674746),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(410575),
    d = n(666743),
    f = n(410030),
    _ = n(984370),
    p = n(594174),
    h = n(74538),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(525551);
let y = (e) => {
        let { isAuthenticated: t, user: n } = e,
            i = (0, h.I5)(n, g.PremiumTypes.TIER_2),
            s = (0, f.ZP)();
        return (0, r.jsx)(u.Z, {
            section: m.jXE.NAVIGATION,
            children: (0, r.jsx)(c.f6W, {
                theme: s,
                children: (e) =>
                    (0, r.jsxs)(_.Z, {
                        isAuthenticated: t,
                        className: a()(e, {
                            [b.headerBarV2LightBackground]: !i && !(0, l.wj)(s),
                            [b.headerBarV2DarkBackground]: !i && (0, l.wj)(s),
                        }),
                        role: "navigation",
                        children: [
                            (0, r.jsx)(_.Z.Icon, {
                                icon: c.SrA,
                                "aria-hidden": !0,
                                color: i ? void 0 : o.Z.PREMIUM_TIER_2_PINK,
                            }),
                            (0, r.jsx)(_.Z.Title, { children: E.intl.string(E.t.Ipxkog) }),
                        ],
                    }),
            }),
        });
    },
    O = s.ZP.connectStores([p.default], () => ({ user: p.default.getCurrentUser() }))((0, d.Z)(y));
