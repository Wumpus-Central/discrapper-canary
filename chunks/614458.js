n.d(t, { Z: () => l });
var i = n(524437),
    a = n(995774),
    s = n(281215),
    o = n(695346),
    r = n(388032);
let l = (0, s.Em)('ReactionNotifs', {
    useTitle: () => r.intl.string(r.t.Rq0NFh),
    options: [
        {
            label: () => r.intl.string(r.t['9x/Rtb']),
            value: i.Ns.NOTIFICATIONS_ENABLED
        },
        {
            label: () => r.intl.string(r.t.fJAbQU),
            value: i.Ns.ONLY_DMS
        },
        {
            label: () => r.intl.string(r.t['xu+UDQ']),
            value: i.Ns.NOTIFICATIONS_DISABLED
        }
    ],
    useValue: o.fz.useSetting,
    setValue: (e) => (0, a.MR)(e, o.fz.getSetting())
});
