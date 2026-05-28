n.d(t, { XX: () => r, aZ: () => i, cz: () => s });
var l = n(982240);
function r(e, t) {
    return e.reduce((e, n) => {
        let r = (0, l.rL)(n);
        return t < r ? e : null == e || r > (0, l.rL)(e) ? n : e;
    }, null);
}
function i(e, t) {
    return e.reduce((e, n) => {
        let r = (0, l.rL)(n);
        return t >= r ? e : null == e || r < (0, l.rL)(e) ? n : e;
    }, null);
}
function s(e, t) {
    let n = i(e, t);
    return null == n ? null : (0, l.rL)(n) - t;
}
