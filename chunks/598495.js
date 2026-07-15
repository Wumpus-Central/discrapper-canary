n.d(t, { Q: () => c, R: () => h });
var i = n(17928),
    r = n(888916),
    l = n(915725),
    s = n(430795),
    a = n(419954),
    o = n(780964),
    u = n(696016),
    d = n(375708);
function c() {
    return [
        { id: "30s", value: u.LX.SECONDS_30, label: d.intl.formatToPlainString(d.t["bTFv/3"], { count: 30 }) },
        { id: "1m", value: u.LX.MINUTES_1, label: d.intl.formatToPlainString(d.t.ICo9Nk, { count: 1 }) },
        { id: "2m", value: u.LX.MINUTES_2, label: d.intl.formatToPlainString(d.t.ICo9Nk, { count: 2 }) },
    ];
}
let h = (0, a.Hn)(o.X.CLIPS_LENGTH, {
    useTitle: () => d.intl.string(d.t.OgfUio),
    useSubtitle: () => d.intl.string(d.t.H7j4tY),
    useValue: () => (0, i.bG)([l.Ay], () => l.Ay.getSettings().clipsLength),
    setValue: (e) => s.h$(e),
    useOptions: c,
    useDisabled: r.Rt,
});
