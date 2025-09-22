n.d(t, { uH: () => c }), n(35282);
var r = n(593473),
    i = n(843611);
n(960048);
var a = n(833549),
    o = n(981631);
function s(e, t, n) {
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
let l = (e, t, n) => !t.startsWith(o.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === o.MUe.APPLE_PAYMENT_LINK && e,
    c = (e) => {
        let { location: t } = e,
            { search: n, pathname: o } = (0, i.TH)(),
            { enabled: s } = a.E.useConfig({ location: t }),
            { deep_link_type: c } = (0, r.parse)(n);
        return l(s, o, c);
    };
