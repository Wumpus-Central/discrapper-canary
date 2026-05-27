n.d(l, { A: () => p });
var r = n(627968);
n(64700);
var t = n(503698),
    s = n.n(t),
    i = n(40474),
    a = n(722847),
    d = n(834252),
    o = n(166532),
    c = n(615310),
    u = n(756925);
function p(e) {
    let { className: l, isEligibleForTrial: n = !1 } = e,
        { step: t, breadcrumbsData: p } = (0, c.Ay)(),
        { startedPaymentFlowWithPaymentSourcesRef: N } = (0, d.P5)(),
        { isPremium: A } = (0, a.t4)((e) => e.getSelectedPlanAttributes());
    if (A || null == p || 0 === p.length) return null;
    let E = p.flatMap((e) => {
        let l = e.useBreadcrumbLabel(n);
        return null != l ? { id: e.id, label: l } : [];
    });
    return 0 === E.length
        ? null
        : ((E = E.filter((e) => {
              let l = e.id !== o.pn.ADD_PAYMENT_STEPS,
                  r = e.id === o.pn.ADD_PAYMENT_STEPS && !N.current;
              return !n || l || r;
          })),
          (0, r.jsx)("div", {
              className: s()("breadcrumb", u.i, l),
              children: (0, r.jsx)(i.A, { activeId: t, breadcrumbs: E }),
          }));
}
