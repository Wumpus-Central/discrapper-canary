function r(e, t) {
    return ''.concat(e, ':').concat(t);
}
function i(e) {
    let t = e.split(':');
    if (2 !== t.length) return null;
    let [n, r] = t;
    return {
        applicationId: n,
        skuId: r
    };
}
n.d(t, {
    Q: () => i,
    l: () => r
}),
    n(35282),
    n(388685);
