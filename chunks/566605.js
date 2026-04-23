n.d(t, { A: () => m });
var i = n(64700),
    a = n(311907),
    l = n(704824),
    s = n(429913),
    r = n(633075),
    o = n(667049),
    c = n(287809),
    d = n(403362),
    u = n(369374),
    g = n(395332);
function m(e) {
    let { enabled: t } = u.A.useConfig({ location: e.location }),
        n = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        m = (0, g.w$)({ location: e.location }),
        _ = i.useMemo(() => m?.filter((e) => e.isEligibleForSuggestions()), [m]),
        f = i.useMemo(() => _?.map((e) => e.applicationId) ?? [], [_]),
        x = (0, s.A)(f),
        { tokens: p, fetched: I } = (0, l.j)(f),
        A = (0, o.A)(n?.id),
        h = null == n || null == _ || null == p || !I;
    return i.useMemo(
        () =>
            h
                ? { isLoading: h }
                : t
                  ? { isLoading: h, suggestions: [], currentUser: n }
                  : {
                        isLoading: h,
                        suggestions: _.map((e) => {
                            let t = x.find((t) => t?.id === e.applicationId);
                            return null == t ||
                                null == p.find((t) => t.application.id === e.applicationId) ||
                                null != A.find((t) => t instanceof r.R && t.applicationId === e.applicationId)
                                ? null
                                : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                        }).filter(d.Vq),
                        currentUser: n,
                    },
        [t, h, _, n, x, p, A],
    );
}
