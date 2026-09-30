t.d(l, { A: () => c });
var r = t(477900);
t(582128);
var s = t(980707),
    n = t(477782),
    a = t(628284),
    i = t(375708);
function c(e) {
    let { tabs: l, selectedTab: t, onTabSelect: c, onClose: o } = e;
    return (0, r.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t.riPnr0),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, r.jsx)(
            n.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: s } = e;
                    return (0, r.jsx)(
                        n.Dr,
                        {
                            id: l,
                            label: s,
                            icon: l === t ? a.y : void 0,
                            leadingAccessory: l === t ? { type: "icon", icon: a.y } : void 0,
                            action: () => c(l),
                        },
                        l,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
