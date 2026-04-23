n.d(t, { j: () => c });
var i = n(311907),
    s = n(264686),
    l = n(100767),
    a = n(419954),
    r = n(803224),
    o = n(780964),
    d = n(652215),
    u = n(985018);
let c = (0, a.Qx)(o.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => u.intl.string(u.t.JZxxGx),
    useSubtitle: () => u.intl.string(u.t.HDLtJl),
    useValue: () => (0, i.bG)([r.A], () => r.A.getTTSType()),
    setValue: (e) => s.default.setTTSType(e),
    useOptions: () => [
        { name: u.intl.string(u.t.B1AGeJ), value: d.aVn.ALL_CHANNELS },
        { name: u.intl.string(u.t.uzZg9e), value: d.aVn.SELECTED_CHANNEL },
        { name: u.intl.string(u.t.DYO5Oi), value: d.aVn.NEVER },
    ],
    usePredicate: () => l.$j,
});
