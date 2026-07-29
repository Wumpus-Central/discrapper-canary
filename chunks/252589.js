n.d(t, { Y: () => v });
var r = n(582128),
    a = n(17928),
    u = n(780907),
    l = n(350172),
    i = n(730202);
n(321073);
var o = n(580630),
    c = n(652215),
    s = n(375708);
function m(e, t) {
    let n = e.prices[t]?.countryPrices?.prices?.[0];
    return null != n ? { amount: n.amount, currency: n.currency } : void 0;
}
function p(e) {
    return s.intl.formatToPlainString(s.t.AbOLNu, { price: (0, o.$g)(e.amount, e.currency) });
}
function d(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    let a = e.find((e) => n.some((t) => e.description.toLowerCase().includes(t)));
    return a?.title;
}
let f = n(568065).Wb,
    g = [c.Puh.SUBSCRIPTION, c.Puh.SUBSCRIPTION_GROUP];
function v() {
    let [e, t] = r.useState(0);
    r.useEffect(() => {
        (0, l.d)({ applicationId: f, skuTypes: g, includePricing: !0 }), u.Ay.getDetectableGames();
    }, [e]);
    let n = (0, a.bG)([i.A], () => i.A.getCollectionsForApplication(f)),
        s = (0, a.bG)([i.A], () => i.A.getFetchStateForApplication(f)),
        v = r.useMemo(
            () =>
                null != n
                    ? (function (e) {
                          let t = [];
                          for (let n of e)
                              for (let e of n.products) {
                                  let { fromPriceLabel: n, nitroFromPriceLabel: r } = (function (e) {
                                      let t, n;
                                      for (let r of e.skus) {
                                          if (r.type !== c.Puh.SUBSCRIPTION) continue;
                                          let e = m(r, c.lid.DEFAULT);
                                          null != e &&
                                              (null == t || e.amount < t.amount) &&
                                              ((t = e), (n = m(r, c.lid.PREMIUM_TIER_2)));
                                      }
                                      return null == t
                                          ? {}
                                          : {
                                                fromPriceLabel: `${(0, o.$g)(t.amount, t.currency)}+`,
                                                nitroFromPriceLabel:
                                                    null != n ? `${(0, o.$g)(n.amount, n.currency)}+` : void 0,
                                            };
                                  })(e);
                                  null != n &&
                                      t.push({
                                          id: e.id,
                                          name: e.name,
                                          gameId: e.gameApplicationId,
                                          fromPriceLabel: n,
                                          nitroFromPriceLabel: r,
                                          plans: (function (e) {
                                              let t = [];
                                              for (let n of e.skus) {
                                                  if (n.type !== c.Puh.SUBSCRIPTION) continue;
                                                  let e = m(n, c.lid.DEFAULT);
                                                  if (null == e) continue;
                                                  let r = m(n, c.lid.PREMIUM_TIER_2),
                                                      a = n.tenantMetadata?.gameServerPlanFeatures ?? [],
                                                      u = (function (e) {
                                                          if (null == e) return { value: "", unit: "" };
                                                          let t = e.trim().match(/^([\d.]+)\s*(.*)$/);
                                                          return null != t
                                                              ? { value: t[1], unit: t[2] }
                                                              : { value: e, unit: "" };
                                                      })(d(a, "ram", "memory"));
                                                  t.push({
                                                      id: n.id,
                                                      name: n.name,
                                                      standardPriceLabel: p(e),
                                                      nitroPriceLabel: null != r ? p(r) : void 0,
                                                      standardPriceAmount: e.amount,
                                                      nitroPriceAmount: r?.amount,
                                                      priceCurrency: e.currency,
                                                      playersLabel: d(a, "player") ?? "",
                                                      ramValueLabel: u.value,
                                                      ramUnitLabel: u.unit,
                                                      vcpusLabel: d(a, "vcpu", "cpu") ?? "",
                                                  });
                                              }
                                              return t;
                                          })(e),
                                      });
                              }
                          return t;
                      })(n)
                    : [],
            [n],
        ),
        y = r.useCallback(() => t((e) => e + 1), []);
    return {
        games: v,
        isLoading: "loading" === s,
        hasError: "error" === s,
        isEmpty: "success" === s && 0 === v.length,
        refetch: y,
    };
}
