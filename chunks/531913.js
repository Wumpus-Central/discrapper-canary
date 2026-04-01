n.d(t, { A: () => m });
var i = n(64700),
    a = n(485584),
    l = n(311907),
    s = n(201718),
    r = n(339580),
    o = n(773669),
    c = n(188951);
let d = [],
    u = [];
function m(e, t) {
    (0, s.P)(e);
    let n = (0, l.bG)([r.A], () => r.A.getUserIdentityByApplication(e, t)),
        m = (0, l.bG)([o.default], () => o.default.locale),
        g = i.useMemo(() => [t], [t]),
        [p] = (0, c.A)(g),
        x = i.useMemo(() => (0, a.VG)(n?.profile ?? void 0), [n?.profile]),
        f = (0, l.bG)([r.A], () => r.A.getFetchState(e) !== r.e.FETCHED);
    return {
        data: x,
        locale: m,
        surfaceConfigs: p?.surfaces ?? {},
        applicationAssets: d,
        localizedStrings: u,
        isLoading: f,
        hasIdentity: null != n,
    };
}
