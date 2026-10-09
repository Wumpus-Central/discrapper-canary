l.d(t, { A: () => x });
var n = l(582128),
    a = l(176999),
    s = l(17928),
    i = l(549699),
    r = l(29496),
    o = l(201718),
    u = l(339580),
    c = l(773669),
    m = l(403362),
    d = l(352003);
let v = [];
function x(e, t) {
    (0, o.P)(e);
    let l = (0, s.bG)([u.A], () => u.A.getUserIdentityByApplication(e, t)),
        x = (0, s.bG)([c.default], () => c.default.locale),
        p = n.useMemo(() => [t], [t]),
        [f] = (0, d.A)(p),
        _ = n.useMemo(() => (0, a.VG)(l?.profile ?? void 0), [l?.profile]),
        h = (0, s.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
        N = (0, s.bG)([r.A], () => r.A.getAssets(t)),
        E = n.useMemo(() => Object.values(N ?? {}).filter(m.Vq), [N]),
        T = n.useCallback((e) => (0, i.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: x,
        surfaceConfigs: f?.surfaces ?? {},
        isLoading: h,
        hasIdentity: null != l,
        resolutionContext: { data: _, applicationAssets: E, getApplicationAssetUrl: T, localizedStrings: v },
    };
}
