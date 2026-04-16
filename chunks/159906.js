n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(397927),
    a = n(793574),
    o = n(688810),
    d = n(97352),
    c = n(927578),
    u = n(580630),
    m = n(543767),
    g = n(788868),
    _ = n(652215),
    x = n(985018),
    h = n(50919);
function A(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: A } = (0, o.Ay)(),
        [p] = (0, m.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: A,
            analyticsLocation: a.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == p) return null;
    let T = s ? h.r : h.a,
        f = p.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, c.xq)(t);
        });
    if (null == f) return null;
    let S = f.subscriptionPlanId,
        E = d.A.get(S);
    l()(null != E, "Missing plan");
    let b = (0, u.$g)(p.total, p.currency);
    return (
        E.interval === g.WT.YEAR
            ? (t = x.intl.format(x.t["jPz/39"], {
                  price: b,
                  termsUrl: _.X7G.TERMS,
                  paidURL: _.X7G.PAID_TERMS,
                  privacyUrl: _.X7G.PRIVACY,
              }))
            : E.interval === g.WT.MONTH &&
              (t =
                  1 === E.intervalCount
                      ? x.intl.format(x.t.m27GpI, {
                            price: b,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                        })
                      : x.intl.format(x.t["9xf5Vx"], {
                            price: b,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                            intervalCount: E.intervalCount,
                        })),
        (0, i.jsx)(r.Text, { color: "text-muted", className: T, variant: "text-xs/normal", children: t })
    );
}
function p(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(A, { subscription: t, withOverheadSeparator: n });
}
