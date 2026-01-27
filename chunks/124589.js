n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(985018);

function a(e) {
    let { tabs: t, selectedTab: n, onTabSelect: a, onClose: s } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t.riPnr0),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, r.jsx)(
            l.rXV,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, r.jsx)(
                        l.Drp,
                        {
                            id: t,
                            label: i,
                            icon: t === n ? l.yr3 : void 0,
                            leadingAccessory:
                                t === n
                                    ? {
                                          type: "icon",
                                          icon: l.yr3,
                                      }
                                    : void 0,
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
