n.d(t, { A: () => g });
var i = n(64700),
    l = n(311907),
    a = n(704824),
    r = n(429913),
    s = n(633075),
    o = n(667049),
    d = n(287809),
    c = n(403362),
    u = n(395332);
function g(e) {
    let t = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, u.DB)({ location: e.location }),
        g = i.useMemo(() => n?.filter((e) => e.isEligibleForSuggestions()), [n]),
        m = i.useMemo(() => g?.map((e) => e.applicationId) ?? [], [g]),
        x = (0, r.A)(m),
        { tokens: f, fetched: h } = (0, a.j)(m),
        p = (0, o.A)(t?.id),
        _ = null == t || null == g || null == f || !h;
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
                                  null == f.find((t) => t.application.id === e.applicationId) ||
                                  null != p.find((t) => t instanceof s.R && t.applicationId === e.applicationId)
                                  ? null
                                  : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                          })
                          .filter(c.Vq),
                      currentUser: t,
                  },
        [_, g, t, x, f, p],
    );
}
