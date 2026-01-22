n.d(t, { A: () => f });
var r = n(64700),
    l = n(311907),
    i = n(704824),
    a = n(429913),
    s = n(633075),
    o = n(667049),
    c = n(287809),
    u = n(403362),
    d = n(395332);
function f(e) {
    let t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        n = (0, d.DB)({ location: e.location }),
        f = r.useMemo(() => (null == n ? void 0 : n.filter((e) => e.isEligibleForSuggestions())), [n]),
        p = r.useMemo(() => {
            var e;
            return null != (e = null == f ? void 0 : f.map((e) => e.applicationId)) ? e : [];
        }, [f]),
        b = (0, a.A)(p),
        { tokens: g, fetched: m } = (0, i.j)(p),
        y = (0, o.A)(null == t ? void 0 : t.id),
        O = null == t || null == f || null == g || !m;
    return r.useMemo(
        () =>
            O
                ? { isLoading: O }
                : {
                      isLoading: O,
                      suggestions: f
                          .map((e) => {
                              let t = b.find((t) => (null == t ? void 0 : t.id) === e.applicationId);
                              return null == t ||
                                  null == g.find((t) => t.application.id === e.applicationId) ||
                                  null != y.find((t) => t instanceof s.R && t.applicationId === e.applicationId)
                                  ? null
                                  : {
                                        config: e,
                                        application: t,
                                        dismissibleContent: e.suggestedWidgetLinkedDc,
                                    };
                          })
                          .filter(u.Vq),
                      currentUser: t,
                  },
        [O, f, t, b, g, y],
    );
}
