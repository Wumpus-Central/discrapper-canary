n.d(t, { g: () => c }), n(415506), n(388685);
var i = n(512722),
    r = n.n(i),
    s = n(509545),
    l = n(74538),
    a = n(474936),
    o = n(981631);
function c(e, t) {
    let n = s.Z.get(e.planId);
    r()(null != n, 'missing premium subscription plan');
    let i = s.Z.getForSkuAndInterval((0, l.Wz)(a.Si.GUILD), n.interval, n.intervalCount);
    r()(null != i, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === o.O0b.CANCELED ? 0 : (0, l.uV)(c)) + t,
        u = c.filter((e) => e.planId !== i.id);
    if (d < 0) throw Error('Invalid adjustment');
    return 0 === d
        ? u
        : [
              ...u,
              {
                  planId: i.id,
                  quantity: d
              }
          ];
}
