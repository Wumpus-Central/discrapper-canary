n.d(t, {
    A: () => f,
});
var r = n(627968),
    l = n(64700),
    s = n(641150),
    a = n(397927),
    i = n(365491),
    o = n(758836),
    c = n(985018),
    u = n(78716);
let d = [
        {
            tab: o.G2.AVATAR_DECORATIONS,
            labelKey: c.t.dRZYNE,
        },
        {
            tab: o.G2.PROFILE_EFFECTS,
            labelKey: c.t["1cNjtx"],
        },
        {
            tab: o.G2.NAMEPLATES,
            labelKey: c.t.V68Fqz,
        },
        {
            tab: o.G2.BUNDLES,
            labelKey: c.t.FYFpps,
        },
        {
            tab: o.G2.CATALOG,
            labelKey: c.t.xFcotU,
        },
    ],
    g = {
        [s.q.ALL]: o.G2.CATALOG,
        [s.q.AVATAR_DECORATION]: o.G2.AVATAR_DECORATIONS,
        [s.q.PROFILE_EFFECT]: o.G2.PROFILE_EFFECTS,
        [s.q.NAMEPLATE]: o.G2.NAMEPLATES,
        [s.q.BUNDLE]: o.G2.BUNDLES,
    };

function f(e) {
    let { tabs: t, selectedTab: n, onTabSelect: s, onClose: f, showOrbRentalNewBadge: m } = e,
        { itemTypeFilters: p } = (0, i.v)(),
        _ = l.useMemo(() => {
            if (n === o.G2.CATALOG && p.size > 0) {
                let e = g[Array.from(p)[0]];
                if (null != e) return e;
            }
            return n;
        }, [n, p]);
    return (0, r.jsx)(a.W1t, {
        "data-menu-mixed": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": c.intl.string(c.t["UKOtz+"]),
        hideScroller: !0,
        onClose: f,
        onSelect: f,
        children: (0, r.jsx)(
            a.rXV,
            {
                children: t.map((e) => {
                    let { tab: t, label: l, hasSubmenu: i } = e;
                    if (i && t === o.G2.CATALOG) {
                        let e = t === n;
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: t,
                                label: l,
                                icon: e ? a.yr3 : void 0,
                                hasSubmenu: !0,
                                children: d.map((e) => {
                                    let { tab: t, labelKey: n } = e,
                                        l = t === _;
                                    return (0, r.jsx)(
                                        a.Drp,
                                        {
                                            id: t,
                                            label: c.intl.string(n),
                                            icon: l ? a.yr3 : void 0,
                                            action: () => {
                                                s(t), f();
                                            },
                                        },
                                        t,
                                    );
                                }),
                            },
                            t,
                        );
                    }
                    let g = t === o.G2.ORBS && m,
                        p = (0, r.jsxs)("span", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                            },
                            children: [
                                l,
                                g &&
                                    (0, r.jsx)(a.LpS, {
                                        text: c.intl.string(c.t.y2b7CA),
                                        className: u.Ad,
                                    }),
                            ],
                        });
                    return (0, r.jsx)(
                        a.Drp,
                        {
                            id: t,
                            void_label: p,
                            icon: t === n ? a.yr3 : void 0,
                            action: () => s(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
