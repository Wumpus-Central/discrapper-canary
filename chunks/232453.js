n.d(t, { q: () => d });
var i = n(873298),
    s = n(815807),
    l = n(419954),
    a = n(253932),
    r = n(780964),
    o = n(985018);
let d = (0, l.Hn)(r.X.REACTION_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.Wxj9Hp),
    useOptions: () => [
        { id: "enabled", label: o.intl.string(o.t["9x/RtT"]), value: i.Tz.NOTIFICATIONS_ENABLED },
        { id: "only_dms", label: o.intl.string(o.t.fJAbQd), value: i.Tz.ONLY_DMS },
        { id: "disabled", label: o.intl.string(o.t["xu+UDU"]), value: i.Tz.NOTIFICATIONS_DISABLED },
    ],
    useValue: a.Zp.useSetting,
    setValue: (e) => (0, s.n4)(e, a.Zp.getSetting()),
});
