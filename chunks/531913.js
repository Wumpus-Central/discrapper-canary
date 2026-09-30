n.d(t, { A: () => p });
var l = n(582128),
    i = n(176999),
    s = n(17928),
    r = n(549699),
    a = n(29496),
    o = n(201718),
    u = n(339580),
    c = n(773669),
    d = n(403362),
    m = n(352003);
let h = [];
function p(e, t) {
    (0, o.P)(e);
    let n = (0, s.bG)([u.A], () => u.A.getUserIdentityByApplication(e, t)),
        p = (0, s.bG)([c.default], () => c.default.locale),
        f = l.useMemo(() => [t], [t]),
        [g] = (0, m.A)(f),
        x = l.useMemo(() => (0, i.VG)(n?.profile ?? void 0), [n?.profile]),
        A = (0, s.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
        C = (0, s.bG)([a.A], () => a.A.getAssets(t)),
        E = l.useMemo(() => Object.values(C ?? {}).filter(d.Vq), [C]),
        I = l.useCallback((e) => (0, r.Q)(t, e, e.metadata.width), [t]);
    return {
        locale: p,
        surfaceConfigs: g?.surfaces ?? {},
        isLoading: A,
        hasIdentity: null != n,
        resolutionContext: { data: x, applicationAssets: E, getApplicationAssetUrl: I, localizedStrings: h },
    };
}
