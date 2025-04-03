n.d(e, { E: () => d });
var o = n(200651);
n(192379);
var i = n(421580),
    r = n(159277),
    s = n(585183),
    c = n(981631),
    a = n(927923);
function d(t) {
    let { platformType: e, authToken: n, onContinue: d, onError: l, onClose: u } = t,
        p = e === c.ABu.PLAYSTATION_STAGING ? r.t.PLAYSTATION_STAGING_APPLICATION_ID : r.t.PLAYSTATION_APPLICATION_ID,
        _ = e === c.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
    return (0, o.jsx)(s.h, {
        platformType: e,
        clientId: p,
        scopes: a.KL,
        authToken: n,
        onContinue: d,
        onError: l,
        onClose: u,
        redirectUri: _
    });
}
