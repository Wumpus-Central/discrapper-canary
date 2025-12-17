n.d(e, { l: () => T });
var i = n(442837),
    l = n(292556),
    s = n(419363),
    u = n(509613),
    r = n(292959),
    a = n(313789),
    o = n(981631),
    S = n(388032);
let T = (0, u.J9)(a.n.TEXT_TO_SPEECH_NOTIFICATIONS, {
    useTitle: () => S.intl.string(S.t.JZxxGx),
    useSubtitle: () => S.intl.string(S.t.HDLtJl),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getTTSType()),
    setValue: (t) => l.default.setTTSType(t),
    useOptions: () => [
        {
            name: S.intl.string(S.t.B1AGeJ),
            value: o.PrB.ALL_CHANNELS,
        },
        {
            name: S.intl.string(S.t.uzZg9e),
            value: o.PrB.SELECTED_CHANNEL,
        },
        {
            name: S.intl.string(S.t.DYO5Oi),
            value: o.PrB.NEVER,
        },
    ],
    usePredicate: () => s.Zh,
});
