n.d(e, { Z: () => o });
var i = n(524437),
    l = n(995774),
    u = n(509613),
    r = n(695346),
    s = n(313789),
    a = n(388032);
let o = (0, u.Em)(s.n.REACTION_NOTIFICATIONS, {
    useTitle: () => a.intl.string(a.t.Rq0NFh),
    useSubtitle: () => a.intl.string(a.t.oWF6eX),
    useOptions: () => [
        {
            label: a.intl.string(a.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: a.intl.string(a.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: a.intl.string(a.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: r.fz.useSetting,
    setValue: (t) => (0, l.MR)(t, r.fz.getSetting()),
});
