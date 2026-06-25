"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(40474),
    o = n(46332),
    l = n(166532),
    u = n(615310),
    c = n(698685);
function d(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: r, breadcrumbsData: d } = (0, u.Ay)(),
        _ = (0, o.t4)((e) => e.startedPaymentFlowWithPaymentSources);
    if ((0, o.t4)((e) => e.get("isPremiumPurchase")) || null == d || 0 === d.length) return null;
    let h = d.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t ? { id: e.id, label: t } : [];
    });
    return 0 === h.length
        ? null
        : ((h = h.filter((e) => {
              let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
                  i = e.id === l.pn.ADD_PAYMENT_STEPS && !_;
              return !n || t || i;
          })),
          (0, i.jsx)("div", {
              className: s()("breadcrumb", c.i, t),
              children: (0, i.jsx)(a.A, { activeId: r, breadcrumbs: h }),
          }));
}
