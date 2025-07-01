function r(e) {
    return e;
}
function i(e, t) {
    return Object.setPrototypeOf(e, t.prototype);
}
function a(e) {
    let { andFail: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t) throw Error();
}
function o(e) {
    return e.length > 0;
}
(n.d(t, {
    UT: () => a,
    dZ: () => o,
    gh: () => i,
    iG: () => r
}),
    n(415506));
