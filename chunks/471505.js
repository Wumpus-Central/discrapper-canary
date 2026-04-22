n.d(t, { G: () => a });
var i = n(64700),
    l = n(574499),
    s = n(486318);
function a(e) {
    let { userId: t, sku: n, location: a, trackButtonClick: r, onError: o } = e,
        { handleToggle: d, ...c } = (0, l.c)({
            userId: t,
            skuId: n.id,
            nuxGraphic: (0, s.N)(n),
            location: a,
            onError: o,
        }),
        u = i.useCallback(async () => {
            r?.(), await d();
        }, [r, d]);
    return { ...c, handleToggle: u };
}
