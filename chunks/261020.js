i.d(o, { C: () => p, n: () => c });
var e = i(210528),
    s = i(723702),
    t = i(272984);
function p(n) {
    let o = null;
    (0, s.isDesktop)() || (o = window.open("", "_blank")), null != o ? (o.location.href = n) : window.open(n);
}
function c(n, o) {
    p(e.A.isProtocolRegistered() ? t.RQ.PLAYER_OPEN(n, o) : t.RQ.WEB_OPEN(n, o));
}
