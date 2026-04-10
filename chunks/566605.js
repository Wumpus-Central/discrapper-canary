n.d(t, { A: () => h });
var i = n(64700),
    r = n(311907),
    a = n(704824),
    l = n(429913),
    s = n(633075),
    o = n(667049),
    d = n(287809),
    c = n(403362),
    u = n(369374),
    A = n(395332);
function h(e) {
    let { enabled: t } = u.A.useConfig({ location: e.location }),
        n = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        h = (0, A.w$)({ location: e.location }),
        _ = i.useMemo(() => h?.filter((e) => e.isEligibleForSuggestions()), [h]),
        m = i.useMemo(() => _?.map((e) => e.applicationId) ?? [], [_]),
        g = (0, l.A)(m),
        { tokens: p, fetched: E } = (0, a.j)(m),
        I = (0, o.A)(n?.id),
        f = null == n || null == _ || null == p || !E;
    return i.useMemo(
        () =>
            f
                ? { isLoading: f }
                : t
                  ? { isLoading: f, suggestions: [], currentUser: n }
                  : {
                        isLoading: f,
                        suggestions: _.map((e) => {
                            let t = g.find((t) => t?.id === e.applicationId);
                            return null == t ||
                                null == p.find((t) => t.application.id === e.applicationId) ||
                                null != I.find((t) => t instanceof s.R && t.applicationId === e.applicationId)
                                ? null
                                : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                        }).filter(c.Vq),
                        currentUser: n,
                    },
        [t, f, _, n, g, p, I],
    );
}
