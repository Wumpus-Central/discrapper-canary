"use strict";
n.d(t, { A: () => f });
var l = n(582128),
    i = n(176999),
    s = n(17928),
    r = n(549699),
    a = n(29496),
    o = n(201718),
    u = n(339580),
    c = n(773669),
    d = n(403362),
    h = n(352003);
let m = [];
function f(e, t) {
    (0, o.P)(e);
    let n = (0, s.bG)([u.A], () => u.A.getUserIdentityByApplication(e, t)),
        f = (0, s.bG)([c.default], () => c.default.locale),
        p = l.useMemo(() => [t], [t]),
        [g] = (0, h.A)(p),
        x = l.useMemo(() => (0, i.VG)(n?.profile ?? void 0), [n?.profile]),
        A = (0, s.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
        E = (0, s.bG)([a.A], () => a.A.getAssets(t)),
        C = l.useMemo(() => Object.values(E ?? {}).filter(d.Vq), [E]),
        I = l.useCallback((e) => (0, r.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: f,
        surfaceConfigs: g?.surfaces ?? {},
        isLoading: A,
        hasIdentity: null != n,
        resolutionContext: { data: x, applicationAssets: C, getApplicationAssetUrl: I, localizedStrings: m },
    };
}
