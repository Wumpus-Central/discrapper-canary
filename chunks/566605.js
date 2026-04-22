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
        f = i.useMemo(() => g?.filter((e) => e.isEligibleForSuggestions()), [g]),
        m = i.useMemo(() => f?.map((e) => e.applicationId) ?? [], [f]),
        x = (0, s.A)(m),
        { tokens: p, fetched: I } = (0, l.j)(m),
        A = (0, o.A)(n?.id),
        h = null == n || null == f || null == p || !I;
    return i.useMemo(
        () =>
            h
                ? { isLoading: h }
                : t
                  ? { isLoading: h, suggestions: [], currentUser: n }
                  : {
                        isLoading: h,
                        suggestions: f
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
        [t, h, f, n, x, p, A],
    );
}
