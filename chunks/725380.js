n.d(t, {
    $E: () => l,
    Ky: () => s,
    RF: () => o
}),
    n(47120);
let i = {};
function r(e, t) {
    return ''.concat(e, ':').concat(t);
}
function a(e) {
    let [t, n] = e.split(':');
    return [t, n];
}
function s(e, t) {
    return i[r(e, t)];
}
function o(e, t, n) {
    let a = r(e, t);
    i[a] = {
        ...i[a],
        ...n
    };
}
function l(e) {
    for (let t in i) {
        let [n, r] = a(t);
        e(n, r, i[t]);
    }
    i = {};
}
