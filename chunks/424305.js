i.d(e, {
    R: () => T,
});
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    u = i(780964),
    a = i(696016),
    o = i(985018);
let T = (0, r.Hn)(u.X.CLIPS_LENGTH, {
    useTitle: () => o.intl.string(o.t.OgfUio),
    useSubtitle: () => o.intl.string(o.t.H7j4tY),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsLength),
    setValue: (t) => s.h$(t),
    useOptions: () => [
        {
            id: "30s",
            value: a.LX.SECONDS_30,
            label: o.intl.formatToPlainString(o.t["bTFv/3"], {
                count: 30,
            }),
        },
        {
            id: "1m",
            value: a.LX.MINUTES_1,
            label: o.intl.formatToPlainString(o.t.ICo9Nk, {
                count: 1,
            }),
        },
        {
            id: "2m",
            value: a.LX.MINUTES_2,
            label: o.intl.formatToPlainString(o.t.ICo9Nk, {
                count: 2,
            }),
        },
    ],
});
