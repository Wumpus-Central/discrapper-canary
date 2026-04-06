s.d(t, { A: () => o });
var r = s(627968);
s(64700);
var l = s(397927),
    n = s(758836),
    a = s(985018);
function o(e) {
    let { tabs: t, selectedTab: s, onTabSelect: o, onClose: i, showOrbRentalNewBadge: c } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": a.intl.string(a.t["UKOtz+"]),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, r.jsx)(
            l.rXV,
            {
                children: t.map((e) => {
                    let { tab: t, label: a, renderOverflowContent: u } = e;
                    if (null != u) {
                        let e = t === s;
                        return (0, r.jsx)(
                            l.Drp,
                            {
                                id: t,
                                label: a,
                                icon: e ? l.yr3 : void 0,
                                leadingAccessory: e ? { type: "icon", icon: l.yr3 } : void 0,
                                hasSubmenu: !0,
                                children: u({ onClose: i }),
                            },
                            t,
                        );
                    }
                    let d = t === n.G2.ORBS && c;
                    return (0, r.jsx)(
                        l.Drp,
                        {
                            id: t,
                            label: a,
                            icon: t === s ? l.yr3 : void 0,
                            leadingAccessory: t === s ? { type: "icon", icon: l.yr3 } : void 0,
                            badge: d ? "new" : void 0,
                            action: () => o(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
