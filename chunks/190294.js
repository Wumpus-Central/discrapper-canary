r.d(t, { A: () => c });
var n = r(627968);
r(64700);
var s = r(861672),
    l = r(477782),
    a = r(628284),
    o = r(758836),
    i = r(985018);
function c(e) {
    let { tabs: t, selectedTab: r, onTabSelect: c, onClose: d, showOrbRentalNewBadge: u } = e;
    return (0, n.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t["UKOtz+"]),
        hideScroller: !0,
        onClose: d,
        onSelect: d,
        children: (0, n.jsx)(
            l.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: s, renderOverflowContent: i } = e;
                    if (null != i) {
                        let e = t === r;
                        return (0, n.jsx)(
                            l.Dr,
                            {
                                id: t,
                                label: s,
                                icon: e ? a.y : void 0,
                                leadingAccessory: e ? { type: "icon", icon: a.y } : void 0,
                                hasSubmenu: !0,
                                children: i({ onClose: d }),
                            },
                            t,
                        );
                    }
                    let _ = t === o.G2.ORBS && u;
                    return (0, n.jsx)(
                        l.Dr,
                        {
                            id: t,
                            label: s,
                            icon: t === r ? a.y : void 0,
                            leadingAccessory: t === r ? { type: "icon", icon: a.y } : void 0,
                            badge: _ ? "new" : void 0,
                            action: () => c(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
