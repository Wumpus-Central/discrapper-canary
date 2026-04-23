n.d(t, { b: () => o });
var i = n(873298),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(985018);
let o = (0, s.Qx)(a.X.APPEARANCE_UI_DENSITY, {
    useTitle: () => r.intl.string(r.t["C/5V0A"]),
    useSubtitle: () => r.intl.string(r.t.QLZhYk),
    useSearchTerms: () => ["List Spacing"],
    useOptions: () => [
        { name: r.intl.string(r.t["7iegX4"]), value: i.NS.COMPACT },
        { name: r.intl.string(r.t.bBvAEH), value: i.NS.DEFAULT },
        { name: r.intl.string(r.t["4cuYHx"]), value: i.NS.COZY },
    ],
    useValue: () => l.Xi.useSetting(),
    setValue: (e) => {
        e !== i.NS.UNSET_UI_DENSITY && l.Xi.updateSetting(e);
    },
});
