n.d(t, { Z: () => l });
var a = n(524437),
    i = n(995774),
    o = n(281215),
    s = n(695346),
    r = n(388032);
let l = (0, o.Em)('ReactionNotifs', {
    useTitle: () => r.intl.string(r.t.Rq0NFh),
    options: [
        {
            label: () => r.intl.string(r.t['9x/Rtb']),
            value: a.Ns.NOTIFICATIONS_ENABLED
        },
        {
            label: () => r.intl.string(r.t.fJAbQU),
            value: a.Ns.ONLY_DMS
        },
        {
            label: () => r.intl.string(r.t['xu+UDQ']),
            value: a.Ns.NOTIFICATIONS_DISABLED
        }
    ],
    useValue: s.fz.useSetting,
    setValue: (e) => (0, i.MR)(e, s.fz.getSetting())
});
