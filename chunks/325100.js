n.d(t, {
    Ak: () => _,
    uH: () => f,
}),
    n(35282);
var r = n(593473),
    i = n(828700);
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
            { enabled: n } = o.n.getCurrentConfig({ location: t });
        return n
            ? {
                  enabled: !1,
                  discountEnabled: !1,
              }
            : a.E.getConfig({ location: t });
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
    },
    _ = function (e) {
        let { location: t } = e,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = window.location.pathname,
            { deep_link_type: a } = (0, r.parse)(window.location.search);
        if (i.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION)) return !1;
        let { enabled: o } = c({ location: t });
        return d(n || o, i, a);
    };
