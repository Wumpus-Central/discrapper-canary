n.d(t, {
    G6: () => S,
    hY: () => g,
    og: () => v,
    rO: () => I,
    vu: () => p,
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
function p() {
    return f;
}
let _ = "electron" === d.toLowerCase() ? parseInt(null != (a = u().version) ? a : "", 10) : -1;
function m() {
    return _;
}
let h = "firefox" === d.toLowerCase() ? parseInt(null != (o = u().version) ? o : "", 10) : -1;
function g() {
    return h;
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
    return -1 !== p() || -1 !== m() || -1 !== g() || -1 !== b() || O() >= 14;
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
function I() {
    var e;
    let t = window.navigator,
        n = (null == (e = t.mediaCapabilities) ? void 0 : e.decodingInfo) != null;
    return S(t.userAgent) && n;
}
