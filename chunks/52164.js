n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(509545),
    d = n(74538),
    u = n(937615),
    h = n(374649),
    m = n(474936),
    g = n(981631),
    x = n(388032),
    _ = n(817239);
function p(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: p } = (0, o.ZP)(),
        [E] = (0, h.ED)({
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
    let N = f.subscriptionPlanId,
        I = c.Z.get(N);
    l()(null != I, 'Missing plan');
    let T = (0, u.T4)(E.total, E.currency);
    return (
        I.interval === m.rV.YEAR
            ? (t = x.intl.format(x.t['jPz/39'], {
                  price: T,
                  termsUrl: g.EYA.TERMS,
                  paidURL: g.EYA.PAID_TERMS,
                  privacyUrl: g.EYA.PRIVACY
              }))
            : I.interval === m.rV.MONTH &&
              (t =
                  1 === I.intervalCount
                      ? x.intl.format(x.t.m27GpK, {
                            price: T,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY
                        })
                      : x.intl.format(x.t['9xf5V1'], {
                            price: T,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY,
                            intervalCount: I.intervalCount
                        })),
        (0, i.jsx)(r.Text, {
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
