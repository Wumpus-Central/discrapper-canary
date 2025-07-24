n.d(t, { Z: () => l });
var a = n(524437),
    i = n(995774),
    r = n(281215),
    s = n(695346),
    o = n(388032);
let l = (0, r.Em)('ReactionNotifs', {
    useTitle: () => o.intl.string(o.t.Rq0NFh),
    options: [
        {
            label: () => o.intl.string(o.t['9x/Rtb']),
            value: a.Ns.NOTIFICATIONS_ENABLED
        },
        {
            label: () => o.intl.string(o.t.fJAbQU),
            value: a.Ns.ONLY_DMS
        },
        {
            label: () => o.intl.string(o.t['xu+UDQ']),
            value: a.Ns.NOTIFICATIONS_DISABLED
        }
    ],
    useValue: s.fz.useSetting,
    setValue: (e) => (0, i.MR)(e, s.fz.getSetting())
});
