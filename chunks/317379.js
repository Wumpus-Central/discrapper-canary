n.d(e, { f: () => o });
var i = n(524437),
    r = n(995774),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    a = n(388032);
let o = (0, l.Em)(u.n.REACTION_NOTIFICATIONS, {
    useTitle: () => a.intl.string(a.t.Wxj9Hp),
    useOptions: () => [
        {
            label: a.intl.string(a.t["9x/RtT"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: a.intl.string(a.t.fJAbQd),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: a.intl.string(a.t["xu+UDU"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: s.fz.useSetting,
    setValue: (t) => (0, r.MR)(t, s.fz.getSetting()),
});
