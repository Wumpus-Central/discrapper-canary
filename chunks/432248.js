n.d(e, { Z: () => d });
var i = n(442837),
    l = n(924557),
    r = n(435064),
    u = n(39604),
    s = n(509613),
    a = n(313789),
    o = n(356659),
    c = n(388032);
let d = (0, s.Em)(a.n.CLIPS_LENGTH, {
    useTitle: () => c.intl.string(c.t.OgfUio),
    useSubtitle: () => c.intl.string(c.t.H7j4tY),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getSettings().clipsLength),
    useOptions: () => [
        {
            value: o.OT.SECONDS_30,
            label: c.intl.formatToPlainString(c.t["bTFv/3"], { count: 30 }),
        },
        {
            value: o.OT.MINUTES_1,
            label: c.intl.formatToPlainString(c.t.ICo9Nk, { count: 1 }),
        },
        {
            value: o.OT.MINUTES_2,
            label: c.intl.formatToPlainString(c.t.ICo9Nk, { count: 2 }),
        },
    ],
    usePredicate: l.Go,
    setValue: (t) => u.eU(t),
});
