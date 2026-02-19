"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    s = n(311907),
    l = n(71393),
    r = n(403362),
    a = n(645619),
    o = n(864310),
    c = n(568065);
function d(e, t) {
    let n = (0, s.bG)([l.A], () => l.A.getGuild(e)),
        d = (0, s.bG)([a.A], () => a.A.getStateForGuild(e)),
        { spent: u } = (0, o.A)(e),
        h = i.useMemo(() => {
            if (null == t || t.type !== c.o9.LEVEL || null == d) return [];
            let e = c.y7[t.skuId];
            return null == e
                ? []
                : Object.entries(c.wr)
                      .filter((t) => {
                          let [n, i] = t;
                          return i === e && null != d.unlockedPowerups[n];
                      })
                      .map((e) => {
                          let [t] = e;
                          return d.allPowerups[t];
                      })
                      .filter(r.Vq);
        }, [t, d]),
        A = h?.reduce((e, t) => e + t.cost, 0);
    return Math.max((n?.premiumSubscriberCount ?? 0) - u + (A ?? 0), 0);
}
