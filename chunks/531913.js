"use strict";
n.d(t, { A: () => f });
var i = n(64700),
    r = n(127382),
    s = n(17928),
    a = n(549699),
    o = n(29496),
    l = n(201718),
    u = n(339580),
    c = n(773669),
    d = n(403362),
    _ = n(188951);
let h = [];
function f(e, t) {
    (0, l.P)(e);
    let n = (0, s.bG)([u.A], () => u.A.getUserIdentityByApplication(e, t)),
        f = (0, s.bG)([c.default], () => c.default.locale),
        p = i.useMemo(() => [t], [t]),
        [E] = (0, _.A)(p),
        m = i.useMemo(() => (0, r.VG)(n?.profile ?? void 0), [n?.profile]),
        g = (0, s.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
        A = (0, s.bG)([o.A], () => o.A.getAssets(t)),
        I = i.useMemo(() => Object.values(A ?? {}).filter(d.Vq), [A]),
        T = i.useCallback((e) => (0, a.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: f,
        surfaceConfigs: E?.surfaces ?? {},
        isLoading: g,
        hasIdentity: null != n,
        resolutionContext: { data: m, applicationAssets: I, getApplicationAssetUrl: T, localizedStrings: h },
    };
}
