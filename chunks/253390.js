n.d(t, {
    v: () => c,
}),
    n(65821),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(97352),
    s = n(927578),
    o = n(788868),
    l = n(652215);

function c(e, t) {
    let n = a.A.get(e.planId);
    i()(null != n, "missing premium subscription plan");
    let r = a.A.getForSkuAndInterval((0, s.mH)(o.pe.GUILD), n.interval, n.intervalCount);
    i()(null != r, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === l.Dmq.CANCELED ? 0 : (0, s.bx)(c)) + t,
        d = c.filter((e) => e.planId !== r.id);
    if (u < 0) throw Error("Invalid adjustment");
    return 0 === u
        ? d
        : [
              ...d,
              {
                  planId: r.id,
                  quantity: u,
              },
          ];
}
