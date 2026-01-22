t.d(e, {
    A: () => a,
});
var i = t(627968);
t(64700);
var o = t(59198),
    r = t(278086),
    s = t(652215);

function a(n) {
    let { authToken: e, onContinue: t, onError: a, onClose: d } = n;
    return (0, i.jsx)(o.W, {
        platformType: s.fg2.CRUNCHYROLL,
        clientId: r.ex,
        scopes: r._B,
        authToken: e,
        onContinue: t,
        onError: a,
        onClose: d,
    });
}
