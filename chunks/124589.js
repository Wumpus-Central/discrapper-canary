t.d(l, { A: () => c });
var s = t(627968);
t(64700);
var r = t(980707),
    a = t(477782),
    n = t(628284),
    i = t(375708);
function c(e) {
    let { tabs: l, selectedTab: t, onTabSelect: c, onClose: o } = e;
    return (0, s.jsx)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t.riPnr0),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, s.jsx)(
            a.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: r } = e;
                    return (0, s.jsx)(
                        a.Dr,
                        {
                            id: l,
                            label: r,
                            icon: l === t ? n.y : void 0,
                            leadingAccessory: l === t ? { type: "icon", icon: n.y } : void 0,
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
