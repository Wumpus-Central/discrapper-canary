var i = n(270572);
function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, i(r.key), r);
    }
}
function a(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
(e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
