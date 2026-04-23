l.d(i, { A: () => o });
var n = l(64700),
    e = l(311907),
    a = l(773669),
    r = l(696016),
    s = l(985018);
function o() {
    let t = (0, e.bG)([a.default], () => a.default.locale);
    return n.useMemo(
        () => [
            { value: r.LX.SECONDS_30, label: s.intl.formatToPlainString(s.t["bTFv/3"], { count: 30 }) },
            { value: r.LX.MINUTES_1, label: s.intl.formatToPlainString(s.t.ICo9Nk, { count: 1 }) },
            { value: r.LX.MINUTES_2, label: s.intl.formatToPlainString(s.t.ICo9Nk, { count: 2 }) },
        ],
        [t],
    );
}
