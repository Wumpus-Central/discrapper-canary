n.d(t, { Z: () => N }), n(47120);
var r = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(509545),
    d = n(74538),
    u = n(937615),
    m = n(374649),
    g = n(474936),
    p = n(981631),
    h = n(388032),
    f = n(532897);
function b(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        [N] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: l.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == N) return null;
    let x = i ? f.finePrintWithOverheadSeparator : f.finePrint,
        _ = N.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == _) return null;
    let E = _.subscriptionPlanId,
        j = c.Z.get(E);
    s()(null != j, 'Missing plan');
    let O = (0, u.T4)(N.total, N.currency);
    return (
        j.interval === g.rV.YEAR
            ? (t = h.NW.format(h.t['jPz/39'], {
                  price: O,
                  termsUrl: p.EYA.TERMS,
                  paidURL: p.EYA.PAID_TERMS,
                  privacyUrl: p.EYA.PRIVACY
              }))
            : j.interval === g.rV.MONTH &&
              (t =
                  1 === j.intervalCount
                      ? h.NW.format(h.t.m27GpK, {
                            price: O,
                            termsUrl: p.EYA.TERMS,
                            paidURL: p.EYA.PAID_TERMS,
                            privacyUrl: p.EYA.PRIVACY
                        })
                      : h.NW.format(h.t['9xf5V1'], {
                            price: O,
                            termsUrl: p.EYA.TERMS,
                            paidURL: p.EYA.PAID_TERMS,
                            privacyUrl: p.EYA.PRIVACY,
                            intervalCount: j.intervalCount
                        })),
        (0, r.jsx)(a.Text, {
            color: 'text-muted',
            className: x,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function N(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === p.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, r.jsx)(b, {
              subscription: t,
              withOverheadSeparator: n
          });
}
