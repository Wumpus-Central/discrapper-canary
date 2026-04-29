n.d(t, { A: () => s });
var i = n(569926),
    l = n(985018);
function s(e, t) {
    let { data: n, isLoading: s } = (0, i.I)(e);
    return { coverImageUrl: n?.getCoverURL(), gameName: n?.name ?? t ?? l.intl.string(l.t.GIWFlF), isLoading: s };
}
