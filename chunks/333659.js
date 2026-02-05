i.d(e, { Z: () => o });
var n = i(955572),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(614651),
    u = i(985018);
let o = (0, l.Qx)(r.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
    useTitle: () => u.intl.string(u.t.nKRoPv),
    useSubtitle: () => u.intl.string(u.t.QntEEG),
    useOptions: () => [
        { name: u.intl.string(u.t.Jqj4cZ), value: a.IE.COZY },
        { name: u.intl.string(u.t["1JNcPS"]), value: a.IE.COMPACT },
    ],
    useValue: () => (s.hH.useSetting() ? a.IE.COMPACT : a.IE.COZY),
    setValue: (t) => {
        s.hH.updateSetting(t === a.IE.COMPACT), (0, n.AC)();
    },
});
