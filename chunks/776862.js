r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(358085),
    a = r(998502),
    o = r(522474);
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = o.Z.getWindow(e);
    if (null != r && !r.closed) i.isPlatformEmbedded ? a.ZP.focus(e, n) : r.focus();
}
