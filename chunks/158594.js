n.d(t, { V: () => c });
var o = n(627968);
n(64700);
var i = n(518614),
    r = n(333748),
    s = n(693576),
    a = n(652215),
    l = n(544105);
function c(e) {
    let { platformType: t, authToken: n, onContinue: c, onError: d, onClose: _ } = e,
        A = t === a.fg2.PLAYSTATION_STAGING ? r.i.PLAYSTATION_STAGING_APPLICATION_ID : r.i.PLAYSTATION_APPLICATION_ID,
        T = t === a.fg2.PLAYSTATION_STAGING ? i._.PLAYSTATION_STAGING : i._.PLAYSTATION;
    return (0, o.jsx)(s.W, {
        platformType: t,
        clientId: A,
        scopes: l.NL,
        authToken: n,
        onContinue: c,
        onError: d,
        onClose: _,
        redirectUri: T,
    });
}
