n.d(t, { Z: () => o });
var r = n(442837),
    i = n(25251),
    l = n(223143);
function o() {
    let { isFetching: e, categories: t, purchases: n } = (0, l.ZP)(),
        o = (0, r.e7)([i.Z], () => i.Z.isFetchingAll);
    return {
        isFetching: e || o,
        categories: t,
        purchases: n,
    };
}
