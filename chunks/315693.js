s.d(t, { XX: () => a, aZ: () => n, cz: () => r });
var l = s(982240);
function a(e, t) {
    return e.reduce((e, s) => {
        let a = (0, l.rL)(s);
        return t < a ? e : null == e || a > (0, l.rL)(e) ? s : e;
    }, null);
}
function n(e, t) {
    return e.reduce((e, s) => {
        let a = (0, l.rL)(s);
        return t >= a ? e : null == e || a < (0, l.rL)(e) ? s : e;
    }, null);
}
function r(e, t) {
    let s = n(e, t);
    return null == s ? null : (0, l.rL)(s) - t;
}
