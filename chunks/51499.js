n.d(t, { Z: () => c }), n(390547);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(563132),
    l = n(409813),
    u = n(183741);
function c(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: r, breadcrumbs: c, startedPaymentFlowWithPaymentSourcesRef: d } = (0, o.JL)();
    if (null == c || 0 === c.length) return null;
    let f = c.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t
            ? {
                  id: e.id,
                  label: t
              }
            : [];
    });
    return 0 === f.length
        ? null
        : ((f = f.filter((e) => {
              let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
                  i = e.id === l.h8.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (t || i));
          })),
          (0, i.jsx)('div', {
              className: a()('breadcrumb', u.wrapper, t),
              children: (0, i.jsx)(s.OoM, {
                  activeId: r,
                  breadcrumbs: f
              })
          }));
}
