i.d(e, {
    Z: () => o,
});
var n = i(955572),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(614651),
    a = i(985018);
let o = (0, l.Qx)(r.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
    useTitle: () => a.intl.string(a.t.nKRoPv),
    useSubtitle: () => a.intl.string(a.t.QntEEG),
    useOptions: () => [
        {
            name: a.intl.string(a.t.Jqj4cZ),
            value: u.IE.COZY,
        },
        {
            name: a.intl.string(a.t["1JNcPS"]),
            value: u.IE.COMPACT,
        },
    ],
    useValue: () => (s.hH.useSetting() ? u.IE.COMPACT : u.IE.COZY),
    setValue: (t) => {
        s.hH.updateSetting(t === u.IE.COMPACT), (0, n.AC)();
    },
});
