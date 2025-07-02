(n.d(t, { Z: () => x }), n(388685));
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    l = n(481060),
    a = n(100527),
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
        { subscription: n, withOverheadSeparator: r } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        [x] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: a.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == x) return null;
    let _ = r ? f.finePrintWithOverheadSeparator : f.finePrint,
        E = x.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == E) return null;
    let j = E.subscriptionPlanId,
        C = c.Z.get(j);
    s()(null != C, 'Missing plan');
    let O = (0, u.T4)(x.total, x.currency);
    return (
        C.interval === g.rV.YEAR
            ? (t = h.intl.format(h.t['jPz/39'], {
                  price: O,
                  termsUrl: p.EYA.TERMS,
                  paidURL: p.EYA.PAID_TERMS,
                  privacyUrl: p.EYA.PRIVACY
              }))
            : C.interval === g.rV.MONTH &&
              (t =
                  1 === C.intervalCount
                      ? h.intl.format(h.t.m27GpK, {
                            price: O,
                            termsUrl: p.EYA.TERMS,
                            paidURL: p.EYA.PAID_TERMS,
                            privacyUrl: p.EYA.PRIVACY
                        })
                      : h.intl.format(h.t['9xf5V1'], {
                            price: O,
                            termsUrl: p.EYA.TERMS,
                            paidURL: p.EYA.PAID_TERMS,
                            privacyUrl: p.EYA.PRIVACY,
                            intervalCount: C.intervalCount
                        })),
        (0, i.jsx)(l.Text, {
            color: 'text-muted',
            className: _,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function x(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === p.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(b, {
              subscription: t,
              withOverheadSeparator: n
          });
}
