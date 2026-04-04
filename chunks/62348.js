n.d(t, { j: () => u });
var i = n(311907),
    s = n(264686),
    l = n(100767),
    a = n(419954),
    r = n(803224),
    o = n(780964),
    d = n(652215),
    c = n(985018);
let u = (0, a.Qx)(o.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => c.intl.string(c.t.JZxxGx),
    useSubtitle: () => c.intl.string(c.t.HDLtJl),
    useValue: () => (0, i.bG)([r.A], () => r.A.getTTSType()),
    setValue: (e) => s.default.setTTSType(e),
    useOptions: () => [
        { name: c.intl.string(c.t.B1AGeJ), value: d.aVn.ALL_CHANNELS },
        { name: c.intl.string(c.t.uzZg9e), value: d.aVn.SELECTED_CHANNEL },
        { name: c.intl.string(c.t.DYO5Oi), value: d.aVn.NEVER },
    ],
    usePredicate: () => l.$j,
});
