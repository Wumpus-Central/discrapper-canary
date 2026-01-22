i.d(l, { A: () => o });
var n = i(64700),
    e = i(311907),
    a = i(773669),
    r = i(696016),
    c = i(985018);
function o() {
    let t = (0, e.bG)([a.default], () => a.default.locale);
    return n.useMemo(
        () => [
            {
                value: r.LX.SECONDS_30,
                label: c.intl.formatToPlainString(c.t["bTFv/3"], { count: 30 }),
            },
            {
                value: r.LX.MINUTES_1,
                label: c.intl.formatToPlainString(c.t.ICo9Nk, { count: 1 }),
            },
            {
                value: r.LX.MINUTES_2,
                label: c.intl.formatToPlainString(c.t.ICo9Nk, { count: 2 }),
            },
        ],
        [t],
    );
}
