t.d(l, { A: () => c });
var r = t(627968);
t(64700);
var n = t(980707),
    s = t(477782),
    a = t(628284),
    i = t(375708);
function c(e) {
    let { tabs: l, selectedTab: t, onTabSelect: c, onClose: o } = e;
    return (0, r.jsx)(n.W, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t.riPnr0),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, r.jsx)(
            s.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: n } = e;
                    return (0, r.jsx)(
                        s.Dr,
                        {
                            id: l,
                            label: n,
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
