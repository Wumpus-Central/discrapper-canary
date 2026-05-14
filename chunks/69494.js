n.d(l, { A: () => u });
var r = n(627968);
n(64700);
var s = n(503698),
    t = n.n(s),
    i = n(40474),
    a = n(834252),
    d = n(166532),
    o = n(615310),
    c = n(756925);
function u(e) {
    let { className: l, isEligibleForTrial: n = !1 } = e,
        { step: s, breadcrumbsData: u } = (0, o.Ay)(),
        { startedPaymentFlowWithPaymentSourcesRef: p, isPremium: N } = (0, a.P5)();
    if (N || null == u || 0 === u.length) return null;
    let A = u.flatMap((e) => {
        let l = e.useBreadcrumbLabel(n);
        return null != l ? { id: e.id, label: l } : [];
    });
    return 0 === A.length
        ? null
        : ((A = A.filter((e) => {
              let l = e.id !== d.pn.ADD_PAYMENT_STEPS,
                  r = e.id === d.pn.ADD_PAYMENT_STEPS && !p.current;
              return !n || l || r;
          })),
          (0, r.jsx)("div", {
              className: t()("breadcrumb", c.i, l),
              children: (0, r.jsx)(i.A, { activeId: s, breadcrumbs: A }),
          }));
}
