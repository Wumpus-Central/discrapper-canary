n.d(t, {
    d: () => a,
    m: () => i
}),
    n(388685),
    n(415506),
    n(49124);
var r = n(503461);
function i(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= r.G2) return n;
    throw Error('combination results in an invalid key that has '.concat(n.length, ' elements: ').concat(JSON.stringify(n)));
}
function a(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= r.G2) return n;
    throw Error('combination results in an invalid prefix key that has '.concat(n.length, ' elements: ').concat(JSON.stringify(n)));
}
