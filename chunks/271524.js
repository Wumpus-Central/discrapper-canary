n.d(e, { l: () => S });
var i = n(442837),
    l = n(292556),
    s = n(419363),
    u = n(509613),
    r = n(292959),
    a = n(313789),
    o = n(981631),
    T = n(388032);
let S = (0, u.J9)(a.n.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => T.intl.string(T.t.JZxxGx),
    useSubtitle: () => T.intl.string(T.t.HDLtJl),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    useOptions: () => [
        {
            name: T.intl.string(T.t.B1AGeJ),
            value: o.PrB.ALL_CHANNELS,
        },
        {
            name: T.intl.string(T.t.uzZg9e),
            value: o.PrB.SELECTED_CHANNEL,
        },
        {
            name: T.intl.string(T.t.DYO5Oi),
            value: o.PrB.NEVER,
        },
    ],
    usePredicate: () => s.Zh,
});
