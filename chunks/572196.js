t.d(n, { A: () => l });
var o = t(627968);
t(64700);
var i = t(59198),
    r = t(278086),
    s = t(652215);
function l(e) {
    let { authToken: n, onContinue: t, onError: l, onClose: a } = e;
    return (0, o.jsx)(i.W, {
        platformType: s.fg2.CRUNCHYROLL,
        clientId: r.ex,
        scopes: r._B,
        authToken: n,
        onContinue: t,
        onError: l,
        onClose: a,
    });
}
