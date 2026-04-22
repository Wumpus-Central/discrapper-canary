n.d(l, { A: () => u });
var r = n(627968);
n(64700);
var s = n(503698),
    t = n.n(s),
    i = n(40474),
    a = n(156312),
    d = n(166532),
    c = n(615310),
    o = n(756925);
function u(e) {
    let { className: l, isEligibleForTrial: n = !1 } = e,
        { step: s, breadcrumbsData: u } = (0, c.Ay)(),
        { startedPaymentFlowWithPaymentSourcesRef: p, enablePremiumBrandRefresh: m } = (0, a.P5)();
    if (m || null == u || 0 === u.length) return null;
    let N = u.flatMap((e) => {
        let l = e.useBreadcrumbLabel(n);
        return null != l ? { id: e.id, label: l } : [];
    });
    return 0 === N.length
        ? null
        : ((N = N.filter((e) => {
              let l = e.id !== d.pn.ADD_PAYMENT_STEPS,
                  r = e.id === d.pn.ADD_PAYMENT_STEPS && !p.current;
              return !n || l || r;
          })),
          (0, r.jsx)("div", {
              className: t()("breadcrumb", o.i, l),
              children: (0, r.jsx)(i.A, { activeId: s, breadcrumbs: N }),
          }));
}
