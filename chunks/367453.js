n.d(t, { Z: () => s });
var i = n(335832),
    r = n(665336);
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), i(e, (0, r.Z)(a.key), a);
    }
}
function s(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), i(e, 'prototype', { writable: !1 }), e;
}
