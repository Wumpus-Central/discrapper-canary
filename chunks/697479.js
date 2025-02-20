function r(e, t, n) {
    let r = 0,
        i = e.length;
    for (; r < i; ) {
        let o = (r + i) >>> 1;
        0 > n(e[o], t) ? (r = o + 1) : (i = o);
    }
    return r;
}
function i(e, t, n) {
    let i = r(e, t, n);
    e.splice(i, 0, t);
}
n.d(t, { $: () => i });
