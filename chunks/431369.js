t.d(n, {
    g: function () {
        return c;
    }
}),
    t(411104),
    t(47120);
var l = t(512722),
    i = t.n(l),
    o = t(509545),
    r = t(74538),
    a = t(474936),
    s = t(981631);
function c(e, n) {
    let t = o.Z.get(e.planId);
    i()(null != t, 'missing premium subscription plan');
    let l = o.Z.getForSkuAndInterval((0, r.Wz)(a.Si.GUILD), t.interval, t.intervalCount);
    i()(null != l, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === s.O0b.CANCELED ? 0 : (0, r.uV)(c)) + n,
        d = c.filter((e) => e.planId !== l.id);
    if (u < 0) throw Error('Invalid adjustment');
    return 0 === u
        ? d
        : [
              ...d,
              {
                  planId: l.id,
                  quantity: u
              }
          ];
}
