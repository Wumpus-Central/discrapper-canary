var i = r(270572);
function a(e, n) {
    for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(e, i(a.key), a);
    }
}
function s(e, n, r) {
    return n && a(e.prototype, n), r && a(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
(e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
