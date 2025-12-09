n.d(e, { B: () => c });
var i = n(657707),
    l = n(248514),
    s = n(509613),
    r = n(585483),
    u = n(313789),
    a = n(981631),
    o = n(388032);
let c = (0, s.m7)(u.n.LOGOUT_SIDEBAR_ITEM, {
    useTitle: () => o.intl.string(o.t["2jxGer"]),
    icon: i.PBZ,
    onClick: () => {
        (0, l.Z)({
            title: o.intl.string(o.t["2jxGer"]),
            subtitle: o.intl.string(o.t.SUnWBB),
            confirmText: o.intl.string(o.t["2jxGer"]),
            onConfirm: () => {
                r.S.dispatch(a.CkL.SETTINGS_TRIGGER_LOGOUT);
            },
        });
    },
    buildLayout: () => [],
});
