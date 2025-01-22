var i = r(200651),
    a = r(512722),
    o = r.n(a),
    s = r(481060);
function l(e) {
    let { applicationId: n, gameProfileModalChecks: a, source: l, sourceUserId: u } = e;
    o()(a.shouldOpenGameProfile, 'Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?'),
        o()(a.applicationId === n, 'Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?'),
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([r.e('78447'), r.e('86778'), r.e('84804'), r.e('62879')]).then(r.bind(r, 644941));
            return (r) =>
                (0, i.jsx)(e, {
                    applicationId: n,
                    source: l,
                    sourceUserId: u,
                    ...r
                });
        });
}
n.Z = { openGameProfileModal: l };
