i.d(e, {
    q: () => o,
});
var n = i(873298),
    l = i(815807),
    s = i(419954),
    r = i(253932),
    u = i(780964),
    a = i(985018);
let o = (0, s.Hn)(u.X.REACTION_NOTIFICATIONS, {
    useTitle: () => a.intl.string(a.t.Wxj9Hp),
    useOptions: () => [
        {
            id: "enabled",
            label: a.intl.string(a.t["9x/RtT"]),
            value: n.Tz.NOTIFICATIONS_ENABLED,
        },
        {
            id: "only_dms",
            label: a.intl.string(a.t.fJAbQd),
            value: n.Tz.ONLY_DMS,
        },
        {
            id: "disabled",
            label: a.intl.string(a.t["xu+UDU"]),
            value: n.Tz.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: r.Zp.useSetting,
    setValue: (t) => (0, l.n4)(t, r.Zp.getSetting()),
    fieldLayout: "horizontal-responsive",
});
