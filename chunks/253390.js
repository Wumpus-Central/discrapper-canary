n.d(t, { v: () => u });
var l = n(284009),
    i = n.n(l),
    r = n(97352),
    a = n(428262),
    s = n(202541),
    o = n(652215);
function u(e, t) {
    let n = r.A.get(e.planId);
    i()(null != n, "missing premium subscription plan");
    let l = r.A.getForSkuAndInterval((0, a.mH)(s.pe.GUILD), n.interval, n.intervalCount);
    i()(null != l, "missing premium guild plan");
    let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        c = (e.status === o.Dmq.CANCELED ? 0 : (0, a.bx)(u)) + t,
        d = u.filter((e) => e.planId !== l.id);
    if (c < 0) throw Error("Invalid adjustment");
    return 0 === c ? d : [...d, { planId: l.id, quantity: c }];
}
