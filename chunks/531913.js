"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(485584),
    s = n(311907),
    a = n(201718),
    o = n(339580),
    l = n(773669),
    u = n(188951);
let c = [],
    d = [];
function _(e, t) {
    (0, a.P)(e);
    let n = (0, s.bG)([o.A], () => o.A.getUserIdentityByApplication(e, t)),
        _ = (0, s.bG)([l.default], () => l.default.locale),
        f = r.useMemo(() => [t], [t]),
        [p] = (0, u.A)(f),
        h = r.useMemo(() => (0, i.VG)(n?.profile ?? void 0), [n?.profile]),
        m = (0, s.bG)([o.A], () => o.A.getFetchState(e) !== o.e.FETCHED);
    return {
        locale: _,
        surfaceConfigs: p?.surfaces ?? {},
        isLoading: m,
        hasIdentity: null != n,
        resolutionContext: { data: h, applicationAssets: c, getApplicationAssetUrl: () => "", localizedStrings: d },
    };
}
