n.d(t, {
    G6: () => y,
    hY: () => m,
    og: () => b,
    rO: () => O,
    vu: () => _
});
var r,
    i,
    a,
    o,
    s,
    l = n(525654),
    c = n.n(l);
let u = (null != (r = c().name) ? r : 'unknown').toLowerCase(),
    d = 'chrome' === u.toLowerCase() ? parseInt(null != (i = c().version) ? i : '', 10) : -1;
function _() {
    return d;
}
let f = 'electron' === u.toLowerCase() ? parseInt(null != (a = c().version) ? a : '', 10) : -1;
function p() {
    return f;
}
let h = 'firefox' === u.toLowerCase() ? parseInt(null != (o = c().version) ? o : '', 10) : -1;
function m() {
    return h;
}
let g = 'edge' === u.toLowerCase() ? parseInt(null != (s = c().version) ? s : '', 10) : -1;
function E() {
    return g;
}
function b() {
    return -1 !== _() || -1 !== p() || -1 !== m() || -1 !== E();
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf('safari') && -1 === t.indexOf('chrome') && -1 !== t.indexOf('version/');
}
function O() {
    var e;
    let t = window.navigator,
        n = (null == (e = t.mediaCapabilities) ? void 0 : e.decodingInfo) != null;
    return y(t.userAgent) && n;
}
