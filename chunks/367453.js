n.d(t, { Z: () => i });
var r = n(335832),
    o = n(665336);
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), r(e, (0, o.Z)(a.key), a);
    }
}
function i(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), r(e, 'prototype', { writable: !1 }), e;
}
