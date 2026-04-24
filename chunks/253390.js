n.d(t, { v: () => o });
var i = n(284009),
    s = n.n(i),
    a = n(97352),
    r = n(927578),
    l = n(788868),
    c = n(652215);
function o(e, t) {
    let n = a.A.get(e.planId);
    s()(null != n, "missing premium subscription plan");
    let i = a.A.getForSkuAndInterval((0, r.mH)(l.pe.GUILD), n.interval, n.intervalCount);
    s()(null != i, "missing premium guild plan");
    let o = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === c.Dmq.CANCELED ? 0 : (0, r.bx)(o)) + t,
        u = o.filter((e) => e.planId !== i.id);
    if (d < 0) throw Error("Invalid adjustment");
    return 0 === d ? u : [...u, { planId: i.id, quantity: d }];
}
