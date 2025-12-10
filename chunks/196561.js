n.d(e, { G: () => c });
var i = n(442837),
    l = n(435064),
    s = n(39604),
    u = n(509613),
    r = n(313789),
    a = n(356659),
    o = n(388032);
let c = (0, u.Em)(r.n.CLIPS_LENGTH, {
    useTitle: () => o.intl.string(o.t.OgfUio),
    useSubtitle: () => o.intl.string(o.t.H7j4tY),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().clipsLength),
    setValue: (t) => s.eU(t),
    useOptions: () => [
        {
            id: "30s",
            value: a.OT.SECONDS_30,
            label: o.intl.formatToPlainString(o.t["bTFv/3"], { count: 30 }),
        },
        {
            id: "1m",
            value: a.OT.MINUTES_1,
            label: o.intl.formatToPlainString(o.t.ICo9Nk, { count: 1 }),
        },
        {
            id: "2m",
            value: a.OT.MINUTES_2,
            label: o.intl.formatToPlainString(o.t.ICo9Nk, { count: 2 }),
        },
    ],
});
