e.d(n, { V: () => c });
var o = e(627968);
e(64700);
var i = e(518614),
    a = e(333748),
    s = e(59198),
    d = e(652215),
    r = e(544105);
function c(t) {
    let { platformType: n, authToken: e, onContinue: c, onError: l, onClose: b } = t,
        p = n === d.fg2.PLAYSTATION_STAGING ? a.i.PLAYSTATION_STAGING_APPLICATION_ID : a.i.PLAYSTATION_APPLICATION_ID,
        f = n === d.fg2.PLAYSTATION_STAGING ? i._.PLAYSTATION_STAGING : i._.PLAYSTATION;
    return (0, o.jsx)(s.W, {
        platformType: n,
        clientId: p,
        scopes: r.NL,
        authToken: e,
        onContinue: c,
        onError: l,
        onClose: b,
        redirectUri: f,
    });
}
