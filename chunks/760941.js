r.d(e, {
    default: () => u,
});
var n = r(627968);
r(64700);
var i = r(158954),
    c = r(975571),
    o = r(580630),
    l = r(652215),
    a = r(985018);
let u = (t) => {
    let { modalProps: e, onConfirm: r, onCancel: u, newInvoice: p } = t,
        s = {
            newCurrencyAndPrice: (0, o.$g)(p.total, p.currency),
            helpCenterLink: c.A.getArticleURL(l.MVz.LOCALIZED_PRICING),
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
                subtitle: a.intl.format(a.t.oZBduD, s),
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
