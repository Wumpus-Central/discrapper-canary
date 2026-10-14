s.d(t, { XX: () => i, aZ: () => a, cz: () => r });
var l = s(982240);
function i(e, t) {
    return e.reduce((e, s) => {
        let i = (0, l.rL)(s);
        return t < i ? e : null == e || i > (0, l.rL)(e) ? s : e;
    }, null);
}
function a(e, t) {
    return e.reduce((e, s) => {
        let i = (0, l.rL)(s);
        return t >= i ? e : null == e || i < (0, l.rL)(e) ? s : e;
    }, null);
}
function r(e, t) {
    let s = a(e, t);
    return null == s ? null : (0, l.rL)(s) - t;
}
