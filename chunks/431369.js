t.d(n, { g: () => c }), t(411104), t(47120);
var r = t(512722),
    l = t.n(r),
    i = t(509545),
    o = t(74538),
    s = t(474936),
    a = t(981631);
function c(e, n) {
    let t = i.Z.get(e.planId);
    l()(null != t, 'missing premium subscription plan');
    let r = i.Z.getForSkuAndInterval((0, o.Wz)(s.Si.GUILD), t.interval, t.intervalCount);
    l()(null != r, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === a.O0b.CANCELED ? 0 : (0, o.uV)(c)) + n,
        p = c.filter((e) => e.planId !== r.id);
    if (u < 0) throw Error('Invalid adjustment');
    return 0 === u
        ? p
        : [
              ...p,
              {
                  planId: r.id,
                  quantity: u
              }
          ];
}
