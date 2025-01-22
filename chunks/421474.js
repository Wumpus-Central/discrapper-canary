r.d(n, {
    Q: function () {
        return o;
    },
    l: function () {
        return a;
    }
});
var i = r(47120);
function a(e, n) {
    return ''.concat(e, ':').concat(n);
}
function o(e) {
    let n = e.split(':');
    if (2 !== n.length) return null;
    let [r, i] = n;
    return {
        applicationId: r,
        skuId: i
    };
}
