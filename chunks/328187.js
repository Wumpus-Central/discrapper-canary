r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(512722),
    a = r.n(i);
function o(e, n) {
    if ((a()(e.length >= n, 'Waveform smaller than samples'), e.length === n)) return e;
    let r = e.length / n,
        i = [],
        o = 0;
    for (; i.length < n; ) {
        let n = Math.round((i.length + 1) * r),
            a = 0,
            s = 0;
        for (let r = o; r < n && r < e.length; r++) (a += e[r]), s++;
        (i[i.length] = a / s), (o = n);
    }
    return i;
}
