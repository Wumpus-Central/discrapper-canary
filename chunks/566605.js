n.d(t, { A: () => g });
var i = n(64700),
    a = n(311907),
    l = n(704824),
    s = n(429913),
    r = n(633075),
    o = n(667049),
    d = n(287809),
    c = n(403362),
    u = n(395332);
function g(e) {
    let t = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, u.DB)({ location: e.location }),
        g = i.useMemo(() => n?.filter((e) => e.isEligibleForSuggestions()), [n]),
        m = i.useMemo(() => g?.map((e) => e.applicationId) ?? [], [g]),
        x = (0, s.A)(m),
        { tokens: p, fetched: f } = (0, l.j)(m),
        h = (0, o.A)(t?.id),
        _ = null == t || null == g || null == p || !f;
    return i.useMemo(
        () =>
            _
                ? { isLoading: _ }
                : {
                      isLoading: _,
                      suggestions: g
                          .map((e) => {
                              let t = x.find((t) => t?.id === e.applicationId);
                              return null == t ||
                                  null == p.find((t) => t.application.id === e.applicationId) ||
                                  null != h.find((t) => t instanceof r.R && t.applicationId === e.applicationId)
                                  ? null
                                  : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                          })
                          .filter(c.Vq),
                      currentUser: t,
                  },
        [_, g, t, x, p, h],
    );
}
