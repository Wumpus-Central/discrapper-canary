"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(156312),
    l = n(166532),
    u = n(615310),
    c = n(881037);
function d(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: i, breadcrumbsData: d } = (0, u.Ay)(),
        { startedPaymentFlowWithPaymentSourcesRef: _, enablePremiumBrandRefresh: f } = (0, o.P5)();
    if (f || null == d || 0 === d.length) return null;
    let p = d.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t ? { id: e.id, label: t } : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
                  r = e.id === l.pn.ADD_PAYMENT_STEPS && !_.current;
              return !n || t || r;
          })),
          (0, r.jsx)("div", {
              className: s()("breadcrumb", c.i, t),
              children: (0, r.jsx)(a.BIu, { activeId: i, breadcrumbs: p }),
          }));
}
