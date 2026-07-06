l.d(t, { A: () => v });
var n = l(64700),
    a = l(284513),
    s = l(17928),
    i = l(549699),
    r = l(29496),
    u = l(201718),
    o = l(339580),
    c = l(773669),
    m = l(403362),
    d = l(352003);
let p = [];
function v(e, t) {
    (0, u.P)(e);
    let l = (0, s.bG)([o.A], () => o.A.getUserIdentityByApplication(e, t)),
        v = (0, s.bG)([c.default], () => c.default.locale),
        x = n.useMemo(() => [t], [t]),
        [f] = (0, d.A)(x),
        _ = n.useMemo(() => (0, a.VG)(l?.profile ?? void 0), [l?.profile]),
        h = (0, s.bG)([o.A], () => o.A.getFetchState(e) !== o.e.FETCHED),
        N = (0, s.bG)([r.A], () => r.A.getAssets(t)),
        T = n.useMemo(() => Object.values(N ?? {}).filter(m.Vq), [N]),
        E = n.useCallback((e) => (0, i.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: v,
        surfaceConfigs: f?.surfaces ?? {},
        isLoading: h,
        hasIdentity: null != l,
        resolutionContext: { data: _, applicationAssets: T, getApplicationAssetUrl: E, localizedStrings: p },
    };
}
