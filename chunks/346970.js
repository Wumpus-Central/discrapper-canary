a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var l = a(861672),
    i = a(477782),
    s = a(628284),
    r = a(985018);
function o(e) {
    let { tabs: t, selectedTab: a, onTabSelect: o, onClose: c } = e;
    return (0, n.jsx)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": r.intl.string(r.t.riPnr0),
        hideScroller: !0,
        onClose: c,
        onSelect: c,
        children: (0, n.jsx)(
            i.rX,
            {
                children: t.map((e) => {
                    let { id: t, label: l } = e;
                    return (0, n.jsx)(
                        i.Dr,
                        {
                            id: t,
                            label: l,
                            icon: t === a ? s.y : void 0,
                            leadingAccessory: t === a ? { type: "icon", icon: s.y } : void 0,
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
