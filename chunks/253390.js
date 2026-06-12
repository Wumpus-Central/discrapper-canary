a.d(n, { v: () => u });
var i = a(284009),
    s = a.n(i),
    t = a(97352),
    l = a(428262),
    r = a(788868),
    d = a(652215);
function u(e, n) {
    let a = t.A.get(e.planId);
    s()(null != a, "missing premium subscription plan");
    let i = t.A.getForSkuAndInterval((0, l.mH)(r.pe.GUILD), a.interval, a.intervalCount);
    s()(null != i, "missing premium guild plan");
    let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        c = (e.status === d.Dmq.CANCELED ? 0 : (0, l.bx)(u)) + n,
        o = u.filter((e) => e.planId !== i.id);
    if (c < 0) throw Error("Invalid adjustment");
    return 0 === c ? o : [...o, { planId: i.id, quantity: c }];
}
