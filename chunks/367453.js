r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(335832),
    a = r(665336);
function o(e, n) {
    for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), i(e, (0, a.Z)(o.key), o);
    }
}
function s(e, n, r) {
    return n && o(e.prototype, n), r && o(e, r), i(e, 'prototype', { writable: !1 }), e;
}
