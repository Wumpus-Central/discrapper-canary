e.d(n, { Z: () => r });
var i = e(192379),
    l = e(442837),
    a = e(706454),
    c = e(356659),
    o = e(388032);
function r() {
    let t = (0, l.e7)([a.default], () => a.default.locale);
    return i.useMemo(
        () => [
            {
                value: c.OT.SECONDS_30,
                label: o.NW.formatToPlainString(o.t['bTFv//'], { count: 30 })
            },
            {
                value: c.OT.MINUTES_1,
                label: o.NW.formatToPlainString(o.t.ICo9Nj, { count: 1 })
            },
            {
                value: c.OT.MINUTES_2,
                label: o.NW.formatToPlainString(o.t.ICo9Nj, { count: 2 })
            }
        ],
        [t]
    );
}
