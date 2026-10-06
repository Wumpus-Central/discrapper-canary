if ((n.d(t, { C6: () => o, JH: () => i, LV: () => s, cH: () => a }), 221552 == n.j)) var r = n(231723);
var l = n(484697),
    u = n(652215);
function i(e) {
    return e.ownerDocument.defaultView ?? window;
}
function a(e) {
    return i(e) === window ? u.BRT.APP : u.BRT.POPOUT;
}
function s(e) {
    let t = (0, l.fl)(e);
    return null == t ? null : a(t);
}
function o(e) {
    let t = s(e);
    return null == t ? null : t === u.BRT.POPOUT ? r.KX : r.SY;
}
