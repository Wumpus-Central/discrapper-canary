"use strict";
n.d(t, { C: () => a, n: () => o });
var i = n(210528),
    r = n(723702),
    s = n(272984);
function a(e) {
    let t = null;
    (0, r.isDesktop)() || (t = window.open("", "_blank")), null != t ? (t.location.href = e) : window.open(e);
}
function o(e, t) {
    a(i.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(e, t) : s.RQ.WEB_OPEN(e, t));
}
