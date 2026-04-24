"use strict";
i.d(t, { v: () => c });
var r = i(284009),
    n = i.n(r),
    s = i(97352),
    l = i(927578),
    a = i(788868),
    o = i(652215);
function c(e, t) {
    let i = s.A.get(e.planId);
    n()(null != i, "missing premium subscription plan");
    let r = s.A.getForSkuAndInterval((0, l.mH)(a.pe.GUILD), i.interval, i.intervalCount);
    n()(null != r, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === o.Dmq.CANCELED ? 0 : (0, l.bx)(c)) + t,
        d = c.filter((e) => e.planId !== r.id);
    if (u < 0) throw Error("Invalid adjustment");
    return 0 === u ? d : [...d, { planId: r.id, quantity: u }];
}
