n.d(t, { XX: () => u, aZ: () => l, cz: () => i });
var r = n(982240);
function u(e, t) {
    return e.reduce((e, n) => {
        let u = (0, r.rL)(n);
        return t < u ? e : null == e || u > (0, r.rL)(e) ? n : e;
    }, null);
}
function l(e, t) {
    return e.reduce((e, n) => {
        let u = (0, r.rL)(n);
        return t >= u ? e : null == e || u < (0, r.rL)(e) ? n : e;
    }, null);
}
function i(e, t) {
    let n = l(e, t);
    return null == n ? null : (0, r.rL)(n) - t;
}
