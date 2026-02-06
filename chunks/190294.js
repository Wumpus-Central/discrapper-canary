s.d(t, { A: () => b });
var r = s(627968),
    l = s(64700),
    a = s(641150),
    n = s(397927),
    o = s(365491),
    i = s(758836),
    c = s(985018);
let u = [
        { tab: i.G2.AVATAR_DECORATIONS, labelKey: c.t.dRZYNE },
        { tab: i.G2.PROFILE_EFFECTS, labelKey: c.t["1cNjtx"] },
        { tab: i.G2.NAMEPLATES, labelKey: c.t.V68Fqz },
        { tab: i.G2.BUNDLES, labelKey: c.t.FYFpps },
        { tab: i.G2.CATALOG, labelKey: c.t.xFcotU },
    ],
    d = {
        [a.q.ALL]: i.G2.CATALOG,
        [a.q.AVATAR_DECORATION]: i.G2.AVATAR_DECORATIONS,
        [a.q.PROFILE_EFFECT]: i.G2.PROFILE_EFFECTS,
        [a.q.NAMEPLATE]: i.G2.NAMEPLATES,
        [a.q.BUNDLE]: i.G2.BUNDLES,
    };
function b(e) {
    let { tabs: t, selectedTab: s, onTabSelect: a, onClose: b, showOrbRentalNewBadge: S } = e,
        { itemTypeFilters: E } = (0, o.v)(),
        p = l.useMemo(() => {
            if (s === i.G2.CATALOG && E.size > 0) {
                let e = d[Array.from(E)[0]];
                if (null != e) return e;
            }
            return s;
        }, [s, E]);
    return (0, r.jsx)(n.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": c.intl.string(c.t["UKOtz+"]),
        hideScroller: !0,
        onClose: b,
        onSelect: b,
        children: (0, r.jsx)(
            n.rXV,
            {
                children: t.map((e) => {
                    let { tab: t, label: l, hasSubmenu: o } = e;
                    if (o && t === i.G2.CATALOG) {
                        let e = t === s;
                        return (0, r.jsx)(
                            n.Drp,
                            {
                                id: t,
                                label: l,
                                icon: e ? n.yr3 : void 0,
                                leadingAccessory: e ? { type: "icon", icon: n.yr3 } : void 0,
                                hasSubmenu: !0,
                                children: u.map((e) => {
                                    let { tab: t, labelKey: s } = e,
                                        l = t === p;
                                    return (0, r.jsx)(
                                        n.Drp,
                                        {
                                            id: t,
                                            label: c.intl.string(s),
                                            icon: l ? n.yr3 : void 0,
                                            leadingAccessory: l ? { type: "icon", icon: n.yr3 } : void 0,
                                            action: () => {
                                                a(t), b();
                                            },
                                        },
                                        t,
                                    );
                                }),
                            },
                            t,
                        );
                    }
                    let d = t === i.G2.ORBS && S;
                    return (0, r.jsx)(
                        n.Drp,
                        {
                            id: t,
                            label: l,
                            icon: t === s ? n.yr3 : void 0,
                            leadingAccessory: t === s ? { type: "icon", icon: n.yr3 } : void 0,
                            badge: d ? "new" : void 0,
                            action: () => a(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
