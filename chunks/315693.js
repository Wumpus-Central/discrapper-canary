r.d(t, { XX: () => i, aZ: () => l, cz: () => s });
var n = r(982240);
function i(e, t) {
    return e.reduce((e, r) => {
        let i = (0, n.rL)(r);
        return t < i ? e : null == e || i > (0, n.rL)(e) ? r : e;
    }, null);
}
function l(e, t) {
    return e.reduce((e, r) => {
        let i = (0, n.rL)(r);
        return t >= i ? e : null == e || i < (0, n.rL)(e) ? r : e;
    }, null);
}
function s(e, t) {
    let r = l(e, t);
    return null == r ? null : (0, n.rL)(r) - t;
}
