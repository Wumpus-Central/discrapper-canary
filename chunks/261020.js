"use strict";
n.d(t, { C: () => l, n: () => s });
var r = n(210528),
    i = n(723702),
    a = n(272984);
function l(e) {
    let t = null;
    (0, i.isDesktop)() || (t = window.open("", "_blank")), null != t ? (t.location.href = e) : window.open(e);
}
function s(e, t) {
    l(r.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(e, t) : a.RQ.WEB_OPEN(e, t));
}
