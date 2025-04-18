n.d(t, { Z: () => u }), n(361932), n(187205);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(563132),
    l = n(409813),
    c = n(175531);
function u(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: i, breadcrumbs: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, s.JL)();
    if (null == u || 0 === u.length) return null;
    let f = u.flatMap((e) => {
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
                  r = e.id === l.h8.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (t || r));
          })),
          (0, r.jsx)('div', {
              className: a()('breadcrumb', c.wrapper, t),
              children: (0, r.jsx)(o.OoM, {
                  activeId: i,
                  breadcrumbs: f
              })
          }));
}
