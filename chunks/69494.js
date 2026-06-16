"use strict";
n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(40474),
    a = n(211159),
    o = n(166532),
    u = n(615310),
    c = n(756925);
function d(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: i, breadcrumbsData: d } = (0, u.Ay)(),
        m = (0, a.t4)((e) => e.startedPaymentFlowWithPaymentSources);
    if ((0, a.t4)((e) => e.get("isPremiumPurchase")) || null == d || 0 === d.length) return null;
    let h = d.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t ? { id: e.id, label: t } : [];
    });
    return 0 === h.length
        ? null
        : ((h = h.filter((e) => {
              let t = e.id !== o.pn.ADD_PAYMENT_STEPS,
                  l = e.id === o.pn.ADD_PAYMENT_STEPS && !m;
              return !n || t || l;
          })),
          (0, l.jsx)("div", {
              className: r()("breadcrumb", c.i, t),
              children: (0, l.jsx)(s.A, { activeId: i, breadcrumbs: h }),
          }));
}
