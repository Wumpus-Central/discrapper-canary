n.d(e, { f: () => o });
var i = n(524437),
    l = n(995774),
    s = n(509613),
    r = n(695346),
    u = n(313789),
    a = n(388032);
let o = (0, s.Em)(u.n.REACTION_NOTIFICATIONS, {
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
    useValue: r.fz.useSetting,
    setValue: (t) => (0, l.MR)(t, r.fz.getSetting()),
    fieldLayout: "horizontal-responsive",
});
