"use strict";
n.d(t, { A: () => A });
var i = n(64700),
    r = n(284513),
    a = n(17928),
    s = n(549699),
    l = n(29496),
    o = n(201718),
    d = n(339580),
    c = n(773669),
    u = n(403362),
    _ = n(352003);
let E = [];
function A(e, t) {
    (0, o.P)(e);
    let n = (0, a.bG)([d.A], () => d.A.getUserIdentityByApplication(e, t)),
        A = (0, a.bG)([c.default], () => c.default.locale),
        h = i.useMemo(() => [t], [t]),
        [I] = (0, _.A)(h),
        f = i.useMemo(() => (0, r.VG)(n?.profile ?? void 0), [n?.profile]),
        p = (0, a.bG)([d.A], () => d.A.getFetchState(e) !== d.e.FETCHED),
        T = (0, a.bG)([l.A], () => l.A.getAssets(t)),
        m = i.useMemo(() => Object.values(T ?? {}).filter(u.Vq), [T]),
        g = i.useCallback((e) => (0, s.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: A,
        surfaceConfigs: I?.surfaces ?? {},
        isLoading: p,
        hasIdentity: null != n,
        resolutionContext: { data: f, applicationAssets: m, getApplicationAssetUrl: g, localizedStrings: E },
    };
}
