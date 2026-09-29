r.d(t, { XX: () => i, aZ: () => l, cz: () => n });
var s = r(982240);
function i(e, t) {
    return e.reduce((e, r) => {
        let i = (0, s.rL)(r);
        return t < i ? e : null == e || i > (0, s.rL)(e) ? r : e;
    }, null);
}
function l(e, t) {
    return e.reduce((e, r) => {
        let i = (0, s.rL)(r);
        return t >= i ? e : null == e || i < (0, s.rL)(e) ? r : e;
    }, null);
}
function n(e, t) {
    let r = l(e, t);
    return null == r ? null : (0, s.rL)(r) - t;
}
