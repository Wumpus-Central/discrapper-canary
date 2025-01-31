t.d(n, { g: () => c }), t(411104), t(47120);
var l = t(512722),
    i = t.n(l),
    r = t(509545),
    o = t(74538),
    s = t(474936),
    a = t(981631);
function c(e, n) {
    let t = r.Z.get(e.planId);
    i()(null != t, 'missing premium subscription plan');
    let l = r.Z.getForSkuAndInterval((0, o.Wz)(s.Si.GUILD), t.interval, t.intervalCount);
    i()(null != l, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === a.O0b.CANCELED ? 0 : (0, o.uV)(c)) + n,
        p = c.filter((e) => e.planId !== l.id);
    if (u < 0) throw Error('Invalid adjustment');
    return 0 === u
        ? p
        : [
              ...p,
              {
                  planId: l.id,
                  quantity: u
              }
          ];
}
