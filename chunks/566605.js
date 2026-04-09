n.d(t, { A: () => _ });
var i = n(64700),
    a = n(311907),
    r = n(704824),
    l = n(429913),
    s = n(633075),
    o = n(667049),
    d = n(287809),
    c = n(403362),
    u = n(369374),
    A = n(395332);
function _(e) {
    let { enabled: t } = u.A.useConfig({ location: e.location }),
        n = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        _ = (0, A.w$)({ location: e.location }),
        h = i.useMemo(() => _?.filter((e) => e.isEligibleForSuggestions()), [_]),
        m = i.useMemo(() => h?.map((e) => e.applicationId) ?? [], [h]),
        g = (0, l.A)(m),
        { tokens: p, fetched: E } = (0, r.j)(m),
        I = (0, o.A)(n?.id),
        f = null == n || null == h || null == p || !E;
    return i.useMemo(
        () =>
            f
                ? { isLoading: f }
                : t
                  ? { isLoading: f, suggestions: [], currentUser: n }
                  : {
                        isLoading: f,
                        suggestions: h
                            .map((e) => {
                                let t = g.find((t) => t?.id === e.applicationId);
                                return null == t ||
                                    null == p.find((t) => t.application.id === e.applicationId) ||
                                    null != I.find((t) => t instanceof s.R && t.applicationId === e.applicationId)
                                    ? null
                                    : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                            })
                            .filter(c.Vq),
                        currentUser: n,
                    },
        [t, f, h, n, g, p, I],
    );
}
