n.d(a, { A: () => r });
var t = n(454908),
    l = n(105292);
function r(e, a, n) {
    let { data: r, isLoading: c } = (0, t.I)(e);
    return {
        coverImageUrl: r?.getCoverURL(n) ?? null,
        iconImageUrl: r?.getIconURL(n ?? 256) ?? null,
        gameName: r?.name ?? a ?? l.intl.string(l.t.GIWFlF),
        hasGameData: null != r,
        isLoading: c,
    };
}
