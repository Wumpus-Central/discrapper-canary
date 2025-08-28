n.d(t, { Z: () => u });
var i = n(524437),
    r = n(995774),
    l = n(509613),
    o = n(695346),
    a = n(869235),
    s = n(388032);
let u = (0, l.Em)(a.t.REACTION_NOTIFICATIONS, {
    useTitle: () => s.intl.string(s.t.Rq0NFh),
    useSubtitle: () => s.intl.string(s.t.oWF6eX),
    useOptions: () => [
        {
            label: s.intl.string(s.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: s.intl.string(s.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: s.intl.string(s.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: o.fz.useSetting,
    setValue: (e) => (0, r.MR)(e, o.fz.getSetting()),
});
