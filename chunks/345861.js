n.d(t, { Z: () => _ });
var o = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    i = n(481060),
    c = n(813197);
function _(e) {
    var t,
        n,
        { buttonCTA: r, onChange: _, onFileSizeError: d, 'aria-label': l, multiple: s = !1, disabled: b = !1, submitting: p = !1, maxFileSizeBytes: u, filters: f, className: m } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                o,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++) (n = a[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['buttonCTA', 'onChange', 'onFileSizeError', 'aria-label', 'multiple', 'disabled', 'submitting', 'maxFileSizeBytes', 'filters', 'className']);
    return (0, o.jsx)(i.tEY, {
        within: !0,
        children: (0, o.jsxs)('div', {
            className: a()(
                (0, i.nYM)(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                o.forEach(function (t) {
                                    var o;
                                    (o = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = o);
                                });
                        }
                        return e;
                    })({}, h)),
                    (n = n =
                        {
                            submitting: p,
                            disabled: b
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, o);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                ),
                m
            ),
            style: { width: 'max-content' },
            'aria-disabled': b,
            children: [
                (0, o.jsx)('span', {
                    'aria-hidden': !0,
                    children: r
                }),
                (0, o.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: _,
                    onFileSizeError: d,
                    multiple: s,
                    maxFileSizeBytes: u,
                    filters: f,
                    'aria-label': null != l ? l : r,
                    disabled: b
                })
            ]
        })
    });
}
