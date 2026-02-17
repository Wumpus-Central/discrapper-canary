i.d(e, { b: () => u, u: () => o });
var n = i(873298),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(985018);
let u = (0, l.Qx)(r.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => a.intl.string(a.t["C/5V0A"]),
        useSubtitle: () => a.intl.string(a.t.QLZhYk),
        useOptions: () => [
            { name: a.intl.string(a.t["7iegX4"]), value: n.NS.COMPACT },
            { name: a.intl.string(a.t.bBvAEH), value: n.NS.DEFAULT },
            { name: a.intl.string(a.t["4cuYHx"]), value: n.NS.COZY },
        ],
        useValue: () => s.Xi.useSetting(),
        setValue: (t) => {
            t !== n.NS.UNSET_UI_DENSITY && s.Xi.updateSetting(t);
        },
    }),
    o = (0, l.zZ)(r.X.APPEARANCE_UI_DENSITY_CATEGORY, {
        useSubnavLabel: () => a.intl.string(a.t["C/5V0A"]),
        buildLayout: () => [u],
    });
