d.d(t, { n: () => a, r: () => e, t: () => c });
var i = d(248051);
function e(l, t) {
    return "granted" === l || "denied" === l || "prompt" === l || "refresh" === l ? l : t;
}
function c(l, t) {
    return "granted" === l && (!0 !== t || (0, i.a)());
}
function a(l, t) {
    return "granted" === l && !0 === t && !(0, i.a)();
}
