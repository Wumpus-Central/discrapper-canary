var s = t(477900);
t(582128);
var r = t(165862),
    n = t(477782),
    a = t(628284),
    i = t(792996);
t.d(
    l,
    {},
    {
        A: function (e) {
            let { tabs: l, selectedTab: t, onTabSelect: c, onClose: o } = e;
            return (0, s.jsx)(r.W, {
                "data-menu-migrated-auto": !0,
                navId: "global-discovery-tabs-overflow-menu",
                "aria-label": i.intl.string(i.t.riPnr0),
                hideScroller: !0,
                onClose: o,
                onSelect: o,
                children: (0, s.jsx)(
                    n.rX,
                    {
                        children: l.map((e) => {
                            let { id: l, label: r } = e;
                            return (0, s.jsx)(
                                n.Dr,
                                {
                                    id: l,
                                    label: r,
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
        },
    },
);
