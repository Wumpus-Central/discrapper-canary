r.d(t, { XX: () => n, aZ: () => s, cz: () => l });
var i = r(982240);
function n(e, t) {
    return e.reduce((e, r) => {
        let n = (0, i.rL)(r);
        return t < n ? e : null == e || n > (0, i.rL)(e) ? r : e;
    }, null);
}
function s(e, t) {
    return e.reduce((e, r) => {
        let n = (0, i.rL)(r);
        return t >= n ? e : null == e || n < (0, i.rL)(e) ? r : e;
    }, null);
}
function l(e, t) {
    let r = s(e, t);
    return null == r ? null : (0, i.rL)(r) - t;
}
