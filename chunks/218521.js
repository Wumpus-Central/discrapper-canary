n.d(t, {
    d: () => o,
    m: () => i
}),
    n(47120),
    n(411104),
    n(26686);
var r = n(503461);
function i(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= r.G2) return n;
    throw Error('combination results in an invalid key that has '.concat(n.length, ' elements: ').concat(JSON.stringify(n)));
}
function o(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= r.G2) return n;
    throw Error('combination results in an invalid prefix key that has '.concat(n.length, ' elements: ').concat(JSON.stringify(n)));
}
