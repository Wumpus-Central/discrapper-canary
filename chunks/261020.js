n.d(t, { C: () => o, n: () => r });
var i = n(210528),
    a = n(723702),
    l = n(272984);
function o(e) {
    let t = null;
    (0, a.isDesktop)() || (t = window.open("", "_blank")), null != t ? (t.location.href = e) : window.open(e);
}
function r(e, t) {
    o(i.A.isProtocolRegistered() ? l.RQ.PLAYER_OPEN(e, t) : l.RQ.WEB_OPEN(e, t));
}
