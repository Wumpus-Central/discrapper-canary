if ((n.d(t, { C6: () => o, JH: () => u, LV: () => s, cH: () => a }), 221552 == n.j)) var r = n(231723);
var l = n(484697),
    i = n(652215);
function u(e) {
    return e.ownerDocument.defaultView ?? window;
}
function a(e) {
    return u(e) === window ? i.BRT.APP : i.BRT.POPOUT;
}
function s(e) {
    let t = (0, l.fl)(e);
    return null == t ? null : a(t);
}
function o(e) {
    let t = s(e);
    return null == t ? null : t === i.BRT.POPOUT ? r.KX : r.SY;
}
