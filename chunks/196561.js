n.d(e, { Z: () => c });
var i = n(442837),
    r = n(435064),
    l = n(39604),
    u = n(509613),
    s = n(313789),
    a = n(356659),
    o = n(388032);
let c = (0, u.Em)(s.n.CLIPS_LENGTH, {
    useTitle: () => o.intl.string(o.t.OgfUio),
    useSubtitle: () => o.intl.string(o.t.H7j4tY),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getSettings().clipsLength),
    useOptions: () => [
        {
            value: a.OT.SECONDS_30,
            label: o.intl.formatToPlainString(o.t["bTFv/3"], { count: 30 }),
        },
        {
            value: a.OT.MINUTES_1,
            label: o.intl.formatToPlainString(o.t.ICo9Nk, { count: 1 }),
        },
        {
            value: a.OT.MINUTES_2,
            label: o.intl.formatToPlainString(o.t.ICo9Nk, { count: 2 }),
        },
    ],
    setValue: (t) => l.eU(t),
});
