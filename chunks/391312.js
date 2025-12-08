r.d(e, { default: () => a }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(481060),
    i = r(43740),
    l = r(437152),
    s = r(388032);
function a(t) {
    var e, r;
    let [a, u] = o.useState(!1);
    return (0, n.jsx)(
        c.sm4,
        ((e = (function (t) {
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
        })({}, t)),
        (r = r =
            {
                title: s.intl.string(s.t["pjYu0/"]),
                subtitle: s.intl.format(s.t["0eydyj"], {}),
                confirmText: s.intl.string(s.t.zVZXRU),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                onConfirm: () => {
                    (0, i.l)(!0);
                },
                onCloseCallback: () => {
                    a && (0, l.E)();
                },
                variant: "primary",
                checkbox: (0, n.jsx)(c.Blj, {
                    checked: a,
                    onChange: u,
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e),
    );
}
