n.d(t, { uH: () => p }), n(35282);
var r = n(593473),
    i = n(843611),
    a = n(873546);
n(960048);
var o = n(833549),
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
let c = () => a.tq && a.bO,
    u = (e) => {
        let { location: t } = e,
            { enabled: n } = MobileApplePaymentLinkExperiment.getConfig({ location: t });
        return n;
    },
    d = (e) => {
        let { location: t } = e,
            n = f({ location: t });
        return c() && n;
    },
    f = (e) => {
        let { location: t } = e,
            { enabled: n } = o.E.useConfig({ location: t });
        return n;
    },
    _ = (e, t, n) => !t.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === s.MUe.APPLE_PAYMENT_LINK && e,
    p = (e) => {
        let { location: t } = e,
            { search: n, pathname: a } = (0, i.TH)(),
            o = d({ location: t }),
            { deep_link_type: s } = (0, r.parse)(n);
        return _(o, a, s);
    };
