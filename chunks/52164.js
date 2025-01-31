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
    h = n(474936),
    g = n(981631),
    _ = n(388032),
    x = n(168910);
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
    let C = s ? x.finePrintWithOverheadSeparator : x.finePrint,
        f = E.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == f) return null;
    let T = f.subscriptionPlanId,
        N = c.Z.get(T);
    r()(null != N, 'Missing plan');
    let I = (0, u.T4)(E.total, E.currency);
    return (
        N.interval === h.rV.YEAR
            ? (t = _.intl.format(_.t['jPz/39'], {
                  price: I,
                  termsUrl: g.EYA.TERMS,
                  paidURL: g.EYA.PAID_TERMS,
                  privacyUrl: g.EYA.PRIVACY
              }))
            : N.interval === h.rV.MONTH &&
              (t =
                  1 === N.intervalCount
                      ? _.intl.format(_.t.m27GpK, {
                            price: I,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY
                        })
                      : _.intl.format(_.t['9xf5V1'], {
                            price: I,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY,
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
    return t.status === g.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(p, {
              subscription: t,
              withOverheadSeparator: n
          });
}
