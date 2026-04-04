n.d(t, { Z: () => d });
var i = n(955572),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(428130),
    o = n(985018);
let d = (0, s.Qx)(a.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
    useTitle: () => o.intl.string(o.t.nKRoPv),
    useSubtitle: () => o.intl.string(o.t.QntEEG),
    useSearchTerms: () => [o.intl.string(o.t.ZEoGMd)],
    useOptions: () => [
        { name: o.intl.string(o.t.Jqj4cZ), value: r.IE.COZY },
        { name: o.intl.string(o.t["1JNcPS"]), value: r.IE.COMPACT },
    ],
    useValue: () => (l.hH.useSetting() ? r.IE.COMPACT : r.IE.COZY),
    setValue: (e) => {
        l.hH.updateSetting(e === r.IE.COMPACT), (0, i.AC)();
    },
});
