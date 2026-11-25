var l = t(582128),
    s = t(90947),
    a = t(855986),
    i = t(549699),
    r = t(29496),
    o = t(201718),
    u = t(339580),
    c = t(773669),
    d = t(403362),
    m = t(352003);
let x = [];
t.d(
    n,
    {},
    {
        A: function (e, n) {
            (0, o.P)(e);
            let t = (0, a.bG)([u.A], () => u.A.getUserIdentityByApplication(e, n)),
                h = (0, a.bG)([c.default], () => c.default.locale),
                p = l.useMemo(() => [n], [n]),
                [j] = (0, m.A)(p),
                g = l.useMemo(() => (0, s.VG)(t?.profile ?? void 0), [t?.profile]),
                f = (0, a.bG)([u.A], () => u.A.getFetchState(e) !== u.e.FETCHED),
                v = (0, a.bG)([r.A], () => r.A.getAssets(n)),
                N = l.useMemo(() => Object.values(v ?? {}).filter(d.Vq), [v]),
                I = l.useCallback((e) => (0, i.Q)(n, e, e.metadata.width), [n]);
            return {
                locale: h,
                surfaceConfigs: j?.surfaces ?? {},
                isLoading: f,
                hasIdentity: null != t,
                resolutionContext: { data: g, applicationAssets: N, getApplicationAssetUrl: I, localizedStrings: x },
            };
        },
    },
);
