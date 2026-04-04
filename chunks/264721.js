n.d(t, { R: () => c });
var i = n(311907),
    s = n(274372),
    l = n(399925),
    a = n(419954),
    r = n(780964),
    o = n(696016),
    d = n(985018);
let c = (0, a.Hn)(r.X.CLIPS_LENGTH, {
    useTitle: () => d.intl.string(d.t.OgfUio),
    useSubtitle: () => d.intl.string(d.t.H7j4tY),
    useValue: () => (0, i.bG)([s.A], () => s.A.getSettings().clipsLength),
    setValue: (e) => l.h$(e),
    useOptions: () => [
        { id: "30s", value: o.LX.SECONDS_30, label: d.intl.formatToPlainString(d.t["bTFv/3"], { count: 30 }) },
        { id: "1m", value: o.LX.MINUTES_1, label: d.intl.formatToPlainString(d.t.ICo9Nk, { count: 1 }) },
        { id: "2m", value: o.LX.MINUTES_2, label: d.intl.formatToPlainString(d.t.ICo9Nk, { count: 2 }) },
    ],
});
