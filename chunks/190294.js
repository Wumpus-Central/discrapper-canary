l.d(t, {
    A: () => b,
});
var n = l(627968),
    r = l(64700),
    s = l(641150),
    a = l(397927),
    i = l(365491),
    o = l(758836),
    c = l(985018),
    u = l(78716);
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
    f = {
        [s.q.ALL]: o.G2.CATALOG,
        [s.q.AVATAR_DECORATION]: o.G2.AVATAR_DECORATIONS,
        [s.q.PROFILE_EFFECT]: o.G2.PROFILE_EFFECTS,
        [s.q.NAMEPLATE]: o.G2.NAMEPLATES,
        [s.q.BUNDLE]: o.G2.BUNDLES,
    };

function b(e) {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: b, showOrbRentalNewBadge: g } = e,
        { itemTypeFilters: p } = (0, i.v)(),
        m = r.useMemo(() => {
            if (l === o.G2.CATALOG && p.size > 0) {
                let e = f[Array.from(p)[0]];
                if (null != e) return e;
            }
            return l;
        }, [l, p]);
    return (0, n.jsx)(a.W1t, {
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": c.intl.string(c.t["UKOtz+"]),
        hideScroller: !0,
        onClose: b,
        onSelect: b,
        children: (0, n.jsx)(
            a.rXV,
            {
                children: t.map((e) => {
                    let { tab: t, label: r, hasSubmenu: i } = e;
                    if (i && t === o.G2.CATALOG) {
                        let e = t === l;
                        return (0, n.jsx)(
                            a.Drp,
                            {
                                id: t,
                                label: r,
                                icon: e ? a.yr3 : void 0,
                                hasSubmenu: !0,
                                children: d.map((e) => {
                                    let { tab: t, labelKey: l } = e,
                                        r = t === m;
                                    return (0, n.jsx)(
                                        a.Drp,
                                        {
                                            id: t,
                                            label: c.intl.string(l),
                                            icon: r ? a.yr3 : void 0,
                                            action: () => {
                                                s(t), b();
                                            },
                                        },
                                        t,
                                    );
                                }),
                            },
                            t,
                        );
                    }
                    let f = t === o.G2.ORBS && g,
                        p = (0, n.jsxs)("span", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                            },
                            children: [
                                r,
                                f &&
                                    (0, n.jsx)(a.LpS, {
                                        text: c.intl.string(c.t.y2b7CA),
                                        className: u.Ad,
                                    }),
                            ],
                        });
                    return (0, n.jsx)(
                        a.Drp,
                        {
                            id: t,
                            label: p,
                            icon: t === l ? a.yr3 : void 0,
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
