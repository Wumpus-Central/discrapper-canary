n.d(t, { A: () => u });
var r = n(64700),
    l = n(311907),
    i = n(985018),
    a = n(645619),
    s = n(998418),
    o = n(568065),
    c = n(333354);
function u(e, t, n) {
    let u = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        d = (0, s.Ay)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === o.b_.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0,
            };
        let { allPowerups: l, unlockedPowerups: a } = u,
            s = n
                ? null ==
                  (e = Object.values(a).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == a[e]);
        return {
            disabled: null != s,
            reason:
                null != s && null != l[s]
                    ? i.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
                          perk: null == (r = l[s]) ? void 0 : r.title,
                      })
                    : void 0,
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
