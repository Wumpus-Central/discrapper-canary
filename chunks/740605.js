n.d(t, {
    Y: () => s,
    o: () => o
});
var i = n(18323),
    r = n(358085),
    a = n(616922);
function s(e) {
    let t = null;
    (0, r.isDesktop)() || (t = window.open('', '_blank')), null != t ? (t.location.href = e) : window.open(e);
}
function o(e, t) {
    s(i.Z.isProtocolRegistered() ? a.C7.PLAYER_OPEN(e, t) : a.C7.WEB_OPEN(e, t));
}
