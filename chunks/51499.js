n.d(r, {
    Z: function () {
        return d;
    }
}),
    n(390547);
var l = n(200651);
n(192379);
var o = n(120356),
    t = n.n(o),
    s = n(481060),
    a = n(563132),
    c = n(409813),
    i = n(574630);
function d(e) {
    let { className: r, isEligibleForTrial: n = !1 } = e,
        { step: o, breadcrumbs: d, startedPaymentFlowWithPaymentSourcesRef: u } = (0, a.usePaymentContext)();
    if (null == d || 0 === d.length) return null;
    let p = d.flatMap((e) => {
        let r = e.useBreadcrumbLabel(n);
        return null != r
            ? {
                  id: e.id,
                  label: r
              }
            : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let r = e.id !== c.h8.ADD_PAYMENT_STEPS,
                  l = e.id === c.h8.ADD_PAYMENT_STEPS && !u.current;
              return !n || (n && (r || l));
          })),
          (0, l.jsx)('div', {
              className: t()('breadcrumb', i.wrapper, r),
              children: (0, l.jsx)(s.Breadcrumbs, {
                  activeId: o,
                  breadcrumbs: p
              })
          }));
}
