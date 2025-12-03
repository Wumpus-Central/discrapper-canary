r.d(e, { default: () => u });
var n = r(54381);
r(473749);
var i = r(793030),
    c = r(63063),
    o = r(937615),
    l = r(981631),
    a = r(388032);
let u = (t) => {
    let { modalProps: e, onConfirm: r, onCancel: u, newInvoice: f } = t,
        p = {
            newCurrencyAndPrice: (0, o.T4)(f.total, f.currency),
            helpCenterLink: c.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
        };
    return (0, n.jsx)(
        i.ConfirmModal,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                title: a.intl.string(a.t.eZFTbu),
                subtitle: a.intl.format(a.t.oZBduD, p),
                variant: "primary",
                confirmText: a.intl.string(a.t.p89ACt),
                cancelText: a.intl.string(a.t.gm1Vej),
                onConfirm: r,
                onCancel: u,
            },
            e,
        ),
    );
};
