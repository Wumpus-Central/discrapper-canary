i.d(e, { j: () => T });
var n = i(311907),
    l = i(264686),
    s = i(100767),
    r = i(419954),
    a = i(803224),
    u = i(780964),
    o = i(652215),
    d = i(985018);
let T = (0, r.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => d.intl.string(d.t.JZxxGx),
    useSubtitle: () => d.intl.string(d.t.HDLtJl),
    useValue: () => (0, n.bG)([a.A], () => a.A.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    useOptions: () => [
        { name: d.intl.string(d.t.B1AGeJ), value: o.aVn.ALL_CHANNELS },
        { name: d.intl.string(d.t.uzZg9e), value: o.aVn.SELECTED_CHANNEL },
        { name: d.intl.string(d.t.DYO5Oi), value: o.aVn.NEVER },
    ],
    usePredicate: () => s.$j,
});
