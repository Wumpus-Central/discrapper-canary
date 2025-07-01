(r.d(t, { default: () => p }), r(388685));
var n = r(255367),
    o = r(73800),
    c = r(481060),
    i = r(43740),
    a = r(437152),
    s = r(388032),
    l = r(301403);
function p(e) {
    var t, r;
    let [p, u] = o.useState(!1);
    return (0, n.jsxs)(
        c.ConfirmModal,
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
                header: s.intl.string(s.t.pjYu09),
                confirmText: s.intl.string(s.t.zVZXRU),
                cancelText: s.intl.string(s.t['ETE/oK']),
                onConfirm: () => {
                    (0, i.l)(!0);
                },
                confirmButtonColor: c.zxk.Colors.BRAND,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: s.intl.format(s.t['0eydys'], {})
                    }),
                    (0, n.jsx)(c.XZJ, {
                        className: l.checkboxMargin,
                        type: c.XZJ.Types.INVERTED,
                        value: p,
                        onChange: () => {
                            ((0, a.E)(), u(!0));
                        },
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: s.intl.string(s.t['50TyjY'])
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
