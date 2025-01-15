n.d(t, {
    g: function () {
        return c;
    }
}),
    n(411104),
    n(47120);
var i = n(512722),
    s = n.n(i),
    r = n(509545),
    a = n(74538),
    l = n(474936),
    o = n(981631);
function c(e, t) {
    let n = r.Z.get(e.planId);
    s()(null != n, 'missing premium subscription plan');
    let i = r.Z.getForSkuAndInterval((0, a.Wz)(l.Si.GUILD), n.interval, n.intervalCount);
    s()(null != i, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === o.O0b.CANCELED ? 0 : (0, a.uV)(c)) + t,
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
