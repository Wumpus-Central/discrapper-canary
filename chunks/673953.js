n.d(t, { C6: () => d, JH: () => s, LV: () => o, cH: () => l });
var i = n(231723),
    r = n(484697),
    a = n(652215);
function s(e) {
    return e.ownerDocument.defaultView ?? window;
}
function l(e) {
    return s(e) === window ? a.BRT.APP : a.BRT.POPOUT;
}
function o(e) {
    let t = (0, r.fl)(e);
    return null == t ? null : l(t);
}
function d(e) {
    let t = o(e);
    return null == t ? null : t === a.BRT.POPOUT ? i.KX : i.SY;
}
