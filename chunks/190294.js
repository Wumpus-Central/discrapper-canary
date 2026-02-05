"use strict";
s.d(t, { A: () => g });
var n = s(627968),
    r = s(64700),
    l = s(641150),
    a = s(397927),
    i = s(365491),
    o = s(758836),
    c = s(985018);
let d = [
        { tab: o.G2.AVATAR_DECORATIONS, labelKey: c.t.dRZYNE },
        { tab: o.G2.PROFILE_EFFECTS, labelKey: c.t["1cNjtx"] },
        { tab: o.G2.NAMEPLATES, labelKey: c.t.V68Fqz },
        { tab: o.G2.BUNDLES, labelKey: c.t.FYFpps },
        { tab: o.G2.CATALOG, labelKey: c.t.xFcotU },
    ],
    u = {
        [l.q.ALL]: o.G2.CATALOG,
        [l.q.AVATAR_DECORATION]: o.G2.AVATAR_DECORATIONS,
        [l.q.PROFILE_EFFECT]: o.G2.PROFILE_EFFECTS,
        [l.q.NAMEPLATE]: o.G2.NAMEPLATES,
        [l.q.BUNDLE]: o.G2.BUNDLES,
    };
function g(e) {
    let { tabs: t, selectedTab: s, onTabSelect: l, onClose: g, showOrbRentalNewBadge: m } = e,
        { itemTypeFilters: _ } = (0, i.v)(),
        h = r.useMemo(() => {
            if (s === o.G2.CATALOG && _.size > 0) {
                let e = u[Array.from(_)[0]];
                if (null != e) return e;
            }
            return s;
        }, [s, _]);
    return (0, n.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": c.intl.string(c.t["UKOtz+"]),
        hideScroller: !0,
        onClose: g,
        onSelect: g,
        children: (0, n.jsx)(
            a.rXV,
            {
                children: t.map((e) => {
                    let { tab: t, label: r, hasSubmenu: i } = e;
                    if (i && t === o.G2.CATALOG) {
                        let e = t === s;
                        return (0, n.jsx)(
                            a.Drp,
                            {
                                id: t,
                                label: r,
                                icon: e ? a.yr3 : void 0,
                                leadingAccessory: e ? { type: "icon", icon: a.yr3 } : void 0,
                                hasSubmenu: !0,
                                children: d.map((e) => {
                                    let { tab: t, labelKey: s } = e,
                                        r = t === h;
                                    return (0, n.jsx)(
                                        a.Drp,
                                        {
                                            id: t,
                                            label: c.intl.string(s),
                                            icon: r ? a.yr3 : void 0,
                                            leadingAccessory: r ? { type: "icon", icon: a.yr3 } : void 0,
                                            action: () => {
                                                l(t), g();
                                            },
                                        },
                                        t,
                                    );
                                }),
                            },
                            t,
                        );
                    }
                    let u = t === o.G2.ORBS && m;
                    return (0, n.jsx)(
                        a.Drp,
                        {
                            id: t,
                            label: r,
                            icon: t === s ? a.yr3 : void 0,
                            leadingAccessory: t === s ? { type: "icon", icon: a.yr3 } : void 0,
                            badge: u ? "new" : void 0,
                            action: () => l(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
