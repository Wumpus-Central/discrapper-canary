n.d(t, { Z: () => o });
var r = n(358085),
    i = n(998502),
    a = n(522474);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = a.Z.getWindow(e);
    null == n || n.closed || (r.isPlatformEmbedded ? i.ZP.focus(e, t) : n.focus());
}
