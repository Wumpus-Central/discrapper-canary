if ((n.d(t, { C6: () => a, JH: () => o, LV: () => s, cH: () => i }), 221552 == n.j)) var r = n(231723);
var u = n(484697),
    l = n(652215);
function o(e) {
    return e.ownerDocument.defaultView ?? window;
}
function i(e) {
    return o(e) === window ? l.BRT.APP : l.BRT.POPOUT;
}
function s(e) {
    let t = (0, u.fl)(e);
    return null == t ? null : i(t);
}
function a(e) {
    let t = s(e);
    return null == t ? null : t === l.BRT.POPOUT ? r.KX : r.SY;
}
