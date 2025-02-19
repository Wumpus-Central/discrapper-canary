n.d(t, { Z: () => a });
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    o = n(481060),
    c = n(813197);
function a(e) {
    var t,
        n,
        { buttonCTA: r, onChange: a, 'aria-label': l, multiple: u = !1, disabled: d = !1, submitting: p = !1 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                s,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        s,
                        r = {},
                        i = Object.keys(e);
                    for (s = 0; s < i.length; s++) (n = i[s]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (s = 0; s < i.length; s++) (n = i[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['buttonCTA', 'onChange', 'aria-label', 'multiple', 'disabled', 'submitting']);
    return (0, s.jsx)(o.tEY, {
        within: !0,
        children: (0, s.jsxs)('div', {
            className: i()(
                (0, o.nYM)(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                s = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (s = s.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                s.forEach(function (t) {
                                    var s;
                                    (s = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: s,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = s);
                                });
                        }
                        return e;
                    })({}, f)),
                    (n = n =
                        {
                            submitting: p,
                            disabled: d
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var s = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, s);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                )
            ),
            style: { width: 'max-content' },
            'aria-disabled': d,
            children: [
                (0, s.jsx)('span', {
                    'aria-hidden': !0,
                    children: r
                }),
                (0, s.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: a,
                    multiple: u,
                    'aria-label': null != l ? l : r,
                    disabled: d
                })
            ]
        })
    });
}
