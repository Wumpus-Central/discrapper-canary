r.d(n, {
    l: function () {
        return l;
    }
});
var i = r(47120);
var a = r(399606),
    o = r(597688),
    s = r(267097);
function l(e) {
    (0, s.Z)();
    let [n, r] = (0, a.Wu)([o.Z], () => [o.Z.isFetchingCategories, o.Z.getCategoryForProduct(e)]);
    return {
        isFetching: n,
        category: r
    };
}
