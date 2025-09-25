n.d(t, { uH: () => f }), n(35282);
var r = n(593473),
    i = n(843611);
n(960048);
var a = n(833549),
    o = n(86922),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n(474936);
let c = (e) => {
        let { location: t } = e,
            { enabled: n } = TurtleExperiment.getCurrentConfig({ location: t });
        return n
            ? {
                  enabled: !1,
                  discountEnabled: !1,
              }
            : MobileApplePaymentLinkExperiment.getConfig({ location: t });
    },
    u = (e) => {
        let { location: t } = e,
            { enabled: n } = o.n.useExperiment({ location: t }),
            r = a.E.useConfig({ location: t });
        return n
            ? {
                  enabled: !1,
                  discountEnabled: !1,
              }
            : r;
    },
    d = (e, t, n) => !t.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === s.MUe.APPLE_PAYMENT_LINK && e,
    f = (e) => {
        let { location: t } = e,
            { search: n, pathname: a } = (0, i.TH)(),
            { enabled: o } = u({ location: t }),
            { deep_link_type: s } = (0, r.parse)(n);
        return d(o, a, s);
    };
