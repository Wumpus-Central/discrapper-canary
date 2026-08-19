n.d(t, { XX: () => l, aZ: () => i, cz: () => a });
var r = n(982240);
function l(e, t) {
    return e.reduce((e, n) => {
        let l = (0, r.rL)(n);
        return t < l ? e : null == e || l > (0, r.rL)(e) ? n : e;
    }, null);
}
function i(e, t) {
    return e.reduce((e, n) => {
        let l = (0, r.rL)(n);
        return t >= l ? e : null == e || l < (0, r.rL)(e) ? n : e;
    }, null);
}
function a(e, t) {
    let n = i(e, t);
    return null == n ? null : (0, r.rL)(n) - t;
}
