n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(284009),
    r = n.n(s),
    a = n(397927),
    l = n(793574),
    o = n(688810),
    c = n(97352),
    d = n(927578),
    u = n(580630),
    _ = n(543767),
    m = n(788868),
    A = n(652215),
    g = n(985018),
    E = n(700896);
function h(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: h } = (0, o.Ay)(),
        [p] = (0, _.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: h,
            analyticsLocation: l.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == p) return null;
    let C = s ? E.r : E.a,
        x = p.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.xq)(t);
        });
    if (null == x) return null;
    let T = x.subscriptionPlanId,
        I = c.A.get(T);
    r()(null != I, "Missing plan");
    let S = (0, u.$g)(p.total, p.currency);
    return (
        I.interval === m.WT.YEAR
            ? (t = g.intl.format(g.t["jPz/39"], {
                  price: S,
                  termsUrl: A.X7G.TERMS,
                  paidURL: A.X7G.PAID_TERMS,
                  privacyUrl: A.X7G.PRIVACY,
              }))
            : I.interval === m.WT.MONTH &&
              (t =
                  1 === I.intervalCount
                      ? g.intl.format(g.t.m27GpI, {
                            price: S,
                            termsUrl: A.X7G.TERMS,
                            paidURL: A.X7G.PAID_TERMS,
                            privacyUrl: A.X7G.PRIVACY,
                        })
                      : g.intl.format(g.t["9xf5Vx"], {
                            price: S,
                            termsUrl: A.X7G.TERMS,
                            paidURL: A.X7G.PAID_TERMS,
                            privacyUrl: A.X7G.PRIVACY,
                            intervalCount: I.intervalCount,
                        })),
        (0, i.jsx)(a.Text, { color: "text-muted", className: C, variant: "text-xs/normal", children: t })
    );
}
function p(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === A.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(h, { subscription: t, withOverheadSeparator: n });
}
