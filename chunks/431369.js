t.d(n, {
    g: function () {
        return c;
    }
}),
    t(411104),
    t(47120);
var o = t(512722),
    l = t.n(o),
    i = t(509545),
    r = t(74538),
    a = t(474936),
    s = t(981631);
function c(e, n) {
    let t = i.Z.get(e.planId);
    l()(null != t, 'missing premium subscription plan');
    let o = i.Z.getForSkuAndInterval((0, r.Wz)(a.Si.GUILD), t.interval, t.intervalCount);
    l()(null != o, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === s.O0b.CANCELED ? 0 : (0, r.uV)(c)) + n,
        d = c.filter((e) => e.planId !== o.id);
    if (u < 0) throw Error('Invalid adjustment');
    return 0 === u
        ? d
        : [
              ...d,
              {
                  planId: o.id,
                  quantity: u
              }
          ];
}
