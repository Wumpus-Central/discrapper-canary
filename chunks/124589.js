n.d(t, { A: () => i });
var l = n(627968);
n(64700);
var a = n(397927),
    r = n(985018);
function i(e) {
    let { tabs: t, selectedTab: n, onTabSelect: i, onClose: s } = e;
    return (0, l.jsx)(a.W1t, {
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": r.intl.string(r.t.riPnr0),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, l.jsx)(
            a.rXV,
            {
                children: t.map((e) => {
                    let { id: t, label: r } = e;
                    return (0, l.jsx)(
                        a.Drp,
                        {
                            id: t,
                            label: r,
                            icon: t === n ? a.yr3 : void 0,
                            action: () => i(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
