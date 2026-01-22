r.d(t, { default: () => a }), r(896048);
var n = r(627968),
    o = r(64700),
    c = r(397927),
    i = r(72152),
    l = r(770376),
    s = r(985018);
function a(e) {
    var t, r;
    let [a, u] = o.useState(!1);
    return (0, n.jsx)(
        c.uoB,
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
                title: s.intl.string(s.t["pjYu0/"]),
                subtitle: s.intl.format(s.t["0eydyj"], {}),
                confirmText: s.intl.string(s.t.zVZXRU),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                onConfirm: () => {
                    (0, i.Z)(!0);
                },
                onCloseCallback: () => {
                    a && (0, l.f)();
                },
                variant: "primary",
                checkboxProps: {
                    checked: a,
                    onChange: (e) => u(e),
                },
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
