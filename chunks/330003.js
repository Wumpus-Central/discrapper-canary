n.d(t, { Z: () => o });
var r = n(473749),
    i = n(442837),
    a = n(706454);
function o() {
    let e = (0, i.e7)([a.default], () => a.default.locale);
    return r.useMemo(
        () =>
            new Intl.NumberFormat(e, {
                notation: "compact",
                compactDisplay: "short",
                roundingMode: "floor",
            }),
        [e],
    );
}
