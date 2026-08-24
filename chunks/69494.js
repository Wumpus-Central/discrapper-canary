n.d(t, { A: () => d });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(40474),
    s = n(883645),
    o = n(87725),
    u = n(166532),
    c = n(401986);
function d(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: i, breadcrumbsData: d } = (0, s.Ay)(),
        m = (0, o.t4)((e) => e.startedPaymentFlowWithPaymentSources);
    if ((0, o.t4)((e) => e.get("isPremiumPurchase")) || null == d || 0 === d.length) return null;
    let p = d.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t ? { id: e.id, label: t } : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let t = e.id !== u.pn.ADD_PAYMENT_STEPS,
                  l = e.id === u.pn.ADD_PAYMENT_STEPS && !m;
              return !n || t || l;
          })),
          (0, l.jsx)("div", {
              className: r()("breadcrumb", c.i, t),
              children: (0, l.jsx)(a.A, { activeId: i, breadcrumbs: p }),
          }));
}
