n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(71393),
    a = n(403362),
    r = n(645619),
    o = n(864310),
    d = n(568065);
function c(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getGuild(e)),
        c = (0, l.bG)([r.A], () => r.A.getStateForGuild(e)),
        { spent: u } = (0, o.A)(e),
        h = i.useMemo(() => {
            if (null == t || t.type !== d.o9.LEVEL || null == c) return [];
            let e = d.y7[t.skuId];
            return null == e
                ? []
                : Object.entries(d.wr)
                      .filter((t) => {
                          let [n, i] = t;
                          return i === e && null != c.unlockedPowerups[n];
                      })
                      .map((e) => {
                          let [t] = e;
                          return c.allPowerups[t];
                      })
                      .filter(a.Vq);
        }, [t, c]),
        A = h?.reduce((e, t) => e + t.cost, 0);
    return Math.max((n?.premiumSubscriberCount ?? 0) - u + (A ?? 0), 0);
}
