r.d(n, {
    G6: function () {
        return b;
    },
    hY: function () {
        return g;
    },
    og: function () {
        return y;
    },
    rO: function () {
        return I;
    },
    vu: function () {
        return p;
    }
});
var i,
    a,
    o,
    s,
    l,
    u = r(525654),
    c = r.n(u);
let d = (null !== (i = c().name) && void 0 !== i ? i : 'unknown').toLowerCase(),
    f = 'chrome' === d.toLowerCase() ? parseInt(null !== (a = c().version) && void 0 !== a ? a : '', 10) : -1;
function p() {
    return f;
}
let h = 'electron' === d.toLowerCase() ? parseInt(null !== (o = c().version) && void 0 !== o ? o : '', 10) : -1;
function _() {
    return h;
}
let m = 'firefox' === d.toLowerCase() ? parseInt(null !== (s = c().version) && void 0 !== s ? s : '', 10) : -1;
function g() {
    return m;
}
let E = 'edge' === d.toLowerCase() ? parseInt(null !== (l = c().version) && void 0 !== l ? l : '', 10) : -1;
function v() {
    return E;
}
function y() {
    return -1 !== p() || -1 !== _() || -1 !== g() || -1 !== v();
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        n = e.toLowerCase();
    return -1 !== n.indexOf('safari') && !(-1 !== n.indexOf('chrome')) && -1 !== n.indexOf('version/');
}
function I() {
    var e;
    let n = window.navigator,
        r = (null === (e = n.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
    return b(n.userAgent) && r;
}
