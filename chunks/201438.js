r.d(t, { A: () => n });
var a = r(454908),
    i = r(105292);
function n(e, t, r) {
    let { data: n, isLoading: s } = (0, a.I)(e);
    return { coverImageUrl: n?.getCoverURL(r), gameName: n?.name ?? t ?? i.intl.string(i.t.GIWFlF), isLoading: s };
}
