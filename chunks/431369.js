t.d(n, { g: () => s }), t(411104), t(47120);
var o = t(512722),
    r = t.n(o),
    i = t(509545),
    a = t(74538),
    l = t(474936),
    c = t(981631);
function s(e, n) {
    let t = i.Z.get(e.planId);
    r()(null != t, 'missing premium subscription plan');
    let o = i.Z.getForSkuAndInterval((0, a.Wz)(l.Si.GUILD), t.interval, t.intervalCount);
    r()(null != o, 'missing premium guild plan');
    let s = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        p = (e.status === c.O0b.CANCELED ? 0 : (0, a.uV)(s)) + n,
        _ = s.filter((e) => e.planId !== o.id);
    if (p < 0) throw Error('Invalid adjustment');
    return 0 === p
        ? _
        : [
              ..._,
              {
                  planId: o.id,
                  quantity: p
              }
          ];
}
