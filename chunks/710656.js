n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var s = n(333748),
    i = n(59198),
    o = n(652215),
    a = n(544105);

function c(e) {
    let { authToken: t, onContinue: n, onError: c, onClose: l } = e;
    return (0, r.jsx)(i.W, {
        platformType: o.fg2.XBOX,
        clientId: s.i.XBOX_APPLICATION_ID,
        scopes: a.sS,
        authToken: t,
        onContinue: n,
        onError: c,
        onClose: l,
    });
}
