n.d(e, { Z: () => E });
var i = n(442837),
    l = n(292556),
    u = n(419363),
    r = n(509613),
    s = n(292959),
    o = n(313789),
    a = n(981631),
    c = n(388032);
let E = (0, r.J9)(o.n.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => c.intl.string(c.t.VIm5MO),
    useSubtitle: () => c.intl.string(c.t["+4dnA5"]),
    useValue: () => (0, i.e7)([s.Z], () => s.Z.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    usePredicate: () => u.Zh,
    useOptions: () => [
        {
            name: c.intl.string(c.t.B1AGeJ),
            value: a.PrB.ALL_CHANNELS,
        },
        {
            name: c.intl.string(c.t.uM2rNr),
            value: a.PrB.SELECTED_CHANNEL,
        },
        {
            name: c.intl.string(c.t.DYO5Oi),
            value: a.PrB.NEVER,
        },
    ],
});
