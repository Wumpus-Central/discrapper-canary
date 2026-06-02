n.d(l, { A: () => u });
var r = n(627968);
n(64700);
var t = n(503698),
    s = n.n(t),
    i = n(40474),
    a = n(571878),
    o = n(166532),
    d = n(615310),
    c = n(756925);
function u(e) {
    let { className: l, isEligibleForTrial: n = !1 } = e,
        { step: t, breadcrumbsData: u } = (0, d.Ay)(),
        p = (0, a.t4)((e) => e.startedPaymentFlowWithPaymentSources);
    if ((0, a.t4)((e) => e.get("isPremiumPurchase")) || null == u || 0 === u.length) return null;
    let m = u.flatMap((e) => {
        let l = e.useBreadcrumbLabel(n);
        return null != l ? { id: e.id, label: l } : [];
    });
    return 0 === m.length
        ? null
        : ((m = m.filter((e) => {
              let l = e.id !== o.pn.ADD_PAYMENT_STEPS,
                  r = e.id === o.pn.ADD_PAYMENT_STEPS && !p;
              return !n || l || r;
          })),
          (0, r.jsx)("div", {
              className: s()("breadcrumb", c.i, l),
              children: (0, r.jsx)(i.A, { activeId: t, breadcrumbs: m }),
          }));
}
