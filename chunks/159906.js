n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(834730),
    r = n(793574),
    o = n(688810),
    d = n(97352),
    u = n(927578),
    c = n(580630),
    g = n(543767),
    m = n(788868),
    _ = n(652215),
    A = n(985018),
    h = n(825831);
function p(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: p } = (0, o.Ay)(),
        [x] = (0, g.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: r.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == x) return null;
    let E = s ? h.r : h.a,
        T = x.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, u.xq)(t);
        });
    if (null == T) return null;
    let S = T.subscriptionPlanId,
        f = d.A.get(S);
    l()(null != f, "Missing plan");
    let b = (0, c.$g)(x.total, x.currency);
    return (
        f.interval === m.WT.YEAR
            ? (t = A.intl.format(A.t["jPz/39"], {
                  price: b,
                  termsUrl: _.X7G.TERMS,
                  paidURL: _.X7G.PAID_TERMS,
                  privacyUrl: _.X7G.PRIVACY,
              }))
            : f.interval === m.WT.MONTH &&
              (t =
                  1 === f.intervalCount
                      ? A.intl.format(A.t.m27GpI, {
                            price: b,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                        })
                      : A.intl.format(A.t["9xf5Vx"], {
                            price: b,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                            intervalCount: f.intervalCount,
                        })),
        (0, i.jsx)(a.E, { color: "text-muted", className: E, variant: "text-xs/normal", children: t })
    );
}
function x(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(p, { subscription: t, withOverheadSeparator: n });
}
