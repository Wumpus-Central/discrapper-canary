n.d(t, { v: () => c });
var i = n(284009),
    s = n.n(i),
    r = n(97352),
    a = n(927578),
    l = n(788868),
    o = n(652215);
function c(e, t) {
    let n = r.A.get(e.planId);
    s()(null != n, "missing premium subscription plan");
    let i = r.A.getForSkuAndInterval((0, a.mH)(l.pe.GUILD), n.interval, n.intervalCount);
    s()(null != i, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === o.Dmq.CANCELED ? 0 : (0, a.bx)(c)) + t,
        u = c.filter((e) => e.planId !== i.id);
    if (d < 0) throw Error("Invalid adjustment");
    return 0 === d ? u : [...u, { planId: i.id, quantity: d }];
}
