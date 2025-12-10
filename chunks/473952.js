n.d(t, { Z: () => u }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(430824),
    o = n(823379),
    a = n(905128),
    s = n(317169),
    c = n(535396);
function u(e, t) {
    var n;
    let u = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        d = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        { spent: f } = (0, s.Z)(e),
        h = r.useMemo(() => {
            if (null == t || t.type !== c.Us.LEVEL || null == d) return [];
            let e = c.T1[t.skuId];
            return null == e
                ? []
                : Object.entries(c.Rx)
                      .filter((t) => {
                          let [n, r] = t;
                          return r === e && null != d.unlockedPowerups[n];
                      })
                      .map((e) => {
                          let [t] = e;
                          return d.allPowerups[t];
                      })
                      .filter(o.lm);
        }, [t, d]),
        p = null == h ? void 0 : h.reduce((e, t) => e + t.cost, 0);
    return Math.max((null != (n = null == u ? void 0 : u.premiumSubscriberCount) ? n : 0) - f + (null != p ? p : 0), 0);
}
