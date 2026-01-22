i.d(e, { j: () => A });
var n = i(311907),
    l = i(264686),
    s = i(100767),
    r = i(419954),
    u = i(803224),
    a = i(780964),
    o = i(652215),
    T = i(985018);
let A = (0, r.Qx)(a.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => T.intl.string(T.t.JZxxGx),
    useSubtitle: () => T.intl.string(T.t.HDLtJl),
    useValue: () => (0, n.bG)([u.A], () => u.A.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    useOptions: () => [
        {
            name: T.intl.string(T.t.B1AGeJ),
            value: o.aVn.ALL_CHANNELS,
        },
        {
            name: T.intl.string(T.t.uzZg9e),
            value: o.aVn.SELECTED_CHANNEL,
        },
        {
            name: T.intl.string(T.t.DYO5Oi),
            value: o.aVn.NEVER,
        },
    ],
    usePredicate: () => s.$j,
});
