e.d(n, { E: () => l });
var o = e(200651);
e(192379);
var i = e(421580),
    r = e(159277),
    s = e(585183),
    c = e(981631),
    a = e(927923);
function l(t) {
    let { platformType: n, authToken: e, onContinue: l, onError: d, onClose: u } = t,
        p = n === c.ABu.PLAYSTATION_STAGING ? r.t.PLAYSTATION_STAGING_APPLICATION_ID : r.t.PLAYSTATION_APPLICATION_ID,
        _ = n === c.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
    return (0, o.jsx)(s.h, {
        platformType: n,
        clientId: p,
        scopes: a.KL,
        authToken: e,
        onContinue: l,
        onError: d,
        onClose: u,
        redirectUri: _
    });
}
