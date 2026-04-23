"use strict";
n.d(t, { A: () => p });
var r = n(64700),
    i = n(485584),
    s = n(311907),
    a = n(549699),
    o = n(29496),
    l = n(201718),
    u = n(339580),
    c = n(773669),
    d = n(403362),
    _ = n(188951);
let f = [];
function p(e, t) {
    (0, l.P)(e);
    let n = (0, s.bG)([u.A], () => u.A.getUserIdentityByApplication(e, t)),
        p = (0, s.bG)([c.default], () => c.default.locale),
        h = r.useMemo(() => [t], [t]),
        [E] = (0, _.A)(h),
        m = r.useMemo(() => (0, i.VG)(n?.profile ?? void 0), [n?.profile]),
        g = (0, s.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
        A = (0, s.bG)([o.A], () => o.A.getAssets(t)),
        I = r.useMemo(() => Object.values(A ?? {}).filter(d.Vq), [A]),
        T = r.useCallback((e) => (0, a.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: p,
        surfaceConfigs: E?.surfaces ?? {},
        isLoading: g,
        hasIdentity: null != n,
        resolutionContext: { data: m, applicationAssets: I, getApplicationAssetUrl: T, localizedStrings: f },
    };
}
