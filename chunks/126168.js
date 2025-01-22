r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(653041);
function a(e, n) {
    if (e.length < 2) return [];
    let r = [],
        i = e[0];
    for (let a = 1; a < e.length; a++) {
        let o = e[a];
        r.push(n(i, o)), (i = o);
    }
    return r;
}
