r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(390547);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(563132),
    c = r(409813),
    d = r(574630);
function f(e) {
    let { className: n, isEligibleForTrial: r = !1 } = e,
        { step: i, breadcrumbs: o, startedPaymentFlowWithPaymentSourcesRef: f } = (0, u.usePaymentContext)();
    if (null == o || 0 === o.length) return null;
    let p = o.flatMap((e) => {
        let n = e.useBreadcrumbLabel(r);
        return null != n
            ? {
                  id: e.id,
                  label: n
              }
            : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let n = e.id !== c.h8.ADD_PAYMENT_STEPS,
                  i = e.id === c.h8.ADD_PAYMENT_STEPS && !f.current;
              return !r || (r && (n || i));
          })),
          (0, a.jsx)('div', {
              className: s()('breadcrumb', d.wrapper, n),
              children: (0, a.jsx)(l.Breadcrumbs, {
                  activeId: i,
                  breadcrumbs: p
              })
          }));
}
