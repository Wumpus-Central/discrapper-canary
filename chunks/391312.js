r.d(t, { default: () => f }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(755721),
    i = r(481060),
    l = r(43740),
    s = r(437152),
    a = r(388032),
    u = r(557313);
function f(e) {
    var t, r;
    let [f, b] = o.useState(!1);
    return (0, n.jsxs)(
        i.ConfirmModal,
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
        })({}, e)),
        (r = r =
            {
                header: a.intl.string(a.t["pjYu0/"]),
                confirmText: a.intl.string(a.t.zVZXRU),
                cancelText: a.intl.string(a.t["ETE/oC"]),
                onConfirm: () => {
                    (0, l.l)(!0);
                },
                confirmButtonColor: c.zx.Colors.BRAND,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: a.intl.format(a.t["0eydyj"], {}),
                    }),
                    (0, n.jsx)("div", {
                        className: u.checkboxMargin,
                        children: (0, n.jsx)(i.Checkbox, {
                            checked: f,
                            onChange: () => {
                                (0, s.E)(), b(!0);
                            },
                            label: a.intl.string(a.t["50TyjR"]),
                        }),
                    }),
                ],
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
}
