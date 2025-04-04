a.d(e, {
    dO: () => i,
    pq: () => u
}),
    a(47120);
var r = a(688619),
    n = a.n(r);
function _(t, e, a) {
    let [r, n] = t,
        [_, o] = e,
        i = (r + n) / 2;
    return a === i ? i : a < i ? _ + ((a - r) / (i - r)) * (i - _) : i + ((a - i) / (n - i)) * (o - i);
}
let o = [0, 2];
function i(t, e, a) {
    let r = n()(t);
    if ('background' !== e) return r.set('hsl.s', '*'.concat(a)).hex();
    {
        let t = (function (t, e, a) {
            let [r, n] = t,
                [_, o] = e;
            return _ + ((a - r) / (n - r)) * (o - _);
        })([0, 1], [0.25, 1], a);
        return r.set('hsl.s', '*'.concat(t)).hex();
    }
}
let c = [1.3, 0.7],
    s = [0.98, 1],
    E = [0.75, 1.5],
    l = [1.45, 0.45];
function u(t, e, a, r) {
    switch (e) {
        case 'background':
        case 'border':
            return n()(t)
                .set('hsl.l', '*'.concat(_(o, 'light' === a ? s : c, r)))
                .hex();
        case 'text':
            return n()(t)
                .set('hsl.l', '*'.concat(_(o, 'light' === a ? l : E, r)))
                .hex();
        default:
            return t;
    }
}
