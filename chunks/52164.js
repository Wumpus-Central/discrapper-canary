(n.d(t, { Z: () => x }), n(388685));
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(509545),
    d = n(74538),
    u = n(937615),
    m = n(374649),
    p = n(474936),
    g = n(981631),
    h = n(388032),
    f = n(532897);
function b(e) {
    let t,
        { subscription: n, withOverheadSeparator: r } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        [x] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: l.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == x) return null;
    let _ = r ? f.finePrintWithOverheadSeparator : f.finePrint,
        j = x.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == j) return null;
    let C = j.subscriptionPlanId,
        E = c.Z.get(C);
    s()(null != E, 'Missing plan');
    let O = (0, u.T4)(x.total, x.currency);
    return (
        E.interval === p.rV.YEAR
            ? (t = h.intl.format(h.t['jPz/39'], {
                  price: O,
                  termsUrl: g.EYA.TERMS,
                  paidURL: g.EYA.PAID_TERMS,
                  privacyUrl: g.EYA.PRIVACY
              }))
            : E.interval === p.rV.MONTH &&
              (t =
                  1 === E.intervalCount
                      ? h.intl.format(h.t.m27GpK, {
                            price: O,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY
                        })
                      : h.intl.format(h.t['9xf5V1'], {
                            price: O,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY,
                            intervalCount: E.intervalCount
                        })),
        (0, i.jsx)(a.Text, {
            color: 'text-muted',
            className: _,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function x(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === g.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(b, {
              subscription: t,
              withOverheadSeparator: n
          });
}
