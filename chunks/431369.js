n.d(t, { g: () => u }), n(415506), n(388685);
var l = n(512722),
    r = n.n(l),
    i = n(509545),
    o = n(74538),
    a = n(474936),
    s = n(981631);
function u(e, t) {
    let n = i.Z.get(e.planId);
    r()(null != n, 'missing premium subscription plan');
    let l = i.Z.getForSkuAndInterval((0, o.Wz)(a.Si.GUILD), n.interval, n.intervalCount);
    r()(null != l, 'missing premium guild plan');
    let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        c = (e.status === s.O0b.CANCELED ? 0 : (0, o.uV)(u)) + t,
        d = u.filter((e) => e.planId !== l.id);
    if (c < 0) throw Error('Invalid adjustment');
    return 0 === c
        ? d
        : [
              ...d,
              {
                  planId: l.id,
                  quantity: c
              }
          ];
}
