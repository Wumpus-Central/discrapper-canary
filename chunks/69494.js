"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(156312),
    l = n(166532),
    u = n(881037);
function c(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        {
            step: i,
            breadcrumbs: c,
            startedPaymentFlowWithPaymentSourcesRef: d,
            enablePremiumBrandRefresh: _,
        } = (0, o.P5)();
    if (_ || null == c || 0 === c.length) return null;
    let f = c.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t ? { id: e.id, label: t } : [];
    });
    return 0 === f.length
        ? null
        : ((f = f.filter((e) => {
              let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
                  r = e.id === l.pn.ADD_PAYMENT_STEPS && !d.current;
              return !n || t || r;
          })),
          (0, r.jsx)("div", {
              className: s()("breadcrumb", u.i, t),
              children: (0, r.jsx)(a.BIu, { activeId: i, breadcrumbs: f }),
          }));
}
