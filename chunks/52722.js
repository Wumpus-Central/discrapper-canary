t.d(n, { A: () => l });
var o = t(627968);
t(64700);
var i = t(693576),
    r = t(652215),
    s = t(539170);
function l(e) {
    let { authToken: n, onContinue: t, onError: l, onClose: a } = e;
    return (0, o.jsx)(i.W, {
        platformType: r.fg2.CRUNCHYROLL,
        clientId: s.ex,
        scopes: s._B,
        authToken: n,
        onContinue: t,
        onError: l,
        onClose: a,
    });
}
