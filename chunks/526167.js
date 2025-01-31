n.d(t, {
    G6: () => y,
    hY: () => m,
    og: () => v,
    rO: () => I,
    vu: () => f
});
var i,
    r,
    a,
    s,
    o,
    l = n(525654),
    u = n.n(l);
let c = (null !== (i = u().name) && void 0 !== i ? i : 'unknown').toLowerCase(),
    d = 'chrome' === c.toLowerCase() ? parseInt(null !== (r = u().version) && void 0 !== r ? r : '', 10) : -1;
function f() {
    return d;
}
let _ = 'electron' === c.toLowerCase() ? parseInt(null !== (a = u().version) && void 0 !== a ? a : '', 10) : -1;
function p() {
    return _;
}
let h = 'firefox' === c.toLowerCase() ? parseInt(null !== (s = u().version) && void 0 !== s ? s : '', 10) : -1;
function m() {
    return h;
}
let g = 'edge' === c.toLowerCase() ? parseInt(null !== (o = u().version) && void 0 !== o ? o : '', 10) : -1;
function E() {
    return g;
}
function v() {
    return -1 !== f() || -1 !== p() || -1 !== m() || -1 !== E();
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf('safari') && !(-1 !== t.indexOf('chrome')) && -1 !== t.indexOf('version/');
}
function I() {
    var e;
    let t = window.navigator,
        n = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
    return y(t.userAgent) && n;
}
