n.d(t, { b: () => o });
var i = n(873298),
    s = n(419954),
    l = n(253932),
    r = n(780964),
    a = n(985018);
let o = (0, s.Qx)(r.X.APPEARANCE_UI_DENSITY, {
    useTitle: () => a.intl.string(a.t["C/5V0A"]),
    useSubtitle: () => a.intl.string(a.t.QLZhYk),
    useSearchTerms: () => ["List Spacing"],
    useOptions: () => [
        { name: a.intl.string(a.t["7iegX4"]), value: i.NS.COMPACT },
        { name: a.intl.string(a.t.bBvAEH), value: i.NS.DEFAULT },
        { name: a.intl.string(a.t["4cuYHx"]), value: i.NS.COZY },
    ],
    useValue: () => l.Xi.useSetting(),
    setValue: (e) => {
        e !== i.NS.UNSET_UI_DENSITY && l.Xi.updateSetting(e);
    },
});
