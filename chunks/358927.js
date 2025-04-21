r.d(t, { default: () => p });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(63063),
    i = r(937615),
    l = r(981631),
    a = r(388032);
let p = (e) => {
    var t, r;
    let { modalProps: p, onConfirm: s, onCancel: u, newInvoice: b } = e,
        f = {
            newCurrencyAndPrice: (0, i.T4)(b.total, b.currency),
            helpCenterLink: c.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
        };
    return (0, n.jsx)(
        o.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                header: a.intl.string(a.t.eZFTbm),
                confirmText: a.intl.string(a.t.p89ACg),
                cancelText: a.intl.string(a.t.gm1Ven),
                onConfirm: s,
                onCancel: u,
                confirmButtonColor: o.zxk.Colors.BRAND
            },
            p
        )),
        (r = r =
            {
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: a.intl.format(a.t.oZBduL, f)
                })
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
        t)
    );
};
