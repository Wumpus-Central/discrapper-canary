"use strict";
n.d(t, { A: () => p });
var l = n(64700),
    i = n(435428),
    s = n(17928),
    a = n(549699),
    r = n(29496),
    o = n(201718),
    c = n(339580),
    u = n(773669),
    d = n(403362),
    h = n(188951);
let m = [];
function p(e, t) {
    (0, o.P)(e);
    let n = (0, s.bG)([c.A], () => c.A.getUserIdentityByApplication(e, t)),
        p = (0, s.bG)([u.default], () => u.default.locale),
        f = l.useMemo(() => [t], [t]),
        [g] = (0, h.A)(f),
        _ = l.useMemo(() => (0, i.VG)(n?.profile ?? void 0), [n?.profile]),
        x = (0, s.bG)([c.A], () => c.A.getFetchState(e) !== c.e.FETCHED),
        C = (0, s.bG)([r.A], () => r.A.getAssets(t)),
        A = l.useMemo(() => Object.values(C ?? {}).filter(d.Vq), [C]),
        E = l.useCallback((e) => (0, a.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: p,
        surfaceConfigs: g?.surfaces ?? {},
        isLoading: x,
        hasIdentity: null != n,
        resolutionContext: { data: _, applicationAssets: A, getApplicationAssetUrl: E, localizedStrings: m },
    };
}
