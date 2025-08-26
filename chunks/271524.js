n.d(t, { Z: () => d });
var l = n(442837),
    i = n(292556),
    r = n(419363),
    s = n(509613),
    a = n(292959),
    o = n(869235),
    u = n(981631),
    c = n(388032);
let d = (0, s.J9)(o.t.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => c.intl.string(c.t.VIm5MD),
    useSubtitle: () => c.intl.string(c.t["+4dnAw"]),
    useValue: () => (0, l.e7)([a.Z], () => a.Z.getTTSType()),
    setValue: (e) => i.default.setTTSType(e),
    usePredicate: () => r.Zh,
    useOptions: () => [
        {
            name: c.intl.string(c.t.B1AGeH),
            value: u.PrB.ALL_CHANNELS,
        },
        {
            name: c.intl.string(c.t.uM2rNj),
            value: u.PrB.SELECTED_CHANNEL,
        },
        {
            name: c.intl.string(c.t.DYO5Oj),
            value: u.PrB.NEVER,
        },
    ],
});
