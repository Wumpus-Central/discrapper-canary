n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(695366),
    r = n(349288),
    o = n(192308),
    d = n(531260),
    u = n(927578),
    c = n(788868),
    g = n(985018),
    m = n(697446);
function _(e) {
    let { subscription: t, renewalMutations: s, className: _, analyticsLocation: A } = e,
        h = (0, d.A)(),
        p = t.currentPeriodEnd;
    return (
        h.fractionalState === c.xc.FP_SUB_PAUSED && (p = h.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: l()(m.zr, _),
            children: [
                (0, i.jsx)(a.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: m.G }),
                (0, i.jsx)("div", {
                    className: m.Qq,
                    children: g.intl.format(g.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, u.OU)(s) : u.Ay.getDisplayName(s.planId),
                        date: p,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(r.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, o.openModalLazy)(async () => {
                                      let { default: e } = await n.e("65975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: s,
                                              analyticsLocation: A,
                                          });
                                  });
                          },
                          className: m.Lu,
                          children: g.intl.string(g.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
