i.d(n, { Z: () => r });
var l = i(73800),
    e = i(442837),
    a = i(706454),
    c = i(356659),
    o = i(388032);
function r() {
    let t = (0, e.e7)([a.default], () => a.default.locale);
    return l.useMemo(
        () => [
            {
                value: c.OT.SECONDS_30,
                label: o.intl.formatToPlainString(o.t['bTFv//'], { count: 30 })
            },
            {
                value: c.OT.MINUTES_1,
                label: o.intl.formatToPlainString(o.t.ICo9Nj, { count: 1 })
            },
            {
                value: c.OT.MINUTES_2,
                label: o.intl.formatToPlainString(o.t.ICo9Nj, { count: 2 })
            }
        ],
        [t]
    );
}
