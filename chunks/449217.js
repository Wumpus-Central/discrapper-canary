var i = r(47120);
var a = r(399606),
    o = r(597688),
    s = r(1870);
let l = (e) => {
    let [n, r] = (0, a.Wu)([o.Z], () => [o.Z.getCategoryForProduct(e), o.Z.getProduct(e)]);
    return {
        category: n,
        product: r,
        purchase: (0, a.e7)([s.Z], () => s.Z.getPurchase(e))
    };
};
n.Z = l;
