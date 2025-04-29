n.d(t, { Z: () => _ }), n(388685);
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
    p = n(474936),
    g = n(981631),
    h = n(388032),
    f = n(532897);
function b(e) {
    let t,
        { subscription: n, withOverheadSeparator: r } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        [_] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: a.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == _) return null;
    let x = r ? f.finePrintWithOverheadSeparator : f.finePrint,
        E = _.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == E) return null;
    let j = E.subscriptionPlanId,
        C = c.Z.get(j);
    s()(null != C, 'Missing plan');
    let O = (0, u.T4)(_.total, _.currency);
    return (
        C.interval === p.rV.YEAR
            ? (t = h.intl.format(h.t['jPz/39'], {
                  price: O,
                  termsUrl: g.EYA.TERMS,
                  paidURL: g.EYA.PAID_TERMS,
                  privacyUrl: g.EYA.PRIVACY
              }))
            : C.interval === p.rV.MONTH &&
              (t =
                  1 === C.intervalCount
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
                            intervalCount: C.intervalCount
                        })),
        (0, i.jsx)(l.Text, {
            color: 'text-muted',
            className: x,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function _(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === g.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(b, {
              subscription: t,
              withOverheadSeparator: n
          });
}
