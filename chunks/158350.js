var e = l(582128),
    i = l(233470),
    a = l(260498),
    u = l(733791),
    r = l(680032),
    s = l(191850),
    o = l(792996);
l.d(
    n,
    {},
    {
        A: function (t) {
            let [n, l] = e.useState(!1),
                [d, c] = e.useState(null);
            e.useEffect(() => (0, i.GO)(t.id), [t.id]);
            let p = (0, u.Bs)(t.id),
                [f, g] = e.useState(null),
                h = null == f ? p : f.target,
                _ = h?.appName ?? t.name,
                m = e.useMemo(() => (0, r.wJ)(t, h), [t, h]),
                b = e.useCallback(async () => {
                    (l(!0), c(null), g({ target: p }));
                    try {
                        await (0, i.kY)(t.id);
                    } catch {
                        return (c(o.intl.string(s.default["d+wTRF"])), g(null), l(!1), null);
                    }
                    l(!1);
                    let n = a.Ay.getIntegrationStatus(t.id)?.owner_authorization_revoked === !0;
                    return o.intl.formatToPlainString(n ? s.default.tOu7uv : s.default.TWYUzf, { app: _ });
                }, [_, p, t.id]);
            return {
                appName: _,
                rows: m,
                keptChannels: null == h ? null : (0, u.Mi)(h),
                pending: n,
                error: d,
                submit: b,
            };
        },
        g: function (t) {
            return "guild" === t.install_scope && (0, a.PV)(t);
        },
    },
);
