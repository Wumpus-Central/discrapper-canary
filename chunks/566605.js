n.d(t, { A: () => g });
var i = n(64700),
    a = n(311907),
    l = n(704824),
    s = n(429913),
    r = n(633075),
    o = n(667049),
    c = n(287809),
    d = n(403362),
    u = n(369374),
    _ = n(395332);
function g(e) {
    let { enabled: t } = u.A.useConfig({ location: e.location }),
        n = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        g = (0, _.w$)({ location: e.location }),
        m = i.useMemo(() => g?.filter((e) => e.isEligibleForSuggestions()), [g]),
        f = i.useMemo(() => m?.map((e) => e.applicationId) ?? [], [m]),
        x = (0, s.A)(f),
        { tokens: p, fetched: I } = (0, l.j)(f),
        A = (0, o.A)(n?.id),
        h = null == n || null == m || null == p || !I;
    return i.useMemo(
        () =>
            h
                ? { isLoading: h }
                : t
                  ? { isLoading: h, suggestions: [], currentUser: n }
                  : {
                        isLoading: h,
                        suggestions: m
                            .map((e) => {
                                let t = x.find((t) => t?.id === e.applicationId);
                                return null == t ||
                                    null == p.find((t) => t.application.id === e.applicationId) ||
                                    null != A.find((t) => t instanceof r.R && t.applicationId === e.applicationId)
                                    ? null
                                    : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                            })
                            .filter(d.Vq),
                        currentUser: n,
                    },
        [t, h, m, n, x, p, A],
    );
}
