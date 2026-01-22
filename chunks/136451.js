i.d(e, { b: () => o });
var n = i(873298),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(985018);
let a = (0, l.Qx)(r.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => u.intl.string(u.t["C/5V0A"]),
        useSubtitle: () => u.intl.string(u.t.QLZhYk),
        useOptions: () => [
            {
                name: u.intl.string(u.t["7iegX4"]),
                value: n.NS.COMPACT,
            },
            {
                name: u.intl.string(u.t.bBvAEH),
                value: n.NS.DEFAULT,
            },
            {
                name: u.intl.string(u.t["4cuYHx"]),
                value: n.NS.COZY,
            },
        ],
        useValue: () => s.Xi.useSetting(),
        setValue: (t) => {
            t !== n.NS.UNSET_UI_DENSITY && s.Xi.updateSetting(t);
        },
    }),
    o = (0, l.zZ)(r.X.APPEARANCE_UI_DENSITY_CATEGORY, {
        useSubnavLabel: () => u.intl.string(u.t["C/5V0A"]),
        buildLayout: () => [a],
    });
