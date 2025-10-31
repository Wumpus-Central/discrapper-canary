n.d(e, { Z: () => d });
var i = n(442837),
    l = n(292556),
    r = n(419363),
    u = n(509613),
    s = n(292959),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let d = (0, u.J9)(a.n.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => c.intl.string(c.t.VIm5MO),
    useSubtitle: () => c.intl.string(c.t["+4dnA5"]),
    useValue: () => (0, i.e7)([s.Z], () => s.Z.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    usePredicate: () => r.Zh,
    useOptions: () => [
        {
            name: c.intl.string(c.t.B1AGeJ),
            value: o.PrB.ALL_CHANNELS,
        },
        {
            name: c.intl.string(c.t.uM2rNr),
            value: o.PrB.SELECTED_CHANNEL,
        },
        {
            name: c.intl.string(c.t.DYO5Oi),
            value: o.PrB.NEVER,
        },
    ],
});
