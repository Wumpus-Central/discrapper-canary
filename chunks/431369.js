n.d(t, { g: () => c }), n(415506), n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(509545),
    o = n(74538),
    s = n(474936),
    l = n(981631);
function c(e, t) {
    let n = a.Z.get(e.planId);
    i()(null != n, "missing premium subscription plan");
    let r = a.Z.getForSkuAndInterval((0, o.Wz)(s.Si.GUILD), n.interval, n.intervalCount);
    i()(null != r, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === l.O0b.CANCELED ? 0 : (0, o.uV)(c)) + t,
        d = c.filter((e) => e.planId !== r.id);
    if (u < 0) throw Error("Invalid adjustment");
    return 0 === u
        ? d
        : [
              ...d,
              {
                  planId: r.id,
                  quantity: u,
              },
          ];
}
