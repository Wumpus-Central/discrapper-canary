n.d(t, { g: () => c }), n(415506), n(388685);
var r = n(512722),
    i = n.n(r),
    s = n(509545),
    a = n(74538),
    l = n(474936),
    o = n(981631);
function c(e, t) {
    let n = s.Z.get(e.planId);
    i()(null != n, 'missing premium subscription plan');
    let r = s.Z.getForSkuAndInterval((0, a.Wz)(l.Si.GUILD), n.interval, n.intervalCount);
    i()(null != r, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === o.O0b.CANCELED ? 0 : (0, a.uV)(c)) + t,
        u = c.filter((e) => e.planId !== r.id);
    if (d < 0) throw Error('Invalid adjustment');
    return 0 === d
        ? u
        : [
              ...u,
              {
                  planId: r.id,
                  quantity: d
              }
          ];
}
