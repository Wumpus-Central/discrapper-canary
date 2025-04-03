n.d(t, { Z: () => c });
var o = n(200651);
n(192379);
var r = n(159277),
    i = n(585183),
    s = n(981631),
    a = n(927923);
function c(e) {
    let { authToken: t, onContinue: n, onError: c, onClose: l } = e;
    return (0, o.jsx)(i.h, {
        platformType: s.ABu.XBOX,
        clientId: r.t.XBOX_APPLICATION_ID,
        scopes: a.tA,
        authToken: t,
        onContinue: n,
        onError: c,
        onClose: l
    });
}
