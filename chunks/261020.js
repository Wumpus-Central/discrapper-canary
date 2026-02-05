"use strict";
n.d(t, { C: () => s, n: () => o });
var r = n(210528),
    i = n(723702),
    a = n(272984);
function s(e) {
    let t = null;
    (0, i.isDesktop)() || (t = window.open("", "_blank")), null != t ? (t.location.href = e) : window.open(e);
}
function o(e, t) {
    s(r.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(e, t) : a.RQ.WEB_OPEN(e, t));
}
