n.d(t, {
    A: () => u,
}),
    n(114821),
    n(339614);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(156312),
    l = n(166532),
    c = n(329268);

function u(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        {
            step: i,
            breadcrumbs: u,
            startedPaymentFlowWithPaymentSourcesRef: d,
            enablePremiumBrandRefresh: f,
        } = (0, o.P5)();
    if (f || null == u || 0 === u.length) return null;
    let p = u.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t
            ? {
                  id: e.id,
                  label: t,
              }
            : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
                  r = e.id === l.pn.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (t || r));
          })),
          (0, r.jsx)("div", {
              className: a()("breadcrumb", c.i, t),
              children: (0, r.jsx)(s.BIu, {
                  activeId: i,
                  breadcrumbs: p,
              }),
          }));
}
