t.d(u, { C6: () => d, JH: () => l, LV: () => o, cH: () => c });
var e = t(231723),
    r = t(484697),
    i = t(652215);
function l(n) {
    return n.ownerDocument.defaultView ?? window;
}
function c(n) {
    return l(n) === window ? i.BRT.APP : i.BRT.POPOUT;
}
function o(n) {
    let u = (0, r.fl)(n);
    return null == u ? null : c(u);
}
function d(n) {
    let u = o(n);
    return null == u ? null : u === i.BRT.POPOUT ? e.KX : e.SY;
}
