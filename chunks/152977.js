n.d(e, { w: () => o });
var i = n(857595),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(501348),
    a = n(388032);
let o = (0, l.J9)(u.n.APPEARANCE_MESSAGE_DISPLAY_MODE, {
    useTitle: () => a.intl.string(a.t.nKRoPv),
    useSubtitle: () => a.intl.string(a.t.QntEEG),
    useOptions: () => [
        {
            name: a.intl.string(a.t.Jqj4cZ),
            value: r.pe.COZY,
        },
        {
            name: a.intl.string(a.t["1JNcPS"]),
            value: r.pe.COMPACT,
        },
    ],
    useValue: () => (s.jU.useSetting() ? r.pe.COMPACT : r.pe.COZY),
    setValue: (t) => {
        s.jU.updateSetting(t === r.pe.COMPACT), (0, i.ZZ)();
    },
});
