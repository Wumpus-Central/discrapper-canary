n.d(e, { Z: () => a });
var i = n(524437),
    l = n(995774),
    u = n(509613),
    r = n(695346),
    s = n(313789),
    o = n(388032);
let a = (0, u.Em)(s.n.REACTION_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.Rq0NFs),
    useSubtitle: () => o.intl.string(o.t.oWF6eQ),
    useOptions: () => [
        {
            label: o.intl.string(o.t["9x/RtT"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: o.intl.string(o.t.fJAbQd),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: o.intl.string(o.t["xu+UDU"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: r.fz.useSetting,
    setValue: (t) => (0, l.MR)(t, r.fz.getSetting()),
});
