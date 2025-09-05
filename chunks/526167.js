n.d(t, {
    G6: () => I,
    hY: () => g,
    og: () => v,
    rO: () => T,
    vu: () => _,
});
var r,
    i,
    a,
    o,
    s,
    l,
    c = n(525654),
    u = n.n(c);
let d = (null != (r = u().name) ? r : "unknown").toLowerCase(),
    f = "chrome" === d.toLowerCase() ? parseInt(null != (i = u().version) ? i : "", 10) : -1;
function _() {
    return f;
}
let p = "electron" === d.toLowerCase() ? parseInt(null != (a = u().version) ? a : "", 10) : -1;
function h() {
    return p;
}
let m = "firefox" === d.toLowerCase() ? parseInt(null != (o = u().version) ? o : "", 10) : -1;
function g() {
    return m;
}
let E = "edge" === d.toLowerCase() ? parseInt(null != (s = u().version) ? s : "", 10) : -1;
function b() {
    return E;
}
let y = "safari" === d.toLowerCase() ? parseInt(null != (l = u().version) ? l : "", 10) : -1;
function O() {
    return y;
}
function v() {
    return -1 !== _() || -1 !== h() || -1 !== g() || -1 !== b() || O() >= 14;
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
function T() {
    var e;
    let t = window.navigator,
        n = (null == (e = t.mediaCapabilities) ? void 0 : e.decodingInfo) != null;
    return I(t.userAgent) && n;
}
