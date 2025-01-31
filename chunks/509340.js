n.d(t, { Z: () => l });
var o = n(200651);
n(192379);
var i = n(159277),
    r = n(585183),
    s = n(981631),
    a = n(927923);
function l(e) {
    let { authToken: t, onContinue: n, onError: l, onClose: c } = e;
    return (0, o.jsx)(r.h, {
        platformType: s.ABu.XBOX,
        clientId: i.t.XBOX_APPLICATION_ID,
        scopes: a.tA,
        authToken: t,
        onContinue: n,
        onError: l,
        onClose: c
    });
}
