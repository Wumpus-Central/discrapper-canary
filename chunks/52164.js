n.d(t, { Z: () => E }), n(388685);
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(509545),
    u = n(74538),
    d = n(937615),
    f = n(374649),
    p = n(474936),
    _ = n(981631),
    m = n(388032),
    h = n(257053);
function g(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: g } = (0, l.ZP)(),
        [E] = (0, f.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: g,
            analyticsLocation: s.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == E) return null;
    let b = i ? h.finePrintWithOverheadSeparator : h.finePrint,
        y = E.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, u.uZ)(t);
        });
    if (null == y) return null;
    let O = y.subscriptionPlanId,
        v = c.Z.get(O);
    a()(null != v, "Missing plan");
    let S = (0, d.T4)(E.total, E.currency);
    return (
        v.interval === p.rV.YEAR
            ? (t = m.intl.format(m.t["jPz/39"], {
                  price: S,
                  termsUrl: _.EYA.TERMS,
                  paidURL: _.EYA.PAID_TERMS,
                  privacyUrl: _.EYA.PRIVACY,
              }))
            : v.interval === p.rV.MONTH &&
              (t =
                  1 === v.intervalCount
                      ? m.intl.format(m.t.m27GpI, {
                            price: S,
                            termsUrl: _.EYA.TERMS,
                            paidURL: _.EYA.PAID_TERMS,
                            privacyUrl: _.EYA.PRIVACY,
                        })
                      : m.intl.format(m.t["9xf5Vx"], {
                            price: S,
                            termsUrl: _.EYA.TERMS,
                            paidURL: _.EYA.PAID_TERMS,
                            privacyUrl: _.EYA.PRIVACY,
                            intervalCount: v.intervalCount,
                        })),
        (0, r.jsx)(o.Text, {
            color: "text-muted",
            className: b,
            variant: "text-xs/normal",
            children: t,
        })
    );
}
function E(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, r.jsx)(g, {
              subscription: t,
              withOverheadSeparator: n,
          });
}
