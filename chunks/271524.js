n.d(e, { l: () => d });
var i = n(442837),
    l = n(292556),
    s = n(419363),
    r = n(509613),
    u = n(292959),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let d = (0, r.J9)(a.n.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => c.intl.string(c.t.JZxxGx),
    useSubtitle: () => c.intl.string(c.t.HDLtJl),
    useValue: () => (0, i.e7)([u.Z], () => u.Z.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    useOptions: () => [
        {
            name: c.intl.string(c.t.B1AGeJ),
            value: o.PrB.ALL_CHANNELS,
        },
        {
            name: c.intl.string(c.t.uzZg9e),
            value: o.PrB.SELECTED_CHANNEL,
        },
        {
            name: c.intl.string(c.t.DYO5Oi),
            value: o.PrB.NEVER,
        },
    ],
    usePredicate: () => s.Zh,
});
