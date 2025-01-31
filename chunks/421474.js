function i(e, t) {
    return ''.concat(e, ':').concat(t);
}
function r(e) {
    let t = e.split(':');
    if (2 !== t.length) return null;
    let [n, i] = t;
    return {
        applicationId: n,
        skuId: i
    };
}
n.d(t, {
    Q: () => r,
    l: () => i
}),
    n(47120);
