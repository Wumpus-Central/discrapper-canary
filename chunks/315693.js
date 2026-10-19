n.d(t, { XX: () => u, aZ: () => i, cz: () => l });
var r = n(982240);
function u(e, t) {
    return e.reduce((e, n) => {
        let u = (0, r.rL)(n);
        return t < u ? e : null == e || u > (0, r.rL)(e) ? n : e;
    }, null);
}
function i(e, t) {
    return e.reduce((e, n) => {
        let u = (0, r.rL)(n);
        return t >= u ? e : null == e || u < (0, r.rL)(e) ? n : e;
    }, null);
}
function l(e, t) {
    let n = i(e, t);
    return null == n ? null : (0, r.rL)(n) - t;
}
