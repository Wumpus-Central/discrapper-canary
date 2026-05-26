s.d(l, { A: () => c });
var t = s(627968);
s(64700);
var r = s(980707),
    a = s(477782),
    n = s(628284),
    i = s(375708);
function c(e) {
    let { tabs: l, selectedTab: s, onTabSelect: c, onClose: o } = e;
    return (0, t.jsx)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t.riPnr0),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, t.jsx)(
            a.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: r } = e;
                    return (0, t.jsx)(
                        a.Dr,
                        {
                            id: l,
                            label: r,
                            icon: l === s ? n.y : void 0,
                            leadingAccessory: l === s ? { type: "icon", icon: n.y } : void 0,
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
