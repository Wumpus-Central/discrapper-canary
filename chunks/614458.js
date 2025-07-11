n.d(t, { Z: () => l });
var a = n(524437),
    i = n(995774),
    o = n(281215),
    r = n(695346),
    s = n(388032);
let l = (0, o.Em)('ReactionNotifs', {
    useTitle: () => s.intl.string(s.t.Rq0NFh),
    options: [
        {
            label: () => s.intl.string(s.t['9x/Rtb']),
            value: a.Ns.NOTIFICATIONS_ENABLED
        },
        {
            label: () => s.intl.string(s.t.fJAbQU),
            value: a.Ns.ONLY_DMS
        },
        {
            label: () => s.intl.string(s.t['xu+UDQ']),
            value: a.Ns.NOTIFICATIONS_DISABLED
        }
    ],
    useValue: r.fz.useSetting,
    setValue: (e) => (0, i.MR)(e, r.fz.getSetting())
});
