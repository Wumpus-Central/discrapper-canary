n.d(l, { A: () => u });
var r = n(627968);
n(64700);
var t = n(503698),
    s = n.n(t),
    i = n(40474),
    a = n(6938),
    d = n(166532),
    o = n(615310),
    c = n(756925);
function u(e) {
    let { className: l, isEligibleForTrial: n = !1 } = e,
        { step: t, breadcrumbsData: u } = (0, o.Ay)(),
        m = (0, a.t4)((e) => e.startedPaymentFlowWithPaymentSources);
    if ((0, a.t4)((e) => e.get("isPremiumPurchase")) || null == u || 0 === u.length) return null;
    let p = u.flatMap((e) => {
        let l = e.useBreadcrumbLabel(n);
        return null != l ? { id: e.id, label: l } : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let l = e.id !== d.pn.ADD_PAYMENT_STEPS,
                  r = e.id === d.pn.ADD_PAYMENT_STEPS && !m;
              return !n || l || r;
          })),
          (0, r.jsx)("div", {
              className: s()("breadcrumb", c.i, l),
              children: (0, r.jsx)(i.A, { activeId: t, breadcrumbs: p }),
          }));
}
