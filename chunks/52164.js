n.d(t, { Z: () => _ }), n(388685);
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
    f = n(733633);
function b(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        [_] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: l.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == _) return null;
    let N = i ? f.finePrintWithOverheadSeparator : f.finePrint,
        x = _.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == x) return null;
    let E = x.subscriptionPlanId,
        j = c.Z.get(E);
    s()(null != j, 'Missing plan');
    let C = (0, u.T4)(_.total, _.currency);
    return (
        j.interval === g.rV.YEAR
            ? (t = h.NW.format(h.t['jPz/39'], {
                  price: C,
                  termsUrl: p.EYA.TERMS,
                  paidURL: p.EYA.PAID_TERMS,
                  privacyUrl: p.EYA.PRIVACY
              }))
            : j.interval === g.rV.MONTH &&
              (t =
                  1 === j.intervalCount
                      ? h.NW.format(h.t.m27GpK, {
                            price: C,
                            termsUrl: p.EYA.TERMS,
                            paidURL: p.EYA.PAID_TERMS,
                            privacyUrl: p.EYA.PRIVACY
                        })
                      : h.NW.format(h.t['9xf5V1'], {
                            price: C,
                            termsUrl: p.EYA.TERMS,
                            paidURL: p.EYA.PAID_TERMS,
                            privacyUrl: p.EYA.PRIVACY,
                            intervalCount: j.intervalCount
                        })),
        (0, r.jsx)(a.Text, {
            color: 'text-muted',
            className: N,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function _(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === p.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, r.jsx)(b, {
              subscription: t,
              withOverheadSeparator: n
          });
}
