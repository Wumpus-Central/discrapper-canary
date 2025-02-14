n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(509545),
    d = n(74538),
    u = n(937615),
    m = n(374649),
    g = n(474936),
    h = n(981631),
    x = n(388032),
    _ = n(94950);
function p(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: p } = (0, o.ZP)(),
        [E] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: a.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == E) return null;
    let C = s ? _.finePrintWithOverheadSeparator : _.finePrint,
        f = E.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == f) return null;
    let T = f.subscriptionPlanId,
        N = c.Z.get(T);
    r()(null != N, 'Missing plan');
    let S = (0, u.T4)(E.total, E.currency);
    return (
        N.interval === g.rV.YEAR
            ? (t = x.intl.format(x.t['jPz/39'], {
                  price: S,
                  termsUrl: h.EYA.TERMS,
                  paidURL: h.EYA.PAID_TERMS,
                  privacyUrl: h.EYA.PRIVACY
              }))
            : N.interval === g.rV.MONTH &&
              (t =
                  1 === N.intervalCount
                      ? x.intl.format(x.t.m27GpK, {
                            price: S,
                            termsUrl: h.EYA.TERMS,
                            paidURL: h.EYA.PAID_TERMS,
                            privacyUrl: h.EYA.PRIVACY
                        })
                      : x.intl.format(x.t['9xf5V1'], {
                            price: S,
                            termsUrl: h.EYA.TERMS,
                            paidURL: h.EYA.PAID_TERMS,
                            privacyUrl: h.EYA.PRIVACY,
                            intervalCount: N.intervalCount
                        })),
        (0, i.jsx)(l.Text, {
            color: 'text-muted',
            className: C,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function E(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === h.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(p, {
              subscription: t,
              withOverheadSeparator: n
          });
}
