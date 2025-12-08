n.d(e, { B: () => c });
var i = n(657707),
    l = n(248514),
    s = n(893776),
    r = n(509613),
    u = n(313789),
    a = n(342386),
    o = n(388032);
let c = (0, r.m7)(u.n.LOGOUT_SIDEBAR_ITEM, {
    useTitle: () => o.intl.string(o.t["2jxGer"]),
    icon: i.PBZ,
    onClick: () => {
        (0, l.Z)({
            title: o.intl.string(o.t["2jxGer"]),
            subtitle: o.intl.string(o.t.SUnWBB),
            confirmText: o.intl.string(o.t["2jxGer"]),
            onConfirm: () => {
                (0, a.default)(), s.Z.logout("settings");
            },
        });
    },
    buildLayout: () => [],
});
