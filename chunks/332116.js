o.r(c),
    o.d(c, {
        default: function () {
            return E;
        }
    });
var e = o(200651),
    a = o(192379),
    _ = o(512969),
    I = o(608787),
    n = o(442837),
    i = o(765717),
    O = o(353926),
    l = o(215256),
    p = o(8991),
    P = o(981631);
let R = a.lazy(() =>
    (0, I.wE)({
        createPromise: () => Promise.all([o.e('73503'), o.e('72181'), o.e('66711'), o.e('21628'), o.e('77803'), o.e('9005'), o.e('64676'), o.e('31931'), o.e('76810')]).then(o.bind(o, 319443)),
        webpackId: 319443
    })
);
function E() {
    let t = (0, n.e7)([O.Z], () => O.Z.hasLoadedExperiments);
    a.useEffect(() => {
        t && l.f.trackExposure({ location: 'GlobalDiscoveryAppsRoutes' });
    }, [t]);
    let c = (0, l.M)({ location: 'GlobalDiscoveryAppsRoutes' });
    return t
        ? c
            ? (0, e.jsx)(i.Z, {
                  path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                  component: R
              })
            : (0, e.jsx)(_.AW, {
                  path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                  component: p.p
              })
        : null;
}
