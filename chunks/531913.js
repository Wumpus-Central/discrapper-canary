"use strict";
n.d(t, { A: () => h });
var i = n(64700),
    r = n(435428),
    s = n(17928),
    a = n(549699),
    o = n(29496),
    l = n(201718),
    d = n(339580),
    _ = n(773669),
    u = n(403362),
    c = n(188951);
let E = [];
function h(e, t) {
    (0, l.P)(e);
    let n = (0, s.bG)([d.A], () => d.A.getUserIdentityByApplication(e, t)),
        h = (0, s.bG)([_.default], () => _.default.locale),
        m = i.useMemo(() => [t], [t]),
        [f] = (0, c.A)(m),
        g = i.useMemo(() => (0, r.VG)(n?.profile ?? void 0), [n?.profile]),
        p = (0, s.bG)([d.A], () => d.A.getFetchState(e) !== d.e.FETCHED),
        A = (0, s.bG)([o.A], () => o.A.getAssets(t)),
        I = i.useMemo(() => Object.values(A ?? {}).filter(u.Vq), [A]),
        T = i.useCallback((e) => (0, a.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: h,
        surfaceConfigs: f?.surfaces ?? {},
        isLoading: p,
        hasIdentity: null != n,
        resolutionContext: { data: g, applicationAssets: I, getApplicationAssetUrl: T, localizedStrings: E },
    };
}
