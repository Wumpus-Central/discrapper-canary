e.r(c),
    e.d(c, {
        default: function () {
            return A;
        }
    });
var o = e(200651),
    a = e(192379),
    _ = e(512969),
    n = e(608787),
    I = e(442837),
    i = e(765717),
    O = e(353926),
    l = e(215256),
    p = e(8991),
    P = e(981631);
let R = a.lazy(() =>
    (0, n.wE)({
        createPromise: () => Promise.all([e.e('73503'), e.e('72181'), e.e('66711'), e.e('21628'), e.e('77803'), e.e('9005'), e.e('64676'), e.e('31931'), e.e('76810')]).then(e.bind(e, 319443)),
        webpackId: 319443
    })
);
function A() {
    let t = (0, I.e7)([O.Z], () => O.Z.hasLoadedExperiments);
    a.useEffect(() => {
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
