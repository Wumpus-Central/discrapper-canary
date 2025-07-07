n.d(t, { Z: () => E });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(674746),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(410575),
    u = n(666743),
    m = n(410030),
    p = n(984370),
    g = n(594174),
    h = n(74538),
    f = n(981631),
    b = n(474936),
    x = n(388032),
    _ = n(881207);
let E = a.ZP.connectStores([g.default], () => ({ user: g.default.getCurrentUser() }))(
    (0, u.Z)((e) => {
        let { isAuthenticated: t, user: n } = e,
            r = (0, h.I5)(n, b.p9.TIER_2),
            a = (0, m.ZP)();
        return (0, i.jsx)(d.Z, {
            section: f.jXE.NAVIGATION,
            children: (0, i.jsx)(c.f6W, {
                theme: a,
                children: (e) =>
                    (0, i.jsxs)(p.Z, {
                        isAuthenticated: t,
                        className: s()(_.headerBar, e, {
                            [_.headerBarV2LightBackground]: !r && !(0, o.wj)(a),
                            [_.headerBarV2DarkBackground]: !r && (0, o.wj)(a)
                        }),
                        role: 'navigation',
                        children: [
                            (0, i.jsx)(p.Z.Icon, {
                                icon: c.SrA,
                                'aria-hidden': !0,
                                color: r ? void 0 : l.Z.PREMIUM_TIER_2_PINK
                            }),
                            (0, i.jsx)(p.Z.Title, { children: x.intl.string(x.t.Ipxkoq) })
                        ]
                    })
            })
        });
    })
);
