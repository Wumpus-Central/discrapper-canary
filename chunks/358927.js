r.d(t, { default: () => p });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(63063),
    i = r(937615),
    a = r(981631),
    l = r(388032);
let p = (e) => {
    var t, r;
    let { modalProps: p, onConfirm: s, onCancel: u, newInvoice: b } = e,
        f = {
            newCurrencyAndPrice: (0, i.T4)(b.total, b.currency),
            helpCenterLink: c.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
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
                header: l.NW.string(l.t.eZFTbm),
                confirmText: l.NW.string(l.t.p89ACg),
                cancelText: l.NW.string(l.t.gm1Ven),
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
                    children: l.NW.format(l.t.oZBduL, f)
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
