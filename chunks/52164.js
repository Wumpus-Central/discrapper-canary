n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(509545),
    d = n(74538),
    u = n(937615),
    m = n(374649),
    g = n(474936),
    h = n(981631),
    p = n(388032),
    x = n(168910);
function f(e) {
    let t,
        { subscription: n, withOverheadSeparator: r } = e,
        { analyticsLocations: f } = (0, o.ZP)(),
        [E] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: f,
            analyticsLocation: l.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == E) return null;
    let _ = r ? x.finePrintWithOverheadSeparator : x.finePrint,
        C = E.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == C) return null;
    let T = C.subscriptionPlanId,
        S = c.Z.get(T);
    s()(null != S, 'Missing plan');
    let b = (0, u.T4)(E.total, E.currency);
    return (
        S.interval === g.rV.YEAR
            ? (t = p.intl.format(p.t['jPz/39'], {
                  price: b,
                  termsUrl: h.EYA.TERMS,
                  paidURL: h.EYA.PAID_TERMS,
                  privacyUrl: h.EYA.PRIVACY
              }))
            : S.interval === g.rV.MONTH &&
              (t =
                  1 === S.intervalCount
                      ? p.intl.format(p.t.m27GpK, {
                            price: b,
                            termsUrl: h.EYA.TERMS,
                            paidURL: h.EYA.PAID_TERMS,
                            privacyUrl: h.EYA.PRIVACY
                        })
                      : p.intl.format(p.t['9xf5V1'], {
                            price: b,
                            termsUrl: h.EYA.TERMS,
                            paidURL: h.EYA.PAID_TERMS,
                            privacyUrl: h.EYA.PRIVACY,
                            intervalCount: S.intervalCount
                        })),
        (0, i.jsx)(a.Text, {
            color: 'text-muted',
            className: _,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function E(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === h.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(f, {
              subscription: t,
              withOverheadSeparator: n
          });
}
