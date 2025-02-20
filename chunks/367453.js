n.d(t, { Z: () => a });
var r = n(335832),
    i = n(665336);
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), r(e, (0, i.Z)(o.key), o);
    }
}
function a(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), r(e, 'prototype', { writable: !1 }), e;
}
