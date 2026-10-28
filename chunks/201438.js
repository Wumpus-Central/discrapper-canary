t.d(n, { A: () => c });
var r = t(454908),
    a = t(105292);
function c(e, n, t) {
    let { data: c, isLoading: i } = (0, r.I)(e);
    return {
        coverImageUrl: c?.getCoverURL(t) ?? null,
        iconImageUrl: c?.getIconURL(t ?? 256) ?? null,
        gameName: c?.name ?? n ?? a.intl.string(a.t.GIWFlF),
        isLoading: i,
    };
}
