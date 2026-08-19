n.d(t, { Y: () => f });
var l = n(582128),
    i = n(17928),
    r = n(183208),
    a = n(350172),
    s = n(730202);
n(321073);
var o = n(580630),
    u = n(652215),
    c = n(375708);
function d(e, t) {
    let n = e.prices[t]?.countryPrices?.prices?.[0];
    return null != n ? { amount: n.amount, currency: n.currency } : void 0;
}
function p(e) {
    return c.intl.formatToPlainString(c.t.AbOLNu, { price: (0, o.$g)(e.amount, e.currency) });
}
function m(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
    let i = e.find((e) => n.some((t) => e.description.toLowerCase().includes(t)));
    return i?.title;
}
let h = n(568065).Wb,
    C = [u.Puh.SUBSCRIPTION, u.Puh.SUBSCRIPTION_GROUP];
function f() {
    let [e, t] = l.useState(0);
    l.useEffect(() => {
        (0, a.d)({ applicationId: h, skuTypes: C, includePricing: !0 }), r.Ay.getDetectableGames();
    }, [e]);
    let n = (0, i.bG)([s.A], () => s.A.getCollectionsForApplication(h)),
        c = (0, i.bG)([s.A], () => s.A.getFetchStateForApplication(h)),
        f = l.useMemo(
            () =>
                null != n
                    ? (function (e) {
                          let t = [];
                          for (let n of e)
                              for (let e of n.products) {
                                  let { fromPriceLabel: n, nitroFromPriceLabel: l } = (function (e) {
                                      let t, n;
                                      for (let l of e.skus) {
                                          if (l.type !== u.Puh.SUBSCRIPTION) continue;
                                          let e = d(l, u.lid.DEFAULT);
                                          null != e &&
                                              (null == t || e.amount < t.amount) &&
                                              ((t = e), (n = d(l, u.lid.PREMIUM_TIER_2)));
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
                                          nitroFromPriceLabel: l,
                                          plans: (function (e) {
                                              let t = [];
                                              for (let n of e.skus) {
                                                  if (n.type !== u.Puh.SUBSCRIPTION) continue;
                                                  let e = d(n, u.lid.DEFAULT);
                                                  if (null == e) continue;
                                                  let l = d(n, u.lid.PREMIUM_TIER_2),
                                                      i = n.tenantMetadata?.gameServerPlanFeatures ?? [],
                                                      r = (function (e) {
                                                          if (null == e) return { value: "", unit: "" };
                                                          let t = e.trim().match(/^([\d.]+)\s*(.*)$/);
                                                          return null != t
                                                              ? { value: t[1], unit: t[2] }
                                                              : { value: e, unit: "" };
                                                      })(m(i, "ram", "memory"));
                                                  t.push({
                                                      id: n.id,
                                                      name: n.name,
                                                      standardPriceLabel: p(e),
                                                      nitroPriceLabel: null != l ? p(l) : void 0,
                                                      standardPriceAmount: e.amount,
                                                      nitroPriceAmount: l?.amount,
                                                      priceCurrency: e.currency,
                                                      playersLabel: m(i, "player") ?? "",
                                                      ramValueLabel: r.value,
                                                      ramUnitLabel: r.unit,
                                                      vcpusLabel: m(i, "vcpu", "cpu") ?? "",
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
        E = l.useCallback(() => t((e) => e + 1), []);
    return {
        games: f,
        isLoading: "loading" === c,
        hasError: "error" === c,
        isEmpty: "success" === c && 0 === f.length,
        refetch: E,
    };
}
