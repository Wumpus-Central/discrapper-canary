n.d(t, { Z: () => f });
var r = n(473749),
    i = n(442837),
    l = n(491662),
    a = n(835473),
    o = n(931847),
    c = n(517157),
    s = n(594174),
    u = n(823379),
    d = n(251296);
function f(e) {
    let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        n = (0, d.no)({ location: e.location }),
        f = r.useMemo(() => (null == n ? void 0 : n.filter((e) => e.isEligibleForSuggestions())), [n]),
        g = r.useMemo(() => {
            var e;
            return null != (e = null == f ? void 0 : f.map((e) => e.applicationId)) ? e : [];
        }, [f]),
        p = (0, a.Z)(g),
        { tokens: m, fetched: b } = (0, l.O)(g),
        y = (0, c.Z)(null == t ? void 0 : t.id),
        j = null == t || null == f || null == m || !b;
    return r.useMemo(
        () =>
            j
                ? { isLoading: j }
                : {
                      isLoading: j,
                      suggestions: f
                          .map((e) => {
                              let t = p.find((t) => (null == t ? void 0 : t.id) === e.applicationId);
                              return null == t ||
                                  null == m.find((t) => t.application.id === e.applicationId) ||
                                  null != y.find((t) => t instanceof o.q && t.applicationId === e.applicationId)
                                  ? null
                                  : {
                                        config: e,
                                        application: t,
                                        dismissibleContent: e.suggestedWidgetLinkedDc,
                                    };
                          })
                          .filter(u.lm),
                      currentUser: t,
                  },
        [j, f, t, p, m, y],
    );
}
