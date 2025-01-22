function i(e, n, r) {
    let i = 0,
        a = e.length;
    for (; i < a; ) {
        let o = (i + a) >>> 1;
        0 > r(e[o], n) ? (i = o + 1) : (a = o);
    }
    return i;
}
function a(e, n, r) {
    let a = i(e, n, r);
    e.splice(a, 0, n);
}
r.d(n, {
    $: function () {
        return a;
    }
});
