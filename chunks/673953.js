if ((n.d(t, { C6: () => a, JH: () => o, LV: () => i, cH: () => s }), 221552 == n.j)) var r = n(231723);
var u = n(484697),
    l = n(652215);
function o(e) {
    return e.ownerDocument.defaultView ?? window;
}
function s(e) {
    return o(e) === window ? l.BRT.APP : l.BRT.POPOUT;
}
function i(e) {
    let t = (0, u.fl)(e);
    return null == t ? null : s(t);
}
function a(e) {
    let t = i(e);
    return null == t ? null : t === l.BRT.POPOUT ? r.KX : r.SY;
}
