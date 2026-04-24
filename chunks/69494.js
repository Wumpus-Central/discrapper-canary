s.d(t, { A: () => c });
var i = s(627968);
s(64700);
var n = s(503698),
    a = s.n(n),
    l = s(40474),
    r = s(156312),
    o = s(166532),
    p = s(615310),
    d = s(756925);
function c(e) {
    let { className: t, isEligibleForTrial: s = !1 } = e,
        { step: n, breadcrumbsData: c } = (0, p.Ay)(),
        { startedPaymentFlowWithPaymentSourcesRef: h, enablePremiumBrandRefresh: u } = (0, r.P5)();
    if (u || null == c || 0 === c.length) return null;
    let m = c.flatMap((e) => {
        let t = e.useBreadcrumbLabel(s);
        return null != t ? { id: e.id, label: t } : [];
    });
    return 0 === m.length
        ? null
        : ((m = m.filter((e) => {
              let t = e.id !== o.pn.ADD_PAYMENT_STEPS,
                  i = e.id === o.pn.ADD_PAYMENT_STEPS && !h.current;
              return !s || t || i;
          })),
          (0, i.jsx)("div", {
              className: a()("breadcrumb", d.i, t),
              children: (0, i.jsx)(l.A, { activeId: n, breadcrumbs: m }),
          }));
}
