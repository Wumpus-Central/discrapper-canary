(r.d(t, { default: () => u }), r(388685));
var n = r(255367),
    o = r(73800),
    c = r(755721),
    i = r(481060),
    a = r(43740),
    s = r(437152),
    l = r(388032),
    p = r(301403);
function u(e) {
    var t, r;
    let [u, b] = o.useState(!1);
    return (0, n.jsxs)(
        i.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({}, e)),
        (r = r =
            {
                header: l.intl.string(l.t.pjYu09),
                confirmText: l.intl.string(l.t.zVZXRU),
                cancelText: l.intl.string(l.t['ETE/oK']),
                onConfirm: () => {
                    (0, a.l)(!0);
                },
                confirmButtonColor: c.zx.Colors.BRAND,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: l.intl.format(l.t['0eydys'], {})
                    }),
                    (0, n.jsx)(i.XZJ, {
                        className: p.checkboxMargin,
                        type: i.XZJ.Types.INVERTED,
                        value: u,
                        onChange: () => {
                            ((0, s.E)(), b(!0));
                        },
                        children: (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: l.intl.string(l.t['50TyjY'])
                        })
                    })
                ]
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
}
