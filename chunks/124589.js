a.d(t, { A: () => l });
var n = a(627968);
a(64700);
var i = a(397927),
    s = a(985018);
function l(e) {
    let { tabs: t, selectedTab: a, onTabSelect: l, onClose: r } = e;
    return (0, n.jsx)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": s.intl.string(s.t.riPnr0),
        hideScroller: !0,
        onClose: r,
        onSelect: r,
        children: (0, n.jsx)(
            i.rXV,
            {
                children: t.map((e) => {
                    let { id: t, label: s } = e;
                    return (0, n.jsx)(
                        i.Drp,
                        {
                            id: t,
                            label: s,
                            icon: t === a ? i.yr3 : void 0,
                            leadingAccessory: t === a ? { type: "icon", icon: i.yr3 } : void 0,
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
