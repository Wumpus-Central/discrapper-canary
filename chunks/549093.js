i.d(t, { q: () => o });
var n = i(873298),
    l = i(815807),
    s = i(419954),
    r = i(253932),
    a = i(780964),
    u = i(985018);
let o = (0, s.Hn)(a.X.REACTION_NOTIFICATIONS, {
    useTitle: () => u.intl.string(u.t.Wxj9Hp),
    useOptions: () => [
        { id: "enabled", label: u.intl.string(u.t["9x/RtT"]), value: n.Tz.NOTIFICATIONS_ENABLED },
        { id: "only_dms", label: u.intl.string(u.t.fJAbQd), value: n.Tz.ONLY_DMS },
        { id: "disabled", label: u.intl.string(u.t["xu+UDU"]), value: n.Tz.NOTIFICATIONS_DISABLED },
    ],
    useValue: r.Zp.useSetting,
    setValue: (e) => (0, l.n4)(e, r.Zp.getSetting()),
});
