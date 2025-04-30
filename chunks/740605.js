n.d(t, {
    Y: () => a,
    o: () => s
});
var r = n(18323),
    i = n(358085),
    o = n(616922);
function a(e) {
    let t = null;
    (0, i.isDesktop)() || (t = window.open('', '_blank')), null != t ? (t.location.href = e) : window.open(e);
}
function s(e, t) {
    a(r.Z.isProtocolRegistered() ? o.C7.PLAYER_OPEN(e, t) : o.C7.WEB_OPEN(e, t));
}
