i.d(e, { I: () => o });
var n = i(934551),
    l = i(314116),
    s = i(830215),
    r = i(419954),
    a = i(780964),
    u = i(985018);
let o = (0, r.i4)(a.X.LOGOUT_SIDEBAR_ITEM, {
    variant: "destructive",
    useTitle: () => u.intl.string(u.t["2jxGer"]),
    icon: n.DoorExitIcon,
    onClick: () => {
        (0, l.A)({
            title: u.intl.string(u.t["2jxGer"]),
            subtitle: u.intl.string(u.t.SUnWBB),
            confirmText: u.intl.string(u.t["2jxGer"]),
            onConfirm: () => {
                s.A.logout("settings");
            },
        });
    },
    buildLayout: () => [],
});
