"use strict";
n.d(t, { A: () => l });
var s = n(627968);
n(64700);
var r = n(333748),
    i = n(693576),
    o = n(652215),
    a = n(544105);
function l(e) {
    let { authToken: t, onContinue: n, onError: l, onClose: c } = e;
    return (0, s.jsx)(i.W, {
        platformType: o.fg2.XBOX,
        clientId: r.i.XBOX_APPLICATION_ID,
        scopes: a.sS,
        authToken: t,
        onContinue: n,
        onError: l,
        onClose: c,
    });
}
