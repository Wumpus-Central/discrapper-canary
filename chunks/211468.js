(n.d(t, {
    dO: () => l,
    pq: () => f
}),
    n(388685));
var r = n(688619),
    i = n.n(r);
function a(e, t, n) {
    let [r, i] = e,
        [a, o] = t,
        s = (r + i) / 2,
        l = s;
    return n === s ? l : n < s ? a + ((n - r) / (s - r)) * (l - a) : l + ((n - s) / (i - s)) * (o - l);
}
function o(e, t, n) {
    let [r, i] = e,
        [a, o] = t;
    return a + ((n - r) / (i - r)) * (o - a);
}
let s = [0, 2];
function l(e, t, n) {
    let r = i()(e);
    if ('background' !== t) return r.set('hsl.s', '*'.concat(n)).hex();
    {
        let e = o([0, 1], [0.25, 1], n);
        return r.set('hsl.s', '*'.concat(e)).hex();
    }
}
let c = [1.3, 0.7],
    u = [0.98, 1],
    d = [0.75, 1.5],
    _ = [1.45, 0.45];
function f(e, t, n, r) {
    switch (t) {
        case 'background':
        case 'border':
            return i()(e)
                .set('hsl.l', '*'.concat(a(s, 'light' === n ? u : c, r)))
                .hex();
        case 'text':
            return i()(e)
                .set('hsl.l', '*'.concat(a(s, 'light' === n ? _ : d, r)))
                .hex();
        default:
            return e;
    }
}
