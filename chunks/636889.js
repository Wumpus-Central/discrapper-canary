function i(e, t, n) {
    let i = 0,
        r = e.length;
    for (; i < r;) {
        let a = (i + r) >>> 1;
        0 > n(e[a], t) ? (i = a + 1) : (r = a);
    }
    return i;
}
function r(e, t, n) {
    let r = i(e, t, n);
    e.splice(r, 0, t);
}
function a(e, t, n) {
    let r = i(e, t, n);
    return !(r >= e.length) && 0 === n(e[r], t) && (e.splice(r, 1), !0);
}
n.d(t, { TF: () => a, Yr: () => r });
