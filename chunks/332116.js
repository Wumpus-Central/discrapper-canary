a.r(c),
    a.d(c, {
        default: function () {
            return E;
        }
    });
var o = a(200651),
    e = a(192379),
    _ = a(512969),
    n = a(608787),
    I = a(442837),
    i = a(765717),
    O = a(353926),
    l = a(215256),
    p = a(8991),
    P = a(981631);
let R = e.lazy(() =>
    (0, n.wE)({
        createPromise: () => Promise.all([a.e('72181'), a.e('66711'), a.e('21628'), a.e('77803'), a.e('9005'), a.e('64676'), a.e('31931'), a.e('32883')]).then(a.bind(a, 319443)),
        webpackId: 319443
    })
);
function E() {
    let t = (0, I.e7)([O.Z], () => O.Z.hasLoadedExperiments);
    e.useEffect(() => {
        t && l.f.trackExposure({ location: 'GlobalDiscoveryAppsRoutes' });
    }, [t]);
    let c = (0, l.M)({ location: 'GlobalDiscoveryAppsRoutes' });
    return t
        ? c
            ? (0, o.jsx)(i.Z, {
                  path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                  component: R
              })
            : (0, o.jsx)(_.AW, {
                  path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                  component: p.p
              })
        : null;
}
