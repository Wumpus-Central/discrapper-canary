n.d(e, { f: () => o });
var i = n(524437),
    l = n(995774),
    s = n(509613),
    u = n(695346),
    r = n(313789),
    a = n(388032);
let o = (0, s.Em)(r.n.REACTION_NOTIFICATIONS, {
    useTitle: () => a.intl.string(a.t.Wxj9Hp),
    useOptions: () => [
        {
            id: "enabled",
            label: a.intl.string(a.t["9x/RtT"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            id: "only_dms",
            label: a.intl.string(a.t.fJAbQd),
            value: i.Ns.ONLY_DMS,
        },
        {
            id: "disabled",
            label: a.intl.string(a.t["xu+UDU"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: u.fz.useSetting,
    setValue: (t) => (0, l.MR)(t, u.fz.getSetting()),
    fieldLayout: "horizontal-responsive",
});
