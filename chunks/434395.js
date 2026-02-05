n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(531260),
    o = n(927578),
    c = n(788868),
    d = n(985018),
    u = n(416179);
function _(e) {
    let { subscription: t, renewalMutations: s, className: _, analyticsLocation: m } = e,
        A = (0, l.A)(),
        g = t.currentPeriodEnd;
    return (
        A.fractionalState === c.xc.FP_SUB_PAUSED && (g = A.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(u.zr, _),
            children: [
                (0, i.jsx)(a.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: u.G }),
                (0, i.jsx)("div", {
                    className: u.Qq,
                    children: d.intl.format(d.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, o.OU)(s) : o.Ay.getDisplayName(s.planId),
                        date: g,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(a.MzZ, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, a.mMO)(async () => {
                                      let { default: e } = await n.e("65975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: s,
                                              analyticsLocation: m,
                                          });
                                  });
                          },
                          className: u.Lu,
                          children: d.intl.string(d.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
