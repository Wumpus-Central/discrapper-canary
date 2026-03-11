n.d(t, { V: () => l });
var o = n(627968);
n(64700);
var i = n(518614),
    r = n(333748),
    s = n(693576),
    a = n(652215),
    c = n(544105);
function l(e) {
    let { platformType: t, authToken: n, onContinue: l, onError: d, onClose: _ } = e,
        p = t === a.fg2.PLAYSTATION_STAGING ? r.i.PLAYSTATION_STAGING_APPLICATION_ID : r.i.PLAYSTATION_APPLICATION_ID,
        b = t === a.fg2.PLAYSTATION_STAGING ? i._.PLAYSTATION_STAGING : i._.PLAYSTATION;
    return (0, o.jsx)(s.W, {
        platformType: t,
        clientId: p,
        scopes: c.NL,
        authToken: n,
        onContinue: l,
        onError: d,
        onClose: _,
        redirectUri: b,
    });
}
