function r(e, t) {
    return "".concat(e, ":").concat(t);
}
function i(e) {
    let t = e.split(":");
    if (2 !== t.length) return null;
    let [n, r] = t;
    return {
        applicationId: n,
        skuId: r,
    };
}
n.d(t, {
    L: () => r,
    u: () => i,
}),
    n(747238),
    n(896048);
