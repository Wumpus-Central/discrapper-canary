var n = l(582128),
    a = l(90947),
    s = l(855986),
    i = l(549699),
    r = l(29496),
    o = l(201718),
    u = l(339580),
    c = l(773669),
    m = l(403362),
    d = l(352003);
let v = [];
l.d(
    t,
    {},
    {
        A: function (e, t) {
            (0, o.P)(e);
            let l = (0, s.bG)([u.A], () => u.A.getUserIdentityByApplication(e, t)),
                p = (0, s.bG)([c.default], () => c.default.locale),
                x = n.useMemo(() => [t], [t]),
                [f] = (0, d.A)(x),
                _ = n.useMemo(() => (0, a.VG)(l?.profile ?? void 0), [l?.profile]),
                h = (0, s.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
                N = (0, s.bG)([r.A], () => r.A.getAssets(t)),
                j = n.useMemo(() => Object.values(N ?? {}).filter(m.Vq), [N]),
                T = n.useCallback((e) => (0, i.Q)(t, e, e.metadata.width), [t]);
            return {
                locale: p,
                surfaceConfigs: f?.surfaces ?? {},
                isLoading: h,
                hasIdentity: null != l,
                resolutionContext: { data: _, applicationAssets: j, getApplicationAssetUrl: T, localizedStrings: v },
            };
        },
    },
);
