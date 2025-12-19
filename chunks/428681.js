n.d(t, { E: () => c });
var o = n(54381);
n(473749);
var i = n(421580),
    a = n(159277),
    r = n(585183),
    d = n(981631),
    s = n(927923);
function c(e) {
    let { platformType: t, authToken: n, onContinue: c, onError: l, onClose: b } = e,
        u = t === d.ABu.PLAYSTATION_STAGING ? a.t.PLAYSTATION_STAGING_APPLICATION_ID : a.t.PLAYSTATION_APPLICATION_ID,
        p = t === d.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
    return (0, o.jsx)(r.h, {
        platformType: t,
        clientId: u,
        scopes: s.KL,
        authToken: n,
        onContinue: c,
        onError: l,
        onClose: b,
        redirectUri: p,
    });
}
