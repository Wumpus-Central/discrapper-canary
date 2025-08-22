n.d(t, { Z: () => s });
var r = n(442837),
    i = n(25251),
    l = n(223143);
function s() {
    let { isFetching: e, categories: t, purchases: n } = (0, l.ZP)(),
        s = (0, r.e7)([i.Z], () => i.Z.isFetchingAll);
    return {
        isFetching: e || s,
        categories: t,
        purchases: n,
    };
}
