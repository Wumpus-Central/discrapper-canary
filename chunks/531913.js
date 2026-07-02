l.d(t, { A: () => p });
var n = l(64700),
    a = l(432585),
    s = l(17928),
    i = l(549699),
    r = l(29496),
    u = l(201718),
    o = l(339580),
    c = l(773669),
    m = l(403362),
    d = l(352003);
let x = [];
function p(e, t) {
    (0, u.P)(e);
    let l = (0, s.bG)([o.A], () => o.A.getUserIdentityByApplication(e, t)),
        p = (0, s.bG)([c.default], () => c.default.locale),
        v = n.useMemo(() => [t], [t]),
        [f] = (0, d.A)(v),
        _ = n.useMemo(() => (0, a.VG)(l?.profile ?? void 0), [l?.profile]),
        h = (0, s.bG)([o.A], () => o.A.getFetchState(e) !== o.e.FETCHED),
        N = (0, s.bG)([r.A], () => r.A.getAssets(t)),
        T = n.useMemo(() => Object.values(N ?? {}).filter(m.Vq), [N]),
        E = n.useCallback((e) => (0, i.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: p,
        surfaceConfigs: f?.surfaces ?? {},
        isLoading: h,
        hasIdentity: null != l,
        resolutionContext: { data: _, applicationAssets: T, getApplicationAssetUrl: E, localizedStrings: x },
    };
}
