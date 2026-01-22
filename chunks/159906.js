n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(97352),
    u = n(927578),
    d = n(580630),
    f = n(543767),
    p = n(788868),
    _ = n(652215),
    h = n(985018),
    m = n(700896);

function g(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: g } = (0, l.Ay)(),
        [E] = (0, f.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: g,
            analyticsLocation: o.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == E) return null;
    let b = i ? m.r : m.a,
        y = E.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, u.xq)(t);
        });
    if (null == y) return null;
    let O = y.subscriptionPlanId,
        A = c.A.get(O);
    a()(null != A, "Missing plan");
    let v = (0, d.$g)(E.total, E.currency);
    return (
        A.interval === p.WT.YEAR
            ? (t = h.intl.format(h.t["jPz/39"], {
                  price: v,
                  termsUrl: _.X7G.TERMS,
                  paidURL: _.X7G.PAID_TERMS,
                  privacyUrl: _.X7G.PRIVACY,
              }))
            : A.interval === p.WT.MONTH &&
              (t =
                  1 === A.intervalCount
                      ? h.intl.format(h.t.m27GpI, {
                            price: v,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                        })
                      : h.intl.format(h.t["9xf5Vx"], {
                            price: v,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                            intervalCount: A.intervalCount,
                        })),
        (0, r.jsx)(s.Text, {
            color: "text-muted",
            className: b,
            variant: "text-xs/normal",
            children: t,
        })
    );
}

function E(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, r.jsx)(g, {
              subscription: t,
              withOverheadSeparator: n,
          });
}
