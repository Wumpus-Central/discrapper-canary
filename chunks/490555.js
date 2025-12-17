n.d(e, { G: () => o });
var i = n(524437),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(388032);
let a = (0, l.J9)(u.n.APPEARANCE_UI_DENSITY, {
        useTitle: () => r.intl.string(r.t["C/5V0A"]),
        useSubtitle: () => r.intl.string(r.t.QLZhYk),
        useOptions: () => [
            {
                name: r.intl.string(r.t["7iegX4"]),
                value: i.Pi.COMPACT,
            },
            {
                name: r.intl.string(r.t.bBvAEH),
                value: i.Pi.DEFAULT,
            },
            {
                name: r.intl.string(r.t["4cuYHx"]),
                value: i.Pi.COZY,
            },
        ],
        useValue: () => s.YC.useSetting(),
        setValue: (t) => {
            t !== i.Pi.UNSET_UI_DENSITY && s.YC.updateSetting(t);
        },
    }),
    o = (0, l.k4)(u.n.APPEARANCE_UI_DENSITY_CATEGORY, {
        useSubnavLabel: () => r.intl.string(r.t["C/5V0A"]),
        buildLayout: () => [a],
    });
