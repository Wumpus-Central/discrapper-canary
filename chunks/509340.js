n.d(t, { Z: () => l });
var o = n(951288);
n(647438);
var r = n(159277),
    i = n(585183),
    s = n(981631),
    a = n(927923);
function l(e) {
    let { authToken: t, onContinue: n, onError: l, onClose: c } = e;
    return (0, o.jsx)(i.h, {
        platformType: s.ABu.XBOX,
        clientId: r.t.XBOX_APPLICATION_ID,
        scopes: a.tA,
        authToken: t,
        onContinue: n,
        onError: l,
        onClose: c,
    });
}
