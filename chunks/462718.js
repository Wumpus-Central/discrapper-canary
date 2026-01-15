n.d(e, { B: () => T });
var i = n(657707),
    l = n(248514),
    s = n(509613),
    u = n(585483),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let T = (0, s.m7)(r.n.LOGOUT_SIDEBAR_ITEM, {
    useTitle: () => o.intl.string(o.t["2jxGer"]),
    icon: i.DoorExitIcon,
    onClick: () => {
        (0, l.Z)({
            title: o.intl.string(o.t["2jxGer"]),
            subtitle: o.intl.string(o.t.SUnWBB),
            confirmText: o.intl.string(o.t["2jxGer"]),
            onConfirm: () => {
                u.S.dispatch(a.CkL.SETTINGS_TRIGGER_LOGOUT);
            },
        });
    },
    buildLayout: () => [],
});
