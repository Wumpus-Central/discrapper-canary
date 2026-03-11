"use strict";
n.d(t, { A: () => c });
var s = n(627968);
n(64700);
var r = n(333748),
    o = n(693576),
    i = n(652215),
    a = n(544105);
function c(e) {
    let { authToken: t, onContinue: n, onError: c, onClose: l } = e;
    return (0, s.jsx)(o.W, {
        platformType: i.fg2.XBOX,
        clientId: r.i.XBOX_APPLICATION_ID,
        scopes: a.sS,
        authToken: t,
        onContinue: n,
        onError: c,
        onClose: l,
    });
}
