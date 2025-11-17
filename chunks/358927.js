r.d(t, { default: () => s });
var n = r(54381);
r(473749);
var o = r(755721),
    c = r(481060),
    i = r(63063),
    l = r(937615),
    a = r(981631),
    p = r(388032);
let s = (e) => {
    var t, r;
    let { modalProps: s, onConfirm: u, onCancel: b, newInvoice: f } = e,
        O = {
            newCurrencyAndPrice: (0, l.T4)(f.total, f.currency),
            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
        };
    return (0, n.jsx)(
        c.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                header: p.intl.string(p.t.eZFTbu),
                confirmText: p.intl.string(p.t.p89ACt),
                cancelText: p.intl.string(p.t.gm1Vej),
                onConfirm: u,
                onCancel: b,
                confirmButtonColor: o.zx.Colors.BRAND,
            },
            s,
        )),
        (r = r =
            {
                children: (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: p.intl.format(p.t.oZBduD, O),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
