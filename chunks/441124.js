n.d(e, { V: () => l });
var o = n(627968);
n(64700);
var i = n(518614),
    r = n(333748),
    s = n(59198),
    a = n(652215),
    c = n(544105);
function l(t) {
    let { platformType: e, authToken: n, onContinue: l, onError: d, onClose: _ } = t,
        p = e === a.fg2.PLAYSTATION_STAGING ? r.i.PLAYSTATION_STAGING_APPLICATION_ID : r.i.PLAYSTATION_APPLICATION_ID,
        b = e === a.fg2.PLAYSTATION_STAGING ? i._.PLAYSTATION_STAGING : i._.PLAYSTATION;
    return (0, o.jsx)(s.W, {
        platformType: e,
        clientId: p,
        scopes: c.NL,
        authToken: n,
        onContinue: l,
        onError: d,
        onClose: _,
        redirectUri: b,
    });
}
