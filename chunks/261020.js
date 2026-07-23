"use strict";
n.d(t, { C: () => s, n: () => l });
var i = n(210528),
    r = n(723702),
    a = n(272984);
function s(e) {
    let t = null;
    (0, r.isDesktop)() || (t = window.open("", "_blank")), null != t ? (t.location.href = e) : window.open(e);
}
function l(e, t) {
    s(i.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(e, t) : a.RQ.WEB_OPEN(e, t));
}
